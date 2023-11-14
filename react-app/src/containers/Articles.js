import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import React from 'react';

const GET_ARTICLES = gql`
  query {
    articles {
      id
      author {
        id
        name
      }
      body
      createdAt
      imageUrlString
      title
      league {
        id
        title
      }
      team {
        id
        name
      }
    }
  }
`;

export default function Articles() {
  const { data, loading } = useQuery(GET_ARTICLES);
  return (
    <div>
      <h1>Articles</h1>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div>
          {data.articles.map(article => (<div key={article.id}>
            <span>{article.name}&nbsp;</span>
            <span>{article.title}</span>
            <span>{article.team}</span>
          </div>
          ))}
        </div>
      )}
    </div>
  );
}
