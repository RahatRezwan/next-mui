'use client';

import React from 'react';
import { fetchAllSurahData } from '../../surah';

const page = () => {
    return (
        <div>
            <button onClick={() => fetchAllSurahData()}>fetchSurahData</button>
        </div>
    );
};

export default page;
