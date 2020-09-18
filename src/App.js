import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';



const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);



    useEffect(() => {
        alanBtn({
          key: '418529240ff59a392ddc25d3e070a5fe2e956eca572e1d8b807a3e2338fdd0dc/stage',
          onCommand: ({ command, articles }) => {
            if (command === 'newHeadlines') {
                setNewsArticles(articles);
                }
            },
        });
    }, []);

    return (
        <div>
            <h1>Alain AI News App</h1>
                <NewsCards articles={newsArticles} />
        </div>
    );
};

export default App;