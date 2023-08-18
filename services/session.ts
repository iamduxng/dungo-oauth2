import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import { authOptions } from '~/services/authOptions'

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  if (!session) {
    console.log({ message: "You must be logged in." })
    return redirect('/login')
  }

  return session
}
