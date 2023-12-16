import "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            username: string,
            token: string,
            profile_pic_url: string
        }
    }
}