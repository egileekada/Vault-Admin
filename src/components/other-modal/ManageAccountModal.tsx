import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import { Switch } from '@chakra-ui/switch'
import React from 'react'

export default function ManageAccountModal(props: any) {
    return (
        <div style={{width: '900px'}} className='rounded-xl h-auto py-12 px-12 bg-white'  >
            <div className='w-full flex ' >
                <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13L5 8L10 3" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
                <div className='w-auto mx-auto' >
                    <p style={{color: '#002343'}} className='font-Inter-SemiBold text-center text-lg' >Add New Admin</p>
                    <p className='font-Inter-Regular text-center text-sm' >Edit remove and add new admin</p>
                </div> 
                <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00003 8L13 13M3 3L8.00003 8L3 3ZM8.00003 8L13 3L8.00003 8ZM8.00003 8L3 13L8.00003 8Z" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
            </div>
            <div className='w-full mt-10' >
                <div className='w-full my-3' >
                    <p className='font-Inter-Medium text-sm  mb-2'>Name</p>
                        <InputGroup className='my-4'>
                            <InputLeftElement
                            pointerEvents="none"
                            children={
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2265 12.1286C13.2265 14.3259 10.2132 14.5799 7.94717 14.5799L7.78501 14.5798C6.34131 14.5763 2.6665 14.4851 2.6665 12.1153C2.6665 9.96278 5.55874 9.67512 7.80749 9.66427L8.10932 9.66408C9.55293 9.66759 13.2265 9.75873 13.2265 12.1286ZM7.94717 10.6639C5.1065 10.6639 3.6665 11.1519 3.6665 12.1153C3.6665 13.0873 5.1065 13.5799 7.94717 13.5799C10.7872 13.5799 12.2265 13.0919 12.2265 12.1286C12.2265 11.1566 10.7872 10.6639 7.94717 10.6639ZM7.94717 1.33301C9.89917 1.33301 11.4865 2.92101 11.4865 4.87301C11.4865 6.82501 9.89917 8.41234 7.94717 8.41234H7.92584C5.97784 8.40634 4.39984 6.81767 4.40648 4.87101C4.40648 2.92101 5.9945 1.33301 7.94717 1.33301ZM7.94717 2.28501C6.51984 2.28501 5.35849 3.44567 5.35849 4.87301C5.35384 6.29567 6.5065 7.45567 7.92784 7.46101L7.94717 7.93701V7.46101C9.37384 7.46101 10.5345 6.29967 10.5345 4.87301C10.5345 3.44567 9.37384 2.28501 7.94717 2.28501Z" fill="black"/>
                                </svg> 
                            }
                            />
                            <Input fontSize='sm' bg='white' border='1px solid #002343' placeholder="Name" />
                        </InputGroup>
                </div> 
                <div className='w-full flex my-3' > 
                    <div className='w-full mr-2' >
                        <p className='font-Inter-Medium text-sm  mb-2'>Email Address</p>
                            <InputGroup className='my-4'>
                                <InputLeftElement
                                pointerEvents="none"
                                children={
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2265 12.1286C13.2265 14.3259 10.2132 14.5799 7.94717 14.5799L7.78501 14.5798C6.34131 14.5763 2.6665 14.4851 2.6665 12.1153C2.6665 9.96278 5.55874 9.67512 7.80749 9.66427L8.10932 9.66408C9.55293 9.66759 13.2265 9.75873 13.2265 12.1286ZM7.94717 10.6639C5.1065 10.6639 3.6665 11.1519 3.6665 12.1153C3.6665 13.0873 5.1065 13.5799 7.94717 13.5799C10.7872 13.5799 12.2265 13.0919 12.2265 12.1286C12.2265 11.1566 10.7872 10.6639 7.94717 10.6639ZM7.94717 1.33301C9.89917 1.33301 11.4865 2.92101 11.4865 4.87301C11.4865 6.82501 9.89917 8.41234 7.94717 8.41234H7.92584C5.97784 8.40634 4.39984 6.81767 4.40648 4.87101C4.40648 2.92101 5.9945 1.33301 7.94717 1.33301ZM7.94717 2.28501C6.51984 2.28501 5.35849 3.44567 5.35849 4.87301C5.35384 6.29567 6.5065 7.45567 7.92784 7.46101L7.94717 7.93701V7.46101C9.37384 7.46101 10.5345 6.29967 10.5345 4.87301C10.5345 3.44567 9.37384 2.28501 7.94717 2.28501Z" fill="black"/>
                                    </svg> 
                                }
                                />
                                <Input fontSize='sm' bg='white' border='1px solid #002343' placeholder="Email Address" />
                            </InputGroup>
                    </div> 
                    <div className='w-full ml-2' >
                        <p className='font-Inter-Medium text-sm  mb-2'>Position</p>
                            <InputGroup className='my-4'>
                                <InputLeftElement
                                pointerEvents="none"
                                children={
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2265 12.1286C13.2265 14.3259 10.2132 14.5799 7.94717 14.5799L7.78501 14.5798C6.34131 14.5763 2.6665 14.4851 2.6665 12.1153C2.6665 9.96278 5.55874 9.67512 7.80749 9.66427L8.10932 9.66408C9.55293 9.66759 13.2265 9.75873 13.2265 12.1286ZM7.94717 10.6639C5.1065 10.6639 3.6665 11.1519 3.6665 12.1153C3.6665 13.0873 5.1065 13.5799 7.94717 13.5799C10.7872 13.5799 12.2265 13.0919 12.2265 12.1286C12.2265 11.1566 10.7872 10.6639 7.94717 10.6639ZM7.94717 1.33301C9.89917 1.33301 11.4865 2.92101 11.4865 4.87301C11.4865 6.82501 9.89917 8.41234 7.94717 8.41234H7.92584C5.97784 8.40634 4.39984 6.81767 4.40648 4.87101C4.40648 2.92101 5.9945 1.33301 7.94717 1.33301ZM7.94717 2.28501C6.51984 2.28501 5.35849 3.44567 5.35849 4.87301C5.35384 6.29567 6.5065 7.45567 7.92784 7.46101L7.94717 7.93701V7.46101C9.37384 7.46101 10.5345 6.29967 10.5345 4.87301C10.5345 3.44567 9.37384 2.28501 7.94717 2.28501Z" fill="black"/>
                                    </svg> 
                                }
                                />
                                <Input fontSize='sm' bg='white' border='1px solid #002343' placeholder="Customer care" />
                            </InputGroup>
                    </div> 
                </div>
                <div className='w-full my-3' > 
                    <p className='text-sm font-Inter-Regular'>Photo</p>
                    <div style={{width:'300px', height:'200px', border: '1px solid #748AA1'}} className='mt-2 cursor-pointer rounded flex justify-center items-center flex-col' >
                        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.9758 3.59193H24.4894L22.9214 2.02393C22.0126 1.11513 20.419 0.455933 19.1358 0.455933H12.8638C11.5806 0.455933 9.98703 1.11513 9.07823 2.02393L7.51022 3.59193H5.02382C2.43182 3.59193 0.319824 5.70393 0.319824 8.29593V20.8399C0.319824 23.4319 2.43182 25.5439 5.02382 25.5439H26.9758C29.5678 25.5439 31.6798 23.4319 31.6798 20.8399V8.29593C31.6798 5.70393 29.5678 3.59193 26.9758 3.59193ZM15.9998 19.2719C12.9694 19.2719 10.5118 16.8143 10.5118 13.7839C10.5118 10.7503 12.9694 8.29593 15.9998 8.29593C19.0302 8.29593 21.4878 10.7503 21.4878 13.7839C21.4878 16.8143 19.0302 19.2719 15.9998 19.2719ZM25.4078 11.9023C24.2814 11.9023 23.3694 10.9935 23.3694 9.86393C23.3694 8.73753 24.2814 7.82553 25.4078 7.82553C26.5342 7.82553 27.4462 8.73753 27.4462 9.86393C27.4462 10.9903 26.5342 11.9023 25.4078 11.9023Z" fill="#002343"/>
                        </svg>
                        <p className='text-sm font-Inter-Regular'>Add Photo</p> 
                    </div> 
                </div>
                <div className='w-full flex items-center mt-8' >
                    <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="email-alerts" mb="0">
                            Active
                        </FormLabel>
                        <Switch id="email-alerts" />
                    </FormControl> 
                    <div className='w-full flex justify-end' > 
                        <button onClick={()=> props.close(3)} style={{color:'#002343', border: '1px solid #002343'}} className='w-40 flex mr-2 items-center justify-center h-10 font-Inter-SemiBold text-sm rounded-md text-white' >
                            <svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8893 1.33301C13.1486 1.33301 14.6666 2.91834 14.6666 5.27701V10.7223C14.6666 13.081 13.1486 14.6663 10.8886 14.6663H5.10992C2.85059 14.6663 1.33325 13.081 1.33325 10.7223V5.27701C1.33325 2.91834 2.85059 1.33301 5.10992 1.33301H10.8893ZM10.8893 2.33301H5.10992C3.42325 2.33301 2.33325 3.48834 2.33325 5.27701V10.7223C2.33325 12.511 3.42325 13.6663 5.10992 13.6663H10.8886C12.5759 13.6663 13.6666 12.511 13.6666 10.7223V5.27701C13.6666 3.48834 12.5759 2.33301 10.8893 2.33301ZM6.75359 6.04141L7.99859 7.28634L9.24292 6.04281C9.43825 5.84747 9.75425 5.84747 9.94959 6.04281C10.1449 6.23814 10.1449 6.55414 9.94959 6.74947L8.70525 7.99301L9.95092 9.23941C10.1463 9.43474 10.1463 9.75074 9.95092 9.94607C9.85359 10.0441 9.72492 10.0927 9.59759 10.0927C9.46959 10.0927 9.34159 10.0441 9.24425 9.94607L7.99859 8.69967L6.75492 9.94414C6.65759 10.0421 6.52959 10.0908 6.40159 10.0908C6.27359 10.0908 6.14559 10.0421 6.04825 9.94414C5.85292 9.74881 5.85292 9.43281 6.04825 9.23747L7.29192 7.99301L6.04692 6.74807C5.85159 6.55274 5.85159 6.23674 6.04692 6.04141C6.24292 5.84607 6.55892 5.84607 6.75359 6.04141Z" fill="#002343"/>
                            </svg>
                            Remove Admin
                        </button>
                        <button onClick={()=> props.close(2)} style={{backgroundColor:'#002343'}} className='w-40 flex items-center justify-center ml-2 h-10 font-Inter-SemiBold text-sm rounded-md text-white' >
                            <svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.58471 9.63701L6.66411 9.63703L6.84009 9.63751C8.33472 9.6455 11.836 9.78136 11.836 12.091C11.836 14.2324 8.96044 14.5186 6.72364 14.5293L6.32933 14.5292C4.8347 14.5212 1.33337 14.3854 1.33337 12.0763C1.33337 9.88967 4.33004 9.63701 6.58471 9.63701ZM6.58471 10.637C3.76404 10.637 2.33337 11.1217 2.33337 12.0763C2.33337 13.0403 3.76404 13.5297 6.58471 13.5297C9.40537 13.5297 10.836 13.045 10.836 12.091C10.836 11.1257 9.40537 10.637 6.58471 10.637ZM12.8028 5.27881C13.0788 5.27881 13.3028 5.50281 13.3028 5.77881L13.3027 6.61501L14.1667 6.61554C14.4427 6.61554 14.6667 6.83954 14.6667 7.11554C14.6667 7.39154 14.4427 7.61554 14.1667 7.61554L13.3027 7.61501L13.3028 8.45281C13.3028 8.72881 13.0788 8.95281 12.8028 8.95281C12.5268 8.95281 12.3028 8.72881 12.3028 8.45281L12.3027 7.61501L11.44 7.61554C11.164 7.61554 10.94 7.39154 10.94 7.11554C10.94 6.83954 11.164 6.61554 11.44 6.61554L12.3027 6.61501L12.3028 5.77881C12.3028 5.50281 12.5268 5.27881 12.8028 5.27881ZM6.58471 1.33301C8.54004 1.33301 10.13 2.92367 10.13 4.87834C10.13 6.83301 8.54004 8.42367 6.58471 8.42367H6.56404C5.61804 8.42034 4.73137 8.04901 4.06671 7.37967C3.40137 6.70967 3.03671 5.82034 3.04002 4.87634C3.04002 2.92367 4.63004 1.33301 6.58471 1.33301ZM6.58471 2.33301C5.18204 2.33301 4.04002 3.47501 4.04002 4.87834C4.03737 5.55767 4.29871 6.19434 4.77537 6.67501C5.25271 7.15501 5.88871 7.42101 6.56604 7.42367L6.58471 7.91767V7.42367C7.98804 7.42367 9.13004 6.28167 9.13004 4.87834C9.13004 3.47501 7.98804 2.33301 6.58471 2.33301Z" fill="white"/>
                            </svg>
                            Add Admin
                        </button>
                    </div>
                </div> 
            </div>
        </div>
    )
}
