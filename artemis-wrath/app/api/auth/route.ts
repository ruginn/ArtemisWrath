import {prisma} from '@/lib/prisma'
import {NextResponse} from 'next/server'
import { useUser } from '@clerk/nextjs'

export async function GET(request: Request) {
    const {user} = useUser()

    console.log(user)
    
    // const userStats = await prisma.user.findUnique({
    //     where: {
    //         email: 
    //     }
    // })
}