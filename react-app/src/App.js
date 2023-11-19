import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import Modal from './containers/Modal';
import ArticleList from './containers/ArticleList';
import Article from './containers/Article';
import { useState } from 'react';
import NavBar from './containers/NavBar';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/',
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
  
  const handleArticleClick = (id) => {
    setArticleId(id);
  }

  return (
    <ApolloProvider client={client}>
      <div className='App'>
      <NavBar onClick={handleModalClick}/>
        {toggleModal && 
          <Modal onSubmit={handleModalClick}/>
        }
        {articleId
          ? <Article onClick={() => setArticleId('')} id={articleId}/>
          :<ArticleList onClick={handleArticleClick} articleIdArray={articleIdArray}/>
        }
        
      </div>
    </ApolloProvider>
  );
}

export default App;
