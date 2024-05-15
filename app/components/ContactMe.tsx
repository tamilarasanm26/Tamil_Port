"use client";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"
type Props = {}
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
function ContactMe({}: Props) {
    const {
        register,
        handleSubmit,
         } = useForm<Inputs>();
      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:tamilmurugan2602@outlook.com.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.
        ${formData.message} (${formData.email})`;
      };
  return (
    <div className='h-screen flex relative  flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500  md:text-2xl'>
           Contact
          </h3>
        
        <div className='flex flex-col space-y-5 mt-12'>
            <h4 className='text-1xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
            </h4>

            <div className='space-y-5'>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p>987654321</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p>tamilmurugan2602@gmail.com</p>
                </div>
                   
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 mx-auto max-w-md'>
                <div className='flex space-x-2'>
                    <input {...register('name')} className='contactInput w-1/2' type="text" placeholder="Name" /> 
                    <input {...register('email')} className='contactInput w-1/2' type="email" placeholder="Email" />
                </div>
                <input {...register('subject')} className='contactInput' type="text" placeholder='Subject' />
                <textarea {...register('message')} className='contactInput' placeholder="Message" />
                <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe
