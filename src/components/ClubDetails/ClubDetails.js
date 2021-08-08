import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ClubDetails.css'
import male from '../../media/images/male.png'
import female from '../../media/images/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'



const ClubDetails = () => {
    let {cId} = useParams()
    const [clubName,setClubName] = useState({})
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${cId}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>setClubName(data.leagues[0]))
    },[])
    console.log(clubName)
    const {strBadge,strGender,strLeague} = clubName
    return (
        <div className="club-details">
            <div className="club-detail-banner">
                <img src={strBadge} alt="" />
            </div>
            <div className="club-card">
                <img src={strGender === 'Male' ? male:female} alt="" />
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default ClubDetails;