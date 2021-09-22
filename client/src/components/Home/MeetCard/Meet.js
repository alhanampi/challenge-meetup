import React from "react";
import { convertIsoToDays } from "../../../utils/utilDate";
import { Card } from "react-bootstrap";

const Meet = ({ index, meets }) => {
  const { email, guestAmount, climate, beerAmount, date } = meets;
  return (
    <>
      <Card key={index}>
        <Card.Header>
          <Card.Title>Anfitrión: {email}</Card.Title>
        </Card.Header>
        <Card.Body className="p-2">
          <Card.Text>Cantidad de invitados: {guestAmount}</Card.Text>
          <Card.Text>Clima previsto: {climate}º</Card.Text>
          <Card.Text>Cantidad de 6-pack: {beerAmount}</Card.Text>
          <Card.Text>Fecha: {convertIsoToDays(date)}</Card.Text>
        </Card.Body>
        <Card.Footer>Te esperamos!</Card.Footer>
      </Card>
    </>
  );
};

export default Meet;
