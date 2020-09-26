const generateHash = async (payload: string): Promise<string> => {
  return payload
}

const compareHash = async (
  payload: string,
  hashed: string
): Promise<boolean> => {
  return payload == hashed
}

export default {
  generateHash,
  compareHash
}
