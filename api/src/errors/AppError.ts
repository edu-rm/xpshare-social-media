class AppError {
  public readonly message: string
  public readonly status_code: number

  constructor(message: string, status_code: number = 400) {
    Object.setPrototypeOf(this, AppError.prototype)
    this.message = message
    this.status_code = status_code
  }
}

export default AppError
