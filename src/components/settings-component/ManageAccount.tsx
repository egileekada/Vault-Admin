import React from 'react'
import ManageAccountModal from '../other-modal/ManageAccountModal'

export default function ManageAccount() {

    const Information = [
        {
            name: 'Mazi Okonkwo',
            email: 'emeka@hotmail.com', 
            date: '12, Jul 2021',  
            position: 'Cus. care'
        }, 
        {
            name: 'Mazi Okonkwo',
            email: 'emeka@hotmail.com', 
            date: '12, Jul 2021',  
            position: 'Cus. care'
        }, 
        {
            name: 'Mazi Okonkwo',
            email: 'emeka@hotmail.com', 
            date: '12, Jul 2021',  
            position: 'Cus. care'
        }, 
        {
            name: 'Mazi Okonkwo',
            email: 'emeka@hotmail.com', 
            date: '12, Jul 2021',  
            position: 'Cus. care'
        }, 
        {
            name: 'Mazi Okonkwo',
            email: 'emeka@hotmail.com', 
            date: '12, Jul 2021',  
            position: 'Cus. care'
        }, 
        {
            name: 'Mazi Okonkwo',
            email: 'emeka@hotmail.com', 
            date: '12, Jul 2021',  
            position: 'Cus. care'
        }, 
        {
            name: 'Mazi Okonkwo',
            email: 'emeka@hotmail.com', 
            date: '12, Jul 2021',  
            position: 'Cus. care'
        }, 
    ] 

    const [showModal, setShowModal] = React.useState(0)

    return (
        <div className='  bg-white w-auto'>
            <div className='w-full justify-end flex' >
                <button onClick={()=> setShowModal(1)} style={{backgroundColor: '#002343'}} className='w-40 mb-14 flex items-center justify-center h-10 font-Inter-SemiBold text-sm rounded-md text-white' >
                    <svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.58471 9.63701L6.66411 9.63703L6.84009 9.63751C8.33472 9.6455 11.836 9.78136 11.836 12.091C11.836 14.2324 8.96044 14.5186 6.72364 14.5293L6.32933 14.5292C4.8347 14.5212 1.33337 14.3854 1.33337 12.0763C1.33337 9.88967 4.33004 9.63701 6.58471 9.63701ZM6.58471 10.637C3.76404 10.637 2.33337 11.1217 2.33337 12.0763C2.33337 13.0403 3.76404 13.5297 6.58471 13.5297C9.40537 13.5297 10.836 13.045 10.836 12.091C10.836 11.1257 9.40537 10.637 6.58471 10.637ZM12.8028 5.27881C13.0788 5.27881 13.3028 5.50281 13.3028 5.77881L13.3027 6.61501L14.1667 6.61554C14.4427 6.61554 14.6667 6.83954 14.6667 7.11554C14.6667 7.39154 14.4427 7.61554 14.1667 7.61554L13.3027 7.61501L13.3028 8.45281C13.3028 8.72881 13.0788 8.95281 12.8028 8.95281C12.5268 8.95281 12.3028 8.72881 12.3028 8.45281L12.3027 7.61501L11.44 7.61554C11.164 7.61554 10.94 7.39154 10.94 7.11554C10.94 6.83954 11.164 6.61554 11.44 6.61554L12.3027 6.61501L12.3028 5.77881C12.3028 5.50281 12.5268 5.27881 12.8028 5.27881ZM6.58471 1.33301C8.54004 1.33301 10.13 2.92367 10.13 4.87834C10.13 6.83301 8.54004 8.42367 6.58471 8.42367H6.56404C5.61804 8.42034 4.73137 8.04901 4.06671 7.37967C3.40137 6.70967 3.03671 5.82034 3.04002 4.87634C3.04002 2.92367 4.63004 1.33301 6.58471 1.33301ZM6.58471 2.33301C5.18204 2.33301 4.04002 3.47501 4.04002 4.87834C4.03737 5.55767 4.29871 6.19434 4.77537 6.67501C5.25271 7.15501 5.88871 7.42101 6.56604 7.42367L6.58471 7.91767V7.42367C7.98804 7.42367 9.13004 6.28167 9.13004 4.87834C9.13004 3.47501 7.98804 2.33301 6.58471 2.33301Z" fill="white"/>
                    </svg>
                    Add Admin
                </button>
            </div>
            <table className='text-sm '>
                <thead>
                    <tr className=' font-Inter-Bold text-sm border-b border-gray-200' >
                        <th className='bg-white'>Name</th>
                        <th className='bg-white'>Email Addr.</th>
                        <th className='bg-white'>Date Added</th>
                        <th className='bg-white'>Position</th>  
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
                                <td>{item.email}</td> 
                                <td>{item.date}</td> 
                                <td  >  
                                    <p style={{border:'1px solid #002343 '}} className='font-Inter-Medium text-sm w-32 py-1 flex justify-start pl-4 items-center rounded-full' >
                                    <div style={item.position === 'Cus. care' ? {backgroundColor: '#76B95EF7'}: item.position === 'Loan' ? {backgroundColor: '#FF001F'}:  item.position === 'Investment' ? {backgroundColor: '#4072EE'}:{backgroundColor: '#002343'} } className='w-2 h-2 rounded-full mr-3'  />{item.position}</p> 
                                </td>
                            </tr> 
                        )
                    })}
                </tbody>
            </table>
            {showModal === 1 ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <ManageAccountModal close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}
        </div>  
    )
}
