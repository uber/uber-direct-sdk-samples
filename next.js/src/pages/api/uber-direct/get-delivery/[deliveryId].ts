import { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken, createDeliveriesClient } from 'uber-direct';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const token = await getAccessToken();
    const client = createDeliveriesClient(token);
    const deliveryId = req.query.deliveryId as string;
    const delivery = await client.getDelivery(deliveryId);
    res.status(200).json({ delivery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
