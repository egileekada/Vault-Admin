import { Select } from '@chakra-ui/select'
import React from 'react'

export default function NavBar(props: any) { 

    return (
        <div className='w-full flex items-center font-Inter-Regular' > 
            <div className='w-auto flex text-sm ' >
                <p onClick={()=>props.tab(1)} style={props.check === 1 ? {borderColor: '#002343', color: '#002343'} : { borderColor: 'rgba(196, 196, 196, 0.5)', color: 'rgba(196, 196, 196, 0.5)'}} className='w-24 py-4 border-b-2 font-Inter-Medium cursor-pointer pl-3 ' >General</p>
                <p onClick={()=>props.tab(2)} style={props.check === 2 ? {borderColor: '#002343', color: '#002343'} : { borderColor: 'rgba(196, 196, 196, 0.5)', color: 'rgba(196, 196, 196, 0.5)'}} className='w-44 py-4 border-b-2 font-Inter-Medium cursor-pointer pl-3 ' >Manage Investment</p>
                <p onClick={()=>props.tab(3)} style={props.check === 3 ? {borderColor: '#002343', color: '#002343'} : { borderColor: 'rgba(196, 196, 196, 0.5)', color: 'rgba(196, 196, 196, 0.5)'}} className='w-36 py-4 border-b-2 font-Inter-Medium cursor-pointer pl-3 ' >Manage Loans</p>
                <p onClick={()=>props.tab(4)} style={props.check === 4 ? {borderColor: '#002343', color: '#002343'} : { borderColor: 'rgba(196, 196, 196, 0.5)', color: 'rgba(196, 196, 196, 0.5)'}} className='w-40 py-4 border-b-2 font-Inter-Medium cursor-pointer pl-3 ' >Manage Insurance</p>
                {/* <p  style={props.check === 5 ? {borderColor: '#002343', color: '#002343'} : { borderColor: 'rgba(196, 196, 196, 0.5)', color: 'rgba(196, 196, 196, 0.5)'}} className='w-10 py-4 border-b-2 font-Inter-Medium cursor-pointer pl-3 ' ></p> */}
            </div>
            <div className='w-full flex flex-1' />
            <div className='flex items-center' >
                <p style={{color: '#002343'}} className=' font-Inter-Medium mr-2 ' >SORT:</p>
                <div style={{border: '1px solid #002343', borderRadius: '4px'}} className='w-auto relative flex items-center pl-2 bg-white' > 
                    <svg width="20" height="20" className='-mr-3'  viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.21286 0.583344C9.45437 0.583344 9.65037 0.779344 9.65037 1.02084L9.65063 1.5154C10.5024 1.57379 11.2097 1.86554 11.7104 2.36724C12.257 2.91615 12.5446 3.7054 12.5417 4.65215V9.9739C12.5417 11.9176 11.3073 13.1251 9.32107 13.1251H4.38724C2.40099 13.1251 1.16666 11.9007 1.16666 9.92957V4.65099C1.16666 2.81768 2.26744 1.64089 4.06272 1.5156L4.06308 1.02084C4.06308 0.779344 4.25908 0.583344 4.50058 0.583344C4.74208 0.583344 4.93808 0.779344 4.93808 1.02084L4.93791 1.50443H8.77507L8.77537 1.02084C8.77537 0.779344 8.97137 0.583344 9.21286 0.583344ZM11.6667 5.77734H2.04166V9.92957C2.04166 11.4264 2.87466 12.2501 4.38724 12.2501H9.32107C10.8337 12.2501 11.6667 11.4416 11.6667 9.9739L11.6667 5.77734ZM9.45069 9.44785C9.69219 9.44785 9.88819 9.64385 9.88819 9.88535C9.88819 10.1269 9.69219 10.3229 9.45069 10.3229C9.20919 10.3229 9.01086 10.1269 9.01086 9.88535C9.01086 9.64385 9.20394 9.44785 9.44544 9.44785H9.45069ZM6.86215 9.44785C7.10365 9.44785 7.29965 9.64385 7.29965 9.88535C7.29965 10.1269 7.10365 10.3229 6.86215 10.3229C6.62065 10.3229 6.42232 10.1269 6.42232 9.88535C6.42232 9.64385 6.6154 9.44785 6.8569 9.44785H6.86215ZM4.26818 9.44785C4.50968 9.44785 4.70568 9.64385 4.70568 9.88535C4.70568 10.1269 4.50968 10.3229 4.26818 10.3229C4.02668 10.3229 3.82776 10.1269 3.82776 9.88535C3.82776 9.64385 4.02143 9.44785 4.26293 9.44785H4.26818ZM9.45069 7.18061C9.69219 7.18061 9.88819 7.37661 9.88819 7.61811C9.88819 7.85961 9.69219 8.05561 9.45069 8.05561C9.20919 8.05561 9.01086 7.85961 9.01086 7.61811C9.01086 7.37661 9.20394 7.18061 9.44544 7.18061H9.45069ZM6.86215 7.18061C7.10365 7.18061 7.29965 7.37661 7.29965 7.61811C7.29965 7.85961 7.10365 8.05561 6.86215 8.05561C6.62065 8.05561 6.42232 7.85961 6.42232 7.61811C6.42232 7.37661 6.6154 7.18061 6.8569 7.18061H6.86215ZM4.26818 7.18061C4.50968 7.18061 4.70568 7.37661 4.70568 7.61811C4.70568 7.85961 4.50968 8.05561 4.26818 8.05561C4.02668 8.05561 3.82776 7.85961 3.82776 7.61811C3.82776 7.37661 4.02143 7.18061 4.26293 7.18061H4.26818ZM8.77507 2.37943H4.93791L4.93808 2.94059C4.93808 3.18209 4.74208 3.37809 4.50058 3.37809C4.25908 3.37809 4.06308 3.18209 4.06308 2.94059L4.06277 2.39267C2.75597 2.50245 2.04166 3.29459 2.04166 4.65099V4.90234H11.6667L11.6667 4.65099C11.669 3.93057 11.4753 3.37057 11.0909 2.98557C10.7535 2.64712 10.2602 2.44499 9.65086 2.39295L9.65037 2.94059C9.65037 3.18209 9.45437 3.37809 9.21286 3.37809C8.97137 3.37809 8.77537 3.18209 8.77537 2.94059L8.77507 2.37943Z" fill="#002343"/>
                    </svg> 
                    <Select borderWidth='0px' focusBorderColor='transparent'  pl-3 fontSize='sm' borderColor='transparent' className=' bg-white' >
                        <option>This Month</option>
                    </Select> 
                </div>
            </div>
        </div>
    )
}
