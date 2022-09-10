import { Select } from '@chakra-ui/react'
import React from 'react'
import UserVerification from '../user-component/user-modal/UserVerification'

export default function VerificationTab() {

    const Information = [
        {
            name: 'Emeka Jessus',
            email: 'emeka@hotmail.com',
            bvn: true,
            id: true, 
            address: true, 
            status: 'Verified'
        },
        {
            name: 'Emeka Jessus',
            email: 'emeka@hotmail.com',
            bvn: false,
            id: true, 
            address: true, 
            status: 'Pending'
        }, 
        {
            name: 'Emeka Jessus',
            email: 'emeka@hotmail.com',
            bvn: true,
            id: false, 
            address: false, 
            status: 'Null'
        },
        {
            name: 'Emeka Jessus',
            email: 'emeka@hotmail.com',
            bvn: false,
            id: true, 
            address: true, 
            status: 'Null'
        },
        {
            name: 'Emeka Jessus',
            email: 'emeka@hotmail.com',
            bvn: true,
            id: false, 
            address: true, 
            status: 'Verified'
        },
        {
            name: 'Emeka Jessus',
            email: 'emeka@hotmail.com',
            bvn: true,
            id: false, 
            address: true, 
            status: 'Verified'
        },
        {
            name: 'Emeka Jessus',
            email: 'emeka@hotmail.com',
            bvn: true,
            id: false, 
            address: true, 
            status: 'Verified'
        },
    ]

    const [showModal, setShowModal] = React.useState(false)

    return (
        <div className='w-full p-8 overscroll-y-auto' >
            <div className='w-full flex items-center bg-white rounded-md py-6 px-4' >
                <div style={{backgroundColor: 'rgba(196, 196, 196, 0.3)'}} className=' h-10 p-2 rounded-full' >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_61_1685)">
                            <path d="M12 9.68582C14.2523 9.68582 16.0781 7.85998 16.0781 5.6077C16.0781 3.35541 14.2523 1.52957 12 1.52957C9.74771 1.52957 7.92188 3.35541 7.92188 5.6077C7.92188 7.85998 9.74771 9.68582 12 9.68582Z" fill="#002343"/>
                            <path d="M20.25 9.68576C21.6739 9.68576 22.8281 8.53149 22.8281 7.10764C22.8281 5.68378 21.6739 4.52951 20.25 4.52951C18.8261 4.52951 17.6719 5.68378 17.6719 7.10764C17.6719 8.53149 18.8261 9.68576 20.25 9.68576Z" fill="#002343"/>
                            <path d="M3.75 9.68576C5.17386 9.68576 6.32812 8.53149 6.32812 7.10764C6.32812 5.68378 5.17386 4.52951 3.75 4.52951C2.32614 4.52951 1.17188 5.68378 1.17188 7.10764C1.17188 8.53149 2.32614 9.68576 3.75 9.68576Z" fill="#002343"/>
                            <path d="M6.29016 12.001C5.27531 11.1695 4.35623 11.2796 3.18281 11.2796C1.42781 11.2796 0 12.6989 0 14.4432V19.5624C0 20.3199 0.618281 20.9358 1.37859 20.9358C4.66106 20.9358 4.26562 20.9952 4.26562 20.7943C4.26562 17.1668 3.83597 14.5066 6.29016 12.001Z" fill="#002343"/>
                            <path d="M13.1162 11.2983C11.0667 11.1273 9.28518 11.3002 7.74857 12.5686C5.17715 14.6283 5.67201 17.4015 5.67201 20.7942C5.67201 21.6918 6.40232 22.4358 7.31357 22.4358C17.208 22.4358 17.6018 22.7549 18.1886 21.4556C18.381 21.0162 18.3283 21.1558 18.3283 16.9523C18.3283 13.6136 15.4373 11.2983 13.1162 11.2983Z" fill="#002343"/>
                            <path d="M20.8173 11.2795C19.6375 11.2795 18.7234 11.1706 17.71 12.0009C20.1458 14.4879 19.7345 16.9666 19.7345 20.7942C19.7345 20.9964 19.4062 20.9358 22.5723 20.9358C23.3598 20.9358 24.0001 20.2978 24.0001 19.5136V14.4431C24.0001 12.6989 22.5723 11.2795 20.8173 11.2795Z" fill="#002343"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_61_1685">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg> 
                </div>
                <div className='w-full ml-4 ' >
                    <p className='font-Inter-Bold text-lg' >Verification</p>
                    <p style={{color: '#979797'}} className='font-Inter-Regular text-sm ' >Manage user’s reports</p>
                </div>
                <div className=' w-full justify-end flex items-center' > 
                    <div className='w-24 mr-3' > 
                        <Select borderWidth='1px' pl-3 fontSize='sm' borderColor='#002343' className=' bg-white' >
                            <option>All</option>
                        </Select> 
                    </div> 
                </div>
            </div>

            <div className='px-10 bg-white w-full py-10 rounded-md mt-10 '>
                <table className='text-sm '>
                    <thead>
                        <tr className=' font-Inter-Bold text-sm border-b border-gray-200' >
                            <th className='bg-white'>Name</th>
                            <th className='bg-white'>Email Addr.</th>
                            <th className='bg-white text-center '>BVN/NIN</th>
                            <th className='bg-white text-center '>Govt. issued ID</th>
                            <th className='bg-white text-center '>Address verif.</th>  
                            <th className='bg-white '>Status</th>   
                        </tr>
                    </thead>
                    <tbody>
                        {Information.map((item, index) => {
                            return( 
                                <tr onClick={()=> setShowModal(true)} key={index} className='font-Inter-Medium cursor-pointer text-xs' > 
                                    <td className='flex items-center  ' >
                                        <div className='w-10 h-10 bg-yellow-300 rounded-full mr-2' >

                                        </div>
                                        {item.name}
                                    </td>
                                    <td>{item.email}</td>
                                    <td className='text-center text-lg' >{item.bvn ? '✔': '❌'}</td>
                                    <td className='text-center text-lg'>{item.id ? '✔': '❌'}</td>
                                    <td className='text-center text-lg'>{item.address ? '✔': '❌'}</td>
                                    <td  >  
                                        <p style={{border:'1px solid #002343 '}} className='font-Inter-Medium text-sm w-32 py-1 flex justify-start pl-4 items-center rounded-full' >
                                        <div style={item.status === 'Verified' ? {backgroundColor: '#76B95EF7'}: item.status === 'Null' ? {backgroundColor: '#FF001F'}:  item.status === 'Pending' ? {backgroundColor: '#C69F17'}:{backgroundColor: '#002343'} } className='w-2 h-2 rounded-full mr-3'  />{item.status}</p> 
                                    </td>
                                </tr> 
                            )
                        })}
                    </tbody>
                </table>
            </div>  
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <UserVerification close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}
        </div>
    )
}
