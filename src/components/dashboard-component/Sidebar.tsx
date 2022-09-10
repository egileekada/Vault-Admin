import React from 'react';
import {InputGroup, Input, InputLeftElement} from '@chakra-ui/react'
import Logo from '../../assets/images/Logo.png'
import SideBarIcons from '../icon-components/SideBarIcons';

export default function SideBar(props: any) {
 
    const [tab ,setTab] = React.useState('Dashboard')

    const ClickHandler =(item: any)=> { 
        setTab(item); 
        props.tab(item)
    }

    const LogOut =()=> {
        // Router.push('/login'); 
        localStorage.setItem('token', '')
    }

    const TabArray = [
        {
            title: 'HOME',
            tabs: [ 'Dashboard', 'Users' ]
        },
        {
            title: 'MANAGE CUSTOMERS',
            tabs: [ 'Transaction', 'Report', 'Verification' ]
        },
        {
            title: 'OTHERS',
            tabs: [ 'Settings', 'Notification', 'Support' ]
        }   
    ] 


    React.useEffect(() => {
        setTab(props.check)
    },[props.check])

    return (
        <div className=' h-screen flex flex-col overflow-y-auto  pt-12' style={{backgroundColor:'#002343', width:'230px'}}>
            <div className='w-full flex items-center px-4' >
                <img src={Logo} alt='logo' className='w-8 h-8'  />
                <p className='text-base text-white font-Inter-Bold ml-2 ' >Vaultafrica</p>
            </div> 
            <div style={{borderColor: '#294662'}}  className='mx-4 mt-12 border-b-2 pb-10' >
                <InputGroup>
                    <InputLeftElement
                    pointerEvents="none"
                    children={
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.82586 1.33331C11.4059 1.33331 14.3179 4.24531 14.3179 7.82531C14.3179 9.51434 13.6697 11.0548 12.609 12.211L14.6961 14.2938C14.8915 14.4891 14.8921 14.8051 14.6968 15.0004C14.5995 15.0991 14.4708 15.1478 14.3428 15.1478C14.2155 15.1478 14.0875 15.0991 13.9895 15.0018L11.8771 12.8953C10.7659 13.7852 9.35698 14.318 7.82586 14.318C4.24586 14.318 1.33319 11.4053 1.33319 7.82531C1.33319 4.24531 4.24586 1.33331 7.82586 1.33331ZM7.82586 2.33331C4.79719 2.33331 2.33319 4.79665 2.33319 7.82531C2.33319 10.854 4.79719 13.318 7.82586 13.318C10.8539 13.318 13.3179 10.854 13.3179 7.82531C13.3179 4.79665 10.8539 2.33331 7.82586 2.33331Z" fill="white"/>
                        </svg>
                    }
                    />
                    <Input borderRadius='4px' focusBorderColor='#294662' border='#294662' textColor='#ffffff' backgroundColor='#294662' fontSize='sm' placeholder="Search" />
                </InputGroup>
            </div>
            <div className='w-full pl-8 h-auto mt-8' style={{backgroundColor:'#002343'}} >
                <div className='w-full h-full flex flex-col ' >
                    {TabArray.map((item: any, index: any)=> {
                            return( 
                                <div key={index}  className='w-auto h-auto py-3' >
                                        <p className='text-base text-white font-Inter-SemiBold' >{item.title}</p>
                                        {item.tabs.map((item: any, subindex: any)=> {
                                            return( 
                                                    <div key={subindex} onClick={()=> ClickHandler(item)}  className=' w-full h-5 my-7 items-center flex flex-row text-sm cursor-pointer ' >
                                                        <SideBarIcons  name={item} tab={tab} />
                                                        <p className={ tab === item ? 'w-full flex flex-1 text-white font-Inter-SemiBold ml-4 ':'w-full flex flex-1 font-Inter-Regular text-white opacity-70 ml-4'} >{item}</p>
                                                        {/* <div style={{width:'1.7px'}} className={subindex === tab && index === section && tabName === item.name ? 'h-full bg-white mr-1':'bg-transparent'} /> */}
                                                    </div> 
                                                ) 
                                            })
                                        } 
                                </div>
                            )
                        })
                    } 
                </div>
            </div>
            <div style={{backgroundColor:'#002343'}} className='w-full h-full flex items-end ' >  
            {/* <button>Log out</button> */}
                <div onClick={()=> LogOut()} className=' w-full h-auto py-6 px-4 items-center flex flex-row text-xs cursor-pointer'>
                    <div className='w-12 h-12 rounded-full bg-yellow-200' >

                    </div>
                    <div className='w-auto ml-2 ' > 
                        <p className='w-full text-base text-white font-Inter-SemiBold ' >Mba Bright</p>
                        <p className='w-full text-white opacity-70 ' >Super Admin</p>
                    </div> 
                    <div className='w-full flex flex-1' />
                    <svg width="18" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="16" y="18" width="16" height="18" rx="2" transform="rotate(-180 16 18)" fill="white" fill-opacity="0.08"/>
                        <path d="M5.5 6.5L8 4L10.5 6.5" stroke="#CCD3D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.5 11.5L8 14L10.5 11.5" stroke="#CCD3D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </div> 
            </div>
        </div>
    );
}
