'use client';

import axios from 'axios';
import React, { useState } from 'react';

const UploadBackend = () => {
   const [selectedFile, setSelectedFile] = useState<any>(null);

   const handleFileChange = (e: any) => {
      const file = e.target.files[0];
      setSelectedFile(file);
   };

   const handleUpload = async () => {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
         const response = await axios.post('http://localhost:5000/upload', formData, {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         });

         console.log(response);
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

export default UploadBackend;
