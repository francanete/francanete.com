import { NextApiRequest, NextApiResponse } from 'next';

const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
/**
 * The ConvertKit form ID you want to subscribe users to.
 */
const FORM_ID = '6365870';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_key: CONVERTKIT_API_KEY,
            email,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error: ${response.status}`);
      }

      const data = await response.json();
      res.status(200).json({ status: 'success', data });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        res.status(500).json({ status: 'error', message: error.message });
      } else {
        res
          .status(500)
          .json({ status: 'error', message: 'An unknown error occurred' });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
