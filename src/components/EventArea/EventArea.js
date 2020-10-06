import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './EventArea.css';
import ChildSupport from '../../images/image/childSupport.png';
import SingleHomeEvents from '../SingleHomeEvents/SingleHomeEvents';
import eventsquery from '../fakeData/events';
import singleEvents from '../singleEvents/singleEvents';

const EventArea = () => {
    const [queryEvent,setQueryEvent] = useState(eventsquery);
    // const [homeEvents, setHomeEvents] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/eventHomeList')
    //     .then(res => res.json())
    //     .then(events => setHomeEvents(events))
    //     console.log('Events:', homeEvents);
    //  },[])
    return (
        <Container>
            <Row>
                {
                    queryEvent.map(ev=><SingleHomeEvents ev={ev}></SingleHomeEvents> )
                }
                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ChildSupport} />
                    <Card.Body>
                        <Card.Title>Child Support</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ChildSupport} />
                    <Card.Body>
                        <Card.Title>Child Support</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ChildSupport} />
                    <Card.Body className="text-center">
                        <Card.Title>Child Support</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                {/* {
                    homeEvents.map(ev=><SingleHomeEvents ev={ev}></SingleHomeEvents> )
                } */}
            </Row>
        </Container>
    );
};

export default EventArea;