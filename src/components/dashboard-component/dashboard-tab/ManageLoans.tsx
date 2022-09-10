import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function ManageLoans() {

    const Information = [
        {
            name: 'James Kanu',
            credit: '50%',
            Amount: 'N 50,000.00', 
            Status: 'Paid'
        },
        {
            name: 'James Kanu',
            credit: '50%',
            Amount: 'N 50,000.00', 
            Status: 'None'
        },
        {
            name: 'James Kanu',
            credit: '50%',
            Amount: 'N 50,000.00', 
            Status: 'Paid'
        },
        {
            name: 'James Kanu',
            credit: '50%',
            Amount: 'N 100,000.00',
            SubAmount: 'N 12,000.00',
            BorrowDate: '12, Jun 2021',
            SubBorrow: 'N 12,000.00',
            Due: '12, Jun 2021',
            SubDue: 'N 2,000.00',
            Status: 'Owing'
        }, 
        {
            name: 'James Kanu',
            credit: '50%',
            Amount: 'N 100,000.00',
            SubAmount: 'N 12,000.00',
            BorrowDate: '12, Jun 2021',
            SubBorrow: 'N 12,000.00',
            Due: '12, Jun 2021',
            SubDue: 'N 2,000.00',
            Status: 'Owing'
        }, 
        {
            name: 'James Kanu',
            credit: '50%',
            Amount: 'N 100,000.00',
            SubAmount: 'N 12,000.00',
            BorrowDate: '12, Jun 2021',
            SubBorrow: 'N 12,000.00',
            Due: '12, Jun 2021',
            SubDue: 'N 2,000.00',
            Status: 'Due'
        }, 
        {
            name: 'James Kanu',
            credit: '50%',
            Amount: 'N 100,000.00',
            SubAmount: 'N 12,000.00',
            BorrowDate: '12, Jun 2021',
            SubBorrow: 'N 12,000.00',
            Due: '12, Jun 2021',
            SubDue: 'N 2,000.00',
            Status: 'Paid'
        }, 
        {
            name: 'James Kanu',
            credit: '50%',
            Amount: 'N 100,000.00',
            SubAmount: 'N 12,000.00',
            BorrowDate: '12, Jun 2021',
            SubBorrow: 'N 12,000.00',
            Due: '12, Jun 2021',
            SubDue: 'N 2,000.00',
            Status: 'Paid'
        }, 
        {
            name: 'James Kanu',
            credit: '50%',
            Amount: 'N 50,000.00', 
            Status: 'None'
        },
        {
            name: 'James Kanu',
            credit: '50%',
            Amount: 'N 50,000.00', 
            Status: 'None'
        },
    ]


    const { isLoading, data } = useQuery(['loan'], () =>
        fetch(`https://api.vaultafrica.co/loan`, {
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

    const Empty = '---'

  return (
        <div className='w-full px-10 bg-white h-full mt-10 pb-10 rounded-lg ' >
            <div className='w-full rounded-lg flex items-center pt-6 ' >
                <div>
                    <p className='font-Inter-Bold text-xl' >Manage Loans</p>
                    <p style={{color: '#979797'}} className='font-Inter-Medium text-base mt-2' >Manage all loans made and users borrowing</p>
                </div>  
            </div> 

            <div className=' bg-white w-full py-10 rounded-md   '>
                <table className='text-sm '>
                    <thead>
                        <tr className=' font-Inter-Bold text-sm border-b border-gray-200' >
                            <th className='bg-white'>Name</th>
                            <th className='bg-white'>Credit Score</th>
                            <th className='bg-white'>Amt Eligible</th>
                            <th className='bg-white'>Date Borrowed</th>
                            <th className='bg-white'>Due Date</th>  
                            <th className='bg-white'>Status</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {Information.map((item, index) => {
                            return( 
                                <tr key={index} className='font-Inter-Medium text-xs' > 
                                    <td className='flex items-center  ' >
                                        <div className='w-10 h-10 bg-yellow-300 rounded-full mr-2' >

                                        </div>
                                        {item.name}
                                    </td>
                                    <td>{item.credit}</td>
                                    <td >  
                                        <div className='w-full flex flex-col ' > 
                                            <p className='font-Inter-Medium text-sm' >{item.Amount}</p>
                                            <p style={{color: '#979797'}} className='font-Inter-Medium mt-1 text-xs' >{item.SubAmount}</p>
                                        </div>
                                    </td>
                                    <td >  
                                        <div className='w-full flex flex-col ' > 
                                            <p className='font-Inter-Medium text-sm' >{item.BorrowDate !== undefined ? item.BorrowDate : Empty}</p>
                                            <p style={{color: '#979797'}} className='font-Inter-Medium mt-1 text-xs' >{item.SubBorrow}</p>
                                        </div>
                                    </td>
                                    <td >
                                        <div className='w-full flex flex-col ' > 
                                            <p className='font-Inter-Medium text-sm' >{item.Due !== undefined ? item.Due : Empty}</p>
                                            <p style={{color: '#979797'}} className='font-Inter-Medium mt-1 text-xs' >{item.SubDue}</p>
                                        </div>
                                    </td> 
                                    <td  >  
                                        <p style={item.Status === 'Due' ? {border: '1px solid #000', color: '#FF001F'}: item.Status === 'Owing' ? {border: '1px solid #000', color: '#DBB52F'}: item.Status === 'Paid' ? {border: '1px solid #000', color: '#76B95EF7'} : {border: '1px solid #000', color: '#787878'} } className='font-Inter-Medium text-sm w-28 py-1 flex justify-center items-center rounded-full' >
                                        <div style={item.Status === 'Due' ? {backgroundColor: '#FF001F'}: item.Status === 'Owing' ? {backgroundColor: '#DBB52F'}: item.Status === 'Paid' ? {backgroundColor: '#76B95EF7'}:{backgroundColor: '#787878'} } className='w-2 h-2 rounded-full mr-2'  />{item.Status}</p> 
                                    </td>
                                </tr> 
                            )
                        })}
                    </tbody>
                </table>
            </div> 
            {/* <div className='w-full grid grid-cols-6 border-t-2 border-b-2 py-10 ' > 
                <p className='font-Inter-Bold w-full pl-4 text-sm' >Name</p> 
                <p className='font-Inter-Bold w-full text-sm' >Credit Score</p>
                <p className='font-Inter-Bold w-full text-sm' >Amt Eligible</p>
                <p className='font-Inter-Bold w-full text-sm' >Date Borrowed</p>
                <p className='font-Inter-Bold w-full text-sm' >Due Date</p>
                <div className='w-full  ' > 
                    <p className='font-Inter-Bold text-sm' >Status</p>
                </div>
            </div> 
            <div className='w-full my-4' >
                {Information.map((item: any) => {
                    return( 
                        <div className='w-full grid grid-cols-6 flex items-center mt-12' >  
                            <div className='w-72 flex items-center'  > 
                                <div className='w-10 h-10 bg-yellow-300 rounded-full mr-2' >

                                </div>
                                <p className='font-Inter-Medium text-sm' >{item.name}</p> 
                            </div> 
                            <div className='w-full flex ' > 
                                <p className='font-Inter-Medium text-sm' >{item.credit}</p> 
                            </div>
                            <div className='w-full flex flex-col ' > 
                                <p className='font-Inter-Medium text-sm' >{item.Amount}</p>
                                <p style={{color: '#979797'}} className='font-Inter-Medium mt-1 text-xs' >{item.SubAmount}</p>
                            </div>
                            <div className='w-full flex flex-col ' > 
                                <p className='font-Inter-Medium text-sm' >{item.BorrowDate !== undefined ? item.BorrowDate : Empty}</p>
                                <p style={{color: '#979797'}} className='font-Inter-Medium mt-1 text-xs' >{item.SubBorrow}</p>
                            </div>
                            <div className='w-full flex flex-col ' > 
                                <p className='font-Inter-Medium text-sm' >{item.Due !== undefined ? item.Due : Empty}</p>
                                <p style={{color: '#979797'}} className='font-Inter-Medium mt-1 text-xs' >{item.SubDue}</p>
                            </div>
                            <div className='w-full flex items-center ' > 
                                <p style={item.Status === 'Due' ? {border: '1px solid #000', color: '#FF001F'}: item.Status === 'Owing' ? {border: '1px solid #000', color: '#DBB52F'}: item.Status === 'Paid' ? {border: '1px solid #000', color: '#76B95EF7'} : {border: '1px solid #000', color: '#787878'} } className='font-Inter-Medium text-sm w-28 py-1 flex justify-center items-center rounded-full' >
                                <div style={item.Status === 'Due' ? {backgroundColor: '#FF001F'}: item.Status === 'Owing' ? {backgroundColor: '#DBB52F'}: item.Status === 'Paid' ? {backgroundColor: '#76B95EF7'}:{backgroundColor: '#787878'} } className='w-2 h-2 rounded-full mr-2'  />{item.Status}</p> 
                            </div>
                        </div> 
                    )
                })}
            </div> */}
        </div>
    );
}
