import { Select, InputGroup, InputRightElement, Input } from '@chakra-ui/react'
import React from 'react'

export default function NotificationTab() {
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
                    <p className='font-Inter-Bold text-lg' >Notifications</p>
                    <p style={{color: '#979797'}} className='font-Inter-Regular text-sm ' >Manage notifications from users</p>
                </div>
                <div className=' w-full justify-end flex items-center' >
                    <p style={{color: '#002343'}} className=' font-Inter-Medium mr-2 ' >SORT:</p>
                    <div className='w-24 mr-3' > 
                        <Select borderWidth='1px' pl-3 fontSize='sm' borderColor='#002343' className=' bg-white' >
                            <option>Date</option>
                        </Select> 
                    </div>
                    <div className='w-40' >
                        <InputGroup>
                            <InputRightElement
                            pointerEvents="none"
                            children={
                                <svg width="20" height="20" className='-mr-3'  viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.21286 0.583344C9.45437 0.583344 9.65037 0.779344 9.65037 1.02084L9.65063 1.5154C10.5024 1.57379 11.2097 1.86554 11.7104 2.36724C12.257 2.91615 12.5446 3.7054 12.5417 4.65215V9.9739C12.5417 11.9176 11.3073 13.1251 9.32107 13.1251H4.38724C2.40099 13.1251 1.16666 11.9007 1.16666 9.92957V4.65099C1.16666 2.81768 2.26744 1.64089 4.06272 1.5156L4.06308 1.02084C4.06308 0.779344 4.25908 0.583344 4.50058 0.583344C4.74208 0.583344 4.93808 0.779344 4.93808 1.02084L4.93791 1.50443H8.77507L8.77537 1.02084C8.77537 0.779344 8.97137 0.583344 9.21286 0.583344ZM11.6667 5.77734H2.04166V9.92957C2.04166 11.4264 2.87466 12.2501 4.38724 12.2501H9.32107C10.8337 12.2501 11.6667 11.4416 11.6667 9.9739L11.6667 5.77734ZM9.45069 9.44785C9.69219 9.44785 9.88819 9.64385 9.88819 9.88535C9.88819 10.1269 9.69219 10.3229 9.45069 10.3229C9.20919 10.3229 9.01086 10.1269 9.01086 9.88535C9.01086 9.64385 9.20394 9.44785 9.44544 9.44785H9.45069ZM6.86215 9.44785C7.10365 9.44785 7.29965 9.64385 7.29965 9.88535C7.29965 10.1269 7.10365 10.3229 6.86215 10.3229C6.62065 10.3229 6.42232 10.1269 6.42232 9.88535C6.42232 9.64385 6.6154 9.44785 6.8569 9.44785H6.86215ZM4.26818 9.44785C4.50968 9.44785 4.70568 9.64385 4.70568 9.88535C4.70568 10.1269 4.50968 10.3229 4.26818 10.3229C4.02668 10.3229 3.82776 10.1269 3.82776 9.88535C3.82776 9.64385 4.02143 9.44785 4.26293 9.44785H4.26818ZM9.45069 7.18061C9.69219 7.18061 9.88819 7.37661 9.88819 7.61811C9.88819 7.85961 9.69219 8.05561 9.45069 8.05561C9.20919 8.05561 9.01086 7.85961 9.01086 7.61811C9.01086 7.37661 9.20394 7.18061 9.44544 7.18061H9.45069ZM6.86215 7.18061C7.10365 7.18061 7.29965 7.37661 7.29965 7.61811C7.29965 7.85961 7.10365 8.05561 6.86215 8.05561C6.62065 8.05561 6.42232 7.85961 6.42232 7.61811C6.42232 7.37661 6.6154 7.18061 6.8569 7.18061H6.86215ZM4.26818 7.18061C4.50968 7.18061 4.70568 7.37661 4.70568 7.61811C4.70568 7.85961 4.50968 8.05561 4.26818 8.05561C4.02668 8.05561 3.82776 7.85961 3.82776 7.61811C3.82776 7.37661 4.02143 7.18061 4.26293 7.18061H4.26818ZM8.77507 2.37943H4.93791L4.93808 2.94059C4.93808 3.18209 4.74208 3.37809 4.50058 3.37809C4.25908 3.37809 4.06308 3.18209 4.06308 2.94059L4.06277 2.39267C2.75597 2.50245 2.04166 3.29459 2.04166 4.65099V4.90234H11.6667L11.6667 4.65099C11.669 3.93057 11.4753 3.37057 11.0909 2.98557C10.7535 2.64712 10.2602 2.44499 9.65086 2.39295L9.65037 2.94059C9.65037 3.18209 9.45437 3.37809 9.21286 3.37809C8.97137 3.37809 8.77537 3.18209 8.77537 2.94059L8.77507 2.37943Z" fill="#002343"/>
                                </svg> 
                            }
                            />
                            <Input placeholder="This Month" />
                        </InputGroup>
                    </div>
                </div>
            </div>
            <div className='px-10 bg-white w-full py-10 rounded-md mt-10 '>
                <div className='w-full flex items-center my-4' >
                    <div className='w-full flex items-center  ' >
                        <div className='w-14 h-14 bg-yellow-300 rounded-full mr-2' >

                        </div>
                        <div className='w-auto mt-6' > 
                            <p className='font-Inter-SemiBold text-sm' >Mba Bright</p>
                            <p className='font-Inter-Medium text-sm mt-2'>Uploaded 2 files for <span style={{color:'#75BDFF'}} >verification</span></p>
                        </div>
                    </div>
                    <div className='w-full flex justify-end items-center pr-14'>
                        <svg className='mr-3' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 1.16699C10.2165 1.16699 12.8333 3.78383 12.8333 7.00033C12.8333 10.2168 10.2165 12.8337 7.00001 12.8337C3.78351 12.8337 1.16667 10.2168 1.16667 7.00033C1.16667 3.78383 3.78351 1.16699 7.00001 1.16699ZM7.00001 2.04199C4.26592 2.04199 2.04167 4.26624 2.04167 7.00033C2.04167 9.73441 4.26592 11.9587 7.00001 11.9587C9.73409 11.9587 11.9583 9.73441 11.9583 7.00033C11.9583 4.26624 9.73409 2.04199 7.00001 2.04199ZM6.80237 4.13931C7.04446 4.13931 7.23987 4.33531 7.23987 4.57681V7.15631L9.22612 8.34048C9.43321 8.46473 9.50146 8.73306 9.37779 8.94073C9.29554 9.07781 9.15029 9.15423 9.00154 9.15423C8.92512 9.15423 8.84812 9.13439 8.77754 9.09298L6.57837 7.78106C6.44654 7.70173 6.36487 7.55881 6.36487 7.40481V4.57681C6.36487 4.33531 6.56087 4.13931 6.80237 4.13931Z" fill="#002343"/>
                        </svg>
                        <p style={{color:'#979797'}} className='font-Inter-Medium text-sm' >2mins ago</p>
                    </div>
                </div>
                <div className='w-full flex items-center my-4' >
                    <div className='w-full flex items-center  ' >
                        <div className='w-14 h-14 bg-yellow-300 rounded-full mr-2' >

                        </div>
                        <div className='w-auto mt-6' > 
                            <p className='font-Inter-SemiBold text-sm' >Mba Bright</p>
                            <p className='font-Inter-Medium text-sm mt-2'>Sent a message, check <span style={{color:'#75BDFF'}} >verification </span> for more</p>
                        </div>
                    </div>
                    <div className='w-full flex justify-end items-center pr-14'>
                        <svg className='mr-3' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 1.16699C10.2165 1.16699 12.8333 3.78383 12.8333 7.00033C12.8333 10.2168 10.2165 12.8337 7.00001 12.8337C3.78351 12.8337 1.16667 10.2168 1.16667 7.00033C1.16667 3.78383 3.78351 1.16699 7.00001 1.16699ZM7.00001 2.04199C4.26592 2.04199 2.04167 4.26624 2.04167 7.00033C2.04167 9.73441 4.26592 11.9587 7.00001 11.9587C9.73409 11.9587 11.9583 9.73441 11.9583 7.00033C11.9583 4.26624 9.73409 2.04199 7.00001 2.04199ZM6.80237 4.13931C7.04446 4.13931 7.23987 4.33531 7.23987 4.57681V7.15631L9.22612 8.34048C9.43321 8.46473 9.50146 8.73306 9.37779 8.94073C9.29554 9.07781 9.15029 9.15423 9.00154 9.15423C8.92512 9.15423 8.84812 9.13439 8.77754 9.09298L6.57837 7.78106C6.44654 7.70173 6.36487 7.55881 6.36487 7.40481V4.57681C6.36487 4.33531 6.56087 4.13931 6.80237 4.13931Z" fill="#002343"/>
                        </svg>
                        <p style={{color:'#979797'}} className='font-Inter-Medium text-sm' >2mins ago</p>
                    </div>
                </div>
                <div className='w-full flex items-center my-4' >
                    <div className='w-full flex items-center  ' >
                        <div className='w-14 h-14 bg-yellow-300 rounded-full mr-2' >

                        </div>
                        <div className='w-auto mt-6' > 
                            <p className='font-Inter-SemiBold text-sm' >Mba Bright</p>
                            <p className='font-Inter-Medium text-sm mt-2'>Uploaded 2 files for <span style={{color:'#75BDFF'}} >verification</span></p>
                        </div>
                    </div>
                    <div className='w-full flex justify-end items-center pr-14'>
                        <svg className='mr-3' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 1.16699C10.2165 1.16699 12.8333 3.78383 12.8333 7.00033C12.8333 10.2168 10.2165 12.8337 7.00001 12.8337C3.78351 12.8337 1.16667 10.2168 1.16667 7.00033C1.16667 3.78383 3.78351 1.16699 7.00001 1.16699ZM7.00001 2.04199C4.26592 2.04199 2.04167 4.26624 2.04167 7.00033C2.04167 9.73441 4.26592 11.9587 7.00001 11.9587C9.73409 11.9587 11.9583 9.73441 11.9583 7.00033C11.9583 4.26624 9.73409 2.04199 7.00001 2.04199ZM6.80237 4.13931C7.04446 4.13931 7.23987 4.33531 7.23987 4.57681V7.15631L9.22612 8.34048C9.43321 8.46473 9.50146 8.73306 9.37779 8.94073C9.29554 9.07781 9.15029 9.15423 9.00154 9.15423C8.92512 9.15423 8.84812 9.13439 8.77754 9.09298L6.57837 7.78106C6.44654 7.70173 6.36487 7.55881 6.36487 7.40481V4.57681C6.36487 4.33531 6.56087 4.13931 6.80237 4.13931Z" fill="#002343"/>
                        </svg>
                        <p style={{color:'#979797'}} className='font-Inter-Medium text-sm' >2mins ago</p>
                    </div>
                </div>
                <div className='w-full flex items-center my-4' >
                    <div className='w-full flex items-center  ' >
                        <div className='w-14 h-14 bg-yellow-300 rounded-full mr-2' >

                        </div>
                        <div className='w-auto mt-6' > 
                            <p className='font-Inter-SemiBold text-sm' >Mba Bright</p>
                            <p className='font-Inter-Medium text-sm mt-2'>Uploaded 2 files for <span style={{color:'#75BDFF'}} >verification</span></p>
                        </div>
                    </div>
                    <div className='w-full flex justify-end items-center pr-14'>
                        <svg className='mr-3' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 1.16699C10.2165 1.16699 12.8333 3.78383 12.8333 7.00033C12.8333 10.2168 10.2165 12.8337 7.00001 12.8337C3.78351 12.8337 1.16667 10.2168 1.16667 7.00033C1.16667 3.78383 3.78351 1.16699 7.00001 1.16699ZM7.00001 2.04199C4.26592 2.04199 2.04167 4.26624 2.04167 7.00033C2.04167 9.73441 4.26592 11.9587 7.00001 11.9587C9.73409 11.9587 11.9583 9.73441 11.9583 7.00033C11.9583 4.26624 9.73409 2.04199 7.00001 2.04199ZM6.80237 4.13931C7.04446 4.13931 7.23987 4.33531 7.23987 4.57681V7.15631L9.22612 8.34048C9.43321 8.46473 9.50146 8.73306 9.37779 8.94073C9.29554 9.07781 9.15029 9.15423 9.00154 9.15423C8.92512 9.15423 8.84812 9.13439 8.77754 9.09298L6.57837 7.78106C6.44654 7.70173 6.36487 7.55881 6.36487 7.40481V4.57681C6.36487 4.33531 6.56087 4.13931 6.80237 4.13931Z" fill="#002343"/>
                        </svg>
                        <p style={{color:'#979797'}} className='font-Inter-Medium text-sm' >2mins ago</p>
                    </div>
                </div>
                <div className='w-full flex items-center my-4' >
                    <div className='w-full flex items-center  ' >
                        <div className='w-14 h-14 bg-yellow-300 rounded-full mr-2' >

                        </div>
                        <div className='w-auto mt-6' > 
                            <p className='font-Inter-SemiBold text-sm' >Mba Bright</p>
                            <p className='font-Inter-Medium text-sm mt-2'>Uploaded 2 files for <span style={{color:'#75BDFF'}} >verification</span></p>
                        </div>
                    </div>
                    <div className='w-full flex justify-end items-center pr-14'>
                        <svg className='mr-3' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 1.16699C10.2165 1.16699 12.8333 3.78383 12.8333 7.00033C12.8333 10.2168 10.2165 12.8337 7.00001 12.8337C3.78351 12.8337 1.16667 10.2168 1.16667 7.00033C1.16667 3.78383 3.78351 1.16699 7.00001 1.16699ZM7.00001 2.04199C4.26592 2.04199 2.04167 4.26624 2.04167 7.00033C2.04167 9.73441 4.26592 11.9587 7.00001 11.9587C9.73409 11.9587 11.9583 9.73441 11.9583 7.00033C11.9583 4.26624 9.73409 2.04199 7.00001 2.04199ZM6.80237 4.13931C7.04446 4.13931 7.23987 4.33531 7.23987 4.57681V7.15631L9.22612 8.34048C9.43321 8.46473 9.50146 8.73306 9.37779 8.94073C9.29554 9.07781 9.15029 9.15423 9.00154 9.15423C8.92512 9.15423 8.84812 9.13439 8.77754 9.09298L6.57837 7.78106C6.44654 7.70173 6.36487 7.55881 6.36487 7.40481V4.57681C6.36487 4.33531 6.56087 4.13931 6.80237 4.13931Z" fill="#002343"/>
                        </svg>
                        <p style={{color:'#979797'}} className='font-Inter-Medium text-sm' >2mins ago</p>
                    </div>
                </div>
                <div className='w-full flex items-center my-4' >
                    <div className='w-full flex items-center  ' >
                        <div className='w-14 h-14 bg-yellow-300 rounded-full mr-2' >

                        </div>
                        <div className='w-auto mt-6' > 
                            <p className='font-Inter-SemiBold text-sm' >Mba Bright</p>
                            <p className='font-Inter-Medium text-sm mt-2'>Uploaded 2 files for <span style={{color:'#75BDFF'}} >verification</span></p>
                        </div>
                    </div>
                    <div className='w-full flex justify-end items-center pr-14'>
                        <svg className='mr-3' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 1.16699C10.2165 1.16699 12.8333 3.78383 12.8333 7.00033C12.8333 10.2168 10.2165 12.8337 7.00001 12.8337C3.78351 12.8337 1.16667 10.2168 1.16667 7.00033C1.16667 3.78383 3.78351 1.16699 7.00001 1.16699ZM7.00001 2.04199C4.26592 2.04199 2.04167 4.26624 2.04167 7.00033C2.04167 9.73441 4.26592 11.9587 7.00001 11.9587C9.73409 11.9587 11.9583 9.73441 11.9583 7.00033C11.9583 4.26624 9.73409 2.04199 7.00001 2.04199ZM6.80237 4.13931C7.04446 4.13931 7.23987 4.33531 7.23987 4.57681V7.15631L9.22612 8.34048C9.43321 8.46473 9.50146 8.73306 9.37779 8.94073C9.29554 9.07781 9.15029 9.15423 9.00154 9.15423C8.92512 9.15423 8.84812 9.13439 8.77754 9.09298L6.57837 7.78106C6.44654 7.70173 6.36487 7.55881 6.36487 7.40481V4.57681C6.36487 4.33531 6.56087 4.13931 6.80237 4.13931Z" fill="#002343"/>
                        </svg>
                        <p style={{color:'#979797'}} className='font-Inter-Medium text-sm' >2mins ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
