import React from 'react';
import { RiCoinsLine } from "react-icons/ri";
const Header = ({coin}) => {
    return (
        <div className='flex justify-between items-center mt-3 mb-10'>
            <div >
                <img src="https://i.ibb.co.com/nQj5R8w/logo.png" alt="" />
            </div>
            <div>
                <ul className='flex justify-between items-center gap-8'>
                    <li className='text-[#131313B3]'>Home</li>
                    <li className='text-[#131313B3]'>Fixture</li>
                    <li className='text-[#131313B3]'>Teams</li>
                    <li className='text-[#131313B3]'>Schedules</li>
                    <li className='flex items-center gap-2 border-2 rounded-xl p-2'>< span >{coin}</span>Coins <RiCoinsLine className='text-yellow-500 text-2xl' /></li>
                </ul>
            </div>
        </div>
    );
};

export {Header};