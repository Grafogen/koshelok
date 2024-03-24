'use client'
import React, {useEffect, useState} from 'react';
import { ethers } from 'ethers'
import Web3 from 'web3';

const Page = () => {

const [userAccount, setUserAccount]=useState('')
//const [balance, setBalance]=useState('')
    //
    // const onConnected=()=>{
    // const provider=new ethers.EtherscanProvider
    //     if(window.ethereum){
    //         window.ethereum.request({method:'eth_requestAccounts'}).then((acc:any)=>{
    //             console.log(acc)
    //             setUserAccount(acc[0])
    //             onBalance(acc[0])
    //
    //         })
    //             .catch((e:any)=>{
    //                 console.error(e)
    //             })
    //     }
    //     else{
    //         alert('скача мету')
    //     }
    // }
    //
    // useEffect(() => {
    //     fetch(`https://api.etherscan.io/api?module=account&action=txlistinternal&address=${userAccount}&endblock=2702578&page=1&offset=10&sort=asc&apikey=XI67VVMYANJ7R4S64DNMPKRH4SGDC8H4XW`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         });
    // }, [userAccount]);
    //
    // const onBalance =  (account:any)=>{
    //  window.ethereum.request({
    //     method:'eth_getBalance',
    //     params: [
    //         account,
    //         'latest'
    //     ]
    // }).then((res:any)=>{
    //      setBalance(ethers.formatEther(res))
    //
    //  }).catch((e:any)=>{
    //      console.log(e)
    //  })
    // }

    const provider = window.ethereum;

// Initialize web3 instance
    const web3 = new Web3(provider);
const kosh = async ()=> {
// Get currently selected account
        const accounts = await web3.eth.getAccounts();
    console.log(accounts)
// Get network ID to check if correct network
        const networkId = await web3.eth.net.getId();
    console.log(networkId)
// BSC Mainnet network id
        const targetNetworkId = 56;

// Check network
        if (networkId !== BigInt(targetNetworkId)) {
            console.log(networkId)
            console.log("Wrong network! Switch to BSC");
            return;
        }

// Call contract method to get balance of selected account
        const balance = await web3.eth.getBalance(accounts[0]);

// Output balance
        console.log(web3.utils.fromWei(balance, 'ether'), 'BNB')
    }
    return (
        <>
          koshelok
            <>
                {userAccount
                    ?(
                        <>
                        <div>ACCOUNT: {userAccount}</div>
                        <div>Balance: {}</div>
                    </>
                    )
                    :<>111</>
                }
            </>
            <button onClick={kosh}>CONNECT</button>
        </>
    );
};

export default Page;