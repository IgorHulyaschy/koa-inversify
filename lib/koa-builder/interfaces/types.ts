import { Context, Next } from 'koa'

interface AppContext extends Context {}

interface AppNext extends Next {}

export type { AppContext as Context, AppNext as Next }
