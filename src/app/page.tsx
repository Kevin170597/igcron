import Link from "next/link"

export default async function Home() {

    return (
        <div className="">
            <Link href={"/posts"}>Posts</Link>
        </div>
    )
}