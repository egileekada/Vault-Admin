import React from 'react'

export default function VerificationUpdate(props: any) {
    return (
        <div  style={{width: '600px'}} className='rounded-xl h-auto flex flex-col items-center justify-center px-6 py-8 bg-white' >
            <div className='w-full flex justify-end' >  
                <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00003 8L13 13M3 3L8.00003 8L3 3ZM8.00003 8L13 3L8.00003 8ZM8.00003 8L3 13L8.00003 8Z" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
            </div>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65.7583 17.0423C65.0239 17.3879 64.2103 17.7479 63.3463 18.1007C66.7231 23.2415 68.6815 29.3903 68.6815 35.9999C68.6815 54.0503 54.0511 68.6807 36.0007 68.6807C17.9503 68.6807 3.3199 54.0503 3.3199 35.9999C3.3199 17.9495 17.9503 3.31911 36.0007 3.31911C42.6463 3.31911 48.8311 5.30631 53.9935 8.71191C54.3391 7.84071 54.6919 7.01271 55.0159 6.27831C49.5295 2.76471 42.9991 0.71991 36.0007 0.71991C16.5103 0.71991 0.720703 16.5095 0.720703 35.9999C0.720703 55.4903 16.5103 71.2799 36.0007 71.2799C55.4911 71.2799 71.2807 55.4903 71.2807 35.9999C71.2807 29.0159 69.2575 22.5215 65.7583 17.0423Z" fill="#002343"/>
                <path d="M55.4055 20.2607L54.2751 21.3911C57.4791 25.3943 59.4015 30.4703 59.4015 35.9927C59.4015 48.9167 48.9255 59.3855 36.0087 59.3855C23.0919 59.3855 12.6087 48.9239 12.6087 35.9999C12.6087 23.0759 23.0775 12.6071 36.0015 12.6071C41.5239 12.6071 46.5927 14.5223 50.5959 17.7263L51.8487 16.4735C51.8703 16.1567 51.9063 15.8327 51.9567 15.5015C47.5503 12.0671 42.0135 10.0223 35.9943 10.0223C21.6375 10.0223 9.99512 21.6647 9.99512 36.0215C9.99512 50.3783 21.6447 62.0063 36.0015 62.0063C50.3583 62.0063 62.0007 50.3639 62.0007 36.0071C62.0007 30.0383 59.9847 24.5447 56.6079 20.1599C56.1975 20.2103 55.7871 20.2463 55.4055 20.2607Z" fill="#002343"/>
                <path d="M47.644 28.0223C49.2064 30.2903 50.1136 33.0407 50.1136 35.9999C50.1136 43.7903 43.792 50.1118 36.0016 50.1118C28.2112 50.1118 21.8896 43.7903 21.8896 35.9999C21.8896 28.2095 28.2112 21.8879 36.0016 21.8879C38.9536 21.8879 41.6896 22.7951 43.9648 24.3503L45.8296 22.4855C43.0648 20.4767 39.6736 19.2887 35.9944 19.2887C26.764 19.2887 19.2832 26.7695 19.2832 35.9999C19.2832 45.2303 26.7712 52.711 36.0016 52.711C45.232 52.711 52.7128 45.2303 52.7128 35.9999C52.7128 32.3207 51.5248 28.9151 49.5088 26.1575L47.644 28.0223Z" fill="#002343"/>
                <path d="M66.8527 14.3423L63.1735 10.6631L65.8015 8.03515L63.9655 6.19915L61.3375 8.82715L57.6583 5.14795C57.6583 5.14795 53.2735 13.5791 52.8127 17.3447L35.0791 35.0783L36.9151 36.9143L54.6559 19.1735C58.4215 18.7199 66.8527 14.3423 66.8527 14.3423Z" fill="#002343"/>
            </svg>
            <p style={{color: '#002343'}} className='font-Inter-Bold mt-4 mb-2' >Verification Updated</p>
            <p style={{color: '#8495A4'}} className='font-Inter-Regular w-96 text-sm text-center' >Are you sure you want proceed with the upload of this Investment to the market?</p>
             
            <div className='w-auto flex my-10' > 
                <button  style={{color:'#002343', border: '1px solid #002343'}} className='flex w-44 justify-center font-Inter-Bold items-center text-sm rounded py-2 text-white mr-3'>No, I don’t</button>
                <button  style={{backgroundColor:'#002343'}} className='flex w-44 justify-center font-Inter-Bold items-center text-sm rounded py-2 text-white'>Yes, Continue</button>
            </div>
        </div>
    )
}
