import { Request, Response } from 'express'
import createXpService from '../services/CreateXpService'
import xpsRepository from '../repositories/implementations/XpsRepository'

export const create = async (request: Request, response: Response) => {
  const { title: titleRequest, content: contentRequest } = request.body

  const { id: user_id } = response.locals.jwtPayload
  const { id, title, content } = await createXpService(
    {
      title: titleRequest,
      content: contentRequest,
      user_id
    },
    xpsRepository
  )

  return response.json({
    id,
    title,
    content
  })
}

export const index = async (request: Request, response: Response) => {
  const { title: titleRequest, content: contentRequest } = request.body

  const { id: user_id } = response.locals.jwtPayload

  const feed = await xpsRepository.findAllButId(user_id)

  return response.json({
    feed
  })
}

export const update = async (request: Request, response: Response) => {
  const data = request.body

  const xpUpdated = await xpsRepository.update(data)

  return response.json({
    ...xpUpdated
  })
}
