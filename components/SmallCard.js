import React from 'react';
import Image from 'next/image';

function SmallCard({image,location,distance}) {
    return (
        
        <div className='flex items-center m-2 mt-5 space-x-4 cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
            
            {/* left */}
            <div className='relative h-16 w-16'>
            <Image className='rounded-lg'
                src={image}
                fill
                alt='image'
            />
            </div>

            {/* right */}
            <div className=''>
                <h2>{location}</h2>
                <h2>{distance}</h2>
            </div>
        </div>
    );
}

export default SmallCard;