import React from 'react';
import { Card ,Button } from 'react-bootstrap';
import './Club.css'
const Club = (props) => {
    const {strTeamBadge,strTeam} = props.teams


    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={strTeamBadge} className="team-logo"/>
            <Card.Body>
                <Card.Title className="team-title">{strTeam}</Card.Title>
                <div className="col text-center">
                <Button variant="primary" className="">
                    View Details
                </Button>
            </div>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Club;