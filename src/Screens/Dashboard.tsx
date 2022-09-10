import React from 'react'
import AdminBar from '../components/dashboard-component/AdminBar';
import SideBar from '../components/dashboard-component/Sidebar'
import DashboardTab from '../components/tab-component/DashboardTab';
import NotificationTab from '../components/tab-component/NotificationTab';
import ReportTab from '../components/tab-component/ReportTab';
import SettingsTab from '../components/tab-component/SettingsTab';
import TransactionTab from '../components/tab-component/TransactionTab';
import UserTab from '../components/tab-component/UserTab';
import VerificationTab from '../components/tab-component/VerificationTab';

export default function Dashboard() {

    const [tab ,setTab] = React.useState('Dashboard');

    return (
        <div className='w-screen h-screen bg-transparent overflow-hidden' >
            <div className='flex-1 flex ' >
                <div className='w-auto h-screen ' >
                    <SideBar check={tab} tab={setTab} />
                </div>
                <div style={{backgroundColor: '#F4F4F4'}} className='w-full h-screen overflow-y-auto' >
                    {tab === 'Dashboard' ? 
                        <DashboardTab />
                        :tab === 'Users' ? 
                            <UserTab />
                            :tab === 'Transaction' ? 
                                <TransactionTab />
                                :tab === 'Report' ? 
                                    <ReportTab />
                                    :tab === 'Verification' ? 
                                        <VerificationTab />
                                        :tab === 'Settings' ? 
                                            <SettingsTab />
                                            :tab === 'Notification' ? 
                                                <NotificationTab />
                    :null}
                </div>
                <div className='w-auto' >
                    <AdminBar />
                </div>
            </div>
        </div>
    )
}
