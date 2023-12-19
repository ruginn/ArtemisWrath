'use client'
import { useUser } from "@clerk/nextjs"
import {useEffect, useState} from 'react'
import PackSelector from "./_components/PackSelector"

const Dashboard = () => {
    const {user} = useUser()
    const [userInfo, setUserInfo] = useState({})
    const userLogin = async () => {
        const userInfo = {
            id: user?.id, 
            firstName: user?.firstName, 
            lastName: user?.lastName, 
        }
        const res = await fetch('api/auth', {
            method: 'POST', 
            body: JSON.stringify(userInfo), 
            headers: {
                'Content-Type': 'application/json'
            }, 
            cache: 'no-cache'
        })
        const finRes = await res.json()
        setUserInfo(finRes)
    }
    
    useEffect(() => {
        if (user) {
            userLogin()
        }
    },[user])

   

    return (
        <div className="ml-64">
            <h1>Welcome {user?.firstName}!</h1>
            <PackSelector />
        </div>
    )
}

export default Dashboard