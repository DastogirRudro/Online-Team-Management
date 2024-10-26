import React from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { IoFlagSharp } from "react-icons/io5";

const Elements = ({player,reduceCoin}) => {
    
    const {name,id,rating,cover_photo,nationality,identity,price,batting_style,balling_style}=player
    const notify =()=> {
        // toast (`congress ${name} is now in your squad` , {
        //     autoClose: 1000
        // })
    }
    return (
        <div>
          
            <div className='border-2 justify-center space-y-2 rounded-lg p-2 py-4 flex flex-col h-[520px]'>
            <img className='max-w-[390px] max-h-[260px] bg-cover rounded-lg mb-2' src={cover_photo} alt="" />
            <div className='flex'>
                  <h1 className='flex gap-4 items-center'> < IoPersonSharp className='text-2xl border-1 rounded-full'/> {name} </h1>
            </div>
            <div className='flex items-center justify-between'>
                <p className='flex text-gray-500 gap-2 text-sm'><IoFlagSharp className='text-xl'/> {nationality}</p>
                <button className='p-1 px-2 bg-slate-100 rounded-md'>{identity}</button>
            </div>
            <h1 className='font-semibold'>Rating: {rating}</h1>
            <div className='flex items-center justify-between'>
                <p className='font-semibold'>{batting_style}</p>
                <p className='text-gray-700'>{balling_style}</p>
            </div>
            <div className='flex items-center justify-between'>
                <p className='font-semibold'>Price: ${price}</p>
                <button onClick={()=>{ reduceCoin({player}); notify()}} className='px-2 p-1 border-2 rounded-lg bg-slate-50' >Choose Player</button>
            </div>
        </div>
        </div>
        
    );
};

export {Elements};