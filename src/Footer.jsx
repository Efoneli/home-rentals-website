import React from 'react'
import { 
    FiMapPin, 
    FiPhone, 
    FiPrinter, 
    FiFacebook, 
    FiTwitter, 
    FiYoutube, 
    FiLinkedin, 
    FiInstagram, 
    FiRss 
} from "react-icons/fi";
import { FaPinterest, FaGoogle } from "react-icons/fa";
import logo from './assets/Logo.png';

function Footer() { 
    return (
        <div className='mx-11 my-5'>
            <div className='border-t-2 border-[#F4511E] my-6 mx-4' >
                <hr />
            </div>
            <div className='flex justify-around items-center mx-11 my-5'>
                <img src={logo} alt='logo' />
                <div>
                <div>
                    <div className='flex m-8'>
                    <div className='text-[#F4511E]'>
                        <FiMapPin />
                    </div>
                        <p className='px-3'>345, Fauconer Drive, Suite 4 Charlottesville, CA, 12345</p>
                    </div>
                    <div className='flex m-8 justify-between'>
                        <div className='flex'>
                        <div className='text-[#F4511E]'>
                            <FiPhone />
                        </div>
                            <p className='px-3'>(123) 456-7890</p>
                        </div>
                        <div className='flex'>
                        <div className='text-[#F4511E]'>
                            <FiPrinter />
                        </div>
                            <p className='px-3'>(123) 456-7890</p>
                        </div>
                    </div>
                    <div className='flex m-8'>
                    <p>Social Media</p>
                    <div className='flex'>
                        <div className='text-[#F4511E] px-3'>
                            <FiFacebook />
                        </div>
                        <div className='text-[#F4511E] px-3'>
                            <FiLinkedin />
                        </div>
                        <div className='text-[#F4511E] px-3'>
                            <FiTwitter />
                        </div>
                        <div className='text-[#F4511E] px-3'>
                            <FiYoutube />
                        </div>
                        <div className='text-[#F4511E] px-3'>
                            <FiInstagram />
                        </div>
                        <div className='text-[#F4511E]'>
                            <FaGoogle />
                        </div>
                        <div className='text-[#F4511E] px-3'>
                            <FiRss /> 
                        </div>
                        <div className='text-[#F4511E] px-3'>
                            <FaPinterest />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='flex justify-around text-sm my-6'>
                <div className='flex justify-between text-gray-600 text-xs'>
                    <p className='p-4'>ABOUT US</p>
                    <p className='p-4'>CONTACT US</p>
                    <p className='p-4'>HELP</p>
                    <p className='p-4'>PRIVACY POLICY</p>
                    <p className='p-4'>DISCLAIMER</p>
                </div>
                <div className='border-t-2 border-[#F4511E] '>
                    <hr />
                </div>
                <div className='text-gray-400'>
                    <p className='p-4'>
                        Copyright @ 2020 Minimumcost. All rights reserved.
                    </p>
                </div>
            </div>
      
        </div>
    )
}

export default Footer