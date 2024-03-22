'use client'
import React, {useState} from 'react';
import { ethers } from 'ethers'

const Page = () => {

const [userAccount, setUserAccount]=useState('')
const [balance, setBalance]=useState('')

    const onConnected=()=>{
        if(window.ethereum){
            window.ethereum.request({method:'eth_requestAccounts'}).then((acc:any)=>{
                console.log(acc)
                setUserAccount(acc[0])
                onBalance(acc[0])

            })
                .catch((e:any)=>{
                    console.error(e)
                })
        }
        else{
            alert('скача мету')
        }
    }

    const onBalance =  (account:any)=>{
     window.ethereum.request({
        method:'eth_getBalance',
        params: [
            account,
            'latest'
        ]
    }).then((res:any)=>{
         setBalance(ethers.formatEther(res))

     }).catch((e:any)=>{
         console.log(e)
     })
    }


    return (
        <>
          koshelok
            <>
                {userAccount
                    ?(
                        <>
                        <div>ACCOUNT: {userAccount}</div>
                        <div>Balance: {balance}</div>
                    </>
                    )
                    :<>111</>
                }
            </>
            <button onClick={onConnected}>CONNECT</button>
        </>
    );
};

export default Page;