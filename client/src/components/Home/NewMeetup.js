import React, { useState, useContext, useEffect } from "react";
import { Form, Container, Alert } from "react-bootstrap";
import "./Home.scss";
import { beerAmountCount } from "../../utils/utilBirras";
import MeetupContext from "../../context/meetupContext/meetupContext";
// import {UtilClimate} from "../../utils/utilClimate";
import {
  getToday,
  getFortnight,
  mediumConvertIsoToDays,
} from "../../utils/utilDate";

const NewMeetup = () => {
  const { addMeetup } = useContext(MeetupContext);

  const [climate, setclimate] = useState(24);
  const [beerAmount, setBeerAmount] = useState(0);
  const [newMeet, setNewMeet] = useState({
    date: "",
    guests: "",
    email: "",
    beer: "",
  });

  const { date, guests, email, beer } = newMeet;



  const handleChange = (e) => {
    setNewMeet({ ...newMeet, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    addMeetup(newMeet);
    console.log(newMeet);
  };

  // const getClimate =(date)=> {
  //   //la idea es sacar la diferencia entre la fecha actual y la ingresada, luego recorrer el array que devuelva el util de clima y tomar el temp que corresponda a ese índice

  //   const meetupDate = date
  //   const getDays = getToday - date

  //   UtilClimate(climate)
  //   setclimate()
  // }

  //una vez que tenga la temperatura con getClimate, puedo pasar esos datos para hacer el cálculo
  const beerTotal = () => {
    beerAmountCount(25, 3);
    setBeerAmount(beerAmountCount);
    console.log(beerAmount);
  };

  useEffect(() => {
    beerTotal()
    
  }, [])

  return (
    <Container fluid className="p-3">
      {/* <UtilClimate /> */}
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
            Buena fecha! El <strong> {mediumConvertIsoToDays(date)}</strong> va a hacer {climate} grados!
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

{beerAmount !== 0 &&
        <Alert variant="dark">
          <Alert.Heading>Ya casi estás!</Alert.Heading>
          <p>
            Vamos a prepararte <strong>{ beerAmount}</strong> 6-pack de cerveza!
            No te preocupes, nosotros nos ocupamos de todo por vos.
          </p>
        </Alert>
    }

        <button className="newMeet mt-3" onClick={handleSubmit}>
          Creá tu evento!
        </button>
      </Form>
    </Container>
  );
};

export default NewMeetup;
