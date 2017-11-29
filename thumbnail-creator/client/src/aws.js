import {config, S3} from 'aws-sdk'
import {aws} from 'config'
import {map} from 'lodash'

const {region, accessKeyId, secretAccessKey, uploadBucket} = aws

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

export const uploadFiles = (files) => {
  return Promise.all(
    map(files, file => {
      console.log(file)
      return s3UploadBucket.putObject({
        Key: file.name,
        Body: file,
        Tagging: 'test=test'
      }).promise().then(r => {
        console.log(r)
        return r
      })
    })
  )
}
