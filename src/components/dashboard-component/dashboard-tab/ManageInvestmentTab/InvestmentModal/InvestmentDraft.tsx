import React from 'react'

export default function InvestmentDraft(props: any) {

    const Investments = [
        {
            status: 'Active',
            title: 'Rice Farm Inv...',
            profit: '10%',
            amount: '₦4000'
        },
        {
            status: 'Active',
            title: 'Cocoa Business',
            profit: '15%',
            amount: '₦4000'
        },
        {
            status: 'Active',
            title: 'Cocoa Business',
            profit: '15%',
            amount: '₦4000'
        },
        {
            status: 'Closed',
            title: 'Passive income',
            profit: '19%',
            amount: '₦10000'
        },
        {
            status: 'Active',
            title: 'Real Estate Inv...',
            profit: '20%',
            amount: '₦5000'
        },
        {
            status: 'Closed',
            title: 'Real Estate Inv...',
            profit: '20%',
            amount: '₦5000'
        },
        {
            status: 'Active',
            title: 'Rice Farm Inv...',
            profit: '10%',
            amount: '₦4000'
        },
        {
            status: 'Active',
            title: 'Rice Farm Inv...',
            profit: '10%',
            amount: '₦4000'
        },
        {
            status: 'Active',
            title: 'Rice Farm Inv...',
            profit: '10%',
            amount: '₦4000'
        },
        {
            status: 'Active',
            title: 'Real Estate Inv...',
            profit: '20%',
            amount: '₦5000'
        },
        {
            status: 'Closed',
            title: 'Rice Farm Inv...',
            profit: '10%',
            amount: '₦4000'
        },
        {
            status: 'Active',
            title: 'Rice Farm Inv...',
            profit: '10%',
            amount: '₦4000'
        },
        {
            status: 'Closed',
            title: 'Rice Farm Inv...',
            profit: '10%',
            amount: '₦4000'
        },
    ]

    return ( 
        <div style={{width: '900px'}} className='dashboardslide overflow-y-auto py-8 ' > 
            <div  className='  rounded-xl h-auto px-4 py-8 bg-white '  >
                <div className='w-full flex' >
                    <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 13L5 8L10 3" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> 
                    <div className='w-auto mx-auto' >
                        <p style={{color: '#002343'}} className='font-Inter-SemiBold text-center text-lg' >Draft</p>
                        <p className='font-Inter-Regular text-center text-sm' >Manage Investment and Upload to the customers</p>
                    </div> 
                    <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00003 8L13 13M3 3L8.00003 8L3 3ZM8.00003 8L13 3L8.00003 8ZM8.00003 8L3 13L8.00003 8Z" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> 
                </div>
                <div className='w-full mt-4 grid grid-cols-4 gap-1' >
                    {Investments.map((items:any)=> {
                        return(
                            <div onClick={()=> props.close(4)} className='w-full px-4 my-4 cursor-pointer' >
                                <div className='w-full h-48 bg-yellow-400 rounded-xl relative' >
                                    <div className='rounded-tl-2xl py-1 flex justify-center items-center absolute right-0 top-10 bg-white w-16 rounded-bl-2xl' >
                                        <p style={items.status === 'Active' ? {color: '#27AE60'}:{color: '#EB5757'}} className='text-xs font-Inter-SemiBold' >{items.status}</p>
                                    </div>
                                </div>
                                <p className='font-Inter-Bold text-sm mt-2' >{items.title}</p>
                                <p style={{color: '#03C8DB'}} className='font-Inter-Medium text-xs mt-1' >{items.profit}<span style={{color: '#828282'}} className='ml-1'>ROI/Annum</span></p>
                                <p  style={{color: '#03C8DB'}} className='font-Inter-Medium text-xs mt-1' >{items.amount}<span style={{color: '#828282'}}>/unit</span></p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
