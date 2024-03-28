import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import './style.css';
import {BaseError, useSendTransaction, useWaitForTransactionReceipt} from "wagmi";
import {parseEther} from "viem";

const Wallet = () => {

    const {
        data: hash,
        error,
        isPending,
        sendTransaction
    } = useSendTransaction()

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const to = formData.get('address') as `0x${string}`
        const value = formData.get('value') as string
        sendTransaction({to, value: parseEther(value)})
    }

    const {isLoading: isConfirming, isSuccess: isConfirmed} =
        useWaitForTransactionReceipt({
            hash,
        })

    return (
        <Tabs.Root className="TabsRoot" defaultValue="tab1">
            <Tabs.List className="TabsList" aria-label="Manage your account">
                <Tabs.Trigger className="TabsTrigger" value="tab1">
                    Fast send
                </Tabs.Trigger>
                {/*<Tabs.Trigger className="TabsTrigger" value="tab2">*/}
                {/*    Fast exchange*/}
                {/*</Tabs.Trigger>*/}
            </Tabs.List>
            <Tabs.Content className="TabsContent" value="tab1">
                <p className="Text">There you can send some tokens to your friend</p>
                <form onSubmit={submit} className='box'>
                    <div className='container'>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="name">
                                Amount
                            </label>
                            <input name='value' className="Input" id="name"  placeholder="0.05" required />
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="username">
                                Address
                            </label>
                            <input name='address' className="Input" id="username" placeholder="0xA0Cf…251e" required/>
                        </fieldset>
                    </div>
                    <div className='button'>
                        <button className="Button green" disabled={isPending} type="submit"> {isPending ? 'Confirming...' : 'Send'}
                        </button>
                        {hash && <div>Transaction Hash: {hash}</div>}
                        {isConfirming && <div>Waiting for confirmation...</div>}
                        {isConfirmed && <div>Transaction confirmed.</div>}
                        {error && (
                            <div>Error: {(error as BaseError).shortMessage || error.message}</div>
                        )}
                    </div>
                </form>
            </Tabs.Content>
            {/*<Tabs.Content className="TabsContent" value="tab2">*/}
            {/*    <p className="Text">There you can sell some tokens</p>*/}
            {/*    <div style={{display: 'flex', flexDirection: 'row',}}>*/}
            {/*        <fieldset className="Fieldset">*/}
            {/*            <label className="Label" htmlFor="name">*/}
            {/*                Amount*/}
            {/*            </label>*/}
            {/*            <input className="Input" id="name"/>*/}
            {/*        </fieldset>*/}
            {/*        <fieldset className="Fieldset">*/}
            {/*            <label className="Label" htmlFor="username">*/}
            {/*                Currency*/}
            {/*            </label>*/}
            {/*            <input className="Input" id="username"/>*/}
            {/*        </fieldset>*/}
            {/*    </div>*/}
            {/*    <div style={{display: 'flex', marginTop: 20, justifyContent: 'flex-start'}}>*/}
            {/*        <button className="Button green">Sell</button>*/}
            {/*    </div>*/}
            {/*</Tabs.Content>*/}
        </Tabs.Root>
    )
};

export default Wallet;