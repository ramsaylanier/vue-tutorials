const AWS = require('aws-sdk')
const sharp = require('sharp')
const config = require('client/config/production.json')

AWS.config.update({
  credentials: {
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey
  }
})

AWS.config.setPromisesDependency(Promise)

const getFileExtension = filename => {
  var ext = /^.+\.([^.]+)$/.exec(filename);
  return ext == null ? "" : ext[1];
}

const s3UploadBucket = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {
    Bucket: config.aws.uploadBucket
  }
})

const s3ThumbnailBucket = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {
    Bucket: config.aws.thumbnailBucket
  }
})

const transforms = [200, 400, 600]

module.exports.transform = (event, context, callback) => {
  const {key} = event.Records[0].s3.object

  // if you put spaces in your filename, the event Key replaces them with '+'. We need
  // to undo that before getting the object. Then we remove the exntesion from the key.
  const sanitizedKey = key.replace(/\+/g, ' ')
  const keyWithoutExtension = sanitizedKey.replace(/.[^.]+$/, '')

  s3UploadBucket.getObject({Key: sanitizedKey}).promise().then(r => {
    transforms.map(t => {
      sharp(r.Body)
        .resize(t, t)
        .max()
        .toFormat('jpeg')
        .toBuffer()
        .then( data => {
          s3ThumbnailBucket.putObject({
            Body: data,
            Key: `${keyWithoutExtension}-${t}.jpg`
          }).promise().then( res => {
            console.log(res)
          })
        })
    })
  })
}