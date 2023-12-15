"use client"
import React, { createContext, useContext, useEffect, useState } from "react"

interface UserData {
    username: string,
    profile_pic_url: string
}

interface UserContextProps {
    loggedUser: UserData | null
    setUserData: (userData: UserData) => void,
    logout: () => void
}

const UserContext = createContext<undefined | UserContextProps>(undefined)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [loggedUser, setLoggedUser] = useState<UserData | null>(null)

    const setUserData = (userData: UserData) => {
        setLoggedUser(userData)
        localStorage.setItem("loggedUser", JSON.stringify(userData))
    }

    const logout = () => {
        localStorage.removeItem("loggedUser")
        setLoggedUser(null)
    }

    useEffect(() => {
        const storedUserData = localStorage.getItem("loggedUser")
        if (storedUserData) {
            setLoggedUser(JSON.parse(storedUserData))
        }
    }, [])

    const contextValue: UserContextProps = {
        loggedUser, setUserData, logout
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("no user")
    }

    return context
}