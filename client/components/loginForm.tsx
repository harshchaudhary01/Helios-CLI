"use client";

import Image from "next/image"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const LoginForm = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center space-y-4">
                {/* <Image src={"/login.svg"} alt="Login" height={500} width={500} /> */}
                <DotLottieReact
                    src="https://lottie.host/e1a17b20-bfd1-45a9-89ac-f6c1c1ed92cd/voI0MSJZJN.lottie"
                    loop
                    autoplay
                    className="h-80"
                />
                <h1 className="text-6xl font-extrabold text-indigo-400">Welcome Back! to Helios CLI</h1>
                <p className="text-base font-medium text-zinc-400">Login to your Account for allowing Device Flow</p>
            </div>
        </div>
    )
}