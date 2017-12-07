# Thumbnail Creator

A simple web application that uploads files to an S3 bucket and generates thumbnails using AWS Lambda.

## Articles on Medium

*READ THESE FIRST*

[Part 1 - The Setup](https://medium.com/@rmmmsy/creating-an-image-thumbnail-generator-using-vue-aws-and-serverless-part-1-the-setup-5d187b0bb1e1)

[Part 2 - The Upload](https://medium.com/@rmmmsy/creating-an-image-thumbnail-generator-using-vue-aws-and-serverless-part-2-the-upload-614863e7d12b)

[Part 3 - The Lambda](https://medium.com/@rmmmsy/creating-an-image-thumbnail-generator-using-vue-aws-and-serverless-part-3-the-lambda-f08db7d0d624)

[Part 4 - The Finish](https://medium.com/@rmmmsy/creating-an-image-thumbnail-generator-using-vue-aws-and-serverless-part-4-the-finish-1988eff2d7ed)

## Things to note

### Serverless.yml

Please make sure you change the bucket names in the `serverless.yml` file or else you'll have a bad time. 

### Testing the lambda

Please read [Part 3 - The Lambda](https://medium.com/@rmmmsy/creating-an-image-thumbnail-generator-using-vue-aws-and-serverless-part-3-the-lambda-f08db7d0d624) carefully when it comes to testing your lambda function. You'll need to have Docker installed. Just read the story, okay?!


### Bugs

I'm sure there are some - create an issue and be nice. 
