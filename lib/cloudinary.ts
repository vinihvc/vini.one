import 'server-only'

import cloudinary from 'cloudinary'
import { env } from './env'

cloudinary.v2.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
})

export const uploadImage = async (image: string) => {
  const result = await cloudinary.v2.uploader.upload(image)
  return result.secure_url
}

export const deleteImage = async (image: string) => {
  const result = await cloudinary.v2.uploader.destroy(image)
  return result.secure_url
}

export const getImage = async (image: string) => {
  const result = await cloudinary.v2.api.resource(image)
  return result.secure_url
}

export const getImages = async () => {
  const result = await cloudinary.v2.api.resources()
  return result.resources
}

export const getImageFromFolder = async (folder: string) => {
  const result = await cloudinary.v2.api.resources({
    type: 'upload',
    prefix: folder,
  })

  return result.resources
}
