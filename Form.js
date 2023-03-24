import React from 'react'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

function Forms() {
  return (
    
    <Card className='card'>
      <CardHeader>
        <CardTitle tag='h4'>Want to Add?</CardTitle>
        <p>Fill out the form and let us know what we are missing.</p>
      </CardHeader>

      <CardBody>
        <Form>
          <Row>
            <Col md='6' sm='12'>
              <FormGroup className='formgrp'>
                {/* <Label for='nameMulti'>Your Name</Label> */}
                <Input type='text' name='name' id='nameMulti' placeholder='Your Name' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='formgrp'>
                {/* <Label for='lastNameMulti'>Your College Name</Label> */}
                <Input type='text' name='lastname' id='lastNameMulti' placeholder='Your College Name' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='formgrp'>
                {/* <Label for='cityMulti'>College Address</Label> */}
                <Input type='text' name='city' id='cityMulti' placeholder='College Address' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='formgrp'>
                {/* <Label for='CountryMulti'>College Year</Label> */}
                <Input type='text' name='country' id='CountryMulti' placeholder='College Year' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='formgrp'>
                {/* <Label for='CompanyMulti'>Phone Number</Label> */}
                <Input type='text' name='company' id='CompanyMulti' placeholder='Phone No.' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='formgrp'>
                {/* <Label for='EmailMulti'>Email</Label> */}
                <Input type='email' name='Email' id='EmailMulti' placeholder='Email' />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup className='d-flex mb-0'>
                <Button className='mr-1' color='primary' type='submit' >
                  Submit
                </Button>
                <Button outline color='secondary' type='reset'>
                  Reset
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>

  )
}

export default Forms
