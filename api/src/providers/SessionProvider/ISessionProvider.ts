export default interface ISessionProvider {
  createSession(id: number): string
}
