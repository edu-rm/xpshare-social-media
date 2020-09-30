import { Request, Response } from 'express'
import xpsRepository from '../repositories/implementations/XpsRepository'

export const index = async (request: Request, response: Response) => {
  const { id: user_id } = response.locals.jwtPayload

  const xps = await xpsRepository.findAllById(user_id)

  return response.json({
    xps
  })
}
