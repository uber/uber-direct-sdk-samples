import { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken } from "../../../../../../dist/auth/index";
import { createDeliveriesClient } from "../../../../../../dist/deliveries/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const token = await getAccessToken();
    const client = createDeliveriesClient(token);
    const delivery = await client.createDelivery(JSON.parse(req.body));
    res.status(200).json({ delivery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}