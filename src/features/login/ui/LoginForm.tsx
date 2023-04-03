import React, { useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import AlertBox from "./AlertBox";

type Inputs =  {
    email: string,
    password: string
}

interface User{
    id:number,
    name: string,
    email: string,
    password: string
}

const LoginForm = () => {
    const {register, handleSubmit,formState: {errors}} = useForm<Inputs>();
    const [isCorrect, setIsCorrect] = useState<string>("uncheck");
    
    const getUser = (email:string,password:string) => {
        axios.get<User[]>(`http://localhost:3001/Users?email=${email}&password=${password}`)
        .then(response => {
            console.log(response.data);
            if(response.data.length === 0){
                alert('no user found')
                setIsCorrect("false");
            }
            else {
                alert(response.data);
                setIsCorrect("true");
            }
        });
    }

    const onSubmit: SubmitHandler<Inputs>  = (data) => {
        const { email, password } = data;

        getUser(email,password);
    }

    const handleCloseBtn = () => {
        setIsCorrect("unchecked");
    }

    return (
        <div className="bg-primary w-full h-full px-6 py-20">
            {isCorrect === "false" && (
                <AlertBox handleCloseBtn={handleCloseBtn}/>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
                <input type="email" id="email" className={`w-full sm:w-[476px] block rounded-md p-2.5 gray-900 text-gray-900  shadow-sm ring-1 ring-inset ring-[#E1688C]  focus:ring-2 focus:ring-inset focus:ring-[#E1688C] sm:text-sm sm:leading-6 pl-[10px] ${errors.email ? "border border-red-500 placeholder:text-red-400": "border-0 placeholder:text-gray-400"}`} placeholder="Enter Email"  {...register("email", {required:"Please enter your email"})}/>
                {errors.email && (
                    <div className="w-full sm:w-[476px] text-left">
                        <span className="text-red-600">{errors.email.message}</span>
                    </div>
                )}

                <input type="password" id="password" className={`w-full sm:w-[476px] mt-8 md:mt-10 block rounded-md p-2.5 gray-900 text-gray-900  shadow-sm ring-1 ring-inset ring-[#E1688C] focus:ring-2 focus:ring-inset focus:ring-[#E1688C]  sm:text-sm sm:leading-6 pl-[10px] ${errors.password ? "border border-red-500 placeholder:text-red-400": "border-0 placeholder:text-gray-400"}`} placeholder="Enter Password" {...register("password",{required:"Please enter your password"})}/>
                {errors.password && (
                    <div className="w-full sm:w-[476px] text-left">
                        <span className="text-red-600">{errors.password.message}</span>
                    </div>
                )}

                <button type="submit" className="rounded-md bg-[#E1688C] mt-8 md:mt-10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#ed6f95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E1688C] w-full sm:w-[476px]">
                    Login
                </button>


            </form>
            <p className="text-center w-full text-white text-sm mt-5">Don't have account? <span className="font-bold underline underline-offset-4 decoration-secondary">Signup Here</span></p>
        </div>
    )
}

export default LoginForm;