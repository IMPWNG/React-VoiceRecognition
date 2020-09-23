import React, { useState, useEffect } from 'react';


import alanBtn from '@alan-ai/alan-sdk-web';

import wordsToNumbers from 'words-to-numbers';

import HeaderApp from './components/Header/Header';


import useStyles from './styles.js';
import 'semantic-ui-css/semantic.min.css';







const App = () => {
    const [activeArticle, setActiveArticle] = useState(0);
    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();

  

    useEffect(() => {
        alanBtn({
          key: '418529240ff59a392ddc25d3e070a5fe2e956eca572e1d8b807a3e2338fdd0dc/stage',
          onCommand: ({ command, articles, number }) => {
            if (command === 'newHeadlines') {
              setNewsArticles(articles);
              setActiveArticle(-1);
            } else if (command === 'highlight') {
              setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
            } else if (command === 'open') {
              const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
              const article = articles[parsedNumber - 1];
              if (parsedNumber > 20) {
                alanBtn().playText('Please try that again...');
              } else if (article) {
                window.open(article.url, '_blank');
                alanBtn().playText('Opening...');
              }
            }
          },
        });
      }, []);

    return (
        <div>
       

            
               
                <HeaderApp />
               
        </div>
    );
};

export default App;