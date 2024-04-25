import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const url = 'https://maps.googleapis.com/maps/api/directions/json';
    const { origin, destination } = req.body;
    const response = await fetch(
      `${url}?origin=${origin}&destination=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
