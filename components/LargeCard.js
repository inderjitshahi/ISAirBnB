import React from 'react';
import Image from 'next/image';
function LargeCard({ title, description, buttonText }) {
    return (
        <section className='relative py-16 cursor-pointer'>
            <div className='relative h-96 min-w-[300px]' >
                <Image 
                className='rounded-2xl'
                    src='/images/17379122_155Z_2107.w026.n002.602B.p1.602.jpg'
                    fill
                    alt="image"
                />
            </div>
            <div className='absolute top-32 left-12'>
                <h3 className='text-4xl mb-3 w-64'>{title}</h3>
                <h3 className='text- lg font-semibold'>{description}</h3>

                <button className='text-sm text-white bg-gray-900 px-4 py-2 mt-5 rounded-lg'>{buttonText}</button>
            </div>

        </section>
    );
}

export default LargeCard;