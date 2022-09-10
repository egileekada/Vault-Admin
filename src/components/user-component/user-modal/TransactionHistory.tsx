import React from 'react'
import HistoryOption from '../HistoryOption'
import SelectedHistory from '../SelectedHistory'
import UserInformation from '../UserInformation'

export default function TransactionHistory(props: any) {

    const [tab, setTab] = React.useState(false)

    return (
        <div style={{width: '900px'}} className='rounded-xl h-auto pt-12 bg-white'  >
            <div className='w-full flex px-12' >
                <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13L5 8L10 3" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
                <div className='w-auto mx-auto' >
                    <p style={{color: '#002343'}} className='font-Inter-SemiBold text-center text-lg' >Transaction History</p>
                    <p className='font-Inter-Regular text-center text-sm' >Manage and learn more about this user’s transactions</p>
                </div> 
                <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00003 8L13 13M3 3L8.00003 8L3 3ZM8.00003 8L13 3L8.00003 8ZM8.00003 8L3 13L8.00003 8Z" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
            </div>
            <div className='w-full flex mt-8' >
                <div className='w-auto  pl-12' >
                    <UserInformation />
                </div>
                {!tab ? 
                    <HistoryOption close={setTab} />
                :
                    <SelectedHistory close={setTab} />    
                }
            </div>
        </div>
    )
}
