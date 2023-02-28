import { injectable } from 'inversify'

@injectable()
export class Logger {
  info(...any: any[]): void {
    console.log(...any)
  }
}
