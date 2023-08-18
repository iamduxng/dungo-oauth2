import { getServerSession } from "next-auth/next"

import { authOptions } from '~/services/authOptions'

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  if (!session) {
    console.log({ message: "You must be logged in." })
    // TODO: Redirect to /login
    return;
  }

  return session?.user
}
