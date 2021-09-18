import Link from 'next/link';
import Head from 'next/head';

const Layout = ({children, title}) => (
<div>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet" />
        <title>{title}</title>
    </Head>
    <nav className="navigation">
        <Link href="/">
        <a>
            <span className="main-title">Hacker News Clone</span>
        </a>
        </Link>
    </nav>
<div className="container  " >
    {children}
</div>
<style jsx>{`

.navigation{
    background-color: rgba(0,0,0, 0.7);
    height: 82px;
    width: 100%;
    overflow: hidden;
    display: block;
    position: fixed;
    top: 0;
    margin:0;
    padding:0;
    box-sizing: border-box;
    
}
.container{
    padding-top:100px;
    max-width: 500vh;
    background-color: rgba(0,0,0, 0.5);
    border: 10px solid ;
    border-image: linear-gradient(to right,  #fffafa, #ff8c00 );
    border-image-slice: 1;
    color:#fffaf0; 
    background-image: linear-gradient(20deg, rgba(255,140,0, 0.3),rgba(0,0,0, 0.5));
    border-top: 0px;
}
nav a{
    text-decoration:none;  
    margin-top: 10px;
    
}

nav .main-title{
    font-family: 'Inconsolata', sans-serif;
    font-weight: bold;
    color: #ffefd5;
    font-size: 28px;
    padding-top: 10px;
    padding-left:50px;
}


`}
</style>
<style global jsx>
    {`
    *{ 
        box-sizing: border:box;
    }
    body{
        margin:0;
        background-color: rgb(20,20,20);
        
    }`}
</style>
</div>
)
export default Layout;