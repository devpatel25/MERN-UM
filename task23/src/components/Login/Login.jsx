import React from "react";

export default function Login(){
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="flex flex-col justify-center items-center w-2/5 bg-gray-50 rounded-3xl shadow-xl">
                <h1 className="text-3xl font-semi-bold p-4">Login</h1>
                <form className="flex flex-col justify-center items-start w-full px-8 py-4">
                    <label className="px-4 pb-2">Username</label>
                    <input type="text" name="username" placeholder="emailid@domain.com" className="w-full h-12 px-4 rounded-xl border-gray-400 border-solid border-2 mb-3"/>
                    <label className="px-4 pb-2">Password</label>
                    <input type="password" name="password" placeholder="Password" className="w-full h-12 px-4 rounded-xl border-gray-400 border-solid border-2"/>
                    <button className="mt-4 w-full h-12 px-4 rounded-xl bg-orange-700 text-white hover:opacity-70" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}