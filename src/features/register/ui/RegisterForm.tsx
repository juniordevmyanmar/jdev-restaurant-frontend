import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from "react-router-dom";

const schema = yup.object({
    username: yup.string()
                    .required("Please enter username")
                    .max(100, "The username must not exceed 100 characters in length.")
                    ,
    email: yup.string()
                .email("Invalid email address")
                .required("Please enter your email"),
    password: yup.string()
                    .required("Please enter password")
                    .min(8,"must be at least 8 characters long"),
    confirmPassword: yup.string()
                    .required("Please enter confirm password")
                    .oneOf([yup.ref('password')], 'Passwords must match'),
    phoneNum: yup.string()
                    .max(10, "Phone number must not exceed 10 digits")
                    .matches(/^[0-9]+$/,"Phone number must be a number")
                    .optional(),
    dateOfBirth: yup.date()
                    .optional()
                    .transform((value,originalValue) => originalValue === "" ? undefined : value),
    address: yup.string()
                .optional()
                .transform((value) => value === "" ? undefined : value)

}).required();

type Inputs =  yup.InferType<typeof schema>;


const RegisterForm = () => {
    const { trigger, register, handleSubmit,formState: {errors} } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });


    const [ currentStep, setCurrentStep ] = useState<number>(1);

    const onSubmit: SubmitHandler<Inputs>  = (data) => {

        console.log(data);
    }

    const handleNextButton = async () => {
        const isValid = await trigger();
        if(isValid) setCurrentStep(2);
    }
    

    return (
        <div className="bg-primary w-full h-full px-6 py-20">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
                
                <div className="flex w-full sm:w-[476px] mb-6 sm:mb-8">
                    <div className={`w-1/2 ${currentStep === 1 ? "bg-secondary text-white" : "bg-menu/95"} p-2 text-center cursor-pointer`}  onClick={()=> setCurrentStep(1)}>
                        Step 1
                    </div>
                    <div className={`w-1/2 ${currentStep === 2 ? "bg-secondary text-white" : "bg-menu/95"} p-2 text-center cursor-pointer`} onClick={handleNextButton}>
                        Step 2
                    </div>
                </div>

                { currentStep === 1 && (
                    <>
                        <input type="string" id="username" className={`w-full sm:w-[476px] block rounded-md p-2.5 gray-900 text-gray-900  shadow-sm ring-1 ring-inset ring-[#E1688C] focus:ring-2 focus:ring-inset focus:ring-[#E1688C]  sm:text-sm sm:leading-6 pl-[10px] ${errors.username ? "border border-red-500 placeholder:text-red-400": "border-0 placeholder:text-gray-400"}`} placeholder="Enter username" {...register("username")}/>
                        {errors.username && (
                            <div className="w-full sm:w-[476px] text-left">
                                <span className="text-red-600">{errors.username?.message}</span>
                            </div>
                        )}

                        <input type="email" id="email" className={`w-full sm:w-[476px] mt-8 md:mt-10 block rounded-md p-2.5 gray-900 text-gray-900  shadow-sm ring-1 ring-inset ring-[#E1688C]  focus:ring-2 focus:ring-inset focus:ring-[#E1688C] sm:text-sm sm:leading-6 pl-[10px] ${errors.email ? "border border-red-500 placeholder:text-red-400": "border-0 placeholder:text-gray-400"}`} placeholder="Enter Email"  {...register("email")}/>
                        {errors.email && (
                            <div className="w-full sm:w-[476px] text-left">
                                <span className="text-red-600">{errors.email?.message}</span>
                            </div>
                        )}

                        <input type="password" id="password" className={`w-full sm:w-[476px] mt-8 md:mt-10 block rounded-md p-2.5 gray-900 text-gray-900  shadow-sm ring-1 ring-inset ring-[#E1688C] focus:ring-2 focus:ring-inset focus:ring-[#E1688C]  sm:text-sm sm:leading-6 pl-[10px] ${errors.password ? "border border-red-500 placeholder:text-red-400": "border-0 placeholder:text-gray-400"}`} placeholder="Enter Password" {...register("password")}/>
                        {errors.password && (
                            <div className="w-full sm:w-[476px] text-left">
                                <span className="text-red-600">{errors.password?.message}</span>
                            </div>
                        )}

                        <input type="password" id="confirmPassword" className={`w-full sm:w-[476px] mt-8 md:mt-10 block rounded-md p-2.5 gray-900 text-gray-900  shadow-sm ring-1 ring-inset ring-[#E1688C] focus:ring-2 focus:ring-inset focus:ring-[#E1688C]  sm:text-sm sm:leading-6 pl-[10px] ${errors.confirmPassword ? "border border-red-500 placeholder:text-red-400": "border-0 placeholder:text-gray-400"}`} placeholder="Confirm Password" {...register("confirmPassword")}/>
                        {errors.confirmPassword && (
                            <div className="w-full sm:w-[476px] text-left">
                                <span className="text-red-600">{errors.confirmPassword?.message}</span>
                            </div>
                        )}

                        <button type="button" onClick={handleNextButton} className="rounded-full bg-[#E1688C] mt-8 md:mt-10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#ed6f95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E1688C] w-full sm:w-[476px]">
                            Next
                        </button>
                    </>
                )}

                { currentStep === 2 && (
                    <>

                        <input type="string" id="phoneNum" className={`w-full sm:w-[476px] block rounded-md p-2.5 gray-900 text-gray-900  shadow-sm ring-1 ring-inset ring-[#E1688C] focus:ring-2 focus:ring-inset focus:ring-[#E1688C]  sm:text-sm sm:leading-6 pl-[10px] ${errors.phoneNum ? "border border-red-500 placeholder:text-red-400": "border-0 placeholder:text-gray-400"}`} placeholder="Enter phone Number" {...register("phoneNum")}/>
                        {errors.phoneNum && (
                            <div className="w-full sm:w-[476px] text-left">
                                <span className="text-red-600">{errors.phoneNum?.message}</span>
                            </div>
                        )}

                        <input type="date" id="dateOfBirth" className={`w-full sm:w-[476px] mt-8 md:mt-10 block rounded-md p-2.5 gray-900 text-gray-900  shadow-sm ring-1 ring-inset ring-[#E1688C] focus:ring-2 focus:ring-inset focus:ring-[#E1688C]  sm:text-sm sm:leading-6 pl-[10px] ${errors.dateOfBirth ? "border border-red-500 placeholder:text-red-400": "border-0 placeholder:text-gray-400"}`} {...register("dateOfBirth")}/>
                        {errors.dateOfBirth && (
                            <div className="w-full sm:w-[476px] text-left">
                                <span className="text-red-600">{errors.dateOfBirth?.message}</span>
                            </div>
                        )}

                        <input type="string" id="address" className={`w-full sm:w-[476px] mt-8 md:mt-10 block rounded-md p-2.5 gray-900 text-gray-900  shadow-sm ring-1 ring-inset ring-[#E1688C] focus:ring-2 focus:ring-inset focus:ring-[#E1688C]  sm:text-sm sm:leading-6 pl-[10px] ${errors.address ? "border border-red-500 placeholder:text-red-400": "border-0 placeholder:text-gray-400"}`} placeholder="Enter address" {...register("address")}/>
                        {errors.address && (
                            <div className="w-full sm:w-[476px] text-left">
                                <span className="text-red-600">{errors.address?.message}</span>
                            </div>
                        )}

                        <button type="submit" className="rounded-full bg-[#E1688C] mt-8 md:mt-10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#ed6f95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E1688C] w-full sm:w-[476px]">
                            Reigster
                        </button>
                    </>

                )}


            </form>
            <p className="text-center w-full text-white text-sm mt-5">Already have an account? <Link className="font-bold underline underline-offset-4 decoration-secondary" to={"/login"}>Login Here</Link></p>
        </div>
    )
}

export default RegisterForm;