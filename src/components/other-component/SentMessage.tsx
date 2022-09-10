import React from 'react'

export default function SentMessage() {

    const Information = [
        {
            name: 'Ayodeji Ogundayo',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor purus rhoncus, risus facilisi et eget praesent. Quisque malesuada feugiat pellentesque odio in pellentesque ultrices neque. ', 
            Status: 'Pending'
        }, 
        {
            name: 'Ayodeji Ogundayo',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor purus rhoncus, risus facilisi et eget praesent. Quisque malesuada feugiat pellentesque odio in pellentesque ultrices neque. ', 
            Status: 'Pending'
        }, 
        {
            name: 'Ayodeji Ogundayo',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor purus rhoncus, risus facilisi et eget praesent. Quisque malesuada feugiat pellentesque odio in pellentesque ultrices neque. ', 
            Status: 'Pending'
        }, 
    ]

    return (
        <div className='w-full bg-white rounded-md py-6 px-10 mt-10'>
            <div className='w-full flex items-center pb-8 border-b-2 border-gray-200 ' > 
                <p className='font-Inter-Bold w-72 pl-4 text-sm' >Name</p> 
                <p className='font-Inter-Bold text-sm' >Sent Messages</p>   
            </div> 

            <div className='w-full mt-4' >
                {Information.map((item: any, index: any) => {
                    return( 
                        <div key={index} className='w-full flex items-center py-4 ' > 
                            <div className='w-72 flex items-center'  > 
                                <div className='w-10 h-10 bg-yellow-300 rounded-full mr-2' >

                                </div>
                                <p className='font-Inter-Medium text-sm' >{item.name}</p> 
                            </div> 
                            <p style={{color:'#979797'}} className='font-Inter-Regular w-full text-sm' >{item.body}</p>  

                            <div className='w-64 flex items-center ' > 
                                <p style={item.Status === 'Due' ? {border: '1px solid #000', color: '#76B95EF7'}: item.Status === 'Pending' ? {border: '1px solid #000', color: '#DBB52F'}:{border: '1px solid #000', color: '#002343'} } className='font-Inter-Medium text-sm w-28 py-1 flex justify-center items-center rounded-full' >
                                <div style={item.Status === 'Due' ? {backgroundColor: '#76B95EF7'}: item.Status === 'Pending' ? {backgroundColor: '#DBB52F'}:{backgroundColor: '#002343'} } className='w-2 h-2 rounded-full mr-2'  />{item.Status}</p> 
                            </div>
                        </div> 
                    )
                })}
                <p  style={{color:'#979797'}} className='font-Inter-Bold my-6 w-full text-sm' >YESTERDAY</p>
            
                {Information.map((item: any) => {
                    return( 
                        <div key={item} className='w-full flex items-center py-4 ' > 
                            <div className='w-72 flex items-center'  > 
                                <div className='w-10 h-10 bg-yellow-300 rounded-full mr-2' >

                                </div>
                                <p className='font-Inter-Medium text-sm' >{item.name}</p> 
                            </div> 
                            <p style={{color:'#979797'}} className='font-Inter-Regular w-full text-sm' >{item.body}</p>  

                            <div className='w-64 flex items-center ' > 
                                <p style={item.Status === 'Due' ? {border: '1px solid #000', color: '#76B95EF7'}: item.Status === 'Pending' ? {border: '1px solid #000', color: '#DBB52F'}:{border: '1px solid #000', color: '#002343'} } className='font-Inter-Medium text-sm w-28 py-1 flex justify-center items-center rounded-full' >
                                <div style={item.Status === 'Due' ? {backgroundColor: '#76B95EF7'}: item.Status === 'Pending' ? {backgroundColor: '#DBB52F'}:{backgroundColor: '#002343'} } className='w-2 h-2 rounded-full mr-2'  />{item.Status}</p> 
                            </div>
                        </div> 
                    )
                })}
            </div>
        </div> 
    )
}
