import {Row, Col, Card, Container} from 'react-bootstrap';



const CityCard = ({props}) => {
    console.log({props});
  return (
    <Container className=" card-container mb-4 ">
      <Row className="g-4">
        {props.map((i) => {
          console.log({i})
          

          return (
            <Col className='col' xs={12} sm={12} md={6} lg={4}>
              <Card className='card' >

              <Card.Body>
                <Card.Title className='title' >{i.title}</Card.Title>
                <Card.Img className='img' variant="top" src={i.image} />
                  
                  <Card.Text className='text' >
                    {i.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
          );
          
        })}
      </Row>
    </Container>
  );
}

export default CityCard