import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { instagramLogin } from "@/services"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Email", type: "text", placeholder: "username" },
                password: { label: "Contraseña", type: "password" , placeholder: "password" }
            },
            async authorize(credentials, req) {
                const user = await instagramLogin(credentials?.username as string, credentials?.password as string)
                
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            console.log(26, { ...token, ...user })
            return { ...token, ...user }
        },
        session: ({ session, token }) => {
            session.user = token as any
            return session
        }
    }
})

export { handler as GET, handler as POST }