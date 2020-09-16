import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '418529240ff59a392ddc25d3e070a5fe2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if(command === 'testCommand') {
                    alert('This code was executed');
                }
            }
        })
    }, [])


    return (
        <div>
        <h1>Alain AI News App</h1>
        </div>
    );
}

export default App;