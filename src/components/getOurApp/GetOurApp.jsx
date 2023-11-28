import React from 'react'

const GetOurApp = () => {
    return (
        <div className='grid justify-center'>
            <div className='grid justify-center'>
                <h2 className="font-raleway text-custom-green text-6xl font-black mt-[100px] mb-[13px]">Get our App</h2>
            </div>
            <div className='grid justify-center'>
                <p className='font-poppins text-custom-green text-base'>You can use our App for better experience on smartphones</p>
            </div>
            <div className='flex mb-[100px]'>
                <div className='bg-black w-[310px] h-[100px] mt-[45px] flex items-center mr-[30px]'>
                    <img src="/assets/appstore.png" alt="" className='ml-[31px]' />
                    <h2 className='text-white text-2xl font-poppins ml-[14px]'>App Store</h2>
                </div>
                <div className='bg-black w-[310px] h-[100px] mt-[45px] flex items-center'>
                    <img src="/assets/googleplay.png" alt="" className='ml-[31px]' />
                    <h2 className='text-white text-2xl font-poppins ml-[14px]'>Google Play</h2>
                </div>
            </div>
        </div>
    )
}

export default GetOurApp