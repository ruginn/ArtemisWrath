import Logo from '@/public/Images/AWLOGO2.png'
import WordLogo from '@/public/Images/WordLogo.png'
import Image from 'next/image'
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs"

const NavBar = () => {
    return (
        // <nav className="h-24 flex items-center bg-gradient-to-r from-sky-950 via-cyan-950 to-gray-900">
        <nav className="h-20 flex items-center bg-gray-900 justify-between">
            {/* <p className='from-sky-950 via-cyan-950 to-gray-900'></p> */}
            <div className='flex flex-row items-center ml-5'>
                <Image 
                    src={Logo}
                    alt='Logo'
                    className='w-16 h-16'
                />
                <Image 
                    src={WordLogo}
                    alt='Artemis&apos; Wrath'
                    className='h-10 w-64 ml-3'
                />
                {/* <h1 className="text-white ml-2">Artemis&apos; Wrath</h1> */}
            </div>
            <div>
                <button className="text-sm">
                    <SignedIn>
                       <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode='modal'/>
                    </SignedOut>
                </button>
            </div>
        </nav>
    )
}

export default NavBar