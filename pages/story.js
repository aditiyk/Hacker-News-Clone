import React from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';

import CommentList from "../components/CommentList";
class Story extends React.Component{

   static async getInitialProps({req, res, query}){
       let story;
       try{
        const storyId = query.objectID;
        const response= await fetch(`http://hn.algolia.com/api/v1/items/${storyId}`);
        story = await response.json();
       }catch(err){
          console.log(err);
          story=null;
       }
return { story };
   
    }
render(){
   const { story }= this.props;
    if(!story){
        return <Error statusCode={503} />
    }
    return (
    <Layout title ={story.title}>
        <main>
            <h1><a className="title" href={story.url}>{story.title}</a></h1>
            <div className="storyDetails">
                <strong>{story.points}</strong>
                <strong>{story.num_comments} comments</strong>
                <strong>{story._tags}</strong>
              
            </div>
            {story.comment> 0 ? (
            <CommentList comments={story.comment} />
          ) : (
            <div>No comments for this story</div>
          )}
        </main>
        <style jsx>{`
        main{
            padding: 100px;
           box-sizing:border-box;
        }
        .title{
            font-size: 50px;
            text-decoration: none;
            color: #fff;
           
        }
       
        `}</style>
    </Layout>
    );
}    
}

export default Story;