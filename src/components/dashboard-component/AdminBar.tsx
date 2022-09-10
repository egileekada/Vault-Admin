import React from 'react'

export default function AdminBar() {

    const [expand, setExpand] = React.useState(false)

    const TabArray = [
        {
            title: 'ACTIVE ADMINS',
            tabs: ['Emenike', 'Emenike', 'Emenike', 'Emenike', 'Jackson']
        },
        {
            title: 'OTHERS',
            tabs: ['Obasanjo', 'Emenike' ]
        },
    ] 

    return (
        <div style={{ width:'230px'}} className='bg-transparent'> 
            <div className=' h-screen bg-white overflow-y-auto z-20   pt-14 px-6 absolute top-0 right-0'  style={expand ? { width:'300px'}: { width:'230px'}}>
                <div onClick={()=> setExpand(prev => !prev)} style={{backgroundColor: 'rgba(196, 196, 196, 0.31)'}} className='w-8 h-8 flex cursor-pointer justify-center items-center rounded-full' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.33331 8H14.6666" stroke="#002343" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.33331 11.3333H10.6666" stroke="#002343" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.33331 4.66669H14.6666" stroke="#002343" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className='w-full h-full flex flex-col ' >
                    {TabArray.map((item: any, index: any)=> {
                            return( 
                                <div key={index}  className='w-auto h-auto' >
                                        <p style={{color: '#787878'}} className='text-sm text-white font-Inter-SemiBold py-6' >{item.title}</p>
                                        {item.tabs.map((item: any, subindex: any)=> {
                                            return( 
                                                    <div key={subindex}  className=' w-auto py-2 items-center flex flex-row cursor-pointer ' > 
                                                        <div className='w-12 h-12  relative bg-yellow-200 rounded-full' >
                                                            <div style={{backgroundColor:'rgba(118, 185, 94, 0.97)'}} className='w-2 h-2 rounded-full absolute right-1 top-1' />
                                                        </div>
                                                        <div className='w-auto ml-4' > 
                                                            <p style={{color: '#002343'}} className= 'font-Inter-Medium text-xs'  >{item}</p>
                                                            {expand ? 
                                                                <p style={{color: '#787878'}} className= 'font-Inter-Medium text-xs'  >Customer care</p>  
                                                            :null}
                                                        </div>
                                                    </div> 
                                                ) 
                                            })
                                        } 
                                </div>
                            )
                        })
                    } 
                    <div className=' w-full py-2 items-center flex flex-row text-xs cursor-pointer ' > 
                        <div style={{backgroundColor: 'rgba(196, 196, 196, 0.31)'}} className='w-12 h-12 flex justify-center items-center rounded-full' >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2V8M8 8H14M8 8H2M8 8V14" stroke="#262F56" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> 
                        </div>
                        <p style={{color: '#535353'}} className= 'font-Inter-SemiBold ml-4 text-base'  >Add Admin</p> 
                    </div> 
                </div>
            </div>
        </div>
    )
}
