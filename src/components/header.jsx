import React, { useContext, useState } from "react";
import AppLogo from "../images/app-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Register } from "./register";
import { Login } from "./login";
import { AuthContext } from "@/contexts/auth-context";
import useSignOut from "@/hooks/useSignOut";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    User,
    LogOut,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"


const Header = () => {

    let { user, authReady } = useContext(AuthContext);
    const { logOut } = useSignOut();
    const { toast } = useToast()


    console.log(user);
    const [toggle, setToggle] = useState("close");

    const handleToggle = () => {
        toggle === "open" ? setToggle("close") : setToggle("open");
    };

    const signOutUser = async () => {
        await logOut();
        toast({
            variant: "success",
            title: "Logged Out Success",
            description: "You are now successfully logged out.",
        })

    }

    return (
        <header className="flex shadow-lg px-4 sm:px-10 bg-white font-[onest] min-h-[70px] tracking-wide fixed top-0 z-50 w-full">
            <div className="flex items-center justify-between gap-5 w-[90%] m-auto sm:w-[96%] lg:w-[90%]">
                <a href="/">
                    <img src={AppLogo} width="80px" alt="app-logo" />
                </a>

                <div className="hidden lg:flex lg:justify-center lg:items-center">
                    <ul className="flex">
                        <motion.li
                            className="border-gray-300 max-lg:py-3 px-3"
                            whileHover={{ scale: 0.8, color: "#E15A85" }}
                        >
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "hover:text-primary-200 text-my-secondary block font-bold text-sm"
                                        : "text-gray-300 hover:text-my-secondary block font-bold text-sm"
                                }
                            >
                                HOME
                            </NavLink>
                        </motion.li>
                        <motion.li
                            className="border-gray-300 max-lg:py-3 px-3"
                            whileHover={{ scale: 0.8, color: "#E15A85" }}
                        >
                            <NavLink
                                to="/analysis-result"
                                className={({ isActive }) =>
                                    isActive
                                        ? "hover:text-primary-200 text-my-secondary block font-bold text-sm"
                                        : "hover:text-my-secondary text-gray-300 block font-bold text-sm"
                                }
                            >
                                MY ANALYSIS
                            </NavLink>
                        </motion.li>
                        <motion.li
                            className="border-gray-300 max-lg:py-3 px-3"
                            whileHover={{ scale: 0.8 }}
                        >
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "hover:text-primary-200 text-my-secondary block font-bold text-sm"
                                        : "hover:text-my-secondary text-gray-300 block font-bold text-sm"
                                }
                            >
                                ABOUT
                            </NavLink>
                        </motion.li>
                        <motion.li
                            className="border-gray-300 max-lg:py-3 px-3"
                            whileHover={{
                                scale: 0.9,
                            }}
                        >
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? "hover:text-my-secondary-200 text-my-secondary block font-bold text-sm"
                                        : "hover:text-my-secondary text-gray-300 block font-bold text-sm"
                                }
                            >
                                CONTACT US
                            </NavLink>
                        </motion.li>
                    </ul>

                    {authReady &&
                        <div className="flex max-lg:ml-auto space-x-3">
                            {!user && <>
                                <Login />
                                <Register />
                            </>
                            }
                            {!!user && <>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="border border-[#3B6875] shadow-lg">
                                        <DropdownMenuLabel className="font-onest font-semibold text-primary-200">My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="font-inter">
                                            <User />
                                            Dr. {user.displayName}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="font-inter" onClick={signOutUser}>
                                            <LogOut />
                                            Logout
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </>
                            }
                        </div>}

                </div>

                {/* Burger Button */}
                <motion.button
                    className="lg:hidden"
                    onClick={handleToggle}
                    whileHover={{ scale: 0.8 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </motion.button>
            </div>

            {/* Mobile Nav */}
            {toggle === "open" ? (
                <div
                    className="w-[60%] h-screen absolute bg-white right-0 shadow-2xl drop-shadow-lg
                    sm:w-[50%]
                    md:w-[40%]
                    lg:hidden
                    slide-in-right
                    "
                >
                    {/* Close Button */}
                    <motion.button
                        className="pt-4 pb-2 px-5 flex justify-end ml-auto"
                        whileHover={{ scale: 0.8 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={handleToggle}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1"
                            stroke="#3B6875"
                            className="size-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </motion.button>

                    <ul className="p-5 w-fit">
                        <motion.li
                            className="border-gray-300 max-lg:py-3 px-3"
                            whileHover={{ scale: 0.8, color: "#E15A85" }}
                        >
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "hover:text-primary-200 text-my-secondary block font-bold text-sm"
                                        : "text-gray-300 hover:text-my-secondary block font-bold text-sm"
                                }
                            >
                                HOME
                            </NavLink>
                        </motion.li>
                        <motion.li
                            className="border-gray-300 max-lg:py-3 px-3"
                            whileHover={{ scale: 0.8, color: "#E15A85" }}
                        >
                            <NavLink
                                to="/analysis-result"
                                className={({ isActive }) =>
                                    isActive
                                        ? "hover:text-primary-200 text-my-secondary block font-bold text-sm"
                                        : "hover:text-my-secondary text-gray-300 block font-bold text-sm"
                                }
                            >
                                MY ANALYSIS
                            </NavLink>
                        </motion.li>
                        <motion.li
                            className="border-gray-300 max-lg:py-3 px-3"
                            whileHover={{ scale: 0.8 }}
                        >
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "hover:text-primary-200 text-my-secondary block font-bold text-sm"
                                        : "hover:text-my-secondary text-gray-300 block font-bold text-sm"
                                }
                            >
                                ABOUT
                            </NavLink>
                        </motion.li>
                        <motion.li
                            className="border-gray-300 max-lg:py-3 px-3"
                            whileHover={{
                                scale: 0.9,
                            }}
                        >
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? "hover:text-my-secondary-200 text-my-secondary block font-bold text-sm"
                                        : "hover:text-my-secondary text-gray-300 block font-bold text-sm"
                                }
                            >
                                CONTACT US
                            </NavLink>
                        </motion.li>
                    </ul>

                    {/* Login or Logout Button */}

                    {authReady &&
                        <div className="flex max-lg:ml-auto space-x-3">
                            {!user && <>
                                <Login />
                                <Register />
                            </>
                            }
                            {!!user && <>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="pl-6">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="border border-[#3B6875] shadow-lg">
                                        <DropdownMenuLabel className="font-onest font-semibold text-primary-200">My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="font-inter">
                                            <User />
                                            Dr. {user.displayName}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="font-inter" onClick={signOutUser}>
                                            <LogOut />
                                            Logout
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </>
                            }
                        </div>}
                </div>
            ) : null}
        </header>
    );
};

export default Header;
