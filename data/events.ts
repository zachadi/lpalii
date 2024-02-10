"use server";

import axios from "axios";


export const getevents = async () => {
  // Try to find existing data based on Appid
  const res = await axios.get( "https://pastebin.com/raw/nQszzzw8");

  const data= res.data;

  return  data.DataList;
};
