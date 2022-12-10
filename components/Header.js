import React from 'react';
import Image from 'next/image';
import { 
    MagnifyingGlassCircleIcon,
    GlobeAltIcon,
    Bars4Icon,
    UserCircleIcon,
    UserIcon
} from '@heroicons/react/24/solid'



function Header(props) {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 shadow-md bg-white p-5 md:px-10'>
            {/* left */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto '>
                <Image
                    src='/images/Airbnb_logo_PNG3.png'
                    fill
                    objectFit='contain'
                    alt='logo'
                />
            </div>

            {/* middle search*/}
            <div className='flex items-center md:border-2 rounded-full md:shadow-sm'>
                <input type="text" placeholder='start your search' className=' flex-grow pl-5   text-sm text-grey-600 placeholder-gray-400 bg-transparent outline-0'></input>
                <MagnifyingGlassCircleIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2'/>
            </div>

            {/* right */}
            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'>Become a Host</p>
                <GlobeAltIcon className='h-6 cursor-pointer'/>
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <Bars4Icon className='h-6'/>
                    <UserCircleIcon className='h-6'/>
                </div>
            </div>
        </header>
    );
}

export default Header;