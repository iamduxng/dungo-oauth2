import { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT || '',
      clientSecret: process.env.GOOGLE_SECRET || ''
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT || '',
      clientSecret: process.env.GITHUB_SECRET || ''
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async jwt({ token }) {
      token.userRole = "user"
      return token
    },
    session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    },
  }
}
