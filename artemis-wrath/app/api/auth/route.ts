import {prisma} from '@/lib/prisma'
import {NextResponse} from 'next/server'


interface userInfo {
    id: string, 
    firstName: string, 
    lastName: string, 
}


export async function POST(req: Request) {
    const userInfo: userInfo = await req.json()
    const user = await prisma.user.create({
        data:{
            id: userInfo.id, 
            name: userInfo.firstName + ' ' + userInfo.lastName, 
        }
    })
    console.log(userInfo)
   return NextResponse.json('testing')
}