import Image from "next/image"
import Mountains from '@/public/Images/Mountains.svg'
const MidSection = () => {
    return (
        <div>
            <h1>Join our fight</h1>
            <Image 
                src={Mountains}
                alt='Mountains'
                className="w-full"
            />
        </div>
    )
}

export default MidSection