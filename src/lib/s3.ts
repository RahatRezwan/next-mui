import { config } from '@/config';
import { S3Client } from '@aws-sdk/client-s3';

export const S3 = new S3Client({
   region: 'auto',
   endpoint: String(config.cloudflare.s3Endpoint),
   credentials: {
      accessKeyId: String(config.cloudflare.accessKeyId),
      secretAccessKey: String(config.cloudflare.secretAccessKey),
   },
});
