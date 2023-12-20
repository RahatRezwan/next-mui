export const config = {
   cloundinary: {
      upload_url: process.env.NEXT_PUBLIC_CLOUDINARY_URL,
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
      upload_preset: {
         image: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET_IMAGE,
         file: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET_FILE,
      },
      resource_type: {
         image: 'image',
         video: 'video',
         raw: 'raw',
      },
   },
   cloudflare: {
      bucketName: process.env.NEXT_PUBLIC_CLOUDFLARE_BUCKET_NAME,
      tokenValue: process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN_VALUE,
      accessKeyId: process.env.NEXT_PUBLIC_CLOUDFLARE_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_CLOUDFLARE_SECRET_ACCESS_KEY,
      s3Endpoint: process.env.NEXT_PUBLIC_CLOUDFLARE_S3_API_ENDPOINT,
   },

   backBlaze: {
      bucketName: 'asf-sadakah',
      bucketId: process.env.NEXT_PUBLIC_BACKBLAZE_BUCKET_ID,
      keyId: process.env.NEXT_PUBLIC_BACKBLAZE_KEY_ID,
      applicationKey: process.env.NEXT_PUBLIC_BACKBLAZE_APPLICATION_KEY,
   },
};
