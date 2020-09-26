import createSessionService from './CreateSessionService'
import FakeUserRepository from '../repositories/fakes/FakeUsersRepository'
import FakeHashProvider from '../providers/Hash/fake/FakeHashProvider'
import FakeSessionProvider from '../providers/SessionProvider/fake/FakeSessionProvider'
import createUserService from './CreateUserService'
import AppError from '../errors/AppError'

describe('CreateSession', () => {
  it('should be able to create a new session', async () => {
    const user = await createUserService(
      {
        name: 'John Doe',
        email: 'johndoe@teste.com',
        password: '123456'
      },
      FakeUserRepository,
      FakeHashProvider
    )

    const token = await createSessionService(
      {
        email: 'johndoe@teste.com',
        password: '123456'
      },
      FakeUserRepository,
      FakeHashProvider,
      FakeSessionProvider
    )

    expect(token).toHaveProperty('token')
  })

  it('should not be able to create a new session if user does not exists', async () => {
    await expect(
      createSessionService(
        {
          email: 'johndoe1@teste.com',
          password: '123456'
        },
        FakeUserRepository,
        FakeHashProvider,
        FakeSessionProvider
      )
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a new session if the pass does not match', async () => {
    await createUserService(
      {
        name: 'John Doe',
        email: 'johndoe2@teste.com',
        password: '123456'
      },
      FakeUserRepository,
      FakeHashProvider
    )

    await expect(
      createSessionService(
        {
          email: 'johndoe2@teste.com',
          password: 'passerrada'
        },
        FakeUserRepository,
        FakeHashProvider,
        FakeSessionProvider
      )
    ).rejects.toBeInstanceOf(AppError)
  })
})
