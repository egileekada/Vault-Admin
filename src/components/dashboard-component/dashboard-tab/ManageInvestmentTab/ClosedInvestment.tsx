import React from 'react'

export default function ClosedInvestment() {

    const Investments = [
        {
            status: 'Closed',
            title: 'Rice Farm Inv...',
            profit: '10%',
            amount: '₦4000'
        },
        {
            status: 'Closed',
            title: 'Cocoa Business',
            profit: '15%',
            amount: '₦4000'
        },
        {
            status: 'Closed',
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
            status: 'Closed',
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
            status: 'Closed',
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
        {
            status: 'Closed',
            title: 'Rice Farm Inv...',
            profit: '10%',
            amount: '₦4000'
        },
        {
            status: 'Closed',
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
            status: 'Closed',
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
        <div className='w-full bg-white rounded-lg p-8'>
            <div className='w-full grid grid-cols-4 xl:grid-cols-5 gap-2' >
                {Investments.map((items:any)=> {
                    return(
                        <div className='w-full my-4 cursor-pointer' >
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
    )
}
