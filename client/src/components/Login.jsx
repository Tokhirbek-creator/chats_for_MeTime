import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onIdSubmit(idRef.current.value);
  }

  function createNewId() {
    onIdSubmit(uuidV4());
  }

  return (
    <Container className="align-items-center d-flex flex-direction-column justify-content-center" style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} className="w-50">
        <Form.Group>
          <Form.Label>
            Введите ваш Id
          </Form.Label>
          <Form.Control type="text" placeholder="Id" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mr-3" style={{ marginRight: '2vh' }}>Логин</Button>
        <Button onClick={createNewId} variant="secondary" className="my-3">Создать новый Id</Button>
      </Form>
    </Container>
  );
}
