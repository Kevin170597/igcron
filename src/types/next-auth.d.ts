import "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            username: string,
            full_name: string,
            biography: string,
            token: string,
            profile_pic_url: string,
            profile_pic_url_hd: string,
            pk: string,
            is_verified: boolean,
            is_private: boolean,
            is_business: boolean,
            following_count: number,
            follower_count: number,
            category_name?: string
        }
    }
}