import React from 'react'

export default function UserInformation() {
    return (
        <div className='w-auto' >
            <div style={{width:'300px'}}  className='flex items-center' > 
                <div className='w-20 h-20 bg-yellow-300 rounded-full' >

                </div>
                <div className='w-auto ml-3 ' > 
                    <p className='font-Inter-Bold text-xl' >Emeka Jesusss</p>
                    <p className='font-Inter-Regular text-sm ' >emekajesus@hotmail.com</p>
                </div>
            </div>
            <p style={{color: '#979797'}} className='font-Inter-SemiBold text-sm mt-12 '>PERSONAL DETAILS</p>
            <p style={{color: '#979797'}} className='font-Inter-SemiBold text-sm mt-8 '>PHONE NUMBER</p>
            <p style={{color: '#002343'}} className='font-Inter-SemiBold text-base mt-2 '>+234 434 433 44</p>
            <p style={{color: '#979797'}} className='font-Inter-SemiBold text-sm mt-8 '>STATUS</p>
            <p style={{color: '#002343'}} className='font-Inter-SemiBold text-base mt-2 '>Unverified</p>
            <p style={{color: '#979797'}} className='font-Inter-SemiBold text-sm mt-8 '>LOCATION</p>
            <p style={{color: '#002343'}} className='font-Inter-SemiBold text-base mt-2 '>Lagos, Nigeria</p>
        </div>
    )
}
