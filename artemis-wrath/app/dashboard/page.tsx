'use client'
import { useUser } from "@clerk/nextjs"
import {useEffect} from 'react'

const Dashboard = () => {
    const {user} = useUser()
    
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
        })
        console.log(res)
    }
    
    

    return (
        <div>
            <h1>Hello {user?.firstName}</h1>
            <button onClick={userLogin}>Click me</button>
        </div>
    )
}

export default Dashboard