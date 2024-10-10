
// Visit https://kaif-ui.vercel.app/ for more blocks like this

import Image from "next/image"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

export default function AuthOne() {
    return (
        <>  
            <main className="overflow-hidden bg-gray-50">
                <div className="relative mx-auto max-w-7xl">
                    <div className="absolute -right-60 -top-44 h-60 w-[36rem] rotate-[-10deg] transform-gpu rounded-full bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#09f] from-[28%] via-[#2298e7] via-[70%] to-[#0561e2] blur-3xl md:right-0"></div>
                    <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
                        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
                            <form action="#" method="POST" className="p-7 sm:p-11">
                                <div className="flex items-start">
                                    <a href="/">
                                        <Image
                                            src={'https://kaif-ui.vercel.app/logo/logo-light-theme.svg'}
                                            width={20}
                                            height={20}
                                            alt="Kaif UI"
                                            className="size-[3rem] rounded-lg"
                                        />
                                    </a>
                                </div>
                                <h1 className="mt-8 text-base font-medium text-black">Welcome back!</h1>
                                <p className="mt-1 text-sm text-gray-600">
                                    Sign in to your account to continue.
                                </p>

                                <div className="mt-8 space-y-3">
                                    <label
                                        className="text-sm font-medium text-black"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        required
                                        className="block w-full rounded-lg border border-transparent px-2 py-1.5 text-base shadow ring-1 ring-black/10 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-black sm:text-sm bg-white text-black"
                                        id="email"
                                        type="email"
                                        name="email"
                                    />
                                </div>

                                <div className="mt-8 space-y-3">
                                    <label
                                        className="text-sm font-medium text-black"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        required
                                        className="block w-full rounded-lg border border-transparent px-2 py-1.5 text-base shadow ring-1 ring-black/10 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-black sm:text-sm bg-white text-black"
                                        id="password"
                                        type="password"
                                        name="password"
                                    />
                                </div>
                                <div className="mt-8 flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-3 text-black bg-white">
                                        <Checkbox id="remember-me" className="border dark:border-muted"/>
                                        <label htmlFor="remember-me" className="text-black">Remember me</label>
                                    </div>
                                    <Link href="#" className="font-medium hover:text-gray-600 text-black">
                                        Forgot password?
                                    </Link>
                                </div>

                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-gray-950 px-4 py-2 text-base font-medium text-white shadow-md hover:bg-gray-800 disabled:bg-gray-950 disabled:opacity-40"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                            <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-black text-center text-sm/5 ring-1 ring-black/5">
                                Not a member?
                                <a className="font-medium hover:text-gray-600" href="#">Create an account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}