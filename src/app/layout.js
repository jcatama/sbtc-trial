'use client';

import React, { useState, useEffect } from 'react';
import { AppConfig, UserSession } from '@stacks/connect';
import { Inter } from 'next/font/google';
import { UserContext } from './UserContext';
import Navbar from './components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    const [userData, setUserData] = useState({});
    const appConfig = new AppConfig();
    const userSession = new UserSession({ appConfig });

    useEffect(() => {
        if (userSession.isSignInPending()) {
            userSession.handlePendingSignIn().then((userData) => {
                setUserData(userData);
            });
        } else if (userSession.isUserSignedIn()) {
            setUserData(userSession.loadUserData());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <html>
            <body suppressHydrationWarning={true} className={inter.className}>
                <div>
                    {userData ? (
                        <UserContext.Provider value={{ userData, userSession }}>
                            <Navbar
                                userSession={userSession}
                                userData={userData}
                                setUserData={setUserData}
                            />
                            {children}
                        </UserContext.Provider>
                    ) : (
                        ''
                    )}
                </div>
            </body>
        </html>
    );
}
