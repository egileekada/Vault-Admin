import React from 'react'
import ActiveInvestment from './ManageInvestmentTab/ActiveInvestment'
import ClosedInvestment from './ManageInvestmentTab/ClosedInvestment'
import Investmentinformation from './ManageInvestmentTab/Investmentinformation'
import AddInvestor from './ManageInvestmentTab/InvestmentModal/AddInvestor'
import DraftInformation from './ManageInvestmentTab/InvestmentModal/DraftInformation'
import InvestmentDraft from './ManageInvestmentTab/InvestmentModal/InvestmentDraft'
import VerificationUpdate from './ManageInvestmentTab/InvestmentModal/VerificationUpdate'
import Investments from './ManageInvestmentTab/Investments'

export default function ManageInvestment(props: any) {

    const [tab, setTab] = React.useState(1)
    const [showModal, setShowModal] = React.useState(0)

    return (
        <div className='w-full h-full mt-10 overflow-x-hidden ' >
            <div className='w-full bg-white rounded-lg flex items-center px-10 py-6 ' >
                <div>
                    <p className='font-Inter-Bold text-xl' >Manage Investment</p>
                    <p style={{color: '#979797'}} className='font-Inter-Medium text-base mt-2' >Manage all investment made and users investing</p>
                </div>
                <div className='w-full flex flex-1' />
                <div className='flex items-center' >
                    <p className='font-Inter-Medium text-base mr-4' >Draft</p> 
                    <button onClick={()=> setShowModal(1)} style={{backgroundColor:'#002343'}} className='flex font-Inter-Bold items-center rounded px-4 py-2 text-white'>
                        New Investment
                        <svg width="12" height="12" className='ml-2 ' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6V11.25M6 0.75V6V0.75ZM6 6H11.25H6ZM6 6H0.75H6Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                    </button>
                </div>
            </div>
            <div className='w-auto flex text-sm mt-2 ml-1 ' >
                <p onClick={()=>setTab(1)} style={tab === 1 ? {borderColor: '#002343', color: '#002343'} : { borderColor: '#E5E5E5', color: 'rgba(196, 196, 196, 0.5)'}} className='w-24 py-4 border-b-2 font-Inter-Medium cursor-pointer pl-3 ' >All</p>
                <p onClick={()=>setTab(2)} style={tab === 2 ? {borderColor: '#002343', color: '#002343'} : { borderColor: '#E5E5E5', color: 'rgba(196, 196, 196, 0.5)'}} className='w-24 py-4 border-b-2 font-Inter-Medium cursor-pointer pl-3 ' >Active</p>
                <p onClick={()=>setTab(3)} style={tab === 3 ? {borderColor: '#002343', color: '#002343'} : { borderColor: '#E5E5E5', color: 'rgba(196, 196, 196, 0.5)'}} className='w-24 py-4 border-b-2 font-Inter-Medium cursor-pointer pl-3 ' >Closed</p>
                <p onClick={()=>setTab(4)} style={tab === 4 ? {borderColor: '#002343', color: '#002343'} : { borderColor: '#E5E5E5', color: 'rgba(196, 196, 196, 0.5)'}} className='w-40 py-4 border-b-2 font-Inter-Medium cursor-pointer pl-3 ' >Due Investment</p> 
            </div>
            <div className='w-full overflow-x-hidden' >
                {tab === 1 ? 
                    <Investments />
                    :tab === 2 ? 
                        <ActiveInvestment />
                        :tab === 3 ? 
                            <ClosedInvestment />
                            :tab === 4 ? 
                                <Investmentinformation />
                :null}
            </div>

            {showModal === 1 ? 
                (
                    <>
                        <div className="h-full py-4 mx-auto overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none"> 
                            <AddInvestor close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}
                {showModal === 2 ? 
                    (
                        <>
                            <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                <VerificationUpdate close={setShowModal}  />
                            </div> 
                            <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                        </>
                    ) : null}
                    {showModal === 3 ? 
                        (
                            <>
                                <div className="h-auto flex justify-center overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                    <InvestmentDraft close={setShowModal}  />
                                </div> 
                                <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                            </>
                        ) : null}
                        {showModal === 4 ? 
                            (
                                <>
                                    <div className="h-auto flex justify-center items-center overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                        <DraftInformation close={setShowModal}  />
                                    </div> 
                                    <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                                </>
                            ) : null}
        </div>
    )
}
