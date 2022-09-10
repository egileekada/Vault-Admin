import { Input } from '@chakra-ui/input' 
import React from 'react'

export default function AccountDetail() {
    return (
        <>  
            <div className='w-20 h-20 rounded-full mb-6 bg-yellow-300' >

            </div>
            <div className='w-96 my-3' >
                <p className='font-Inter-Medium text-sm  mb-2'>Name</p>
                <Input value='Mba Bright' fontSize='sm' bg='white' border='1px solid #002343' />
            </div>
            <div className='w-96 my-3' >
                <p className='font-Inter-Medium text-sm mb-2'>Email Address</p>
                <Input value='brightbright@gmail.com' fontSize='sm' bg='white' border='1px solid #002343' />
            </div>
            <div className='w-96 my-3' >
                <p className='font-Inter-Medium text-sm  mb-2'>Position</p>
                <Input value='Super Admin' fontSize='sm' bg='white' border='1px solid #002343' />
            </div>
        </>
    )
}
