import React from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';
import Link from 'next/link';

class Index extends React.Component{
    static async getInitialProps({req, res, query}){
        let stories;
        //console.log(query);
        let page;
        try{
            page = Number(query.page) || 1;
            const response = await fetch(`https://hn.algolia.com/api/v1/search?page=${page}`);
            stories = await response.json();
            
        } catch(err){
           console.log(err);
           stories=[];
        }
       
    
    return {
        page, stories
    };
}
    render(){
        const {stories, page}= this.props;
        if(stories.length === 0){
            return <Error statusCode={503} />;
        }
        return(
        <Layout title="Hacker news">
            <StoryList stories={stories}/>
            <footer>
                <Link href={`/?page=${page+1}`}>
                <a>Next Page ({page +1})</a>
                </Link>
            </footer>
            <style jsx>{`
            footer{
                padding: 20px;
                
            }
            footer a{
                font-family: 'Source Sans Pro', sans-serif;
                color: #ffe5b4;
                text-transform: uppercase;
                font-weight: bold;
            }
            `}</style>
        </Layout>
        ); 
    }
}
//isomorphic fetch api gives us the fetch api which we can use on the server
export default Index;