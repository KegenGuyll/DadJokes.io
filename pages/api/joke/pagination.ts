import axios, { AxiosResponse } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { JokeBody } from '../../../models/social/joke';

export default async (req: NextApiRequest, res: NextApiResponse<JokeBody>) => {
  const skip = req.query.skip as string;
  const limit = req.query.limit as string;
  try {
    const result: AxiosResponse<JokeBody> = await axios.get(
      `http://dadjokes-beta.herokuapp.com/api/joke/pagination?skip=${skip}&limit=${limit}`
    );

    res.status(200).json(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
};
