import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from './context/articles';
import React from 'react';
import Modal from './containers/Modal';
import ArticleFeed from './containers/ArticleFeed';
import Article from './containers/Article';
import { useState } from 'react';
import NavBar from './containers/NavBar';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/',
  // ### Seemed important in a tutorial about pagination, but haven't explored yet.
  //
//   cache: new InMemoryCache({
//     typePolicies: {
//       Query: {
//         fields: {
//           feed: {
//             read(existing, {
//               args: {
//                 offset = 0,
//                 limit = existing?.length,
//               } = {},
//             }) {
//               return existing && existing.slice(offset, offset + limit);
//             },
//             keyArgs: [],
//             merge(existing, incoming, { args: { offset = 0 }}) {
//               const merged = existing ? existing.slice(0) : [];
//               for (let i = 0; i < incoming.length; ++i) {
//                 merged[offset + i] = incoming[i];
//               }
//               return merged;
//             },
//           },
//         },
//       },
//     },
//  }),
  });

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [articleId, setArticleId] = useState('');

  const handleModalToggle = () => setToggleModal(!toggleModal)
  const handleArticleClick = (id) => setArticleId(id);

  return (
    <ApolloProvider client={client}>
      <Provider>
        <div className='App'>
        <NavBar onClick={handleModalToggle}/>
          {toggleModal && 
            <Modal onClose={handleModalToggle}/>
          }
          {articleId
            ? <Article onClick={() => setArticleId('')} id={articleId}/>
            :<ArticleFeed onClickArticle={handleArticleClick}/>
          }
          
        </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
