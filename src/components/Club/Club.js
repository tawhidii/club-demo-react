import React from 'react';
import { Card ,Button } from 'react-bootstrap';
import './Club.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
const Club = (props) => {
    const {strBadge,strTeam,strSport,idLeague} = props.teams
    const history = useHistory()
    const showDetails = (idLeague) =>{
        history.push(`/club-details/${idLeague}`)
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={strBadge} className="team-logo"/>
            <Card.Body>
                <Card.Title className="team-title">{strTeam}</Card.Title>
                <Card.Text className="team-title">Sports Type: {strSport} </Card.Text>
                <div className="col text-center">
                <Button variant="outline-info" onClick={()=> showDetails(idLeague)}>
                 <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> View Details
                </Button>
            </div>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Club;