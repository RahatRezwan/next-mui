'use client';

import React, { useState } from 'react';
import B2 from 'backblaze-b2';
import { config } from '@/config';

export const UploadBackBlaze = () => {
   const [selectedFile, setSelectedFile] = useState<any>(null);

   const b2 = new B2({
      applicationKeyId: String(config.backBlaze.keyId),
      applicationKey: String(config.backBlaze.applicationKey),
   });

   const handleFileChange = (e: any) => {
      const file = e.target.files[0];
      setSelectedFile(file);
   };

   const handleUpload = async () => {
      if (!selectedFile) {
         alert('Please select a file.');
         return;
      }

      console.log(selectedFile);

      try {
         // Authorize with Backblaze B2
         const authResponse = await b2.authorize();
         const { downloadUrl } = authResponse.data;

         //get bucket id
         const res = await b2.getUploadUrl({ bucketId: String(config.backBlaze.bucketId) });
         const { authorizationToken, uploadUrl } = res.data;

         // // Upload the file to Backblaze B2
         // const fileInfo = await b2.uploadFile({
         //    uploadUrl,
         //    uploadAuthToken: authorizationToken,
         //    filename: `sadakah/${selectedFile.originalname}`,
         //    data: req.file.buffer,
         // });

         // const url = `${downloadUrl}/file/${config.backBlaze.bucketName}/${fileInfo.data.fileName}`;
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
