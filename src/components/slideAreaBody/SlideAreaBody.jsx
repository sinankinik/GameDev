import React from 'react'

const SlideAreaBody = () => {
    return (
        <div className='flex text-white mt-[85px] leading-tight relative bg-green'>
            <div className='flex'>
                <div className='font-poppins mt-[33px]'>
                    <h2 className='font-raleway text-[50px] font-black'>
                        Learn the art of
                    </h2>
                    <h2 className='font-raleway text-[50px] font-black'>
                        Game Dev
                    </h2>
                    <p className='text-base leading-loose mb-[30px] mt-[18px]'>
                        This is a comprehensive course on Game Development. <br /> You will learn everything from generating an idea to <br />publishing your games to different platforms.
                    </p>
                    <div className='flex justify-center items-center bg-custom-orange w-[183px] h-[59px] rounded-3xl cursor-pointer'>
                        <img src="/assets/pencilalt.svg" alt="" className='mr-2.5 w-[18px] h-[18px]' />
                        <h3 className='text-lg font-semibold'>Enrol Now</h3>
                    </div>
                </div>
                <div className='leading-tight font-poppins mt-[33px]'>
                    <div className='bg-white w-[206px] h-[90px] rounded-3xl text-custom-green grid justify-items-center content-center mt-[104px] ml-[50px]'>
                        <h2 className='text-4xl font-bold'>32K</h2>
                        <h3>Students Enrolled</h3>
                    </div>
                    <div className='bg-white w-[206px] h-[90px] rounded-3xl text-custom-green grid justify-items-center content-center mt-[141px] ml-[16px]'>
                        <div className='block'>
                            <span className='text-4xl font-bold inline-flex'>
                                <span>4.7</span>
                                <img src="/assets/star.svg" alt="" className='h-8[39.88px] w-[41.25px]' />
                            </span >
                        </div>
                        <h3>Overall Rating</h3>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SlideAreaBody