import React from 'react';
import { MdDeleteForever } from "react-icons/md";
const Selected = ({ select,handleDelete,showAvailable }) => {
   

    return (
        <div>
            <h2 className='font-bold text-xl my-2'>Selected Players ({select.length}/6)</h2>
            <div>
                {
                    select.map((product) => (
                        <div >
                            <div className='seleted-player items-center flex justify-between bg-slate-50 rounded-sm border-1 mb-1 p-2' >
                                <div className='flex gap-8 '>
                                    <img className='max-w-[55px] max-h-[55px] border-1 p-1 bg-cover rounded-full' src={product.player.cover_photo} />
                                    <div>
                                        <p className='font-semibold text-lg'>{product.player.name}</p>
                                        <p>{product.player.identity}</p>
                                    </div>
                                </div>
                                <div>
                                    <MdDeleteForever onClick={()=> handleDelete(product.player.id)} className='text-2xl cursor-pointer text-red-600' />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button onClick={showAvailable} className='px-2 p-1 bg-yellow-400 rounded-md' >Add more</button>
        </div>
    );
};

export { Selected };