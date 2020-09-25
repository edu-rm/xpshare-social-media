import createXpService from './CreateXpService'
import FakeXpsRepository from '../repositories/fakes/FakeXpsRepository'

describe('CreateXp', () => {
  it('should be able to create a new xp', async () => {
    const xp = await createXpService(
      {
        title: 'Title',
        content: 'Hello World'
      },
      FakeXpsRepository
    )

    expect(xp).toHaveProperty('id')
  })
})
