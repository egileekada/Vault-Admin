import React from 'react';
import AccountDetail from '../settings-component/AccountDetail';
import AccountPassword from '../settings-component/AccountPassword';
import ManageAccount from '../settings-component/ManageAccount';

export default function SettingsTab() {

    const [tab, setTab] = React.useState(0)

    return ( 
        <div className='w-full h-auto p-8 overscroll-y-auto' >
            <div className='w-full flex items-center bg-white rounded-md py-6 px-4' >
                <div style={{backgroundColor: 'rgba(196, 196, 196, 0.3)'}} className=' h-10 p-2 rounded-full' >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_61_1685)">
                            <path d="M12 9.68582C14.2523 9.68582 16.0781 7.85998 16.0781 5.6077C16.0781 3.35541 14.2523 1.52957 12 1.52957C9.74771 1.52957 7.92188 3.35541 7.92188 5.6077C7.92188 7.85998 9.74771 9.68582 12 9.68582Z" fill="#002343"/>
                            <path d="M20.25 9.68576C21.6739 9.68576 22.8281 8.53149 22.8281 7.10764C22.8281 5.68378 21.6739 4.52951 20.25 4.52951C18.8261 4.52951 17.6719 5.68378 17.6719 7.10764C17.6719 8.53149 18.8261 9.68576 20.25 9.68576Z" fill="#002343"/>
                            <path d="M3.75 9.68576C5.17386 9.68576 6.32812 8.53149 6.32812 7.10764C6.32812 5.68378 5.17386 4.52951 3.75 4.52951C2.32614 4.52951 1.17188 5.68378 1.17188 7.10764C1.17188 8.53149 2.32614 9.68576 3.75 9.68576Z" fill="#002343"/>
                            <path d="M6.29016 12.001C5.27531 11.1695 4.35623 11.2796 3.18281 11.2796C1.42781 11.2796 0 12.6989 0 14.4432V19.5624C0 20.3199 0.618281 20.9358 1.37859 20.9358C4.66106 20.9358 4.26562 20.9952 4.26562 20.7943C4.26562 17.1668 3.83597 14.5066 6.29016 12.001Z" fill="#002343"/>
                            <path d="M13.1162 11.2983C11.0667 11.1273 9.28518 11.3002 7.74857 12.5686C5.17715 14.6283 5.67201 17.4015 5.67201 20.7942C5.67201 21.6918 6.40232 22.4358 7.31357 22.4358C17.208 22.4358 17.6018 22.7549 18.1886 21.4556C18.381 21.0162 18.3283 21.1558 18.3283 16.9523C18.3283 13.6136 15.4373 11.2983 13.1162 11.2983Z" fill="#002343"/>
                            <path d="M20.8173 11.2795C19.6375 11.2795 18.7234 11.1706 17.71 12.0009C20.1458 14.4879 19.7345 16.9666 19.7345 20.7942C19.7345 20.9964 19.4062 20.9358 22.5723 20.9358C23.3598 20.9358 24.0001 20.2978 24.0001 19.5136V14.4431C24.0001 12.6989 22.5723 11.2795 20.8173 11.2795Z" fill="#002343"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_61_1685">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg> 
                </div>
                <div className='w-full ml-4 ' >
                    <p className='font-Inter-Bold text-lg' >Settings</p>
                    <p style={{color: '#979797'}} className='font-Inter-Regular text-sm ' >Manage your profile</p>
                </div>
            </div>
            <div className='px-10 bg-white w-full h-full text-sm flex py-20 rounded-md mt-10 '>
                <div style={{width:'200px' }} className='' >
                    <div onClick={()=>setTab(0)} style={tab === 0 ? {  backgroundColor: '#F4F4F4', width:'200px'} :  {  backgroundColor: '#FFF', width:'200px'}} className='flex py-4 my-2 w-full px-4 cursor-pointer rounded-md items-center' >
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2266 12.1286C13.2266 14.3259 10.2133 14.5799 7.94726 14.5799L7.78511 14.5798C6.3414 14.5763 2.6666 14.4851 2.6666 12.1153C2.6666 9.96278 5.55883 9.67512 7.80759 9.66427L8.10942 9.66408C9.55303 9.66759 13.2266 9.75873 13.2266 12.1286ZM7.94726 10.6639C5.1066 10.6639 3.6666 11.1519 3.6666 12.1153C3.6666 13.0873 5.1066 13.5799 7.94726 13.5799C10.7873 13.5799 12.2266 13.0919 12.2266 12.1286C12.2266 11.1566 10.7873 10.6639 7.94726 10.6639ZM7.94726 1.33301C9.89926 1.33301 11.4866 2.92101 11.4866 4.87301C11.4866 6.82501 9.89926 8.41234 7.94726 8.41234H7.92593C5.97793 8.40634 4.39993 6.81767 4.40657 4.87101C4.40657 2.92101 5.9946 1.33301 7.94726 1.33301ZM7.94726 2.28501C6.51993 2.28501 5.35858 3.44567 5.35858 4.87301C5.35393 6.29567 6.5066 7.45567 7.92793 7.46101L7.94726 7.93701V7.46101C9.37393 7.46101 10.5346 6.29967 10.5346 4.87301C10.5346 3.44567 9.37393 2.28501 7.94726 2.28501Z" fill="#002343"/>
                        </svg> 
                        <p className='font-Inter-Medium ml-2' >Account Details</p>
                    </div>
                    <div onClick={()=>setTab(1)} style={tab === 1 ? {  backgroundColor: '#F4F4F4', width:'200px'} :  {  backgroundColor: '#FFF', width:'200px'}}  className='flex py-4 my-2 px-4 cursor-pointer rounded-md items-center' >
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.92448 9.60966L7.99976 9.60968L8.16815 9.61025C9.45521 9.61873 12.3965 9.74875 12.3965 11.7423C12.3965 13.7228 9.55774 13.852 8.18821 13.8604L7.68081 13.8604C6.39367 13.8519 3.45181 13.7221 3.45181 11.731C3.45181 9.74801 6.39367 9.61868 7.68081 9.61025L7.8492 9.60968C7.87533 9.60966 7.90044 9.60966 7.92448 9.60966ZM7.92448 10.6097C6.34048 10.6097 4.45181 10.8043 4.45181 11.731C4.45181 12.6367 6.22775 12.8484 7.7797 12.8604L7.92448 12.861C9.50848 12.861 11.3965 12.667 11.3965 11.7423C11.3965 10.8063 9.50848 10.6097 7.92448 10.6097ZM13.2269 9.33913C14.8422 9.58113 15.1815 10.3398 15.1815 10.9338C15.1815 11.2965 15.0389 11.9585 14.0855 12.3218C14.0269 12.3438 13.9669 12.3545 13.9075 12.3545C13.7062 12.3545 13.5162 12.2318 13.4402 12.0325C13.3415 11.7745 13.4715 11.4851 13.7295 11.3871C14.1815 11.2151 14.1815 11.0251 14.1815 10.9338C14.1815 10.6418 13.8102 10.4378 13.0782 10.3285C12.8055 10.2871 12.6169 10.0331 12.6575 9.75913C12.6982 9.48579 12.9515 9.30379 13.2269 9.33913ZM3.19075 9.75913C3.23141 10.0331 3.04275 10.2871 2.77008 10.3285C2.03808 10.4378 1.66675 10.6418 1.66675 10.9338C1.66675 11.0251 1.66675 11.2145 2.11941 11.3871C2.37741 11.4851 2.50741 11.7745 2.40875 12.0325C2.33275 12.2318 2.14275 12.3545 1.94141 12.3545C1.88208 12.3545 1.82208 12.3438 1.76341 12.3218C0.809415 11.9578 0.666748 11.2958 0.666748 10.9338C0.666748 10.3405 1.00608 9.58113 2.62208 9.33913C2.89741 9.30446 3.14941 9.48579 3.19075 9.75913ZM7.92448 2.66699C9.60448 2.66699 10.9705 4.03366 10.9705 5.71299C10.9705 7.39233 9.60448 8.75899 7.92448 8.75899H7.90648C7.09315 8.75633 6.33115 8.43766 5.76048 7.86166C5.18848 7.28633 4.87581 6.52233 4.87912 5.71099C4.87912 4.03366 6.24515 2.66699 7.92448 2.66699ZM7.92448 3.66699C6.79648 3.66699 5.87913 4.58499 5.87913 5.71299C5.87715 6.25966 6.08648 6.77099 6.46982 7.15699C6.85315 7.54299 7.36381 7.75699 7.90781 7.75899L7.92448 8.25899V7.75899C9.05248 7.75899 9.97048 6.84166 9.97048 5.71299C9.97048 4.58499 9.05248 3.66699 7.92448 3.66699ZM12.0505 3.31999C13.2225 3.51266 14.0738 4.51533 14.0738 5.70399C14.0711 6.90066 13.1771 7.92733 11.9938 8.09333C11.9705 8.09666 11.9471 8.09799 11.9245 8.09799C11.6791 8.09799 11.4651 7.91733 11.4298 7.66733C11.3918 7.39333 11.5818 7.14066 11.8558 7.10266C12.5491 7.00533 13.0725 6.40399 13.0738 5.70266C13.0738 5.00733 12.5751 4.41933 11.8878 4.30666C11.6158 4.26199 11.4311 4.00466 11.4758 3.73199C11.5211 3.45933 11.7765 3.27666 12.0505 3.31999ZM4.37315 3.73199C4.41781 4.00466 4.23315 4.26199 3.96115 4.30666C3.27381 4.41933 2.77515 5.00733 2.77515 5.70399C2.77648 6.40399 3.29981 7.00599 3.99248 7.10266C4.26648 7.14066 4.45648 7.39333 4.41848 7.66733C4.38315 7.91733 4.16915 8.09799 3.92381 8.09799C3.90115 8.09799 3.87781 8.09666 3.85448 8.09333C2.67115 7.92733 1.77781 6.90066 1.77515 5.70533C1.77515 4.51533 2.62648 3.51266 3.79848 3.31999C4.07915 3.27599 4.32781 3.46066 4.37315 3.73199Z" fill="#002343"/>
                        </svg> 
                        <p className='font-Inter-Medium ml-2' >Manage Admin</p>
                    </div>
                    <div onClick={()=>setTab(2)} style={tab === 2 ? {  backgroundColor: '#F4F4F4', width:'200px'} :  {  backgroundColor: '#FFF', width:'200px'}}  className='flex py-4 my-2 px-4 cursor-pointer rounded-md items-center' >
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.24992 1.33516C10.1966 1.33516 11.7819 2.9205 11.7819 4.86916L11.7819 5.92023C12.9653 6.3321 13.8167 7.45877 13.8167 8.78103V11.6404C13.8167 13.3104 12.4587 14.6684 10.7887 14.6684H5.69466C4.02466 14.6684 2.66666 13.3104 2.66666 11.6404V8.78103C2.66666 7.45902 3.51767 6.33253 4.70079 5.92046L4.70126 4.86916C4.70526 3.90916 5.07659 3.02316 5.74659 2.35916C6.41726 1.6945 7.30259 1.30983 8.24992 1.33516ZM10.7887 6.75303H5.69466C4.57599 6.75303 3.66666 7.66236 3.66666 8.78103V11.6404C3.66666 12.759 4.57599 13.6684 5.69466 13.6684H10.7887C11.9067 13.6684 12.8167 12.759 12.8167 11.6404V8.78103C12.8167 7.66236 11.9067 6.75303 10.7887 6.75303ZM8.24152 8.97023C8.51752 8.97023 8.74152 9.19423 8.74152 9.47023V10.9509C8.74152 11.2269 8.51752 11.4509 8.24152 11.4509C7.96552 11.4509 7.74152 11.2269 7.74152 10.9509V9.47023C7.74152 9.19423 7.96552 8.97023 8.24152 8.97023ZM8.24792 2.33516H8.23726C7.56192 2.33516 6.92926 2.59516 6.45126 3.06916C5.96992 3.54516 5.70392 4.1805 5.70126 4.85783L5.70066 5.75265H10.7813L10.7819 4.86916C10.7819 3.47183 9.64526 2.33516 8.24792 2.33516Z" fill="#002343"/>
                        </svg> 
                        <p className='font-Inter-Medium ml-2' >Password</p>
                    </div>
                </div> 
                <div className='w-full h-auto ml-8 ' >
                    {tab === 0 ? 
                        <AccountDetail />
                        :tab === 1 ? 
                            <ManageAccount />
                            :tab === 2 ? 
                                <AccountPassword />
                    :null}
                </div>
            </div>
        </div>
    );
}
