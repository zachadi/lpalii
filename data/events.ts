"use server";

import axios from "axios";


export const getevents = async () => {
  // Try to find existing data based on Appid
  const res = await axios.get( "https://pastebin.com/raw/nN3xzDyi",

  {
    // query URL without using browser cache
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  }
  )
  

  const data= res.data;

  return  data.DataList;
};
