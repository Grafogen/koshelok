import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import './style.css';

const Wallet = () => (
    <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your account">
            <Tabs.Trigger className="TabsTrigger" value="tab1">
                Fast send
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="tab2">
                Fast exchange
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
            <p className="Text">There you can send some tokens to your friend</p>
            <div className='container'>
                <fieldset className="Fieldset" >
                    <label className="Label" htmlFor="name">
                        Amount
                    </label>
                    <input className="Input" id="name"  type={"number"}/>
                </fieldset>
                <fieldset className="Fieldset">
                    <label className="Label" htmlFor="username">
                        Adress
                    </label>
                    <input className="Input" id="username" />
                </fieldset>
            </div>
            <div style={{display: 'flex', marginTop: 20, justifyContent: 'flex-start'}}>
                <button className="Button green">Send </button>
            </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
            <p className="Text">There you can sell some tokens</p>
            <div style={{display: 'flex', flexDirection: 'row', }}>
                <fieldset className="Fieldset" >
                    <label className="Label" htmlFor="name">
                        Amount
                    </label>
                    <input className="Input" id="name" />
                </fieldset>
                <fieldset className="Fieldset">
                    <label className="Label" htmlFor="username">
                        Currency
                    </label>
                    <input className="Input" id="username" />
                </fieldset>
            </div>
            <div style={{display: 'flex', marginTop: 20, justifyContent: 'flex-start'}}>
                <button className="Button green">Sell</button>
            </div>
        </Tabs.Content>
    </Tabs.Root>
);

export default Wallet;