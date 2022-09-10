import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { InputGroup, Input, InputLeftElement, InputRightElement } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import { Switch } from '@chakra-ui/switch'
import { Textarea } from '@chakra-ui/textarea'
import * as axios from 'axios'  
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import React from 'react'
import { addMonths } from "date-fns";
import { motion } from 'framer-motion'

export default function AddInvestor(props: any) {

    const startDate = new Date()  
    const [image, SetImage] = React.useState('');
    const [investmentduration, setDuration] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const [imageFile, SetImageFile] = React.useState({} as any); 
    const loginSchema = yup.object({  
        title: yup.string().required('Required'),
        owners: yup.string().required('Required'),
        sector: yup.string().required('Required'),
        roi: yup.string().required('Required'),
        duration: yup.string().required('Required'),
        units: yup.string().required('Required'), 
        insurance: yup.string().required('Required'), 
    }) 

    // formik
    const formik = useFormik({
        initialValues: {title: '', owners: '', sector: '', roi: '', duration: '', units: '', insurance: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  

    let endDate = addMonths(startDate, investmentduration).toJSON()
 
    const handleImageChange = (e: any ) => {

        const selected = e.target.files[0]; 
        const TYPES = ["image/png", "image/jpg", "image/jpeg" ];        
        if (selected && TYPES.includes(selected.type)) {
            // SetImage(selected)
            const reader: any = new FileReader();
            reader.onloadend= () => {  
                SetImage(reader.result)
            }
            reader.readAsDataURL(selected)
        } else {
            console.log('Error')
        }   
        SetImageFile(selected) 
    }   

    const Submit =async()=> {  

        let item: any
        setLoading(true)
        {formik.values.insurance === 'true' ? item=true : item=false}

        if (!formik.dirty) {
            alert('You have to fill in th form to continue');
            return;
        }else if (!formik.isValid) {
            alert('You have to fill in the form correctly to continue');
            return;
        }else if (image === '') {
            alert('You have to Add an Avatar to continue');
            return;
        }else {
            try {

                let formData = new FormData()   
                formData.append('title', formik.values.title) 
                formData.append('owners', formik.values.owners) 
                formData.append('sector', formik.values.sector)  
                formData.append('start', startDate.toJSON()) 
                formData.append('end', endDate) 
                formData.append('duration', formik.values.duration)  
                formData.append('roi', formik.values.roi) 

                formData.append('avatar', image)   
                formData.append('units', formik.values.units) 
                formData.append('insurance', item)  

                // make request to server
                const request = await axios.default.post(`https://api.vaultafrica.co/investment/register`, formData, {
                    headers: { 'content-type': 'application/json',
                        Authorization : `Bearer ${localStorage.getItem('token')}`
                    }
                })    

                if (request.status === 201) {    
                    // console.log(json)  
                    const t1 = setTimeout(() => { 
                        // setShowModal(false)
                        props.close(2)
                        // Router.reload()
                        clearTimeout(t1);
                    }, 1000); 
                } else {
                    // alert(json.message);
                    // console.log(json) 
                    // setLoading(false);
                }
                    
            } catch (error) {
                console.log(error) 
            } 
        }
        setLoading(false)
    }

    return (
        <div style={{width: '800px'}} className='rounded-xl mx-auto h-auto px-6 py-8 bg-white'  >
            <div className='w-full flex' >
                <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13L5 8L10 3" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
                <div className='w-auto mx-auto' >
                    <p style={{color: '#002343'}} className='font-Inter-SemiBold text-center text-lg'  >Add New Investors</p>
                    <p className='font-Inter-Regular text-center text-sm' >Edit and add new investment</p>
                </div> 
                <div onClick={()=> props.close(0)} style={{backgroundColor: 'rgba(196, 196, 196, 0.14)'}} className=' cursor-pointer w-8 h-8 flex justify-center items-center rounded-full ' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00003 8L13 13M3 3L8.00003 8L3 3ZM8.00003 8L13 3L8.00003 8ZM8.00003 8L3 13L8.00003 8Z" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
            </div>
            <div className=' w-full mt-6' > 
                <p className='text-sm font-Inter-Regular'>Investment name</p>
                <InputGroup className='mt-2'>
                    <InputLeftElement
                    pointerEvents="none"
                    children={
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.613 3.78717C14.4498 3.86397 14.269 3.94397 14.077 4.02237C14.8274 5.16477 15.2626 6.53117 15.2626 7.99997C15.2626 12.0112 12.0114 15.2624 8.00016 15.2624C3.98896 15.2624 0.737756 12.0112 0.737756 7.99997C0.737756 3.98877 3.98896 0.737573 8.00016 0.737573C9.47696 0.737573 10.8514 1.17917 11.9986 1.93597C12.0754 1.74237 12.1538 1.55837 12.2258 1.39517C11.0066 0.614373 9.55536 0.159973 8.00016 0.159973C3.66896 0.159973 0.160156 3.66877 0.160156 7.99997C0.160156 12.3312 3.66896 15.84 8.00016 15.84C12.3314 15.84 15.8402 12.3312 15.8402 7.99997C15.8402 6.44797 15.3906 5.00477 14.613 3.78717Z" fill="#002343"/>
                            <path d="M12.3124 4.50237L12.0612 4.75357C12.7732 5.64317 13.2004 6.77117 13.2004 7.99837C13.2004 10.8704 10.8724 13.1968 8.00199 13.1968C5.13159 13.1968 2.80199 10.872 2.80199 7.99997C2.80199 5.12797 5.12839 2.80157 8.00039 2.80157C9.22759 2.80157 10.354 3.22717 11.2436 3.93917L11.522 3.66077C11.5268 3.59037 11.5348 3.51837 11.546 3.44477C10.5668 2.68157 9.33639 2.22717 7.99879 2.22717C4.80839 2.22717 2.22119 4.81437 2.22119 8.00477C2.22119 11.1952 4.80999 13.7792 8.00039 13.7792C11.1908 13.7792 13.778 11.192 13.778 8.00157C13.778 6.67517 13.33 5.45437 12.5796 4.47997C12.4884 4.49117 12.3972 4.49917 12.3124 4.50237Z" fill="#002343"/>
                            <path d="M10.5876 6.22717C10.9348 6.73117 11.1364 7.34237 11.1364 7.99997C11.1364 9.73117 9.73156 11.136 8.00036 11.136C6.26916 11.136 4.86436 9.73117 4.86436 7.99997C4.86436 6.26877 6.26916 4.86398 8.00036 4.86398C8.65636 4.86398 9.26436 5.06558 9.76996 5.41118L10.1844 4.99678C9.56996 4.55038 8.81636 4.28638 7.99876 4.28638C5.94756 4.28638 4.28516 5.94877 4.28516 7.99997C4.28516 10.0512 5.94916 11.7136 8.00036 11.7136C10.0516 11.7136 11.714 10.0512 11.714 7.99997C11.714 7.18237 11.45 6.42557 11.002 5.81277L10.5876 6.22717Z" fill="#002343"/>
                            <path d="M14.8562 3.18718L14.0386 2.36958L14.6226 1.78558L14.2146 1.37758L13.6306 1.96158L12.813 1.14398C12.813 1.14398 11.8386 3.01758 11.7362 3.85438L7.79541 7.79518L8.20341 8.20318L12.1458 4.26078C12.9826 4.15998 14.8562 3.18718 14.8562 3.18718Z" fill="#002343"/>
                        </svg>
                    }
                    />
                    <Input 
                        name="title"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("title", true, true)
                        } fontSize='sm' placeholder="Name" />
                </InputGroup> 
                <div className="w-full h-auto pt-2">
                    {formik.touched.title && formik.errors.title && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-Regular text-errorRed"
                        >
                            {formik.errors.title}
                        </motion.p>
                    )}
                </div>
                <div className='w-full flex mt-6' >
                    <div className='w-full mr-2' > 
                        <p className='text-sm font-Inter-Regular'>Company</p>
                        <InputGroup className='mt-2'>
                            <InputLeftElement
                            pointerEvents="none"
                            children={
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.27696 6.17602H6.35856V8.00002H9.27536V6.17602H9.27696ZM8.91216 7.63522H6.72336V6.54082H8.91216V7.63522ZM5.26576 6.17602H2.34736V8.00002H5.26416V6.17602H5.26576ZM4.90096 7.63522H2.71216V6.54082H4.89936V7.63522H4.90096ZM5.26576 9.09442H2.34736V10.9184H5.26416V9.09442H5.26576ZM4.90096 10.552H2.71216V9.45762H4.89936V10.552H4.90096ZM9.27696 3.25922H6.35856V5.08322H9.27536V3.25922H9.27696ZM8.91216 4.71842H6.72336V3.62402H8.91216V4.71842ZM13.2882 7.27042H11.829V8.72962H13.2882V7.27042ZM12.9234 8.36482H12.1938V7.63522H12.9234V8.36482ZM15.1106 14.1984V5.81282H10.7346V1.07202H0.889756V14.2H0.160156V14.928H15.8402V14.1984H15.1106ZM10.005 14.1984H1.61936V1.80162H10.0066V14.1984H10.005ZM14.381 14.1984H10.7346V6.54082H14.381V14.1984ZM9.27696 9.09442H6.35856V10.9184H9.27536V9.09442H9.27696ZM8.91216 10.552H6.72336V9.45762H8.91216V10.552ZM5.26576 3.25922H2.34736V5.08322H5.26416V3.25922H5.26576ZM4.90096 4.71842H2.71216V3.62402H4.89936V4.71842H4.90096ZM13.2882 9.45922H11.829V10.9184H13.2882V9.45922ZM12.9234 10.552H12.1938V9.82402H12.9234V10.552Z" fill="#002343"/>
                                </svg>
                            }
                            />
                            <Input 
                                name="owners"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("owners", true, true)
                                } fontSize='sm' placeholder="Company name" />
                        </InputGroup> 
                        <div className="w-full h-auto pt-2">
                            {formik.touched.owners && formik.errors.owners && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.owners}
                                </motion.p>
                            )}
                        </div>
                    </div>
                    <div className='w-full ml-2' > 
                        <p className='text-sm font-Inter-Regular'>Price per unit</p>
                        <InputGroup className='mt-2'>
                            <InputLeftElement
                            pointerEvents="none"
                            children={
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.3744 15.84H1.6192C1.08 15.84 0.641602 15.408 0.641602 14.8672V4.13117L13.3968 0.230373C13.6224 0.167973 13.8176 0.123173 14.0112 0.198373C14.2624 0.292773 14.3744 0.443173 14.3744 0.711973V4.12957C14.92 4.12957 15.3584 4.56797 15.3584 5.10717V14.8656C15.3584 15.408 14.92 15.84 14.3744 15.84ZM13.3968 1.20317L3.8272 4.13117H13.3968V1.20317ZM14.3744 10.472C14.3744 10.2016 14.3744 10.3536 14.3744 9.98877V5.59357C14.3744 5.32317 14.1552 5.11037 13.8848 5.11037H1.6192V14.3792C1.6192 14.6496 1.8384 14.8688 2.1088 14.8688H13.8864C14.1568 14.8688 14.376 14.6496 14.376 14.3792V10.9616C14.3744 10.6288 14.3744 10.7408 14.3744 10.472Z" fill="#002343"/>
                                    <path d="M11.4273 10.9168H14.8577V11.9008H10.4497V8.0448H14.8577V9.0288H11.4273V10.9168Z" fill="#002343"/>
                                </svg>
                            }
                            />
                            <Input 
                                name="units"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("units", true, true)
                                } fontSize='sm' placeholder="0.00" />
                        </InputGroup>
                        <div className="w-full h-auto pt-2">
                            {formik.touched.units && formik.errors.units && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.units}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                </div>
                <div className='w-full flex mt-6' >
                    <div className='w-full mr-2' > 
                        <p className='text-sm font-Inter-Regular'>Duration</p> 
                        <div style={{border: '1px solid #002343', borderRadius: '4px'}} className='w-full my-2 relative flex items-center pl-2 bg-white' > 
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.1936 0.193283C5.22096 0.412804 3.32032 1.43856 2.03056 2.97216C-0.0278447 5.42496 -0.419045 8.71488 1.01504 11.4938C2.07856 13.5522 3.94144 15.0478 6.14384 15.6106C8.07872 16.1046 10.2091 15.789 11.9245 14.7598C14.0858 13.4597 15.5163 11.2915 15.8045 8.86944C15.8594 8.41312 15.8491 7.48353 15.7874 7.01009C15.5712 5.36689 14.8096 3.81616 13.6123 2.58112C12.2778 1.20544 10.6277 0.392324 8.76496 0.189924C8.38048 0.148644 7.57088 0.152164 7.1936 0.193283ZM9.11472 1.20192C11.2245 1.5552 12.9776 2.76624 14.0034 4.5776C14.7203 5.84352 15.0187 7.43184 14.8267 8.92769C14.4939 11.4698 12.8163 13.5762 10.4253 14.4578C9.72544 14.715 9.05296 14.8386 8.22288 14.8626C6.5728 14.9106 5.10448 14.4578 3.83504 13.5075C3.51264 13.2674 2.92944 12.7082 2.66528 12.3858C0.822875 10.1387 0.613595 6.81776 2.15392 4.33056C3.26208 2.54656 5.12144 1.39056 7.26208 1.15376C7.66704 1.10928 8.72352 1.13664 9.11472 1.20192Z" fill="black"/>
                                <path d="M7.64951 2.41989C7.58775 2.45413 7.51223 2.52629 7.47799 2.58117C7.41959 2.67029 7.41623 2.83157 7.41623 5.47317C7.41623 8.61557 7.39911 8.42005 7.67351 8.56069C7.80391 8.62933 7.87255 8.62933 10.5621 8.62933C13.6874 8.62933 13.4815 8.64645 13.6359 8.35141C13.7594 8.11477 13.6908 7.87461 13.461 7.73733C13.3546 7.67221 13.2689 7.66869 10.8743 7.66869H8.39751L8.38711 5.17125C8.37687 2.83157 8.37335 2.66693 8.31511 2.58117C8.22583 2.44389 8.05431 2.35125 7.89655 2.35125C7.82103 2.35125 7.71127 2.38213 7.64951 2.41989Z" fill="black"/>
                            </svg>
                            <Select 
                                name="duration"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("duration", true, true)
                                } borderWidth='0px' focusBorderColor='transparent'  pl-3 fontSize='sm' borderColor='transparent' className=' bg-white' >
                                <option onClick={()=> setDuration(1)} >1 month</option>
                                <option onClick={()=> setDuration(6)} >6 month</option>
                                <option  onClick={()=> setDuration(12)} >1 year</option>
                            </Select> 
                        </div>
                        <div className="w-full h-auto pt-2">
                            {formik.touched.duration && formik.errors.duration && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.duration}
                                </motion.p>
                            )}
                        </div>
                    </div>
                    <div className='w-full ml-2' > 
                        <p className='text-sm font-Inter-Regular'>Insurance</p>
                        <div style={{border: '1px solid #002343', borderRadius: '4px'}} className='w-full my-2 relative flex items-center pl-2 bg-white' > 
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.8611 15.84C7.8099 15.84 7.8307 15.832 7.7827 15.816C7.4883 15.7248 0.649902 13.5072 0.649902 8.84643V3.74083C0.649902 3.43683 0.813102 3.18883 1.1027 3.18883C2.4083 3.18883 3.4515 2.07363 3.4707 0.704034C3.4755 0.403234 3.6723 0.160034 3.9603 0.160034H11.7523C12.0387 0.160034 12.2739 0.401634 12.2771 0.704034C12.2963 2.07523 13.4467 3.18883 14.7523 3.18883C15.0419 3.18883 15.3491 3.43683 15.3491 3.74083V8.85123C15.3491 12.9328 8.4083 15.6896 8.1171 15.8064C8.0579 15.8272 7.9235 15.84 7.8611 15.84ZM1.7011 4.24803V8.84483C1.7011 12.344 6.9763 14.352 7.9891 14.704C9.8979 13.912 14.3011 11.5232 14.3011 8.84803V4.24803C12.7251 4.00963 11.5203 2.91203 11.2755 1.26083H4.4387C4.1939 2.91203 3.0131 4.00963 1.7011 4.24803Z" fill="#002343"/>
                            </svg>
                            <Select 
                        
                                name="insurance"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("insurance", true, true)
                                } borderWidth='0px' focusBorderColor='transparent'  className=' w-full pl-3 bg-white' fontSize='sm' borderColor='transparent'  >
                                <option value='true' >Yes</option>
                                <option value='false' >No</option>
                            </Select> 
                        </div>
                            <div className="w-full h-auto pt-2">
                                {formik.touched.insurance && formik.errors.insurance && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.insurance}
                                    </motion.p>
                                )}
                            </div>
                    </div>
                    {/* <div className='w-full ml-2' > 
                        <p className='text-sm font-Inter-Regular'>Risk level</p>
                        <div style={{border: '1px solid #002343', borderRadius: '4px'}} className='w-full my-2 relative flex items-center pl-2 bg-white' > 
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.8611 15.84C7.8099 15.84 7.8307 15.832 7.7827 15.816C7.4883 15.7248 0.649902 13.5072 0.649902 8.84643V3.74083C0.649902 3.43683 0.813102 3.18883 1.1027 3.18883C2.4083 3.18883 3.4515 2.07363 3.4707 0.704034C3.4755 0.403234 3.6723 0.160034 3.9603 0.160034H11.7523C12.0387 0.160034 12.2739 0.401634 12.2771 0.704034C12.2963 2.07523 13.4467 3.18883 14.7523 3.18883C15.0419 3.18883 15.3491 3.43683 15.3491 3.74083V8.85123C15.3491 12.9328 8.4083 15.6896 8.1171 15.8064C8.0579 15.8272 7.9235 15.84 7.8611 15.84ZM1.7011 4.24803V8.84483C1.7011 12.344 6.9763 14.352 7.9891 14.704C9.8979 13.912 14.3011 11.5232 14.3011 8.84803V4.24803C12.7251 4.00963 11.5203 2.91203 11.2755 1.26083H4.4387C4.1939 2.91203 3.0131 4.00963 1.7011 4.24803Z" fill="#002343"/>
                            </svg>
                            <Select 
                                name="email"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("email", true, true)
                                } borderWidth='0px' focusBorderColor='transparent'  pl-3 fontSize='sm' borderColor='transparent' className=' bg-white' >
                                <option>None</option>
                            </Select> 
                        </div>
                        <div className="w-full h-auto pt-2">
                            {formik.touched.email && formik.errors.email && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.email}
                                </motion.p>
                            )}
                        </div>
                    </div> */}
                </div>
                <div className='w-full flex mt-6' > 
                    <div className='w-full mr-2' > 
                        <p className='text-sm font-Inter-Regular'>Return on investment</p> 
                        <Input 
                            name="roi"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("roi", true, true)
                            } fontSize='sm' placeholder="0" className='mt-2' />  
                        <div className="w-full h-auto pt-2">
                            {formik.touched.roi && formik.errors.roi && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.roi}
                                </motion.p>
                            )}
                        </div>
                    </div>
                    <div className='w-full ml-2' > 
                        <p className='text-sm font-Inter-Regular'>Sector</p>
                        <InputGroup className='my-2'>
                            <InputLeftElement
                            pointerEvents="none"
                            children={
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.27696 6.17602H6.35856V8.00002H9.27536V6.17602H9.27696ZM8.91216 7.63522H6.72336V6.54082H8.91216V7.63522ZM5.26576 6.17602H2.34736V8.00002H5.26416V6.17602H5.26576ZM4.90096 7.63522H2.71216V6.54082H4.89936V7.63522H4.90096ZM5.26576 9.09442H2.34736V10.9184H5.26416V9.09442H5.26576ZM4.90096 10.552H2.71216V9.45762H4.89936V10.552H4.90096ZM9.27696 3.25922H6.35856V5.08322H9.27536V3.25922H9.27696ZM8.91216 4.71842H6.72336V3.62402H8.91216V4.71842ZM13.2882 7.27042H11.829V8.72962H13.2882V7.27042ZM12.9234 8.36482H12.1938V7.63522H12.9234V8.36482ZM15.1106 14.1984V5.81282H10.7346V1.07202H0.889756V14.2H0.160156V14.928H15.8402V14.1984H15.1106ZM10.005 14.1984H1.61936V1.80162H10.0066V14.1984H10.005ZM14.381 14.1984H10.7346V6.54082H14.381V14.1984ZM9.27696 9.09442H6.35856V10.9184H9.27536V9.09442H9.27696ZM8.91216 10.552H6.72336V9.45762H8.91216V10.552ZM5.26576 3.25922H2.34736V5.08322H5.26416V3.25922H5.26576ZM4.90096 4.71842H2.71216V3.62402H4.89936V4.71842H4.90096ZM13.2882 9.45922H11.829V10.9184H13.2882V9.45922ZM12.9234 10.552H12.1938V9.82402H12.9234V10.552Z" fill="#002343"/>
                                </svg>
                            }
                            />
                            <Input 
                                name="sector"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("sector", true, true)
                                } fontSize='sm' placeholder="Sector" />
                        </InputGroup> 
                        <div className="w-full h-auto pt-2">
                            {formik.touched.sector && formik.errors.sector && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.sector}
                                </motion.p>
                            )}
                        </div>
                    </div>
                    {/* <div className='w-full ml-2' > 
                        <p className='text-sm font-Inter-Regular'>Start Date</p>
                        <InputGroup className='mt-2'>
                            <InputRightElement
                            pointerEvents="none"
                            children={
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.80336 4.08959H4.99856C5.29136 4.08959 5.40336 3.66559 5.40336 3.37279V1.03679C5.40336 0.74399 5.25776 0.419189 4.96496 0.419189H4.76976C4.47696 0.419189 4.34896 0.74399 4.34896 1.03679V3.47199C4.34896 3.66559 4.51216 4.08959 4.80336 4.08959ZM11.053 4.08959H11.2482C11.541 4.08959 11.669 3.66559 11.669 3.37279V1.03679C11.669 0.74399 11.5554 0.419189 11.2642 0.419189H11.069C10.7762 0.419189 10.6306 0.74399 10.6306 1.03679V3.47199C10.6306 3.66559 10.8578 4.08959 11.053 4.08959ZM13.829 1.47199H12.2034V2.50719H13.829C14.413 2.50719 14.8994 3.08159 14.8994 3.66559V4.63999H1.16816V3.66559C1.16816 3.08159 1.65456 2.50719 2.23856 2.50719H3.83216V1.47199H2.33616C1.16656 1.47199 0.160156 2.69119 0.160156 3.76319V13.2096C0.160156 14.28 1.16816 15.5808 2.33616 15.5808H13.9266C14.997 15.5808 15.8402 14.3776 15.8402 13.2096V3.76319C15.7442 2.69119 14.997 1.47199 13.829 1.47199ZM14.845 13.1136C14.845 13.7952 14.5106 14.544 13.829 14.544H2.33616C1.75216 14.544 1.20016 13.7952 1.20016 13.2112V5.61279H14.845V13.1136ZM10.1122 1.47199H5.92176V2.50719H10.1122V1.47199Z" fill="#002343"/>
                                </svg> 
                            }
                            />
                            <Input 
                                name="email"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("email", true, true)
                                } fontSize='sm' placeholder="DD - MM - YYYY" />
                        </InputGroup> 
                        <div className="w-full h-auto pt-2">
                            {formik.touched.email && formik.errors.email && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.email}
                                </motion.p>
                            )}
                        </div>
                    </div>
                    <div className='w-full ml-2' > 
                        <p className='text-sm font-Inter-Regular'>End Date</p>
                        <InputGroup className='mt-2'>
                            <InputRightElement
                            pointerEvents="none"
                            children={
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.80336 4.08959H4.99856C5.29136 4.08959 5.40336 3.66559 5.40336 3.37279V1.03679C5.40336 0.74399 5.25776 0.419189 4.96496 0.419189H4.76976C4.47696 0.419189 4.34896 0.74399 4.34896 1.03679V3.47199C4.34896 3.66559 4.51216 4.08959 4.80336 4.08959ZM11.053 4.08959H11.2482C11.541 4.08959 11.669 3.66559 11.669 3.37279V1.03679C11.669 0.74399 11.5554 0.419189 11.2642 0.419189H11.069C10.7762 0.419189 10.6306 0.74399 10.6306 1.03679V3.47199C10.6306 3.66559 10.8578 4.08959 11.053 4.08959ZM13.829 1.47199H12.2034V2.50719H13.829C14.413 2.50719 14.8994 3.08159 14.8994 3.66559V4.63999H1.16816V3.66559C1.16816 3.08159 1.65456 2.50719 2.23856 2.50719H3.83216V1.47199H2.33616C1.16656 1.47199 0.160156 2.69119 0.160156 3.76319V13.2096C0.160156 14.28 1.16816 15.5808 2.33616 15.5808H13.9266C14.997 15.5808 15.8402 14.3776 15.8402 13.2096V3.76319C15.7442 2.69119 14.997 1.47199 13.829 1.47199ZM14.845 13.1136C14.845 13.7952 14.5106 14.544 13.829 14.544H2.33616C1.75216 14.544 1.20016 13.7952 1.20016 13.2112V5.61279H14.845V13.1136ZM10.1122 1.47199H5.92176V2.50719H10.1122V1.47199Z" fill="#002343"/>
                                </svg> 
                            }
                            />
                            <Input 
                                name="email"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("email", true, true)
                                } fontSize='sm' placeholder="DD - MM - YYYY" />
                        </InputGroup>  
                        <div className="w-full h-auto pt-2">
                            {formik.touched.email && formik.errors.email && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.email}
                                </motion.p>
                            )}
                        </div>
                    </div> */}
                </div>
                <div className='w-auto flex mt-6' > 
                    {/* <div className='w-full mr-2' > 
                        <p className='text-sm font-Inter-Regular'>Investment Description</p> 
                        <Textarea
                            name="email"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("email", true, true)
                            } className='mt-2' fontSize='sm' placeholder="About Investment" height='200px' /> 
                        <div className="w-full h-auto pt-2">
                            {formik.touched.email && formik.errors.email && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.email}
                                </motion.p>
                            )}
                        </div>
                    </div> */}
                    <div className='w-auto' > 
                        <p className='text-sm font-Inter-Regular'>Photo</p>
                        <label style={{width:'300px', height:'200px', border: '1px solid #748AA1'}} className='mt-2 cursor-pointer rounded flex justify-center items-center flex-col' >
                            
                        {/* <label className='cursor-pointer' > */}
                                    <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                            {image === '' && (
                                <>
                                    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.9758 3.59193H24.4894L22.9214 2.02393C22.0126 1.11513 20.419 0.455933 19.1358 0.455933H12.8638C11.5806 0.455933 9.98703 1.11513 9.07823 2.02393L7.51022 3.59193H5.02382C2.43182 3.59193 0.319824 5.70393 0.319824 8.29593V20.8399C0.319824 23.4319 2.43182 25.5439 5.02382 25.5439H26.9758C29.5678 25.5439 31.6798 23.4319 31.6798 20.8399V8.29593C31.6798 5.70393 29.5678 3.59193 26.9758 3.59193ZM15.9998 19.2719C12.9694 19.2719 10.5118 16.8143 10.5118 13.7839C10.5118 10.7503 12.9694 8.29593 15.9998 8.29593C19.0302 8.29593 21.4878 10.7503 21.4878 13.7839C21.4878 16.8143 19.0302 19.2719 15.9998 19.2719ZM25.4078 11.9023C24.2814 11.9023 23.3694 10.9935 23.3694 9.86393C23.3694 8.73753 24.2814 7.82553 25.4078 7.82553C26.5342 7.82553 27.4462 8.73753 27.4462 9.86393C27.4462 10.9903 26.5342 11.9023 25.4078 11.9023Z" fill="#002343"/>
                                    </svg>
                                    <p className='text-sm font-Inter-Regular'>Add Photo</p> 
                                </>
                            )}

                            {image !== '' && (
                               <img src={image} className='w-full h-full object-cover rounded' />
                            )}
                        </label>
                    </div> 
                </div>
            </div>
            <div className='w-full flex mt-8' >
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="email-alerts" mb="0">
                        Active
                    </FormLabel>
                    <Switch id="email-alerts" />
                </FormControl> 
                <div className='w-full flex justify-end' > 
                    <button onClick={()=> props.close(3)} style={{color:'#002343', border: '1px solid #002343'}} className='flex w-44 justify-center font-Inter-Bold items-center text-sm rounded py-2 text-white mr-3'>Add to Draft</button>

                    {loading && ( 
                        <button style={{backgroundColor:'#002343'}} className='flex w-44 justify-center font-Inter-Bold items-center text-sm rounded py-2 text-white'>
                            <>
                                <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                                LOADING
                            </>
                        </button> 
                    )}
                    {!loading && ( 
                        <button onClick={()=> Submit()} style={{backgroundColor:'#002343'}} className='flex w-44 justify-center font-Inter-Bold items-center text-sm rounded py-2 text-white'>Upload Investment</button>
                    )}
                </div>
            </div>
        </div>
    )
} 