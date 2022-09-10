import React from 'react'

export default function BannedMessage(props: any) {
    return (
        <div style={{width: '700px'}} className='flex flex-col justify-center items-center pt-8 pb-16 px-8 bg-white rounded-lg'  >
            
            <div className='w-full flex' > 
                <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center ml-auto items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00003 8L13 13M3 3L8.00003 8L3 3ZM8.00003 8L13 3L8.00003 8ZM8.00003 8L3 13L8.00003 8Z" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
            </div>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.8261 0.85537C26.1928 1.44865 19.712 4.02697 14.2098 8.26057C12.7064 9.41905 9.41101 12.7145 8.25253 14.2178C2.84605 21.2227 0.198609 29.7727 0.804849 38.2536C1.42549 47.093 4.87285 54.6775 11.0922 60.9106C14.14 63.9446 16.7874 65.8476 20.4832 67.6541C22.9931 68.8817 24.7304 69.5297 27.1021 70.1366C39.5272 73.3219 52.4346 69.6953 61.3151 60.539C68.4308 53.1886 72.0301 43.1222 71.1474 33.0415C70.4036 24.4778 66.6942 16.686 60.5303 10.7014C54.614 4.96441 47.1678 1.55882 38.8936 0.84169C37.0734 0.689774 34.7154 0.689766 32.8261 0.85537ZM39.0455 5.25385C43.4857 5.70889 47.9814 7.19857 51.8291 9.48745C53.1114 10.2456 55.7588 12.1486 55.9244 12.4387C56.0209 12.577 12.9268 55.9051 12.61 55.9742C12.5135 56.0016 12.003 55.4501 11.4652 54.761C4.45957 45.7006 3.13549 33.2064 8.07253 22.8089C9.64429 19.4854 11.4652 16.9344 14.1954 14.2042C16.9393 11.4603 19.4629 9.66745 22.8282 8.06761C25.7377 6.6888 29.5717 5.59945 32.7023 5.26825C34.3705 5.10265 37.3902 5.08825 39.0455 5.25385ZM60.2408 16.879C62.3094 19.4717 64.226 23.0429 65.288 26.2289C70.1696 40.9428 63.4952 56.8706 49.5812 63.7243C42.3136 67.3099 33.9572 67.8751 26.2208 65.2961C24.0968 64.5926 21.3529 63.2966 19.5191 62.1382C18.1266 61.2554 16.0026 59.6282 16.0026 59.4626C16.0026 59.256 59.1796 16.0099 59.3725 16.0099C59.4683 16.0107 59.8679 16.3966 60.2408 16.879Z" fill="#002343"/>
            </svg> 
            <p className='font-Inter-Bold text-lg mt-6' >User Banned</p>
            <p className='font-Inter-Regular text-base w-72 text-center mt-2' >You hae just Banned this user, click on the “Revoke” to Unban them.</p>
            <div className='w-auto mt-auto' >
            <button onClick={()=> props.close(0)} style={{border :'1px solid #002343'}} className='px-8 mr-2 py-2 rounded-md font-Inter-Bold mt-8'  >Revoke</button>
            <button onClick={()=> props.close(0)} style={{backgroundColor: '#002343'}} className='px-8 text-white ml-2 py-2 rounded-md font-Inter-Bold mt-8'  >Continue</button>
            </div>
        </div>
    )
}
