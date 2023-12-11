import Image from "next/image"
import Background from '../public/Images/Herobackground2.svg'
import banner from '../public/Images/WRbanner2.svg'
import AWTextHero from '../public/Images/AWTextHero.png'
import AWbanner from '../public/Images/AWBanner.jpeg'

const Hero = () => {
    return (
        <div className="flex relative justify-center">
            <Image 
                src={banner}
                alt='background'
                className="w-full h-[550px] object-cover"
            />
            {/* <Image 
                src={banner}
                alt='banner'
                className="rounded-xl border-gray-500 border-4 w-[80%] absolute -bottom-20 h-[560px] object-cover blur-sm"
            /> */}
            <Image 
                src={AWbanner}
                alt="Artemis&apos; Wrath"
                className="w-[65%] absolute -bottom-20 h-[560px] rounded-2xl border-[#AB9D45] border-8 object-cover"
            />
        </div>
    )

}

export default Hero