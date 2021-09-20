import React, {useContext} from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./Home.scss";
import MeetupContext from "../../context/meetupContext/meetupContext";

const IncomingMeetups = () => {
  const { getMeetups } = useContext(MeetupContext);

  return (
    <Container fluid>
      <h3>Estos son tus próximos eventos!</h3>
      <Row>
        <Col xs={12} md={5} lg={3}>
          <Card>
            <Card.Text>Cantidad de invitados: 55</Card.Text>
            <Card.Text>Clima previsto: 26º</Card.Text>
            <Card.Text>Cantidad de 6-pack: 18</Card.Text>
            <Card.Footer>Te esperamos!</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default IncomingMeetups;
