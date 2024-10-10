import { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken } from 'uber-direct';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const token = await getAccessToken();
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
