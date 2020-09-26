import { hash, compare } from 'bcrypt'

const generateHash = async (payload: string): Promise<string> => {
  return await hash(payload, 7)
}

const compareHash = async (
  payload: string,
  hashed: string
): Promise<boolean> => {
  return await compare(payload, hashed)
}

export default {
  generateHash,
  compareHash
}
