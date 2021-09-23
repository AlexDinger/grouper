import React, { useState } from 'react'
import OffCanvas from 'react-bootstrap/Offcanvas'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { addTrip } from '../firebase/test'

const AddTripForm = ({ show, isOpen, uid }) => {
  const [name, setName] = useState('')
  const [members, setMembers] = useState(0)
  const [description, setDesc] = useState('')

  const handleClose = () => isOpen(false)
  const handleSubmit = e => {
    e.preventDefault()
    const tripData = {
      name: name,
      members: members,
      description: description
    }
    addTrip(tripData, uid)
  }

  return (
    <OffCanvas
      show={show}
      onHide={handleClose}
      placement="bottom"
      style={{ height: 'auto' }}
    >
      <OffCanvas.Header closeButton>
        <OffCanvas.Title>Add Trip</OffCanvas.Title>
      </OffCanvas.Header>
      <OffCanvas.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Trip Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Vegas Trip"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="members">
            <Form.Label># of Members</Form.Label>
            <Form.Control
              type="number"
              value={members}
              onChange={e => setMembers(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Trip to Las Vegas with friends in 2021"
              value={description}
              onChange={e => setDesc(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </OffCanvas.Body>
    </OffCanvas>
  )
}

export default AddTripForm
