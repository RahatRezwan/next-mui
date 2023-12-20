'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const CookiePage = () => {
   const [donations, setDonations] = useState([]);
   // useEffect(() => {
   //    // fetch('http://localhost:7000/donations', {
   //    //    credentials: 'include',
   //    // })
   //    //    .then((res) => res.json())
   //    //    .then((data) => {
   //    //       setDonations(data?.data);
   //    //    });
   //    axios
   //       .get('http://localhost:7000/donations', {
   //          withCredentials: true,
   //       })
   //       .then((res) => {
   //          setDonations(res.data?.data);
   //       });
   // }, []);

   // const response = await fetch('http://localhost:7000/donations');
   // // console.log('response', response.json());
   // const donations = await response.json();
   console.log('donations', donations);

   // const cookieStore = cookies();
   // const cookie = await cookieStore.get('key');
   // console.log('cookie', cookie);
   const getData = async () => {
      axios
         .get('http://localhost:7000/donations', {
            withCredentials: true,
         })
         .then((res) => {
            setDonations(res.data?.data);
         });
   };

   return (
      <div>
         <h1>CookiePage</h1>
         <button onClick={() => getData()}>Get</button>
      </div>
   );
};

export default CookiePage;
