import React, { useState, useContext } from "react";
import { Form, Container, Alert } from "react-bootstrap";
import "./Home.scss";
import { beerAmountCount } from "../../utils/utilBirras";
import MeetupContext from "../../context/meetupContext/meetupContext";

const NewMeetup = () => {
  const { addMeetup } = useContext(MeetupContext);

  const [climate, setclimate] = useState(24);
  const [beerAmount, setBeerAmount] = useState(1);
  const [newMeet, setNewMeet] = useState({
    date: "",
    guests: "",
    email: "",
    beer: "",
  });

  const { date, guests, email, beer } = newMeet;

  // const minDate =()=> {
  //   const today = new Date().toLocaleString()
  //   console.log(today)
  // }
  // minDate()

const beerTotal = () => {
    beerAmountCount(climate, guests);
    setBeerAmount(beerAmountCount)
    console.log(beerAmount)
  };
  
    const handleChange = (e) => {
      setNewMeet({ ...newMeet, [e.target.name]: e.target.value });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMeetup(newMeet)
    console.log(newMeet)
  };

  return (
    <Container fluid>
      <h3>Creá un nuevo evento!</h3>

      <Form action="post">
        <Form.Group className="mb-3">
          <Form.Label>
            Elegí cuándo querés hacer el evento, y vamos a calcular cuánta
            cerveza necesitás!
            <Form.Control
              size="lg"
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
              // min={minDate}
              required
            />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Cuánta gente vas a invitar?
            <Form.Control
              size="lg"
              type="number"
              name="guests"
              value={guests}
              onChange={handleChange}
              placeholder="5"
              required
            />
          </Form.Label>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Dejanos un mail para avisarte novedades!
            <Form.Control
              size="lg"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="juan@gmail.com"
              required
            />
          </Form.Label>
        </Form.Group>

        <Alert variant="dark">
          <Alert.Heading>Ya casi estás!</Alert.Heading>
          <p>
            Vamos a prepararte <strong>{beerAmount}</strong> 6-pack de cerveza!
            No te preocupes, nosotros nos ocupamos de todo por vos.
          </p>
        </Alert>

        <button className="newMeet" onClick={handleSubmit}>
          Creá tu evento!
        </button>
      </Form>
    </Container>
  );
};

export default NewMeetup;
