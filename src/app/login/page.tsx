import { Metadata } from "next"
import { IGLoginForm } from "@/components"

export const metadata: Metadata = {
    title: "Login"
}

export default function IGLogin() {

    return (
        <div className="h-[90vh] flex items-center justify-center">
            <IGLoginForm />
        </div>
    )
}