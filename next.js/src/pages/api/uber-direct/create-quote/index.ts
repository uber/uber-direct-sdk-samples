import { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken, createDeliveriesClient } from 'uber-direct';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const token = await getAccessToken();
    const client = createDeliveriesClient(token);
    const quote = await client.createQuote(JSON.parse(req.body));
    res.status(200).json({ quote });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
