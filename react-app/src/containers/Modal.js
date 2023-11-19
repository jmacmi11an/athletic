import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import React from "react"
import { useEffect, useState} from "react";
import Select from 'react-select';
import "../styles/Modal.css"

 const GET_TEAMS = gql`
    query {
        teams {
            name
            id
        }
        leagues {
            name
            id
        }

    }
 `;

function Modal({onSubmit, children}) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [])

    const { data, loading } = useQuery(GET_TEAMS);

    const [teamsArray, setTeamsArray] = useState([])
    const [leaguesArray, setLeaguesArray] = useState([]);
    const [selectedTeams, setSelectedTeams] = useState([])
    const [selectedLeagues, setSelectedLeagues] = useState([]);

    useEffect(() => {
        if (!loading && data) {
          setTeamsArray(data.teams);
          setLeaguesArray(data.leagues);
        }
      }, [loading, data]);

    // Helper function to convert data into React-Select required array of objects with keys of value and label
    const mapArrayOfObjects = (dataArray) => {
        return dataArray.map((data) => ({
            value: data.id,
            label: data.name
        }));
    };

    const teamsObject = mapArrayOfObjects(teamsArray)
    const leaguesObject = mapArrayOfObjects(leaguesArray);

    const handleSubmit = (event) => {
        event.preventDefault()
        const teamsIdArray = selectedTeams.map((team) => team.value)
        const leaguesIdArray = selectedLeagues.map((league) => league.value)
        const articleIdArray = [...teamsIdArray, ...leaguesIdArray]
        onSubmit(articleIdArray)
    }

    return (
        <div className='Modal'>
            <div className='Modal-container'>
                Select Your Favorite Teams and Leagues
                {children}
                <form onSubmit={handleSubmit}>
                    { loading ? (
                        <p>Loading</p>
                    ) : (   
                        <>
                            <div className='Select-container'>
                                <Select onChange={(event) => setSelectedTeams(event)} closeMenuOnSelect={false} isMulti options={teamsObject}/>
                            </div> 
                            <div className='Select-container'>
                                <Select onChange={(event) => setSelectedLeagues(event)} closeMenuOnSelect={false} isMulti options={leaguesObject}/>
                            </div> 
                        </>

                    )}
                    <button className='Modal-action-bar'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default Modal