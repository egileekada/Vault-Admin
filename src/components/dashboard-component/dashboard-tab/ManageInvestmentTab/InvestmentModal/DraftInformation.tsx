import React from 'react'

export default function DraftInformation(props: any) {
    return (
        <div style={{width: '800px'}} className='rounded-xl h-auto py-8 bg-white'  >
            <div className='w-full flex px-6' >
                <div onClick={()=> props.close(3)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13L5 8L10 3" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
                <div className='w-auto mx-auto' >
                    <p style={{color: '#002343'}} className='font-Inter-SemiBold text-center text-lg' >Investment Brief</p>
                    <p className='font-Inter-Regular text-center text-sm' >Manage Investment and see it performance</p>
                </div> 
                <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00003 8L13 13M3 3L8.00003 8L3 3ZM8.00003 8L13 3L8.00003 8ZM8.00003 8L3 13L8.00003 8Z" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
            </div>
            <div className='w-full bg-yellow-300 h-40 my-12' >
                
            </div>
            <div className='w-full px-6 ' > 
                <p className='font-Inter-Bold mt-2 text-lg' >Rice Farm Investement</p>
                <p style={{color: '#03C8DB'}} className='font-Inter-Medium text-xs mt-1' >10%<span style={{color: '#828282'}} className='ml-1'>ROI/Annum</span></p>
                <p  style={{color: '#03C8DB'}} className='font-Inter-Medium text-xs mt-1' >₦4000<span style={{color: '#828282'}}>/unit</span></p>
                <p style={{color:'#979797'}} className='font-Inter-SemiBold my-4 text-sm ' >PERFORMANCE</p>
                <div className='w-full flex' >
                    <div className='w-full pr-8 py-10' >
                        <p style={{color:'#002343'}} className='font-Inter-Bold text-2xl'>230</p>
                        <p style={{color:'#979797'}} className='font-Inter-Regular text-xs' >Total units</p>
                        <div className='w-full flex mt-4' >
                            <div className='w-full' >
                                <p style={{color:'#002343'}} className='font-Inter-Bold text-2xl'>130</p>
                                <p style={{color:'#979797'}} className='font-Inter-Regular text-xs' >Units Sold</p>
                            </div>
                            <div className='w-full' >
                                <p style={{color:'#002343'}} className='font-Inter-Bold text-2xl'>100</p>
                                <p style={{color:'#979797'}} className='font-Inter-Regular text-xs' >Units rem.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{borderColor: '#EDEDED', borderLeftWidth: '1px'}} className='w-full px-12 py-10' >
                        <p style={{color:'#002343'}} className='font-Inter-Bold text-2xl'>230</p>
                        <p style={{color:'#979797'}} className='font-Inter-Regular text-xs' >Total Investors</p>
                        <div className='w-full flex mt-4 ' >
                            <div className='w-full pr-8' >
                                <p style={{color:'#002343'}} className='font-Inter-Bold text-2xl'>N13.2m</p>
                                <p style={{color:'#979797'}} className='font-Inter-Regular text-xs' >Total Amt Invested</p>
                            </div>
                            <div className='w-full' >
                                <p style={{color:'#002343'}} className='font-Inter-Bold text-2xl'>N999.2k</p>
                                <p style={{color:'#979797'}} className=' w-28 font-Inter-Regular text-xs' >Total ROI to be paid</p>
                            </div>
                        </div>
                    </div>
                    <div style={{borderColor: '#EDEDED', borderLeftWidth: '1px'}} className='w-auto pl-12 py-10' >
                        <p style={{color:'#002343'}} className='font-Inter-Bold text-2xl w-40'>23, Jul 21</p>
                        <p style={{color:'#979797'}} className='font-Inter-Regular text-xs' >Date Posted</p>
                        <div className='w-full flex mt-4' >
                            <div className='w-full' >
                                <p style={{color:'#002343'}} className='font-Inter-Bold text-2xl'>Active</p>
                                <p style={{color:'#979797'}} className='font-Inter-Regular text-xs' >Status</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
