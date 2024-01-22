import { FastifyInstance } from 'fastify'
import { Register } from './controllers/register.controller'

const registerController = Register

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', registerController)
}
