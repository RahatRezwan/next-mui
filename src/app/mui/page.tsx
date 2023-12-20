'use client';

import React from 'react';
import TypographyMUI from '@/components/TypographyMUI';
import ButtonMUI from '@/components/ButtonMUI';
import TextFieldMUI from '@/components/TextFieldMUI';
import SelectMUI from '@/components/SelectMUI';
import { useOnlineStatus } from '@/hooks/use-online';

const MUIComponents = () => {
   return (
      <div>
         {/* <TypographyMUI /> */}
         {/* <ButtonMUI /> */}
         {/* <TextFieldMUI /> */}
         <SelectMUI />
      </div>
   );
};

export default MUIComponents;
