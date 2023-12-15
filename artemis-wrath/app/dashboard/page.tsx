'use client'
import { useUser } from "@clerk/nextjs"
import {useEffect} from 'react'

const Dashboard = () => {
    const {user} = useUser()
    
    useEffect(() => {
        const info = fetch('https://localhost:3000/api/auth')
    }, [])

    return (
        <div>
            <h1>Hello {user?.firstName}</h1>
        </div>
    )
}

export default Dashboard