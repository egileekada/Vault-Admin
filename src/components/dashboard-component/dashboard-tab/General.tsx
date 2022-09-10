import React from 'react'
import Logo from '../../../assets/images/LogoDashboard.png' 
import DashboardIcons from '../../icon-components/DashboardIcons'

export default function General() {

    const Array = [
        {
            amount: '22.7k',
            title: 'Customers'
        }, 
        {
            amount: '220k',
            title: 'Savings'
        },
        {
            amount: '220k',
            title: 'Loan'
        },
        {
            amount: '220 | 5.2m',
            title: 'Insurance'
        },
        {
            amount: '220k', 
            title: 'Investment'
        },
        {
            amount: '520k', 
            title: 'ROI to be Paid out'
        },
    ]

    return (
        <div className='w-full h-full py-10' >
            <div className='w-full grid grid-cols-3 gap-4' > 
                {Array.map((item: any)=> {
                    return(
                        <div style={{backgroundColor: '#002343'}} className='w-full h-44 items-center rounded-lg relative flex' >
                            <div className='pl-8' >
                                <p className='text-white font-Inter-Bold text-2xl' >{item.amount}</p>
                                <p className='text-white font-Inter-Medium text-base'>{item.title}</p>
                            </div> 
                            <div className='p-4 bg-white rounded-full ml-auto mr-8 ' >
                                <DashboardIcons name={item.title} />
                            </div>
                            <img style={{width: '185px'}} src={Logo} alt='logo ' className='absolute left h-full' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
