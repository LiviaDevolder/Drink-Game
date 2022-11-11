import type { NextApiRequest, NextApiResponse } from 'next'
import drink from '../../src/data/drink'

type Drink = {
  name: string
  ingredients: string[]
  steps: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Drink[]>
) {
  res.status(200).json(drink)
}
