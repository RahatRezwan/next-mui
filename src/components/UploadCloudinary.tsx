'use client';

import axios from 'axios';
import { config } from '../config/index';
import React, { useState } from 'react';

export const UploadCloudinary = () => {
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

      const uploadUrl = config.cloundinary.upload_url as string;
      const apiKey = config.cloundinary.api_key;
      const uploadPreset = config.cloundinary.upload_preset.file;

      try {
         const formData = new FormData();
         formData.append('file', selectedFile);
         formData.append('upload_preset', uploadPreset as string);
         formData.append('api_key', apiKey as string);

         const response = await axios.post(uploadUrl, formData);

         const data = await response.data;
         console.log('File uploaded successfully:', data.secure_url);
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
