/*
 * Copyright (c) 2020-present, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

import React, {
    useEffect
} from 'react';
import {
    Linking
} from 'react-native';
import Navigation from './navigation';
import GlobalStateProvider, {
    useGlobalState 
} from './context';
import Toast from 'react-native-simple-toast';
import storage from './storage';
import {
    getKeyAndValuesFromURLString 
} from './util';
import {
    Host
} from 'react-native-portalize';

const GlobalStateContextAPI = () => {
    const [globalState, setGlobalState] = useGlobalState();

    useEffect(() => {
        Linking.addEventListener("url", handleUri);

        return () => {
            Linking.removeAllListeners("url");
        };
    }, []);

    const handleUri = (event) => {
        try {
            const response = getKeyAndValuesFromURLString(decodeURIComponent(event.url).split('#')[1]);
            if(!response.access_token) {
                throw new Error("Token is invalid.");
            }

            storage.set("token", response.access_token);
            storage.set("refreshToken", response.refresh_token);
            setGlobalState({
                accessToken: response.access_token,
                refreshToken: response.refresh_token
            });
        } catch(e) {
            Toast.show("An error exception: " + e.message, Toast.LONG);
        }
    };

    return <Navigation/>;
};

const App = () => {
    return <GlobalStateProvider>
        <Host>
            <GlobalStateContextAPI/>
        </Host>
    </GlobalStateProvider>;
};
export default App;
