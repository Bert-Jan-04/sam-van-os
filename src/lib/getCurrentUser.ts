import { headers as getHeaders } from 'next/headers'
import type { Payload } from 'payload'

export const getCurrentUser = async (payload: Payload) => {
  const { user } = await payload.auth({ headers: await getHeaders() })

  return user
}
