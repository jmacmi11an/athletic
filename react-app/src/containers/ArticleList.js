import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import Card from './Card';
import "../styles/ArticleList.css"

const GET_ARTICLES = gql`
  query {
    articles {
      id
      title
      author {
        name
      }
      body
      createdAt
      team {
        id
        name
      }
      league {
        id
        name
      }
      imageUrlString
    }
  }
`;

export default function ArticleList({onClick, articleIdArray}) {
  const { data, loading } = useQuery(GET_ARTICLES);

  return (
    <div className="ArticleList">
      <div className='ArticleList-articles'>
        {loading ? (
          <p>Loading</p>
        ) : (
          <div className='Card-container'>
              {articleIdArray && data.articles
                .filter(article => (
                  articleIdArray.length === 0
                    ? true
                    : articleIdArray.includes(article.team.id) || articleIdArray.includes(article.league.id) // this line of code nearly killed me
                ))
                .map(article => (
                  <Card
                    key={article.id}
                    id={article.id} 
                    img={article.imageUrlString}
                    title={article.title}
                    author={article.author.name}
                    createdAt={article.createdAt}
                    onClick={onClick}
                  />
                ))
              }
              <div></div>
            </div>
        )}
        <div className='ArticleList-footer'>
            Load More
        </div>
      </div>
    </div>
  );
}
