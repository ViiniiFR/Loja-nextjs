// pages/api/products/[id].ts

import { NextApiRequest, NextApiResponse } from "next"
import products from '../../../../database.json'

type Product = {
  id: number;
  // add other properties here
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  const product: Product | undefined = products.find((p: Product) => p.id === Number(id))
  res.status(200).json(product)
}