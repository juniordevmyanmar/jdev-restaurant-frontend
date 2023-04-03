import React from "react";
import Navbar from "../features/common/ui/Navbar";
import LoginForm from "../features/login/ui/LoginForm";

export default function LoginPage() {

    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center'>
                <div className="bg-center sm:bg-cover h-[450px] w-full bg-login ">
                    <div className="bg-slate-700/30 w-full h-full flex justify-center items-center">
                        <p className=' text-white text-center font-bold text-3xl tracking-widest' style={{ textShadow: "2px 2px 4px #000000" }}>Discover Your<br />Cravings</p>
                    </div>
                </div>
            </div>
            <LoginForm />
        </>
    )
}
