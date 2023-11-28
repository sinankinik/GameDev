

const OurCourses = () => {
    return (
        <div className="bg-gradient-to-b from-custom-lilac to-custom-gradient-dark py-[70px] grid justify-items-center">
            <h2 className="font-raleway text-white text-6xl font-black mb-14">Our Courses</h2>
            <div className="flex  gap-[73px]">
                <div className="w-[526px] h-[418px] bg-white rounded-3xl">
                    <img src="/assets/mario.png" className="w-[462px] h-[260px] rounded-3xl ml-8" alt="" />
                    <div className="flex">
                        <h2 className="ml-10 mt-[30px] text-custom-green font-raleway text-[30px] font-black">Game Design Essentials</h2>
                        <img src="/assets/clock.svg" alt="" className="mt-[67px] ml-6" />
                        <h3 className="text-custom-green font-raleway text-base font-black mt-[67px] ml-[5px]">8 HRS</h3>
                    </div>
                    <div className="bg-custom-green w-[462px] h-2 rounded-3xl ml-8 mt-[59px]"></div>
                </div>
                <div className="w-[526px] h-[418px] bg-white rounded-3xl">
                    <img src="/assets/gaming.png" className="w-[462px] h-[260px] rounded-3xl ml-8" alt="" />
                    <div className="flex">
                        <h2 className="ml-10 mt-[30px] text-custom-green font-raleway text-[30px] font-black">Unity Game Engine Fundamentals</h2>
                        <img src="/assets/clock.svg" alt="" className="mt-[40px] ml-6" />
                        <h3 className="text-custom-green font-raleway text-base font-black mt-[67px] w-[90px]">8 HRS</h3>
                    </div>
                    <div className="bg-custom-green w-[462px] h-2 rounded-3xl ml-8 mt-[30px]"></div>
                </div>
            </div>
        </div>
    )
}

export default OurCourses