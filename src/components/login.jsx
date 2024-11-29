import React, { useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import useSignIn from '@/hooks/useSignIn';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { useToast } from "@/hooks/use-toast"
import GoogleSignIn from './google-sign-in';



export const Login = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { error, loading, signIn } = useSignIn()

    const { toast } = useToast()


    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();


    let loginUser = async (e) => {
        e.preventDefault();
        let user = await signIn(email, pwd);
        if (user) {
            toast({
                variant: "success",
                title: "Login Success",
                description: "You have successfully logged in.",
            })
            setIsOpen(false)
            navigate("/analysis-result");

        }
        console.log(user)
        console.log("Login")
    }

    return (
        <Dialog>
            <DialogTrigger className="px-8 py-3 text-sm rounded-lg font-bold text-primary-200  bg-primary-100 transition-all ease-in-out duration-300 transform hover:-translate-y-2">
                LOGIN
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="font-onest text-2xl text-primary-200 mb-4">
                        Log In
                    </DialogTitle>
                    <DialogDescription className="flex flex-col gap-3">
                        <form className="flex flex-col gap-4" method="POST" onSubmit={loginUser}>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col w-full">
                                    <label
                                        className="text-lg font-onest text-primary-200 font-bold"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="border-2 border-primary-200 rounded-md p-3"
                                        type="email"
                                        placeholder="1242@gmail.com"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="flex flex-col w-full">
                                    <label
                                        className="text-lg font-onest text-primary-200 font-bold"
                                        htmlFor="age"
                                    >
                                        Password
                                    </label>
                                    <input
                                        className="border-2 border-primary-200 rounded-md p-3"
                                        type="password"
                                        placeholder="................."
                                        value={pwd}
                                        onChange={(e) => setPwd(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            {error && <p className='text-red-500 font-inter font-medium'>{error}</p>}
                            {loading ?
                                <button className='flex justify-center items-center gap-2' disabled>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-slate-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    Loggin Now...
                                </button> :
                                <motion.button className='bg-my-secondary font-onest font-bold text-white rounded-md py-4 text-sm md:text-lg' type="submit" whileHover={{ scale: 0.8 }} whileTap={{ scale: 0.9 }}>
                                    LOGIN NOW
                                </motion.button>
                            }
                        </form>
                        {/* Google Sign In */}
                        <GoogleSignIn />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
