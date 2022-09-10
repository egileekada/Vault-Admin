import React from 'react'

export default function Investmentinformation() {

    const Information = [
        {
            name: 'James Kanu',
            type: 'Rice Farm',
            Amount: 'N 12,590.090.00',
            Start: '12, Jun 2021',
            Due: 'Due Date',
            Status: 'Due'
        },
        {
            name: 'Muhammed Ali',
            type: 'Fashion  Business',
            Amount: 'N 12,590.090.00',
            Start: '12, Jun 2021',
            Due: 'Due Date',
            Status: 'Paid'
        },
        {
            name: 'Emeka Jessus',
            type: 'Cocoa Farm',
            Amount: 'N 12,590.090.00',
            Start: '12, Jun 2021',
            Due: 'Due Date',
            Status: 'Due'
        },
        {
            name: 'Emeka Jessus',
            type: 'Cocoa Farm',
            Amount: 'N 12,590.090.00',
            Start: '12, Jun 2021',
            Due: 'Due Date',
            Status: 'Pending'
        },
        {
            name: 'James Kanu',
            type: 'Rice Farm',
            Amount: 'N 12,590.090.00',
            Start: '12, Jun 2021',
            Due: 'Due Date',
            Status: 'Due'
        },
        {
            name: 'Muhammed Ali',
            type: 'Fashion  Business',
            Amount: 'N 12,590.090.00',
            Start: '12, Jun 2021',
            Due: 'Due Date',
            Status: 'Paid'
        },
        {
            name: 'Emeka Jessus',
            type: 'Cocoa Farm',
            Amount: 'N 12,590.090.00',
            Start: '12, Jun 2021',
            Due: 'Due Date',
            Status: 'Due'
        },
        {
            name: 'Emeka Jessus',
            type: 'Cocoa Farm',
            Amount: 'N 12,590.090.00',
            Start: '12, Jun 2021',
            Due: 'Due Date',
            Status: 'Pending'
        }
    ]

    return (
        <div className='w-full bg-white rounded-lg px-10 py-8' >  
            <table className='text-sm '>
                <thead>
                    <tr className=' font-Inter-Bold text-sm border-b border-gray-200' >
                        <th className='bg-white'>Name</th>
                        <th className='bg-white'>Investment type</th>
                        <th className='bg-white'>Amount Inv</th>
                        <th className='bg-white'>Start Date</th>
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
                                <td>{item.type}</td>
                                <td>{item.Amount}</td>
                                <td>{item.Start}</td>
                                <td>{item.Due}</td>
                                <td  >  
                                    <p style={item.Status === 'Due' ? {border: '1px solid #000', color: '#76B95EF7'}: item.Status === 'Pending' ? {border: '1px solid #000', color: '#DBB52F'}:{border: '1px solid #000', color: '#002343'} } className='font-Inter-Medium text-sm w-28 py-1 flex justify-center items-center rounded-full' >
                                    <div style={item.Status === 'Due' ? {backgroundColor: '#76B95EF7'}: item.Status === 'Pending' ? {backgroundColor: '#DBB52F'}:{backgroundColor: '#002343'} } className='w-2 h-2 rounded-full mr-2'  />{item.Status}</p> 
                                </td>
                            </tr> 
                        )
                    })}
                </tbody>
            </table>  
        </div>
    )
}
