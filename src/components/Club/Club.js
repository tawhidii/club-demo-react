import React from 'react';
import { Card ,Button } from 'react-bootstrap';
import './Club.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
const Club = (props) => {
    const {strTeamBadge,strTeam,strSport} = props.teams


    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={strTeamBadge} className="team-logo"/>
            <Card.Body>
                <Card.Title className="team-title">{strTeam}</Card.Title>
                <Card.Text className="team-title">Sports Type: {strSport} </Card.Text>
                <div className="col text-center">
                <Button variant="outline-info" className="">
                 <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> View Details
                </Button>
            </div>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Club;