import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-center  text-white '>
            <div className="text-4xl font-black">GD.</div>
            <div className='flex items-center font-poppins gap-[60px]'>
                <ul className='flex text-base font-black gap-[60px]'>
                    <li>About</li>
                    <li>Services</li>
                    <li>Our Work</li>
                </ul>
                <button className='w-[155px] h-[59px] rounded-3xl bg-custom-green text-lg font-black '>Enrol Now</button>
            </div>
        </div>
    )
}

export default Header