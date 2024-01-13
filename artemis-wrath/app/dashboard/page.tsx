'use client'
import { useUser } from "@clerk/nextjs"
import {useEffect, useState} from 'react'
import PackSelector from "./_components/PackSelector"
import { useUserInfo } from "@/hooks/use-userInfo"

const Dashboard = () => {
    const {user} = useUser()
    const userState = useUserInfo()
    const [userInfo, setUserInfo] = useState({})
    
    const userLogin = async () => {
        const userData = {
            id: user?.id, 
            firstName: user?.firstName, 
            lastName: user?.lastName, 
        }
        const res = await fetch('api/auth', {
            method: 'POST', 
            body: JSON.stringify(userData), 
            headers: {
                'Content-Type': 'application/json'
            }, 
            cache: 'no-cache'
        })
        const finRes = await res.json()
        userState.UpdateAll(finRes)
    }
    
    useEffect(() => {
        if (user) {
            userLogin()
        }
    },[user])

   

    return (
        <div className="ml-64">
            <h1 className="text-8xl">Welcome {user?.firstName}!</h1>
            {/* <PackSelector /> */}
        </div>
    )
}

export default Dashboard