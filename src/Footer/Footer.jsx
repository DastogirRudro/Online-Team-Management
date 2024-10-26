import React from 'react';

const Footer = () => {
    return (
        <div className='mt-14 relative'>
            <div className='p-1 max-w-6xl mx-auto rounded-xl border-1 relative bg-slate-100 z-20 '>
                <div style={{ backgroundImage: "url('../../assets/bg-shadow.png')", backgroundSize: "cover" }} className='max-w-6xl  mx-auto flex flex-col gap-1 items-center justify-center py-20 rounded-xl relative z-20'>

                    <h1 className='text-[#131313] font-bold text-2xl'>Subscribe to our Newsletter</h1>
                    <p className='text-[#131313B3] text-lg font-semibold text-center'>Get the latest updates and news right in your inbox!</p>
                    <div className='flex items-center justify-between mt-2'>
                        <input className='border-2 p-2 rounded-xl ml-2 px-8 text-sm' type="email" placeholder='Enter your e-mail' name="" id="" />
                        <button className='border-2 rounded-lg bg-yellow-600 py-2 text-sm  px-3 ml-2'>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='bg-[#06091A] w-full pt-40 -z-20 absolute top-44'>
                <div className='flex justify-center'>
                    <img src="../../assets/logo-footer.png" alt="" />
                </div>
                <div className='max-w-6xl mx-auto md:flex justify-between border-b-2 border-gray-400 py-10'>
                    <div className='max-w-[291px]'>
                        <p className='text-white font-bold text-lg mb-2'>About us</p>
                        <p className='text-[#FFFFFF99]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className='max-w-[291px]'>
                        <p className='text-white mb-4 '>Quick LInks</p>
                        <ul className='list-disc pl-4'>
                            <li className='marker:text-white text-[#FFFFFF99]'>Home</li>
                            <li className='marker:text-white text-[#FFFFFF99]'>Service</li>
                            <li className='marker:text-white text-[#FFFFFF99]'>About</li>
                            <li className='marker:text-white text-[#FFFFFF99]'>Contact</li>
                        </ul>
                    </div>
                    <div className='max-w-[384px]'>
                        <h1 className='text-white'>Subscribe</h1>
                        <p className='text-[#FFFFFF99]'>Subscribe to our news letter for the lattest update</p>

                        <div className='flex  mt-2'>
                            <input className='border-2 p-2 rounded-r-none rounded-xl px-8 text-sm' type="email" placeholder='Enter your e-mail' name="" id="" />
                            <button className='rounded-l-none rounded-xl bg-yellow-600 py-2 text-sm  px-3'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-center mt-10 mb-8 text-[#FFFFFF99]'>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export { Footer };