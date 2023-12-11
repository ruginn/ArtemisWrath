import Image from "next/image"
import banner from '../public/Images/WRbanner2.svg'
import AWbanner from '../public/Images/AWBanner.svg'

const Hero = () => {
    return (
        <div className="flex relative justify-center">
            <Image 
                src={banner}
                alt='background'
                className="w-full h-[550px] object-cover"
            />
            <Image 
                src={AWbanner}
                alt="Artemis&apos; Wrath"
                className="w-[65%] absolute -bottom-20 h-[560px] rounded-2xl border-[#AB9D45] border-8 object-cover"
            />
        </div>
    )

}

export default Hero