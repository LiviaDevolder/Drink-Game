// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import drink from '../../src/data/drink'

type Drink = {
  name: string
  ingredients: string[]
  steps: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Drink>
) {
  const { query } = req;
  const { name } = query;

  const filtered = drink.filter((d) => d.name.split(" ").join("-") === name)

  res.status(200).json(filtered[0])
}
