'use client'
import { useUser } from "@clerk/nextjs"

const Dashboard = () => {
    const {user} = useUser()
    
    

    return (
        <div>
            <h1>Hello {user?.firstName}</h1>
        </div>
    )
}

export default Dashboard