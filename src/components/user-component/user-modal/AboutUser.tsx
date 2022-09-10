import React from 'react'
import UserInformation from '../UserInformation'

export default function AboutUser(props: any) {
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
            <div className='w-full flex  px-12 mt-8' >
                <div className='w-auto' >
                    <UserInformation />
                    <div className='w-full flex mt-12 ' >
                        <button onClick={()=> props.close(5)}  style={{border: '1px solid #002343'}} className='w-36 mr-2 items-center justify-center flex py-2 rounded-md ' >
                            <svg className='mr-3'  width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.28185 1.16666C7.94276 1.16666 11.4107 2.35724 11.8698 2.81632C12.2524 3.19899 12.2466 3.50816 12.2198 4.98982C12.2093 5.58366 12.1947 6.39274 12.1947 7.51274C12.1947 11.5272 7.60385 12.9634 7.40843 13.0223C7.36701 13.0352 7.32443 13.041 7.28185 13.041C7.23926 13.041 7.19668 13.0352 7.15526 13.0223C6.95985 12.9634 2.36902 11.5272 2.36902 7.51274C2.36902 6.39449 2.35443 5.58541 2.34393 4.99157C2.33914 4.72668 2.33502 4.49923 2.33366 4.30211L2.3335 4.07969C2.3385 3.34898 2.40708 3.10332 2.69452 2.81632C3.15243 2.35724 6.62035 1.16666 7.28185 1.16666ZM7.28185 2.04166C6.78718 2.04166 3.66635 3.14066 3.30643 3.44107C3.20027 3.54782 3.19618 3.73332 3.21893 4.97524C3.22943 5.57374 3.24402 6.38691 3.24402 7.51274C3.24402 10.5467 6.58185 11.8936 7.28126 12.1415C7.9801 11.8924 11.3197 10.5379 11.3197 7.51274C11.3197 6.38574 11.3343 5.57199 11.3453 4.97349C11.3675 3.73274 11.3634 3.54724 11.2508 3.43524C10.8979 3.14066 7.77651 2.04166 7.28185 2.04166ZM9.45272 5.44803C9.62364 5.61895 9.62364 5.89603 9.45272 6.06695L7.17889 8.34137C7.11356 8.40717 7.02918 8.44982 6.93861 8.46425L6.86972 8.4697C6.75364 8.4697 6.64222 8.42362 6.55997 8.34137L5.45631 7.23653C5.28597 7.06562 5.28597 6.78795 5.45689 6.61762C5.62722 6.4467 5.90489 6.4467 6.07581 6.61762L6.86972 7.4127L8.83439 5.44803C9.0053 5.27712 9.2818 5.27712 9.45272 5.44803Z" fill="#002343"/>
                            </svg> 
                            Ban User
                        </button>
                        <button style={{backgroundColor: '#002343'}} className='w-36 ml-2 text-white items-center  justify-center flex py-2 rounded-md ' >
                            <svg className='mr-3'  width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.71742 1.16667C11.6599 1.16667 13.1247 2.75159 13.1247 4.85334V8.85967C13.1247 9.93534 12.7443 10.9072 12.0531 11.5967C11.433 12.2144 10.6286 12.5417 9.72676 12.5417H3.97917C3.07909 12.5417 2.27526 12.215 1.65459 11.5967C0.963341 10.9072 0.583008 9.93534 0.583008 8.85967V4.85334C0.583008 2.75159 2.04776 1.16667 3.99026 1.16667H9.71742ZM9.71742 2.04167H3.99026C2.52317 2.04167 1.45801 3.22409 1.45801 4.85334V8.85967C1.45801 9.70142 1.74734 10.4533 2.27234 10.9766C2.72501 11.4287 3.31592 11.6667 3.98092 11.6667H9.71742C9.71859 11.6655 9.72326 11.6667 9.72676 11.6667C10.3923 11.6667 10.9827 11.4287 11.4353 10.9766C11.9609 10.4533 12.2497 9.70142 12.2497 8.85967V4.85334C12.2497 3.22409 11.1845 2.04167 9.71742 2.04167ZM10.6368 4.7418C10.789 4.92905 10.7604 5.20439 10.5732 5.35722L7.98084 7.46422C7.65301 7.72439 7.26101 7.85447 6.86959 7.85447C6.47934 7.85447 6.09026 7.72555 5.76476 7.46772L3.14851 5.35839C2.96009 5.20672 2.93092 4.9308 3.08201 4.74297C3.23426 4.55572 3.50959 4.52597 3.69742 4.67705L6.31134 6.78405C6.63976 7.04422 7.10234 7.04422 7.43309 6.78172L10.0208 4.67822C10.2086 4.5248 10.4839 4.55397 10.6368 4.7418Z" fill="white"/>
                            </svg>
                            
                            Write User
                        </button>
                    </div>
                </div>
                <div className='w-full pl-8 pt-2' >
                    <div onClick={()=> props.close(2)} className='border-2 border-gray-200 cursor-pointer py-2 px-3 rounded-md flex items-center w-full' > 
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
                    <p style={{color: '#979797'}} className='font-Inter-SemiBold text-sm mt-12 '>TRANSACTIONS</p>
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
                            <button onClick={()=> props.close(4)} style={{border: '1px solid #002343'}} className='px-4 items-center justify-center flex h-10 rounded-md ' >
                                Details
                            </button>
                        </div>
                    </div>
                    <div className='border-b-2 border-gray-200 py-4 w-full mt-4 flex '  > 
                        <div style={{backgroundColor: '#F0F2F4'}} className='w-12 h-12 flex justify-center items-center rounded-full' >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_96_911)">
                                    <path d="M9.5 0H1.83333C0.82 0 0 0.82 0 1.83333V12.1667C0 13.18 0.82 14 1.83333 14H7.26667C6.70667 13.1133 6.33333 12.0667 6.33333 10.8667V9.24C6.23333 9.3 6.12 9.33333 6 9.33333H2.66667C2.3 9.33333 2 9.03333 2 8.66667C2 8.3 2.3 8 2.66667 8H6C6.12667 8 6.24 8.03333 6.34 8.09333C6.36667 7.52667 6.63333 7.00667 7.05333 6.66667H2.66667C2.3 6.66667 2 6.36667 2 6C2 5.63333 2.3 5.33333 2.66667 5.33333H8.66667C8.94667 5.33333 9.18667 5.50667 9.28667 5.75333L11.1867 5.10667C11.2333 5.08667 11.28 5.07333 11.3333 5.06667V1.83333C11.3333 0.82 10.5133 0 9.5 0V0ZM5.33333 4H2.66667C2.3 4 2 3.7 2 3.33333C2 2.96667 2.3 2.66667 2.66667 2.66667H5.33333C5.7 2.66667 6 2.96667 6 3.33333C6 3.7 5.7 4 5.33333 4Z" fill="#002343"/>
                                    <path d="M15.548 7.55933L12.048 6.36866C11.9087 6.32133 11.7573 6.32133 11.618 6.36866L8.11802 7.55933C7.84802 7.65133 7.66602 7.90533 7.66602 8.19066V10.8693C7.66602 14.2473 11.412 15.8793 11.5713 15.9473C11.6553 15.9827 11.7447 16 11.8333 16C11.922 16 12.0113 15.9827 12.0947 15.9467C12.254 15.8787 16 14.2473 16 10.8693V8.19066C16 7.90466 15.8187 7.65133 15.548 7.55933ZM14.2 10.0667L12.2 12.7333C12.084 12.888 11.9073 12.9847 11.714 12.998C11.698 12.9993 11.682 13 11.6667 13C11.49 13 11.3207 12.9307 11.1953 12.8047L9.86202 11.4713C9.60135 11.2107 9.60135 10.7893 9.86202 10.5287C10.1227 10.268 10.544 10.268 10.8047 10.5287L11.5947 11.3187L13.1334 9.26666C13.354 8.97266 13.772 8.912 14.066 9.13333C14.3614 9.354 14.4213 9.772 14.2 10.0667Z" fill="#002343"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_96_911">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='w-auto pl-2 ' > 
                            <p style={{color: '#002343'}} className='font-Inter-SemiBold text-base'>Insurance plan One</p>
                            <p style={{color: '#979797'}} className='font-Inter-Medium text-sm mt-1 '>INSURANCE</p>
                        </div>
                        <div className='w-auto ml-auto flex justify-end' > 
                            <button style={{border: '1px solid #002343'}} className='px-4 items-center justify-center flex h-10 rounded-md ' >
                                Details
                            </button>
                        </div>
                    </div>
                    <div className='border-b-2 border-gray-200 py-4 w-full mt-4 flex '  > 
                        <div style={{backgroundColor: '#F0F2F4'}} className='w-12 h-12 flex justify-center items-center rounded-full' >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_96_921)">
                                    <path d="M8.47136 7.5549V6.55809C8.63577 6.58065 8.86974 6.60815 9.1248 6.62384C9.25996 6.63215 9.38724 6.63631 9.50693 6.63631C10.015 6.63627 10.3858 6.56134 10.6342 6.40934C10.9411 6.22149 11.2282 5.81378 11.512 5.16284C11.7016 4.72774 11.8219 4.33831 11.8269 4.32193L11.9834 3.81237L11.4584 3.7199C11.4416 3.71693 11.0401 3.64684 10.5663 3.61778C9.85749 3.57434 9.36377 3.64446 9.05693 3.83234C8.85468 3.95609 8.66108 4.17603 8.47133 4.49743V2.95278C8.63574 2.97534 8.86974 3.00284 9.12477 3.01853C9.25993 3.02684 9.38721 3.031 9.5069 3.031C10.015 3.03096 10.3858 2.95603 10.6341 2.80403C10.9411 2.61618 11.2282 2.20846 11.5119 1.55753C11.7016 1.12243 11.8219 0.732996 11.8269 0.716621L11.9834 0.207059L11.4584 0.11459C11.4415 0.111622 11.04 0.0415279 10.5663 0.0124655C9.85746 -0.0310033 9.36374 0.0391842 9.05689 0.226997C8.74999 0.414809 8.46286 0.822528 8.17911 1.47346C8.10908 1.63415 8.04855 1.7885 7.99974 1.92025C7.95093 1.78853 7.89039 1.63415 7.82036 1.47346C7.53668 0.822465 7.24955 0.414778 6.94264 0.226934C6.63574 0.0390905 6.14202 -0.0310345 5.43327 0.0123717C4.95952 0.0414342 4.55802 0.111528 4.54114 0.114497L4.01614 0.206965L4.17268 0.716528C4.17771 0.732871 4.29796 1.12234 4.48761 1.55743C4.77136 2.20837 5.05849 2.61612 5.36536 2.80393C5.61377 2.95596 5.98449 3.0309 6.49264 3.0309C6.61233 3.03087 6.73968 3.02671 6.87477 3.01843C7.13049 3.00275 7.36502 2.97512 7.52949 2.95253V4.49949C7.33933 4.17693 7.1453 3.95628 6.94261 3.83224C6.63571 3.64443 6.14199 3.57431 5.43324 3.61768C4.95949 3.64674 4.55799 3.71684 4.54111 3.71981L4.01611 3.81228L4.17264 4.32184C4.17768 4.33818 4.29793 4.72765 4.48758 5.16274C4.77133 5.81368 5.05846 6.22143 5.36533 6.40924C5.61377 6.56127 5.98446 6.63621 6.49261 6.63621C6.6123 6.63618 6.73965 6.63202 6.87474 6.62374C7.13046 6.60806 7.36499 6.58043 7.52946 6.55784V7.55484H4.01677L4.98599 16H11.015L11.9841 7.55493L8.47136 7.5549ZM7.93108 11.3222H8.06977C8.67596 11.3222 9.16908 11.8154 9.16908 12.4216C9.16908 12.892 8.87199 13.2942 8.45561 13.4508V14.0859H7.54518V13.4508C7.12883 13.2941 6.83171 12.892 6.83171 12.4216H7.74214C7.74214 12.5257 7.82686 12.6105 7.93105 12.6105H8.06974C8.17386 12.6105 8.25865 12.5257 8.25865 12.4216C8.25865 12.3174 8.17393 12.2326 8.06974 12.2326H7.93105C7.32489 12.2326 6.83174 11.7395 6.83174 11.1333C6.83174 10.6629 7.12886 10.2607 7.54521 10.1041V9.46902H8.45564V10.1041C8.87199 10.2607 9.16911 10.6629 9.16911 11.1333H8.25868C8.25868 11.0292 8.17396 10.9444 8.06977 10.9444H7.93108C7.82696 10.9444 7.74218 11.0291 7.74218 11.1333C7.74218 11.2375 7.82693 11.3222 7.93108 11.3222Z" fill="#002343"/>
                                    <rect x="6" y="9" width="4" height="5.5" fill="#002343"/>
                                    <g clip-path="url(#clip1_96_921)">
                                        <path d="M9.94909 11.0379H9.64037V9.62122H8.82409V11.0379H8.08734L7.11575 9.62122H6.39606V11.0379H6.08545V11.4167H6.39606V11.8561H6.08545V12.2349H6.39606V13.5H7.21613V12.2349H8.05704L8.93204 13.5H9.64037V12.2349H9.94909V11.8561H9.64037V11.4167H9.94909V11.0379ZM7.49265 11.4167L7.79567 11.8561H7.21613V11.4167H7.49265ZM8.82409 11.4167V11.8561H8.64984L8.34871 11.4167H8.82409Z" fill="white"/>
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_96_921">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    <clipPath id="clip1_96_921">
                                        <rect width="4" height="4" fill="white" transform="translate(6 9.5)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='w-auto pl-2 ' > 
                            <p style={{color: '#002343'}} className='font-Inter-SemiBold text-base'>Investment One</p>
                            <p style={{color: '#979797'}} className='font-Inter-Medium text-sm mt-1 '>INVESTMENT</p>
                        </div>
                        <div className='w-auto ml-auto flex justify-end' > 
                            <button style={{border: '1px solid #002343'}} className='px-4 items-center justify-center flex h-10 rounded-md ' >
                                Details
                            </button>
                        </div>
                    </div>
                    <div className='border-b-2 border-gray-200 py-4 w-full mt-4 flex '  > 
                        <div style={{backgroundColor: '#F0F2F4'}} className='w-12 h-12 flex justify-center items-center rounded-full' >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_96_896)">
                                    <path d="M6.17205 8.08823C6.07262 8.15507 6.02377 8.2912 6.06952 8.37386C6.15059 8.5202 6.40818 8.59645 6.69909 8.71767C6.82034 8.55404 6.95105 8.39792 7.09037 8.24989C6.96099 8.26345 6.82668 8.22386 6.72355 8.1287C6.61699 8.03051 6.3138 7.99292 6.17205 8.08823Z" fill="#002343"/>
                                    <path d="M7.60147 2.90085H5.16397C4.90228 2.90085 4.69678 3.11569 4.69678 3.368C4.69678 3.6256 4.90637 3.83519 5.16397 3.83519H7.60147C7.85909 3.83519 8.06865 3.6256 8.06865 3.368C8.06865 3.11472 7.86265 2.90085 7.60147 2.90085Z" fill="#002343"/>
                                    <path d="M5.71325 11.2657C5.53331 11.2105 5.36756 11.134 5.23059 11.0444C5.01397 10.9027 4.95325 10.6122 5.09497 10.3955C5.23669 10.1789 5.52719 10.1181 5.74388 10.2599C5.78878 10.2893 5.83953 10.315 5.89344 10.3369C5.97512 10.0574 6.08 9.78766 6.20566 9.52988C5.88188 9.40201 5.47903 9.24279 5.24934 8.8281C4.92031 8.23404 5.216 7.43976 5.89316 7.1856V7.11648C5.89316 6.8576 6.10303 6.64773 6.36191 6.64773C6.62078 6.64773 6.83066 6.8576 6.83066 7.11648V7.15423C7.18909 7.25485 7.56075 7.48913 7.50453 7.85566C8.29472 7.18248 9.28972 6.74285 10.3819 6.64532C9.76637 5.81291 9.10722 5.0751 8.55984 4.39376C8.30866 4.62857 7.97172 4.77273 7.60156 4.77273H5.16406C4.79278 4.77273 4.45494 4.62766 4.20353 4.39157C2.97678 5.91785 0.9375 8.02288 0.9375 9.99907C0.9375 11.6969 1.71031 12.9341 3.1725 13.5766C4.19781 14.0272 5.33656 14.1041 6.24406 14.1103C5.79522 13.2276 5.61575 12.2434 5.71325 11.2657Z" fill="#002343"/>
                                    <path d="M4.66868 2.05381C4.82283 1.99553 4.98971 1.96334 5.16402 1.96334H7.60152C7.77586 1.96334 7.9428 1.99553 8.09696 2.05384C8.41786 1.67034 8.57886 1.77744 8.72152 1.52969C9.11389 0.850031 8.62411 0 7.83839 0H4.92714C4.14274 0 3.65105 0.848969 4.04402 1.52969C4.1853 1.77506 4.34786 1.67059 4.66868 2.05381Z" fill="#002343"/>
                                    <path d="M10.8438 7.5625C8.51753 7.5625 6.625 9.45503 6.625 11.7812C6.625 14.1075 8.51753 16 10.8438 16C13.17 16 15.0625 14.1075 15.0625 11.7812C15.0625 9.45503 13.17 7.5625 10.8438 7.5625ZM9.48622 10.4246C9.66866 10.2422 9.96447 10.2422 10.1469 10.4246C10.3293 10.6071 10.3293 10.9029 10.1469 11.0853C9.96447 11.2678 9.66866 11.2678 9.48622 11.0853C9.30378 10.9029 9.30378 10.6071 9.48622 10.4246ZM12.1379 13.0763C11.9554 13.2587 11.6596 13.2587 11.4772 13.0763C11.2947 12.8938 11.2947 12.598 11.4772 12.4156C11.6596 12.2332 11.9554 12.2332 12.1379 12.4156C12.3203 12.598 12.3203 12.8938 12.1379 13.0763ZM12.16 11.1118L10.1712 13.1006C9.98816 13.2836 9.69141 13.2837 9.50831 13.1006C9.32525 12.9176 9.32525 12.6208 9.50831 12.4377L11.4971 10.4489C11.6801 10.2659 11.9769 10.2659 12.16 10.4489C12.343 10.632 12.343 10.9288 12.16 11.1118Z" fill="#002343"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_96_896">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg> 
                        </div>
                        <div className='w-auto pl-2 ' > 
                            <p style={{color: '#002343'}} className='font-Inter-SemiBold text-base'>Loan One</p>
                            <p style={{color: '#979797'}} className='font-Inter-Medium text-sm mt-1 '>LOAN</p>
                        </div>
                        <div className='w-auto ml-auto flex justify-end' > 
                            <button style={{border: '1px solid #002343'}} className='px-4 items-center justify-center flex h-10 rounded-md ' >
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}