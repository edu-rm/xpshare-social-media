import { Request, Response } from 'express'
import createXpService from '../services/CreateXpService'
import xpsRepository from '../repositories/implementations/XpsRepository'

export const create = async (request: Request, response: Response) => {
  const { title, content } = request.body

  const xpCreated = await createXpService(
    {
      title,
      content
    },
    xpsRepository
  )

  return response.json({ ...xpCreated })
}
