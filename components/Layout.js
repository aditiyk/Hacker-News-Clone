import Link from 'next/link';
import Head from 'next/head';

const Layout = ({children, title}) => (
<div>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet" />
        <title>{title}</title>
    </Head>
<div className="container  " >
    <nav>
        <Link href="/">
        <a>
            <span className="main-title">Hacker News Website</span>
        </a>
        </Link>
    </nav>
    {children}
</div>
<style jsx>{`
.container{
    max-width: 1000vh;
    background-color: rgba(0,0,0, 0.5);
    border: 10px solid ;
    border-image: linear-gradient(to right,  #fffafa, #ff8c00 );
    border-image-slice: 1;
    color:#fffaf0; 
}
nav{
    background-color: #fff;
    display: inline-block;
    width: 1384px;
    
}

nav a{
    text-decoration:none;
}
nav .main-title{
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
    color: #ffe5b4;
    font-size: 20px;
}


`}
</style>
<style global jsx>
    {`
    *{
        box-sizing: border:box;
    }
    body{
        
        background-color: rgb(20,20,20);
        padding:50px;
    }`}
</style>
</div>
)
export default Layout;