import { Context, Next } from './types'

export interface Middleware {
  use: (ctx: Context, next: Next) => Promise<any>
}
