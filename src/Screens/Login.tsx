import React from 'react'
import BG from '../assets/images/LoginBg.png'
import BottomImage from '../assets/images/BottomImage.png'
import {InputGroup, InputRightElement, Input} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
// import { useHistory } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate();
 
    const [showpassword, setShowpass] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [tokenvalue, setToken] = React.useState('');
    // const userContext: IUser = React.useContext(UserContext); 

    const handleShowpassword = () => {
        setShowpass(prev => !prev);
    } 

    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'),
        password: yup.string().required('Your password is required').min(8, 'A minimium of 8 characters')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {email: '', password: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  

    React.useEffect(() => {  
        localStorage.setItem('token', tokenvalue);  
        // const token = localStorage.getItem('token')
        // if(token === '' ){
        //     Router.push('/dashboard')
        // }
    }); 

    const submit = async () => {

        if (!formik.dirty) {
          alert('You have to fill in th form to continue');
          return;
        }else if (!formik.isValid) {
          alert('You have to fill in the form correctly to continue');
          return;
        }else {
            setLoading(true);
            const request = await fetch(`https://api.vaultafrica.co/admin-auth/login`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formik.values),
            });
    
            const json = await request.json();
    
            console.log("request.status");
            
            if (request.status === 201) {    
                setToken(json.accessToken)
                localStorage.setItem('email', formik.values.email);   
                localStorage.setItem('token',json.accessToken) 
                const t1 = setTimeout(() => { 
                    // "email": "string",
                    // "firstname": "string",
                    // "lastname": "string",
                    // "phoneNumber": "string",
                    // "password": "string"
                    navigate('/dashboard');  
                    // userContext.setSignUp({
                    //     email: formik.values.email, password: formik.values.password 
                    // })
                    clearTimeout(t1);
                }, 1000); 
            }else {
                alert(json.message);
                console.log(json)
                setLoading(false);
            }
        }
    } 

    return (
        <div className='w-screen h-screen flex relative  ' >
            <img alt='BG' src={BG} className='object-cover h-screen' />
            <div className='w-full h-screen justify-center items-center px-10 flex flex-col'>
                <div className='w-[500px]' >
                    <p className='text-2xl font-Inter-Bold'>Welcome Back</p>
                    <p className='text-base font-Inter-Regular mt-4 mb-6'>Enter you login details to proceed</p>
                    <InputGroup className='mt-4'>
                        <InputRightElement
                            pointerEvents="none"
                            children={
                                <svg className='mt-1 mr-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6589 2C19.9889 2 22.4999 4.717 22.4999 8.32V15.188C22.4999 17.032 21.8479 18.698 20.6629 19.88C19.5999 20.939 18.2209 21.5 16.6749 21.5H6.82191C5.27891 21.5 3.90091 20.94 2.83691 19.88C1.65191 18.698 0.999908 17.032 0.999908 15.188V8.32C0.999908 4.717 3.51091 2 6.84091 2H16.6589ZM16.6589 3.5H6.84091C4.32591 3.5 2.49991 5.527 2.49991 8.32V15.188C2.49991 16.631 2.99591 17.92 3.89591 18.817C4.67191 19.592 5.68491 20 6.82491 20H16.6589C16.6609 19.998 16.6689 20 16.6749 20C17.8159 20 18.8279 19.592 19.6039 18.817C20.5049 17.92 20.9999 16.631 20.9999 15.188V8.32C20.9999 5.527 19.1739 3.5 16.6589 3.5ZM18.2349 8.1288C18.4959 8.4498 18.4469 8.9218 18.1259 9.1838L13.6819 12.7958C13.1199 13.2418 12.4479 13.4648 11.7769 13.4648C11.1079 13.4648 10.4409 13.2438 9.88291 12.8018L5.39791 9.1858C5.07491 8.9258 5.02491 8.4528 5.28391 8.1308C5.54491 7.8098 6.01691 7.7588 6.33891 8.0178L10.8199 11.6298C11.3829 12.0758 12.1759 12.0758 12.7429 11.6258L17.1789 8.0198C17.5009 7.7568 17.9729 7.8068 18.2349 8.1288Z" fill="#727272"/>
                                </svg>
                            }/>
                        <Input
                            name="email"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("email", true, true)
                            }   
                            placeholder="Email" size="lg" fontSize='sm' />
                    </InputGroup>
                    <div className="w-full h-auto pt-2">
                        {formik.touched.email && formik.errors.email && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-SemiBold text-errorRed"
                            >
                                {formik.errors.email}
                            </motion.p>
                        )}
                    </div>
                    <InputGroup className='mt-4'>
                        <InputRightElement 
                            children={
                                <svg onClick={()=> handleShowpassword()} className='mt-1 mr-1 cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3747 2.00024C14.6307 2.00024 16.6447 3.43324 17.3837 5.56724C17.5197 5.95824 17.3117 6.38524 16.9197 6.52124C16.5287 6.65824 16.1017 6.44924 15.9657 6.05724C15.4367 4.52824 13.9917 3.50024 12.3717 3.50024H12.3577C10.2657 3.50024 8.5617 5.19424 8.5527 7.28424L8.552 8.62625L16.184 8.62695C18.688 8.62695 20.726 10.6649 20.726 13.1699V17.4579C20.726 19.9629 18.688 22.0009 16.184 22.0009H8.542C6.037 22.0009 4 19.9629 4 17.4579V13.1699C4 11.1866 5.277 9.49593 7.05221 8.87786L7.0527 7.30124C7.0657 4.36324 9.4417 2.00024 12.3547 2.00024H12.3747ZM16.184 10.1269H8.542C6.864 10.1269 5.5 11.4919 5.5 13.1699V17.4579C5.5 19.1359 6.864 20.5009 8.542 20.5009H16.184C17.861 20.5009 19.226 19.1359 19.226 17.4579V13.1699C19.226 11.4919 17.861 10.1269 16.184 10.1269ZM12.3633 13.4527C12.7773 13.4527 13.1133 13.7887 13.1133 14.2027V16.4247C13.1133 16.8387 12.7773 17.1747 12.3633 17.1747C11.9493 17.1747 11.6133 16.8387 11.6133 16.4247V14.2027C11.6133 13.7887 11.9493 13.4527 12.3633 13.4527Z" fill="#727272"/>
                                </svg>
                            }/>
                        <Input 
                            name="password"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("password", true, true)
                            }  fontSize='sm'
                            type={showpassword ? "text" : "password"}placeholder="Password" size="lg" />
                    </InputGroup>
                    <div className="w-full h-auto pt-2">
                        {formik.touched.password && formik.errors.password && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-SemiBold text-errorRed"
                            >
                                {formik.errors.password}
                            </motion.p>
                        )}
                    </div>
                    {/* 
                        <button onClick={()=> submit()} style={formik.values.email.length >= 3 && formik.values.password.length >= 8 ? {backgroundColor: '#002343', color: 'white'}: {backgroundColor: '#CCD3D9', color: '#667B8E'}} className='w-full py-3 flex justify-center items-center text-white font-Inter-Bold text-xs mr-2 mt-4 rounded-md' >
                            {!loading ? 
                                <div className='py-1' >
                                    SIGN IN
                                </div>:
                                <>
                                    <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                                    LOADING
                                </>
                            } 
                        </button> 
                    */}

                    {loading && ( 
                        <button style={{backgroundColor:'#002343'}} className='text-sm text-white w-40 flex justify-center items-center rounded  py-3 mt-12 font-Inter-Bold'>
                            <>
                                <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                                LOADING
                            </>
                        </button> 
                    )}

                    {!loading && (
                        <button onClick={()=> submit()}  style={{backgroundColor: '#002343', color: 'white'}}  className='text-sm text-white w-40 rounded py-3 mt-12 font-Inter-Bold'>Sign in</button>
                    )}

                </div>
            </div>
            <img alt='BG' src={BottomImage} className='w-auto h-auto absolute bottom-0 right-0' />
        </div>
    )
}