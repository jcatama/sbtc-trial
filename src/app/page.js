'use client';

import { useContext } from 'react';
import ConnectWallet from '../app/components/ConnectWallet';
import { UserContext } from '../app/UserContext';

export default function Home() {
    const { userSession } = useContext(UserContext);

    return (
        <div className="text-center text-white">
            <h1 className="mt-10 font-bold text-4xl text-center">sBTC Trial</h1>
            <p className="my-4 text-center">
                Decentralized lending and borrowing with sBTC
            </p>
            <>
                {!userSession.isUserSignedIn() ? (
                    <ConnectWallet userSession={userSession} />
                ) : (
                    ''
                )}
            </>
        </div>
    );
}
