import React from 'react';

const Banner = ({handleCoin}) => {
    return (
        <div>
            <div style={{ backgroundImage: "url('https://i.ibb.co.com/XW6tFT3/bg-shadow.png')",backgroundSize:"cover", backgroundRepeat:"no-repeat" }}
                 className='flex items-center justify-center bg-black flex-col gap-4 py-12 rounded-xl'>
                <div>
                    <img src="https://i.ibb.co.com/mcJp617/banner-main.png" alt="" />
                </div> 
                <div className='text-center'>
                    <h1 className='text-3xl mb-2 font-semibold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-xl   text-gray-400'>Beyond Boundaries Beyond Limits</p>
                </div>
                <div className=' border-2 rounded-xl p-1'>
                    <button onClick={handleCoin} className='px-4 py-2 border-1 rounded-xl text-center text-black font-semibold bg-yellow-500'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export {Banner};