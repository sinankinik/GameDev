

const Testimotionals = () => {
    return (
        <div className=" my-[100px] relative">
            <div>
                <div className="w-[28px] h-[546px] ml-[87px] bg-custom-green rounded-3xl -z-10"></div>
                <div className="absolute top-[35px] left-0 w-[442px] h-[222px] bg-white rounded-3xl shadow-[0_7px_29px_0_rgba(100,100,100,0.4)]">
                    <div className="w-[442px] h-[102px] rounded-3xl bg-custom-lilac px-8 py-6">
                        <h2 className="font-raleway text-lg font-black text-white ">This is a great course. It helped me a lot. Thank you :)</h2>
                    </div>
                    <div className="px-8 my-[30.5px]">
                        <h2 className="font-raleway text-2xl font-black text-custom-green ">Jane Cooper</h2>
                        <h2 className="font-raleway text-lg text-custom-green mt-0">Developer, Sony</h2>
                    </div>
                    <div className="absolute top-[90px] right-8">
                        <img src="/assets/avatar1.png" alt="" className="w-[120px] h-[120px]" />
                    </div>
                </div>
                <div className="absolute bottom-[44px] left-8 w-[442px] h-[195px] bg-white rounded-3xl shadow-[0_7px_29px_0_rgba(100,100,100,0.4)] mt-[35px]">
                    <div className="w-[442px] h-[75px] rounded-3xl bg-custom-orange px-8 py-6">
                        <h2 className="font-raleway text-lg font-black text-white ">Amazing Work! Well done!</h2>
                    </div>
                    <div className="px-8 my-[30.5px]">
                        <h2 className="font-raleway text-2xl font-black text-custom-green ">Jacob Jones </h2>
                        <h2 className="font-raleway text-lg text-custom-green mt-0">Designer, Facebook</h2>
                    </div>
                    <div className="absolute top-[63px] right-8">
                        <img src="/assets/avatar2.png" alt="" className="w-[120px] h-[120px]" />
                    </div>
                </div>
            </div>
            <div className="absolute top-[85px] right-0 w-[559px] text-custom-green ">
                <h3 className="font-raleway font-black text-6xl">What our students say</h3>
                <p className="mt-4 text-base font-poppins leading-9">All students get access to all the videos and also the source code of the projects.</p>
                <p className="text-base font-poppins leading-9">You will also have access to a private Discord channel where you can discuss your doubts.</p>
                <button className="bg-custom-orange px-8 py-4 rounded-3xl font-poppins font-bold text-lg text-white mt-[30px]">Learn More</button>
            </div>
        </div>
    )
}

export default Testimotionals