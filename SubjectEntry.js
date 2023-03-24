import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

function SubjectEntry() {
        const [eng,setEng]=useState(0);
        const [sci,setSci]=useState(0);
        const [his,setHis]=useState(0);
        const [total,setTotal]=useState();
        const[grade,setGrade]=useState()



const addHandler=()=>{
    
     setTotal(Number(eng) + Number(sci) + Number(his)) ;
    // setGrade ((Number(total)/Number(300))*Number(100));
     //setGrade ((Number(total)/Number(300)*Number(100)).toFixed(2));
     console.log(grade);

}


  return (
    <Card className='card'>
      <CardHeader>
        <CardTitle tag='h4'>Enter your marks here..</CardTitle>
        {/* <p>Fill out the form and let us know what we are missing.</p> */}
      </CardHeader>

      <CardBody>
        <Form>
          <Row>
            <Col md='6' sm='6'>
              <FormGroup className='formgrp'>
                <Label for='nameMulti'>English</Label>
            <Input type='text' name='English' id='nameMulti'  onChange={(e)=>{setEng(e.target.value)}} />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='formgrp'>
                <Label for='lastNameMulti'>Science</Label>
                <Input type='text' name='Science' id='lastNameMulti'  onChange={(e)=>{setSci(e.target.value)}} />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='formgrp'>
                <Label for='cityMulti'>History</Label>
                <Input type='text' name='History' id='cityMulti' onChange={(e)=>{setHis(e.target.value)}} />
              </FormGroup>
            </Col>
          
            <Col sm='12'>
              <FormGroup className='d-flex mb-0'>
                <Button className='mr-1' color='primary' onClick={addHandler} >
                  Add
                </Button>
                {/* <Button outline color='secondary' type='reset'>
                  Reset
                </Button> */}
                   <p>Total Score:{total}</p>
                   {/* <p>Result:{grade}% ,{grade >= 35 ?'pass':'fail'}</p> */}
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )


}

export default SubjectEntry
