import createUserService from './CreateUserService'
import FakeUserRepository from '../repositories/fakes/FakeUsersRepository'

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const user = await createUserService(
      {
        name: 'John Doe',
        email: 'johndoe@teste.com',
        password: '123456'
      },
      FakeUserRepository
    )

    expect(user).toHaveProperty('id')
  })
})
