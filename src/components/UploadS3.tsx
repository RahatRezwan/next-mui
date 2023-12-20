'use client';

import { config } from '@/config';
import ReactS3Client from 'react-aws-s3-typescript';
import React, { useState } from 'react';

const S3 = new ReactS3Client({
   bucketName: 'asf-sadakah',
   region: 'eu-central-003',
   accessKeyId: '003b4f910c6779a0000000002',
   secretAccessKey: '00342944cccacc7489a7aa1d86723a7ebb2d72a9a0',
   s3Url: 'https://s3.eu-central-003.backblazeb2.com',
});

const UploadS3 = () => {
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

      try {
         const res = S3.uploadFile(selectedFile, 'newFile');
         console.log(res);
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

export default UploadS3;
