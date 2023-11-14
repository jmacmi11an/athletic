import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import React from 'react';

const GET_TEAMS = gql`
  query {
    teams {
      id
      createdAt
      name
      league {
        id
        title
      }
    }
  }
`;

export default function Teams() {
  const { data, loading } = useQuery(GET_TEAMS);
  return (
    <div>
      <h1>Teams</h1>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div>
          {data.teams.map(team => (<div key={team.id}>
            <span>{team.name}&nbsp;</span>
            <span>{team.league.title}</span>
          </div>
          ))}
        </div>
      )}
    </div>
  );
}
