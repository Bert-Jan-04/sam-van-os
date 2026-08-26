import type { Access } from 'payload'

export const privateRead: Access = ({ req }) => {
  if (req.user) return true

  return { private: { not_equals: true } }
}
