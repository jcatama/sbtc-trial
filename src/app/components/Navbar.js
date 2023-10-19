'use client';

import Link from 'next/link';
import DisconnectWallet from './DisconnectWallet';

export default function Navbar({ userData, userSession }) {
    if (!userSession.isUserSignedIn()) return <nav></nav>;

    return (
        <nav className="flex justify-between p-4 bg-black">
            <ul className="flex justify-center space-x-4 text-white">
                <li>
                    <Link href="/" className="hover:text-blue-500">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/lend" className="hover:text-blue-500">
                        Lend
                    </Link>
                </li>
                <li>
                    <Link href="/borrow" className="hover:text-blue-500">
                        Borrow
                    </Link>
                </li>
                <li>
                    <Link href="/deposit" className="hover:text-blue-500">
                        Deposit Sats
                    </Link>
                </li>
                <li>
                    <Link href="/withdraw" className="hover:text-blue-500">
                        Withdraw sBTC
                    </Link>
                </li>
            </ul>
            <DisconnectWallet userSession={userSession} userData={userData} />
        </nav>
    );
}
