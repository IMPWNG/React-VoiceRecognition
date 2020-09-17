import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';



const App = () => {
    useEffect(() => {
        alanBtn({
          key: '418529240ff59a392ddc25d3e070a5fe2e956eca572e1d8b807a3e2338fdd0dc/stage',
          onCommand: ({ command, articles }) => {
            if (command === 'newHeadlines') {
              console.log(articles);
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