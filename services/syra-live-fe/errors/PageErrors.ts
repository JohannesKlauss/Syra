export class PageError extends Error {
  statusCode = 500
}

export class NotFoundError extends PageError {
  statusCode = 404
}

export class RedirectError extends PageError {
  url: string

  constructor(code: number, url: string) {
    super()
    this.statusCode = code
    this.url = url
  }
}