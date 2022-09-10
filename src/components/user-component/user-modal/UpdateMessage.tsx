import React from 'react'

export default function UpdateMessage(props: any) {
    return (
        <div style={{width: '700px'}} className='flex flex-col justify-center items-center pt-8 pb-16 px-8 bg-white rounded-lg'  >
            
            <div className='w-full flex' > 
                <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center ml-auto items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00003 8L13 13M3 3L8.00003 8L3 3ZM8.00003 8L13 3L8.00003 8ZM8.00003 8L3 13L8.00003 8Z" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
            </div>
            <svg className='mt-12' width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.5823 0.820801C25.7258 1.51056 19.1039 4.22856 13.8199 8.49168C12.0263 9.94032 9.12905 12.9204 7.80497 14.6722C4.10777 19.5977 1.81745 25.2396 0.892972 31.6411C0.631612 33.5167 0.672652 38.8418 0.976492 40.8146C1.94201 47.0916 4.13585 52.3757 7.86041 57.3559C9.12977 59.0666 12.8824 62.8193 14.5931 64.0886C20.6354 68.6002 27.3407 70.9862 34.7906 71.2483C42.8611 71.5522 50.6968 69.0689 57.3194 64.1023C59.0027 62.8466 62.0239 59.9083 63.3897 58.2113C68.4945 51.8652 71.2672 44.0158 71.2809 35.9172C71.2809 27.9986 68.4117 19.9274 63.3487 13.7059C61.9965 12.037 58.9617 9.09792 57.3201 7.87032C52.4637 4.22856 47.0147 1.95192 40.9307 1.01376C39.2049 0.751678 34.3485 0.627121 32.5823 0.820801ZM38.9284 3.15216C45.2882 3.73176 51.6623 6.29784 56.6563 10.2982C62.6301 15.0991 66.755 21.8318 68.3275 29.3501C69.1418 33.2957 69.1418 38.6762 68.3275 42.6218C66.8378 49.7542 62.8778 56.4451 57.4288 61.0394C52.5314 65.1643 46.7649 67.7304 40.1704 68.6959C38.5425 68.9443 33.383 68.9443 31.7551 68.6959C24.167 67.5785 17.8763 64.4882 12.6895 59.315C5.00489 51.6859 1.58345 40.6634 3.54257 29.9851C5.14313 21.3905 10.1097 13.7333 17.3385 8.78112C22.043 5.53896 27.3681 3.67632 33.4795 3.09744C34.5969 3.00024 37.5215 3.0276 38.9284 3.15216Z" fill="#002343"/>
                <path d="M33.2037 12.3818C31.8515 12.5057 31.0379 12.9197 30.0169 14.0234C28.996 15.0998 28.1824 16.7415 27.3544 19.3623C27.0232 20.4242 26.458 22.1904 26.1124 23.2942C25.7675 24.3979 25.2016 25.8739 24.8567 26.5911C24.5118 27.3082 24.2771 27.9295 24.3325 27.9979C24.622 28.26 28.0715 29.9297 29.0644 30.2746C29.9334 30.5777 30.2373 30.7577 30.3892 31.0471C30.4857 31.2401 30.9825 31.7779 31.4793 32.22C32.4729 33.1027 32.5139 33.2547 32.169 34.4275C31.9206 35.2692 31.0926 36.2484 30.2099 36.7452C29.8513 36.9382 28.8441 37.3803 27.9613 37.7251C24.2778 39.1601 23.2432 39.6706 21.5461 40.8845C20.4424 41.6571 18.9937 43.2159 18.1384 44.5126C17.5177 45.4925 16.4413 47.5755 16.5378 47.6309C16.5652 47.6446 16.9518 47.8239 17.4069 48.0168C17.8619 48.2098 20.1249 49.2444 22.4425 50.3071L26.6502 52.2526L26.733 51.1769C26.8295 49.9349 27.1189 48.9694 27.795 47.6453C28.4293 46.4033 30.1545 44.6379 31.4094 43.9618C34.7063 42.1409 38.6937 42.444 41.7011 44.7207C43.6739 46.2247 45.1917 49.0803 45.2053 51.3288C45.2053 51.7011 45.2608 51.9912 45.3292 51.9912C45.3976 51.9912 47.0809 51.2597 49.0818 50.3633C51.082 49.4525 53.3313 48.4596 54.0757 48.1284C55.276 47.6043 55.4142 47.5078 55.3314 47.2457C54.4487 44.3484 52.6825 41.8651 50.3785 40.3063C49.3439 39.6029 47.3711 38.6093 46.1017 38.1543C41.7285 36.5674 40.4181 35.6573 39.8795 33.8083C39.6585 33.0768 39.6585 33.0631 39.9897 32.8565C40.1553 32.7327 40.7212 32.2222 41.2173 31.698C41.9761 30.9118 42.2937 30.6907 43.1901 30.3322C44.5278 29.808 45.1074 29.5186 46.6115 28.6351L47.7981 27.9454L47.3567 27.0346C46.7915 25.9035 46.3775 24.6615 45.4249 21.1299C44.3766 17.3081 43.8935 16.1907 42.4038 14.2178C41.8242 13.4453 40.8724 12.7829 40.0307 12.5489C39.3561 12.3538 34.6242 12.2436 33.2037 12.3818Z" fill="#002343"/>
                <path d="M33.8516 44.7466C30.8024 45.5882 28.623 48.3336 28.4156 51.5758C28.1953 55.1628 30.554 58.4734 33.9618 59.3705C34.4168 59.4806 35.3139 59.5771 35.9619 59.5771C38.114 59.5771 39.8247 58.8874 41.2734 57.4387C43.2051 55.507 43.9496 52.776 43.2735 50.1408C42.6248 47.6021 40.8594 45.7258 38.3207 44.8567C37.5891 44.6083 37.1204 44.5536 35.9619 44.5536C35.1627 44.5673 34.2102 44.6501 33.8516 44.7466ZM40.4879 49.1335L41.0675 49.7131L38.0183 52.6658L34.9698 55.6178L33.1899 53.838L31.4101 52.0718L31.9897 51.4786L32.5693 50.8853L33.7832 52.0855L34.9971 53.2994L37.3839 50.9126C38.6807 49.6159 39.7844 48.5395 39.8262 48.5395C39.8665 48.541 40.1703 48.803 40.4879 49.1335Z" fill="#002343"/>
            </svg>  
            <p className='font-Inter-Bold text-lg mt-6' >Verification Updated</p>
            <p className='font-Inter-Regular text-base w-72 text-center mt-2' >You have successfully reviewed and updated the level of this user.</p>
            <button onClick={()=> props.close(0)} style={{border :'1px solid #002343'}} className='px-8 py-2 rounded-md font-Inter-Bold mt-8'  >Continue</button>
        </div>
    )
}
