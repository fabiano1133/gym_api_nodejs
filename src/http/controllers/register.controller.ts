import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { hash } from 'bcryptjs'
import { prisma } from '@/lib/prisma'

const connection = prisma

export const Register = async (
  request: FastifyRequest,
  response: FastifyReply,
) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  const passwordHashed = await hash(password, 10)

  await connection.user.create({
    data: {
      name,
      email,
      password_hash: passwordHashed,
    },
  })

  return response.status(201).send({
    message: `User created with success!`,
  })
}
