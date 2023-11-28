import React from 'react'

const Footer = () => {
    return (
        <div className=' bg-custom-dark-blue w-full h-[409px]'>
            <div className='flex'>
                <div className='text-custom-orange font-poppins text-lg font-bold mt-[70px] ml-[116px]'>
                    <h2 className=''>Quick Links</h2>
                    <ul className='grid ml-6 text-base text-white font-normal gap-y-5 mt-7'>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='text-custom-orange font-poppins text-lg font-bold mt-[70px] ml-[116px]'>
                    <h2 className=''>Course</h2>
                    <ul className='grid ml-6 text-base text-white font-normal gap-y-5 mt-7 '>
                        <li>Log In</li>
                        <li>Download</li>
                        <li>All Courses</li>
                    </ul>
                </div>
                <div className='text-custom-orange font-poppins text-lg font-bold mt-[70px] ml-[116px]'>
                    <h2 className=''>Contact Us</h2>
                    <ul className='grid ml-6 text-base text-white font-normal gap-y-5 mt-7 mr-[132px]'>
                        <li>contact@email.com</li>
                        <div className='flex'>
                            <img src="/assets/facebook.svg" alt="" className='mr-[28px]' />
                            <img src="/assets/instagram.svg" alt="" />
                        </div>
                        <div className='w-[521px] h-[39px] pl-[27px] font-poppins text-base rounded-lg bg-white flex'>
                            <input type="text" placeholder='Email Address' />
                            <button className='bg-custom-green mt-1 ml-[152px] w-[135px] h-[30px] rounded-lg grid justify-items-center content-center'>Subscribe</button>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='ml-[116px] text-white text-base font-poppins mt-8'>
                <h3>This website is developed by GTCoding © 2021</h3>
            </div>
        </div>
    )
}

export default Footer