# Hacker News Clone App
Hacker News App Clone built using Next.JS and HN search API that is built on top of Algolia Search's API.
As the initial setup, a next.js app was created using 'create-next-app'. For a custom server a dev script was created and
to run it the 'npm run dev' command was used. The first page of new stories was fetched using the fetch api 
which we can  use on the server by installing the isomorphic-fetch package. For error handling, a try catch block was used.
We 'try' getting the data from request and if its unsuccessful(ie., there's an error on the server side) we return an error page.
Upon clicking a search result, the user is taken to the post detail screen where the number of comments along with
the title are shown. For the overall layout structure of the app, a separate layout page was create and then imported into our
index.js file. Lastly, some basic navigation was added and the next page of stories was fetched.
--------------------------------------------------------------------------------------------------------------


To run this use the command: **npm run dev**

Preview:

![hn](https://user-images.githubusercontent.com/85080181/133884921-0e8fb23b-8ecd-4abc-974c-2d1aa9c9cb2f.PNG)
