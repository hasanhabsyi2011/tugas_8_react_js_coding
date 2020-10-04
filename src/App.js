import React from 'react';

import './App.css';

import { Container, Row, Col,
  Button, Breadcrumb,
  Carousel,
  Dropdown,
  Form,
  Image, Figure,
  Jumbotron, ListGroup, Modal
  }  from "react-bootstrap"



class App extends React.Component{
  constructor()
    {
      super()
      this.state={
        show: false
      }
    }
    handleModal(){
      this.setState({show:!this.state.show})
    }


render(){
  return (

    <div>
    <Container fluid>
        <Row style={{color: 'white', backgroundColor: 'black', paddingTop:'5px'}}>
            <Col md={"auto"}>
                  <Dropdown>
                      <Dropdown.Toggle carian = "success">
                      Pilih Bahasa
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href= "/">Indonesia</Dropdown.Item>
                        <Dropdown.Item href= "/">Inggris</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
            </Col>
            <Col></Col>
            <Col md={2}>
                      <Figure>
                          <Figure.Image width={50} height={60} alt="Nasi Padang" src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" />
                          <Figure.Caption>
                              <h6 style={{color: 'white'}}>Alan Saputra</h6>
                          </Figure.Caption>
                      </Figure>
            </Col>
        </Row>

        <Row>
            <Col></Col>
            <Col></Col>
            <Col md={4}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
                    <Breadcrumb.Item active>Bola</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
        </Row>


        <Row>
            <Col  md={2}></Col>

            <Col>
                  <Carousel>
                        <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                                alt="First slide"
                              />
                              <Carousel.Caption>
                                <h5>Sani Riszki Fuazi Tegaskan Mental Pemain Timnas Indonesia U-23 tetap Bagus</h5>
                              </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                                alt="First slide"
                              />
                              <Carousel.Caption>
                                <h5>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h5>
                              </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                                alt="First slide"
                              />
                              <Carousel.Caption>
                                <h5>Inggris Mau Jadi Tim Terbaik Di Dunia</h5>
                              </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                  </Col>
                  <Col md={2}></Col>
              </Row>
                    <br />

              <Row>

                    <Col md={3}>
                        <ListGroup>
                          <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
                          <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
                          <ListGroup.Item>Divisi Primera</ListGroup.Item>
                          <ListGroup.Item>Serie A</ListGroup.Item>
                          <ListGroup.Item>Ligue 1</ListGroup.Item>
                          <ListGroup.Item>Bundes Liga</ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col>
                        <Jumbotron>
                            <h1>DIVISI PRIMERA</h1>
                            <p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
                            <Button variant="primary">Read More</Button>
                        </Jumbotron>


                    </Col>

                    <Col md={3}>
                          <center><Image src="https://www.pngkey.com/png/full/367-3670351_access-login-icon.png" style={{ width: '5rem' }}  roundedCircle  /></center>
                          <br />

                          <Form>

                          <Form.Group>
                          <Form.Control type="email" placeholder="Masukan Email" />
                          </Form.Group>

                          <Form.Group>
                          <Form.Control type="password" placeholder="Password" />
                          </Form.Group>

                          <Form.Group>
                          <Form.Check type="checkbox" label="Term & Condition" />
                          </Form.Group>

                          <div>
                              <Button onClick={()=>{this.handleModal()}}>Login</Button>
                              <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                                <Modal.Header closeButton>
                                  <Modal.Title>Login</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <p>Anda Berhasil Login</p>
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button onClick={()=>{this.handleModal()}} variant="secondary">Close</Button>
                                  <Button onClick={()=>{this.handleModal()}} variant="primary">Save Username & Password</Button>
                                </Modal.Footer>
                              </Modal>
                          </div>
                          </Form>
                    </Col>
              </Row>
    </Container>

    </div>

  );
 }
}
export default App;
