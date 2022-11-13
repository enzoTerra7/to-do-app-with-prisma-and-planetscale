// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createTodo, getAllToDos } from '../../lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'POST'){
    const data = JSON.parse(req.body)
    await createTodo(data)
    return res.status(200).json({message: 'Task criada com sucesso'})
  }

  if(req.method === 'GET'){
    const data = await getAllToDos()
    return res.status(200).json({data})
  }
}
