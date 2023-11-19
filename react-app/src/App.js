import './App.css';
import ApolloClient, {InMemoryCache} from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import Modal from './containers/Modal';
import ArticleFeed from './containers/ArticleFeed';
import Article from './containers/Article';
import { useState } from 'react';
import NavBar from './containers/NavBar';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/',
  // cache: new InMemoryCache({
  //   typePolicies: {
  //     Query: {
  //       fields: {
  //         feed: {
  //           read(existing, {
  //             args: {
  //               offset = 0,
  //               limit = existing?.length,
  //             } = {},
  //           }) {
  //             return existing && existing.slice(offset, offset + limit);
  //           },
  //           keyArgs: [],
  //           merge(existing, incoming, { args: { offset = 0 }}) {
  //             const merged = existing ? existing.slice(0) : [];
  //             for (let i = 0; i < incoming.length; ++i) {
  //               merged[offset + i] = incoming[i];
  //             }
  //             return merged;
  //           },
  //         },
  //       },
  //     },
  //   },
  // }),
});

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [articleId, setArticleId] = useState('');
  const [articleIdArray, setArticleIdArray] = useState([]);

  // this is called in NavBar and Modal? 
  const handleModalClick = (idArray) => {
    setArticleIdArray(idArray)
    setToggleModal(!toggleModal)
  }
  
  const handleArticleClick = (id) => setArticleId(id);

  return (
    <ApolloProvider client={client}>
      <div className='App'>
      <NavBar onClick={handleModalClick}/>
        {toggleModal && 
          <Modal onSubmit={handleModalClick}/>
        }
        {articleId
          ? <Article onClick={() => setArticleId('')} id={articleId}/>
          :<ArticleFeed onClickArticle={handleArticleClick} articleIdArray={articleIdArray}/>
        }
        
      </div>
    </ApolloProvider>
  );
}

export default App;
