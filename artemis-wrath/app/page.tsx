'use client'

import Hero from '@/components/Hero'
import MidSection from '@/components/MidSection'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const {user} = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  })

  // if (user) {
  //   router.push('/dashboard')
  // }



  return (
    <div>
      <Hero/>
      <MidSection />
    </div>
  )
}
