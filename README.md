# The Athletic Fullstack Take Home Challenge

There should be two folders inside, one for a backend server and one for a frontend React app. Please refer to the `README` in both folders for more information, e.g., wireframe.

## Challenge tasks

<!-- Done! An article page appears, has pretty neutral style, and looks alright at 3 breakpoints. -->
1. Create a page to render the article.

<!-- Partially done, I updated the schema and resolvers pages in apollo-server to handle a reverse chron query for articles. Although all listed articles have the same createdAt.--> 
2. Create a query in the Apollo server that returns a reverse chronological list of articles for one or more teams and/or leagues.

<!-- I have started. A Modal pops up and shows a huge list of teams right now.  Preferences are not saved.  -->
3. Create a page in the app that allows a user to select teams and/or leagues to follow, and renders a feed of articles for those teams/leagues. 
  - Note: The Teams function is merely an example of how to wire up a query, this can be discarded if not needed in your response.

## Bonus tasks

Please note the bonus tasks are not sorted in any particular order, and it’s up to you to do some (or do all/none) in whichever order you think makes sense.

1. Add pagination to the article feed.
2. Implement hot reloading for the Apollo server.
3. Write tests for the Apollo server.
4. Write tests for the React application.
5. Add caching to the Apollo server to prevent calls to the REST API on every request.

Return your challenge in a shared folder with the two folders inside, do not bundle `node_modules` with either to keep the size down.
