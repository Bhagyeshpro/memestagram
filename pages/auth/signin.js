import React from 'react'
import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import { async } from '@firebase/util'
import Header from "../../components/Header"
import Image from 'next/image'

// Browser
function signin({ providers }) {
    return (
        <>
            <Header />
            <div className='flex flex-col items-center justify-center min-h-screen
                py-2 -mt-16'>
                <div className='relative h-40 w-80 cursor-pointer p-3 pb-2'>
                    <Image
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiljU-0DG2EyfjVexSjP9x8G2rWTnR8VOClEX6ntC24LB7jjw1yjzDJOUmL7_f7Srdqt252hP8JT5kra9RZxePGbCnYcQxUoPowPSG29XcoL3ssMvnlAQy_iSE_9JzWpQ3pGWJujR21t2N9TDKEVV6V8z7iPh6SGXW3yVvaPIzbTxEowaCE0H_c4rcW/s1255/offensivegrm.png"
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <p className='text-black text-sm px-1  font-semibold italic lg:font-semibold  lg:font-lg'>
                    This Is offensivegrm For Memes Beyond Your Imagination!
                </p>

                <div className='mt-20'>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className='p-3 bg-blue-500 font-bold rounded-lg text-white'
                                onClick={() => SignIntoProvider(provider.id, {callbackUrl: "/"})}>
                                Sign In with {provider.name}
                            </button>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

// Server Side Render
export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signin