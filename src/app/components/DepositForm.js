'use client';

import { useState, useContext } from 'react';
import { sbtcDepositHelper, TESTNET, TestnetHelper } from 'sbtc';
import { bytesToHex, hexToBytes } from '@noble/hashes/utils';
import * as btc from '@scure/btc-signer';

import { UserContext } from '../UserContext';

export default function DepositForm() {
    const { userData } = useContext(UserContext);
    const [satoshis, setSatoshis] = useState('');

    const handleInputChange = (event) => {
        setSatoshis(event.target.value);
    };

    const buildTransaction = async (e) => {
        e.preventDefault();
        const testnet = new TestnetHelper();

        const btcAddress = userData.profile.btcAddress.p2wpkh.testnet;
        const btcPublicKey = userData.profile.btcPublicKey.p2wpkh;

        let utxos = await testnet.fetchUtxos(btcAddress);

        const response = await fetch(process.env.NEXT_PUBLIC_SBTC_BRIDGE_URL);
        const data = await response.json();
        const pegAddress = data.sbtcContractData.sbtcWalletAddress;

        const tx = await sbtcDepositHelper({
            network: TESTNET,
            pegAddress,
            stacksAddress: userData.profile.stxAddress.testnet,
            amountSats: satoshis,
            feeRate: await testnet.estimateFeeRate('low'),
            utxos,
            bitcoinChangeAddress: btcAddress,
        });

        const psbt = tx.toPSBT();
        const requestParams = {
            publicKey: btcPublicKey,
            hex: bytesToHex(psbt),
        };
        const txResponse = await window.btc.request('signPsbt', requestParams);
        const formattedTx = btc.Transaction.fromPSBT(
            hexToBytes(txResponse.result.hex)
        );
        formattedTx.finalize();
        const finalTx = await testnet.broadcastTx(formattedTx);
        console.log(finalTx);
    };

    return (
        <form className="flex items-center justify-center space-x-4">
            <input
                type="number"
                placeholder="Amount of Sats to deposit"
                className="w-1/3 px-4 py-2 text-gray-300 bg-gray-700 rounded focus:outline-none"
                value={satoshis}
                onChange={handleInputChange}
            />
            <button
                type="submit"
                className="px-6 py-2 bg-blue-500 rounded focus:outline-none"
                onClick={buildTransaction}
            >
                Deposit Sats
            </button>
        </form>
    );
}
