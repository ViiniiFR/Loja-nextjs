import { NextApiRequest, NextApiResponse } from "next"
import products from '../../../../database.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  const product = products.find(p => p.id === Number(id))
  if (product) {
    res.status(200).json(product)
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
}