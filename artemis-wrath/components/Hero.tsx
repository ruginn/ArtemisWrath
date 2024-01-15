import Image from "next/image"
import banner from '../public/Images/WRbanner2.svg'
import AWbanner from '../public/Images/AWBanner.svg'

const Hero = () => {
    return (
        <div className="flex relative justify-center">
            <Image 
                src={banner}
                alt='background'
                className="w-full h-48 sm:h-64 md:h-[550px]  object-cover"
            />
            <Image 
                src={AWbanner}
                alt="Artemis&apos; Wrath"
                className="w-11/12 xl:w-[70%] absolute sm:-bottom-20  -bottom-16  h-56 sm:h-[300px] md:h-[560px] rounded-2xl border-[#AB9D45] border-8 object-cover"
            />
        </div>
    )

}

export default Hero