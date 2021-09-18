import Link from 'next/link';

const StoryList = ({stories}) => (
    <div className="story-list">
    {stories.hits.map((story) => (
    <div className="story" key={story.id}>
        <h2 className="story-title"><a href={story.url}>{story.title}</a></h2>
        <div className="story-details">
            <span>{story.points || 0} points</span>
            <Link href={`/story?objectID=${story.objectID}`}>
            <a>{story.num_comments || 0} comments</a>
            </Link>
        </div>
    </div>
    ))}

    <style jsx>{`
    .story-list{
        padding: 0px 100px 0px 100px;
        box-sizing: border-box;

    }
    .story-title{
        font-size: 26px;
        margin:40px;
        margin-bottom: 5px;
       
        
    }
    .story-title a{
        text-decoration: none;
       color: #ffa500;
       font-family: 'Inconsolata', sans-serif;
       text-transform: uppercase;
    }
   
    
    .story-details{
        margin:10px;
        padding: 20px;
        font-style: italic;
      
    }
    .story-details a{
        text-decoration: none;
        color: #ffe5b4;
        padding: 9px;
        margin: 9px;   
        font-style: italic;
    }
  
    
    `}</style>
</div>
)

export default StoryList;