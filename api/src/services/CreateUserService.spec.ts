import createUserService from './CreateUserService'
import FakeUserRepository from '../repositories/fakes/FakeUsersRepository'
import AppError from '../errors/AppError'

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

  it('should not be able to create a new user if the email is already used', async () => {
    await createUserService(
      {
        name: 'John Doe',
        email: 'johndoe@teste.com',
        password: '123456'
      },
      FakeUserRepository
    )

    await expect(
      createUserService(
        {
          name: 'John Doe1',
          email: 'johndoe@teste.com',
          password: '123456'
        },
        FakeUserRepository
      )
    ).rejects.toBeInstanceOf(AppError)
  })
})
