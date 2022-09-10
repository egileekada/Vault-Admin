import { useQuery } from '@tanstack/react-query'
import React from 'react'
// import { useQuery } from 'react-query'

export default function Investments() {

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
 
    const { isLoading, data } = useQuery(['investment'], () =>
        fetch(`https://api.vaultafrica.co/investment`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  

    console.log(data)

    return (
        <div className='w-full bg-white rounded-lg p-8'>
            <div className='w-full grid grid-cols-4 xl:grid-cols-5 gap-2' >
                {isLoading &&(
                    <div className="animate-spin mx-auto mt-10 rounded-full h-12 w-12 border-t-2 border-b-2 border-vault"></div>
                )}
                {/* {!isLoading && (
                    <>
                        {data?.map((items:any)=> {
                            return(
                                <div className='w-full my-4 cursor-pointer' >
                                    <div className='w-full h-48 bg-yellow-400 rounded-xl relative' >
                                        {items?.avatar && (
                                            <img src={items?.avatar} className='w-full h-full object-cover rounded-xl ' alt={items.id} />
                                        )}
                                        <div className='rounded-tl-2xl z-50 py-1 flex justify-center items-center absolute right-0 top-10 bg-white w-16 rounded-bl-2xl' >
                                            <p style={items?.status === 'Active' ? {color: '#27AE60'}:{color: '#EB5757'}} className='text-xs font-Inter-SemiBold' >{items.isActive ? 'Active' : 'Closed'}</p>
                                        </div>
                                    </div>
                                    <p className='font-Inter-Bold text-sm mt-2' >{items?.title}</p>
                                    <p style={{color: '#03C8DB'}} className='font-Inter-Medium text-xs mt-1' >{items.roi+'%'}<span style={{color: '#828282'}} className='ml-1'>ROI/Annum</span></p>
                                    <p  style={{color: '#03C8DB'}} className='font-Inter-Medium text-xs mt-1' >{items.units}<span style={{color: '#828282'}}>/unit</span></p>
                                </div>
                            )
                        })}
                    </>
                )} */}
            </div>
        </div>
    )
}
