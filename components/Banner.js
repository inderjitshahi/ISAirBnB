import Image from "next/image";

function Banner(props) {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]
        2xl:h-[700px]">
            <Image
                src="/images/123Z_2012.w020.n001.932B.p15.932.jpg"
                fill
                objectFit="cover"
                alt="banner"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-white text-sm md:text-lg">Not sure where to go? Perfect</p>
                <button className="text-pink-500 px-5 py-2 shadow-md shadow-rose-300 bg-white rounded-full font-bold my-3 cursor-pointer hover:shadow-lg hover:shadow-rose-300 active:scale-90 transition duration-200">Im Flexible</button>
            </div>
        </div>
    );
}

export default Banner;