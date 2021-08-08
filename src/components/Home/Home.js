import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Club from '../Club/Club';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const[teams,setTeams] = useState([])
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England'
        fetch(url)
        .then(response=>response.json())
        .then(data=>setTeams(data.countrys))
    },[])
    return (
        <div className="home">
        <div>
            <Header></Header>
        </div>
        <div className="team-list">
            {
                teams.map(team=><Club key={team.idLeague} teams={team}></Club>)
            }
        </div>
        </div>
     
    );
};

export default Home;