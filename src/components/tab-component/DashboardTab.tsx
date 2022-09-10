import React from 'react'
import General from '../dashboard-component/dashboard-tab/General'
import ManageInvestment from '../dashboard-component/dashboard-tab/ManageInvestment'
import ManageLoans from '../dashboard-component/dashboard-tab/ManageLoans'
import NavBar from '../dashboard-component/NavBar'

export default function DashboardTab() {

    const [tab, setTab] = React.useState(1)

    return (
        <div className='w-auto p-6 overscroll-y-auto' >
            <NavBar tab={setTab} check={tab} />
            <div>
                {tab === 1 ?
                    <General  />
                    :tab === 2 ?
                        <ManageInvestment  />
                        :tab === 3 ?
                            <ManageLoans  />
                :null}
            </div>
        </div>
    )
}
