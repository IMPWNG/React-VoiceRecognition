import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js'



const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();



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
            <div className={classes.logoContainer}>
                <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="logo" />
            </div>
                <NewsCards articles={newsArticles} />
        </div>
    );
};

export default App;