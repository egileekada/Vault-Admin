import React from 'react'

export default function HistoryOption(props: any) {
    return (
        <div style={{backgroundColor: '#F5F5F5'}} className='w-full p-8 mb-6' >
            <div className='w-full flex items-center mb-8 ' >
                <div>
                    <p style={{color: '#979797'}} className=' font-Inter-Bold text-sm ' >SAVINGS</p>
                    <p style={{color: '#002343'}} className=' font-Inter-Bold text-base mt-1 ' >Transaction History</p>
                </div>
                <button onClick={()=> props.close(0)} style={{border :'1px solid #002343'}} className='px-8 h-10 ml-auto rounded-md font-Inter-Bold text-sm'  >See All</button>
            </div>
            <div  onClick={()=> props.close(true)} className='w-full flex items-center bg-white rounded-lg cursor-pointer py-6 px-6' >
                <div style={{backgroundColor: '#F0F2F4'}} className='w-12 h-12  flex justify-center items-center rounded-full' >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.82812 5.6875H5.23438C5.45 4.61875 6.39688 3.8125 7.53125 3.8125C8.66563 3.8125 9.6125 4.61875 9.82812 5.6875Z" fill="#002343"/>
                        <path d="M12.2188 4.6875C13.5132 4.6875 14.5625 3.63817 14.5625 2.34375C14.5625 1.04933 13.5132 0 12.2188 0C10.9243 0 9.875 1.04933 9.875 2.34375C9.875 3.63817 10.9243 4.6875 12.2188 4.6875Z" fill="#002343"/>
                        <path d="M3.3125 4.71875C4.34803 4.71875 5.1875 3.87928 5.1875 2.84375C5.1875 1.80822 4.34803 0.96875 3.3125 0.96875C2.27697 0.96875 1.4375 1.80822 1.4375 2.84375C1.4375 3.87928 2.27697 4.71875 3.3125 4.71875Z" fill="#002343"/>
                        <path d="M12.6875 8.03125C12.6875 7.25313 12.0594 6.625 11.2812 6.625H3.78125C3.00313 6.625 2.375 7.25313 2.375 8.03125C2.375 8.52813 2.6375 8.96875 3.03125 9.22188C2.62813 9.64375 2.375 10.2156 2.375 10.8438V14.5938C2.375 15.3719 3.00313 16 3.78125 16H11.2812C12.0594 16 12.6875 15.3719 12.6875 14.5938V10.8438C12.6875 10.2156 12.4344 9.64375 12.0312 9.22188C12.425 8.96875 12.6875 8.52813 12.6875 8.03125ZM6.125 9.90625H7.0625V10.8438H6.125V9.90625ZM8.9375 13.6562H8V12.7188H8.9375V13.6562ZM5.98766 13.9877L5.32481 13.3248L9.07481 9.57481L9.73766 10.2377L5.98766 13.9877Z" fill="#002343"/>
                    </svg> 
                </div>
                <div className='w-auto pl-6 ' > 
                    <p style={{color: '#002343'}} className='font-Inter-SemiBold text-base'>Savings One</p>
                    <p style={{color: '#979797'}} className='font-Inter-Medium text-sm mt-1 '>₦ 423,345.00</p>
                </div>
                <div className='w-auto ml-auto' >  
                    <p style={{color: '#979797'}} className='font-Inter-Medium text-left text-sm '>DUE DATE</p>
                    <div className='flex items-center mt-1' >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00033 12.8333C10.222 12.8333 12.8337 10.2216 12.8337 6.99994C12.8337 3.77828 10.222 1.16661 7.00033 1.16661C3.77866 1.16661 1.16699 3.77828 1.16699 6.99994C1.16699 10.2216 3.77866 12.8333 7.00033 12.8333Z" stroke="#1F1F1F"/>
                            <path d="M7 3.79166V7L8.75 8.75" stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p style={{color: '#002343'}} className='font-Inter-Regular text-xs ml-1'>12, Jun 2021</p>
                    </div>
                </div>
            </div>
            <div onClick={()=> props.close(true)} className='w-full flex items-center bg-white rounded-lg cursor-pointer py-6 mt-1 px-6' >
                <div style={{backgroundColor: '#F0F2F4'}} className='w-12 h-12 flex justify-center items-center rounded-full' >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.82812 5.6875H5.23438C5.45 4.61875 6.39688 3.8125 7.53125 3.8125C8.66563 3.8125 9.6125 4.61875 9.82812 5.6875Z" fill="#002343"/>
                        <path d="M12.2188 4.6875C13.5132 4.6875 14.5625 3.63817 14.5625 2.34375C14.5625 1.04933 13.5132 0 12.2188 0C10.9243 0 9.875 1.04933 9.875 2.34375C9.875 3.63817 10.9243 4.6875 12.2188 4.6875Z" fill="#002343"/>
                        <path d="M3.3125 4.71875C4.34803 4.71875 5.1875 3.87928 5.1875 2.84375C5.1875 1.80822 4.34803 0.96875 3.3125 0.96875C2.27697 0.96875 1.4375 1.80822 1.4375 2.84375C1.4375 3.87928 2.27697 4.71875 3.3125 4.71875Z" fill="#002343"/>
                        <path d="M12.6875 8.03125C12.6875 7.25313 12.0594 6.625 11.2812 6.625H3.78125C3.00313 6.625 2.375 7.25313 2.375 8.03125C2.375 8.52813 2.6375 8.96875 3.03125 9.22188C2.62813 9.64375 2.375 10.2156 2.375 10.8438V14.5938C2.375 15.3719 3.00313 16 3.78125 16H11.2812C12.0594 16 12.6875 15.3719 12.6875 14.5938V10.8438C12.6875 10.2156 12.4344 9.64375 12.0312 9.22188C12.425 8.96875 12.6875 8.52813 12.6875 8.03125ZM6.125 9.90625H7.0625V10.8438H6.125V9.90625ZM8.9375 13.6562H8V12.7188H8.9375V13.6562ZM5.98766 13.9877L5.32481 13.3248L9.07481 9.57481L9.73766 10.2377L5.98766 13.9877Z" fill="#002343"/>
                    </svg> 
                </div>
                <div className='w-auto pl-6 ' > 
                    <p style={{color: '#002343'}} className='font-Inter-SemiBold text-base'>Savings One</p>
                    <p style={{color: '#979797'}} className='font-Inter-Medium text-sm mt-1 '>₦ 423,345.00</p>
                </div>
                <div className='w-auto ml-auto' >  
                    <p style={{color: '#979797'}} className='font-Inter-Medium text-left text-sm '>DUE DATE</p>
                    <div className='flex items-center mt-1' >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00033 12.8333C10.222 12.8333 12.8337 10.2216 12.8337 6.99994C12.8337 3.77828 10.222 1.16661 7.00033 1.16661C3.77866 1.16661 1.16699 3.77828 1.16699 6.99994C1.16699 10.2216 3.77866 12.8333 7.00033 12.8333Z" stroke="#1F1F1F"/>
                            <path d="M7 3.79166V7L8.75 8.75" stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p style={{color: '#002343'}} className='font-Inter-Regular text-xs ml-1'>12, Jun 2021</p>
                    </div>
                </div>
            </div>
            <div onClick={()=> props.close(true)} className='w-full flex items-center bg-white rounded-lg cursor-pointer py-6 mt-1 px-6' >
                <div style={{backgroundColor: '#F0F2F4'}} className='w-12 h-12 flex justify-center items-center rounded-full' >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.82812 5.6875H5.23438C5.45 4.61875 6.39688 3.8125 7.53125 3.8125C8.66563 3.8125 9.6125 4.61875 9.82812 5.6875Z" fill="#002343"/>
                        <path d="M12.2188 4.6875C13.5132 4.6875 14.5625 3.63817 14.5625 2.34375C14.5625 1.04933 13.5132 0 12.2188 0C10.9243 0 9.875 1.04933 9.875 2.34375C9.875 3.63817 10.9243 4.6875 12.2188 4.6875Z" fill="#002343"/>
                        <path d="M3.3125 4.71875C4.34803 4.71875 5.1875 3.87928 5.1875 2.84375C5.1875 1.80822 4.34803 0.96875 3.3125 0.96875C2.27697 0.96875 1.4375 1.80822 1.4375 2.84375C1.4375 3.87928 2.27697 4.71875 3.3125 4.71875Z" fill="#002343"/>
                        <path d="M12.6875 8.03125C12.6875 7.25313 12.0594 6.625 11.2812 6.625H3.78125C3.00313 6.625 2.375 7.25313 2.375 8.03125C2.375 8.52813 2.6375 8.96875 3.03125 9.22188C2.62813 9.64375 2.375 10.2156 2.375 10.8438V14.5938C2.375 15.3719 3.00313 16 3.78125 16H11.2812C12.0594 16 12.6875 15.3719 12.6875 14.5938V10.8438C12.6875 10.2156 12.4344 9.64375 12.0312 9.22188C12.425 8.96875 12.6875 8.52813 12.6875 8.03125ZM6.125 9.90625H7.0625V10.8438H6.125V9.90625ZM8.9375 13.6562H8V12.7188H8.9375V13.6562ZM5.98766 13.9877L5.32481 13.3248L9.07481 9.57481L9.73766 10.2377L5.98766 13.9877Z" fill="#002343"/>
                    </svg> 
                </div>
                <div className='w-auto pl-6 ' > 
                    <p style={{color: '#002343'}} className='font-Inter-SemiBold text-base'>Savings One</p>
                    <p style={{color: '#979797'}} className='font-Inter-Medium text-sm mt-1 '>₦ 423,345.00</p>
                </div>
                <div className='w-auto ml-auto' >  
                    <p style={{color: '#979797'}} className='font-Inter-Medium text-left text-sm '>DUE DATE</p>
                    <div className='flex items-center mt-1' >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00033 12.8333C10.222 12.8333 12.8337 10.2216 12.8337 6.99994C12.8337 3.77828 10.222 1.16661 7.00033 1.16661C3.77866 1.16661 1.16699 3.77828 1.16699 6.99994C1.16699 10.2216 3.77866 12.8333 7.00033 12.8333Z" stroke="#1F1F1F"/>
                            <path d="M7 3.79166V7L8.75 8.75" stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p style={{color: '#002343'}} className='font-Inter-Regular text-xs ml-1'>12, Jun 2021</p>
                    </div>
                </div>
            </div>
            <div onClick={()=> props.close(true)} className='w-full flex items-center bg-white rounded-lg cursor-pointer py-6 mt-1 px-6' >
                <div style={{backgroundColor: '#F0F2F4'}} className='w-12 h-12 flex justify-center items-center rounded-full' >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.82812 5.6875H5.23438C5.45 4.61875 6.39688 3.8125 7.53125 3.8125C8.66563 3.8125 9.6125 4.61875 9.82812 5.6875Z" fill="#002343"/>
                        <path d="M12.2188 4.6875C13.5132 4.6875 14.5625 3.63817 14.5625 2.34375C14.5625 1.04933 13.5132 0 12.2188 0C10.9243 0 9.875 1.04933 9.875 2.34375C9.875 3.63817 10.9243 4.6875 12.2188 4.6875Z" fill="#002343"/>
                        <path d="M3.3125 4.71875C4.34803 4.71875 5.1875 3.87928 5.1875 2.84375C5.1875 1.80822 4.34803 0.96875 3.3125 0.96875C2.27697 0.96875 1.4375 1.80822 1.4375 2.84375C1.4375 3.87928 2.27697 4.71875 3.3125 4.71875Z" fill="#002343"/>
                        <path d="M12.6875 8.03125C12.6875 7.25313 12.0594 6.625 11.2812 6.625H3.78125C3.00313 6.625 2.375 7.25313 2.375 8.03125C2.375 8.52813 2.6375 8.96875 3.03125 9.22188C2.62813 9.64375 2.375 10.2156 2.375 10.8438V14.5938C2.375 15.3719 3.00313 16 3.78125 16H11.2812C12.0594 16 12.6875 15.3719 12.6875 14.5938V10.8438C12.6875 10.2156 12.4344 9.64375 12.0312 9.22188C12.425 8.96875 12.6875 8.52813 12.6875 8.03125ZM6.125 9.90625H7.0625V10.8438H6.125V9.90625ZM8.9375 13.6562H8V12.7188H8.9375V13.6562ZM5.98766 13.9877L5.32481 13.3248L9.07481 9.57481L9.73766 10.2377L5.98766 13.9877Z" fill="#002343"/>
                    </svg> 
                </div>
                <div className='w-auto pl-6 ' > 
                    <p style={{color: '#002343'}} className='font-Inter-SemiBold text-base'>Savings One</p>
                    <p style={{color: '#979797'}} className='font-Inter-Medium text-sm mt-1 '>₦ 423,345.00</p>
                </div>
                <div className='w-auto ml-auto' >  
                    <p style={{color: '#979797'}} className='font-Inter-Medium text-left text-sm '>DUE DATE</p>
                    <div className='flex items-center mt-1' >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00033 12.8333C10.222 12.8333 12.8337 10.2216 12.8337 6.99994C12.8337 3.77828 10.222 1.16661 7.00033 1.16661C3.77866 1.16661 1.16699 3.77828 1.16699 6.99994C1.16699 10.2216 3.77866 12.8333 7.00033 12.8333Z" stroke="#1F1F1F"/>
                            <path d="M7 3.79166V7L8.75 8.75" stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p style={{color: '#002343'}} className='font-Inter-Regular text-xs ml-1'>12, Jun 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
