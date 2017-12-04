import {config, S3} from 'aws-sdk'
import {aws} from 'config'
import {map} from 'lodash'

const {region, accessKeyId, secretAccessKey, uploadBucket, thumbnailBucket} = aws

config.update({
  region: region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
  }
})

config.setPromisesDependency(Promise)

export const s3UploadBucket = new S3({
  apiVersion: '2006-03-01',
  params: {
    Bucket: uploadBucket
  }
})

export const s3ThumbnailBucket = new S3({
  apiVersion: '2006-03-01',
  params: {
    Bucket: thumbnailBucket
  }
})

export const uploadFiles = files => {
  return Promise.all(
    map(files, file => {
      return s3UploadBucket.putObject({
        Key: file.name,
        Body: file
      }).promise()
    })
  )
}

export const getUpload = key => {
  console.log(key)
}

export const getUploads = () => {
  return s3UploadBucket.listObjects().promise().then(r => {
    return r.Contents
  })
}

export const getThumbnails = (key) => {
  return s3ThumbnailBucket.listObjects({
    Prefix: key
  }).promise().then(r => {
    return r.Contents
  })
}
