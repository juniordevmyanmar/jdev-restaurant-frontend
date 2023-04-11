import React from "react";

export default function LoginPage() {

    return (
        < div className='flex flex-col justify-center h-[900px]'>

            <div
                className="bg-cover h-80 w-full bg-login flex justify-center items-center"
            >
                <p className=' text-white font-bold text-3xl tracking-widest' style={{ textShadow: "2px 2px 4px #000000" }}>Discover Your Cravings</p>
            </div>

            <div className='bg-[#00172C] h-full flex justify-center '>
                <div className='w-[436px] h-[36px] '>
                    <div className="pt-[110px] pb-[36px]">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-0 py-1.5 gray-900 text-gray-900  shadow-sm ring-1 ring-inset ring-[#E1688C] placeholder:text-gray-400
               focus:ring-2 focus:ring-insetfocus:ring-[#E1688C] sm:text-sm sm:leading-6 pl-[10px]"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className='pb-[31px]'>
                        <div className="mt-2">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-[#E1688C] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E1688C] sm:text-sm sm:leading-6 pl-[10px]	"
                                placeholder="Enter Password"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="rounded-md bg-[#E1688C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#ed6f95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E1688C] w-full"
                    >
                        Login
                    </button>
                    <p className='text-white text-center block text-sm font-medium pt-[21px] leading-6'>Don't Have Account? Signup Here</p>
                </div>
            </div >
        </div >

    )
}
