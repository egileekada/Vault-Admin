import React from 'react'
import Pic from '../../../assets/images/ImageIcon.png'

export default function UserVerification(props: any) {
    return (
        <div style={{width: '900px'}} className='rounded-xl h-auto py-12 bg-white'  > 
            <div className='w-full flex px-12' >
                <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13L5 8L10 3" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
                <div className='w-auto mx-auto' >
                    <p style={{color: '#002343'}} className='font-Inter-SemiBold text-center text-lg' >User Verification</p>
                    <p className='font-Inter-Regular text-center text-sm' >Check for uploaded document and verify user to upgrade limit</p>
                </div> 
                <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00003 8L13 13M3 3L8.00003 8L3 3ZM8.00003 8L13 3L8.00003 8ZM8.00003 8L3 13L8.00003 8Z" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
            </div>
            <div style={{width: '500px'}} className='flex flex-col  mx-auto my-12'  >
                <div className='border-2 border-gray-200 py-2 px-3 rounded-md flex items-center w-full' > 
                    <div style={{backgroundColor: '#2196F3'}} className='w-10 flex justify-center items-center h-10 rounded-full' >
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1094 2.60938L7.44263 11.2759C7.18262 11.5359 6.84131 11.6667 6.5 11.6667C6.15869 11.6667 5.81738 11.5359 5.55737 11.2759L1.22412 6.94263C0.702637 6.42139 0.702637 5.57861 1.22412 5.05737C1.74536 4.53589 2.58789 4.53589 3.10937 5.05737L6.5 8.448L14.2241 0.724121C14.7454 0.202637 15.5879 0.202637 16.1094 0.724121C16.6306 1.24536 16.6306 2.08789 16.1094 2.60938Z" fill="#FAFAFA"/>
                        </svg> 
                    </div>
                    <div className='w-auto ml-3 ' > 
                        <p className='font-Inter-Bold text-lg' >Verification</p>
                        <p className='font-Inter-Regular text-sm ' >Manage and verify uploaded documents</p>
                    </div> 
                </div>
                <div className='w-full flex flex-col justify-center items-center py-8' > 
                    <div className='w-20 h-20 bg-yellow-300 rounded-full' >

                    </div>
                    <div className='w-auto mt-3 ' > 
                        <p className='font-Inter-Bold text-xl text-center' >Emeka Jesusss</p>
                        <p className='font-Inter-Regular text-base text-center' >emekajesus@hotmail.com</p>
                    </div>
                </div>
                <div className='w-full grid grid-cols-2 gap-2' >
                    <div className='border-2 border-gray-200 py-4 px-3 rounded-md flex items-center w-full' > 
                        {/* <div style={{backgroundColor: '#2196F3'}} className='w-10 flex justify-center items-center h-10 rounded-full' > */}
                            <img src={Pic} alt='upload' />
                        {/* </div> */}
                        <div className='w-auto ml-3 ' > 
                            <p className='font-Inter-Medium text-xs' >My Image photo.jpg</p>
                            <p style={{fontSize: '8px', color: '#979797'}} className='font-Inter-Regular ' >IMAGE UPLOAD</p>
                        </div> 
                        <div style={{backgroundColor: 'rgba(116, 138, 161, 0.1'}} className='w-7 flex justify-center ml-auto items-center h-7 rounded-full' >
                            <svg width="10" height="11" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.1373 0C4.32715 0 4.48404 0.141077 4.50888 0.324115L4.5123 0.375L4.512 6.967L6.88376 4.58551C7.02989 4.43875 7.26733 4.43823 7.41409 4.58436C7.54751 4.71721 7.56006 4.92552 7.45145 5.07256L7.41523 5.11469L4.40323 8.13969C4.38397 8.15904 4.36313 8.17584 4.34111 8.1901C4.33448 8.19413 4.3277 8.19823 4.32079 8.20212C4.31486 8.20569 4.30871 8.20893 4.30248 8.21197C4.29343 8.21621 4.28407 8.22034 4.27453 8.2241C4.26717 8.22715 4.26001 8.2297 4.2528 8.23202C4.24385 8.23478 4.23431 8.23747 4.22463 8.23978C4.21788 8.24149 4.21137 8.24285 4.20484 8.24404C4.19513 8.24571 4.18507 8.24713 4.1749 8.24814C4.16714 8.24901 4.15945 8.24954 4.15176 8.24983C4.14709 8.24991 4.14221 8.25 4.1373 8.25L4.12277 8.24981C4.11541 8.24953 4.10806 8.24902 4.10072 8.2483L4.1373 8.25C4.11364 8.25 4.09048 8.24781 4.06803 8.24362C4.06267 8.24265 4.05717 8.24149 4.05169 8.2402C4.0404 8.23754 4.02953 8.23446 4.01887 8.23092C4.01358 8.22918 4.00792 8.22715 4.0023 8.22498C3.99102 8.2206 3.98026 8.21584 3.96979 8.2106C3.96486 8.20816 3.9597 8.20544 3.9546 8.20258C3.94627 8.1979 3.93835 8.19307 3.93064 8.18796C3.92518 8.18436 3.91949 8.18037 3.9139 8.17621L3.90958 8.17296C3.89638 8.16286 3.88387 8.1519 3.87213 8.14017L3.87179 8.13972L0.859287 5.11472C0.713143 4.96797 0.713635 4.73053 0.860385 4.58439C0.993793 4.45153 1.20215 4.43986 1.34873 4.54909L1.39071 4.58548L3.762 6.966L3.7623 0.375C3.7623 0.167893 3.93019 0 4.1373 0Z" fill="#002343"/>
                            </svg>
                        </div>
                    </div>
                    <div className='border-2 border-gray-200 py-4 px-3 rounded-md flex items-center w-full' > 
                        {/* <div style={{backgroundColor: '#2196F3'}} className='w-10 flex justify-center items-center h-10 rounded-full' > */}
                            <img src={Pic} alt='upload' />
                        {/* </div> */}
                        <div className='w-auto ml-3 ' > 
                            <p className='font-Inter-Medium text-xs' >My Image photo.jpg</p>
                            <p style={{fontSize: '8px', color: '#979797'}} className='font-Inter-Regular ' >IMAGE UPLOAD</p>
                        </div> 
                        <div style={{backgroundColor: 'rgba(66, 255, 0, 0.1)'}} className='w-7 flex justify-center ml-auto items-center h-7 rounded-full' >
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 4L3.5 7L9.5 1" stroke="#76B95E" stroke-opacity="0.97" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className='border-2 border-gray-200 py-4 px-3 rounded-md flex items-center w-full' > 
                        {/* <div style={{backgroundColor: '#2196F3'}} className='w-10 flex justify-center items-center h-10 rounded-full' > */}
                            <img src={Pic} alt='upload' />
                        {/* </div> */}
                        <div className='w-auto ml-3 ' > 
                            <p className='font-Inter-Medium text-xs' >My Image photo.jpg</p>
                            <p style={{fontSize: '8px', color: '#979797'}} className='font-Inter-Regular ' >IMAGE UPLOAD</p>
                        </div> 
                        <div style={{backgroundColor: 'rgba(66, 255, 0, 0.1)'}} className='w-7 flex justify-center ml-auto items-center h-7 rounded-full' >
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 4L3.5 7L9.5 1" stroke="#76B95E" stroke-opacity="0.97" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className='border-2 border-gray-200 py-4 px-3 rounded-md flex items-center w-full' > 
                        {/* <div style={{backgroundColor: '#2196F3'}} className='w-10 flex justify-center items-center h-10 rounded-full' > */}
                            <img src={Pic} alt='upload' />
                        {/* </div> */}
                        <div className='w-auto ml-3 ' > 
                            <p className='font-Inter-Medium text-xs' >My Image photo.jpg</p>
                            <p style={{fontSize: '8px', color: '#979797'}} className='font-Inter-Regular ' >IMAGE UPLOAD</p>
                        </div> 
                        <div style={{backgroundColor: 'rgba(66, 255, 0, 0.1)'}} className='w-7 flex justify-center ml-auto items-center h-7 rounded-full' >
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 4L3.5 7L9.5 1" stroke="#76B95E" stroke-opacity="0.97" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div> 
                <p style={{color: '#979797'}} className='font-Inter-Regular text-lg text-left mt-10' >UPDATE LEVEL</p>

                <div style={{borderColor: 'rgba(118, 185, 94, 0.97)'}} className='border-2 mt-10 py-6 px-3 rounded-md flex items-center w-full' >  
                        <div className='w-auto ml-3 ' > 
                            <p  style={{color: 'rgba(118, 185, 94, 0.97)'}}  className='font-Inter-Medium text-lg' >Tier 1</p>
                            <p style={{color: '#979797'}} className='font-Inter-Regular text-xs ' >User must have uploaded their NIN document gotten apporival of it</p>
                        </div> 
                        <div style={{backgroundColor: 'rgba(66, 255, 0, 0.1)'}} className='w-7 flex justify-center ml-auto items-center h-7 rounded-full' >
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 4L3.5 7L9.5 1" stroke="#76B95E" stroke-opacity="0.97" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
            </div>
        </div>
    )
}