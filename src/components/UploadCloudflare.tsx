'use client';

import { config } from '@/config';
import ReactS3Client from 'react-aws-s3-typescript';
import React, { useState } from 'react';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { S3 } from '@/lib/s3';

const UploadCloudflare = () => {
   const [selectedFile, setSelectedFile] = useState<any>(null);

   const handleFileChange = (e: any) => {
      const file = e.target.files[0];
      setSelectedFile(file);
   };

   const handleUpload = async () => {
      if (!selectedFile) {
         alert('Please select a file.');
         return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);

      const putObjectCommand = new PutObjectCommand({
         Bucket: String(config.cloudflare.bucketName),
         Key: 'newFile',
         Body: selectedFile,
      });

      try {
         S3.send(putObjectCommand);
      } catch (error) {
         console.error('Error uploading file:', error);
      }
   };

   return (
      <div>
         <input type='file' onChange={handleFileChange} />
         <button onClick={handleUpload}>Upload Image</button>
      </div>
   );
};

export default UploadCloudflare;
