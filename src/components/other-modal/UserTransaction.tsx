import React from 'react' 
import UserInformation from '../user-component/UserInformation'

export default function UserTransaction(props: any) {
    return (
        <div style={{width: '900px'}} className='rounded-xl h-auto py-12 bg-white'  >
            <div className='w-full flex px-12' >
                <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13L5 8L10 3" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
                <div className='w-auto mx-auto' >
                    <p style={{color: '#002343'}} className='font-Inter-SemiBold text-center text-lg' >About User</p>
                    <p className='font-Inter-Regular text-center text-sm' >Manage and learn more about this user</p>
                </div> 
                <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00003 8L13 13M3 3L8.00003 8L3 3ZM8.00003 8L13 3L8.00003 8ZM8.00003 8L3 13L8.00003 8Z" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
            </div>
            <div className='w-full flex  px-12 mt-8  pb-12  ' >
                <div className='w-auto' >
                    <UserInformation /> 
                </div>
                <div className='w-full pl-8 pt-2' > 
                    <p style={{color: '#979797'}} className='font-Inter-SemiBold text-sm '>TRANSACTIONS</p>
                    <div className='border-b-2 border-gray-200 py-4 w-full mt-4 flex '  > 
                        <div style={{backgroundColor: '#F0F2F4'}} className='w-12 h-12 flex justify-center items-center rounded-full' >
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.82812 5.6875H5.23438C5.45 4.61875 6.39688 3.8125 7.53125 3.8125C8.66563 3.8125 9.6125 4.61875 9.82812 5.6875Z" fill="#002343"/>
                                <path d="M12.2188 4.6875C13.5132 4.6875 14.5625 3.63817 14.5625 2.34375C14.5625 1.04933 13.5132 0 12.2188 0C10.9243 0 9.875 1.04933 9.875 2.34375C9.875 3.63817 10.9243 4.6875 12.2188 4.6875Z" fill="#002343"/>
                                <path d="M3.3125 4.71875C4.34803 4.71875 5.1875 3.87928 5.1875 2.84375C5.1875 1.80822 4.34803 0.96875 3.3125 0.96875C2.27697 0.96875 1.4375 1.80822 1.4375 2.84375C1.4375 3.87928 2.27697 4.71875 3.3125 4.71875Z" fill="#002343"/>
                                <path d="M12.6875 8.03125C12.6875 7.25313 12.0594 6.625 11.2812 6.625H3.78125C3.00313 6.625 2.375 7.25313 2.375 8.03125C2.375 8.52813 2.6375 8.96875 3.03125 9.22188C2.62813 9.64375 2.375 10.2156 2.375 10.8438V14.5938C2.375 15.3719 3.00313 16 3.78125 16H11.2812C12.0594 16 12.6875 15.3719 12.6875 14.5938V10.8438C12.6875 10.2156 12.4344 9.64375 12.0312 9.22188C12.425 8.96875 12.6875 8.52813 12.6875 8.03125ZM6.125 9.90625H7.0625V10.8438H6.125V9.90625ZM8.9375 13.6562H8V12.7188H8.9375V13.6562ZM5.98766 13.9877L5.32481 13.3248L9.07481 9.57481L9.73766 10.2377L5.98766 13.9877Z" fill="#002343"/>
                            </svg> 
                        </div>
                        <div className='w-auto pl-2 ' > 
                            <p style={{color: '#002343'}} className='font-Inter-SemiBold text-base'>Joint Savings</p>
                            <p style={{color: '#979797'}} className='font-Inter-Medium text-sm mt-1 '>SAVINGS</p>
                        </div>
                        <div className='w-auto ml-auto flex justify-end' > 
                            <button onClick={()=> props.close(4)} style={{border: '1px solid #002343'}} className='px-4 items-center justify-center flex h-9 rounded-md ' >
                                Details
                            </button>
                        </div>
                    </div> 

                    <button onClick={()=> props.close(4)} style={{border: '1px solid #002343'}} className='px-4 items-center justify-center flex h-9 font-Inter-Medium mt-8 rounded-md ' >
                        See all
                    </button>
                </div>
            </div>
        </div>
    )
}
