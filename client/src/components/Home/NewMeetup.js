import React, { useState, useContext, useEffect } from "react";
import { Form, Container, Alert } from "react-bootstrap";
import "./Home.scss";
import { beerAmountCount } from "../../utils/utilBirras";
import MeetupContext from "../../context/meetupContext/meetupContext";
import {
  getToday,
  getFortnight,
  mediumConvertIsoToDays,
  daysFromToday,
} from "../../utils/utilDate";

const NewMeetup = () => {
  const { addMeetup, getTemp, temp } = useContext(MeetupContext);

  const [degrees, setDegrees] = useState(26);
  const [beerAmount, setBeerAmount] = useState(0);
  const [guestsAmount, setGuestsAmount] = useState(0);
  const [daysFromNow, setDaysFromNow] = useState(0);
  const [newMeet, setNewMeet] = useState({
    date: "",
    guests: "",
    email: "",
    temp: "",
    beerAmount: "",
  });

  const { date, guests, email, beer, climate} = newMeet;

  //envío la cantidad de días a futuro en que va a ser el evento
  useEffect(() => {
    const today = new Date(Date.now());
    const meetupDay = new Date(date);
    const diff = daysFromToday(today, meetupDay) + 1;
    setDaysFromNow(diff);
    getTemp(daysFromNow);
    setDegrees(temp);
  }, [date]);

  useEffect(() => {
    setGuestsAmount(guests);
  }, [guests]);

  useEffect(() => {
    let totalBeer = beerAmountCount(degrees, guests);
    setBeerAmount(totalBeer);
  }, [degrees, guests, beer, climate]);

  const handleChange = (e) => {
    setNewMeet({ ...newMeet, [e.target.name]: e.target.value }, temp, beerAmount);
    console.log("newMeet", newMeet);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewMeet({
      date: "",
      guests: "",
      email: "",
      temp: "",
      beerAmount: "",
    });
    addMeetup(newMeet);
  };

  return (
    <Container fluid className="p-3">
      <h3 className="mb-5">Creá un nuevo evento!</h3>

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
              min={getToday()}
              max={getFortnight()}
              required
            />
          </Form.Label>
        </Form.Group>
        {date && (
          <p>
            Buena fecha! El <strong> {mediumConvertIsoToDays(date)}</strong> va
            a hacer {temp} grados!
          </p>
        )}

        <Form.Group className="mb-3">
          <Form.Label>
            Cuánta gente vas a invitar?
            <Form.Control
              size="lg"
              type="number"
              name="guests"
              value={guests}
              onChange={handleChange}
              placeholder="todos tus amigos!"
              min={1}
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

        {/* hidden inputs to get the amounts */}

        <Form.Group className="displayNone" >
          <Form.Label>
            Cerveza
            <Form.Control
              type="number"
              name="beerAmount"
              value={beerAmount}
              onChange={handleChange}
              min={1}
              disabled
            />
          </Form.Label>
        </Form.Group>

        <Form.Group className="displayNone" >
          <Form.Label>
            Temperatura
            <Form.Control
              type="number"
              name="temp"
              value={temp}
              onChange={handleChange}
              min={1}
              disabled
            />
          </Form.Label>
        </Form.Group>

        {beerAmount != 0 && (
          <Alert variant="dark">
            <Alert.Heading>Ya casi estás!</Alert.Heading>
            <p>
              Vamos a prepararte <strong>{beerAmount}</strong> 6-pack de cerveza
              para tus {guestsAmount} amigos! No te preocupes, nosotros nos
              ocupamos de todo por vos.
            </p>
          </Alert>
        )}

        <button className="newMeet mt-3" onClick={handleSubmit}>
          Creá tu evento!
        </button>
      </Form>
    </Container>
  );
};

export default NewMeetup;
