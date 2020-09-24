import React from 'react';
import Layout from '../components/layout';
import NewsCards from '../components/NewsCards/NewsCards'

const News = ({location}) => {
    return (
        <Layout>
             <NewsCards />
        </Layout>
    )
}

export default News;