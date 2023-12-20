import { UploadBackBlaze } from '@/components/UploadBackBlaze';
import UploadBackend from '@/components/UploadBackend';
import React from 'react';

export const metadata = {
   title: 'Upload',
   description: 'Upload',
   path: '/upload',
   image: '',
   exact: true,
};

const UploadPage = () => {
   return <UploadBackend />;
};

export default UploadPage;
