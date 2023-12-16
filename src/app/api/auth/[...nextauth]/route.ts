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
                console.log(14, credentials)
                const user: any = await instagramLogin(credentials?.username as string, credentials?.password as string)
                
                console.log(17, user)
                //if (user.error) throw new Error(user.error)
                return user
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ token, user }) => {
            return { ...token, ...user }
        },
        session: ({ session, token }) => {
            session.user = token as any
            return session
        }
    },
    pages: {
        signIn: "/login"
    }
})

export { handler as GET, handler as POST }