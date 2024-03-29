import React, { useEffect } from "react";
import Granim from 'granim';
import { Container, Row, Col, Card, CardImg, CardText } from "react-bootstrap";
import lgCandle from "../../assets/hero.png";
import createPic from "../../assets/logo.jpg";
import craftFair from "../../assets/craft.png";
import hero from "../../assets/secondHero.png";
import brandPic from "../../assets/brandingNoback.png";
import eventsPic from "../../assets/JoinUs.png";

const styles = {
  container: {
    margin: "0 auto",
    border: "none",
    position: "relative",
    backgroundColor: "#CFB4A4",
    paddingTop: '10px'
  },
  col: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  card: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    border: "none",
  },
  imageContainer: {
    width: '100%', 
    height: '50%',
  },
  image:{
    width: '100%', 
    height: 'auto',
  },
  heroCard: {
    overflow: "hidden",
    border: "none",
    backgroundColor: "#CFB4A4",
  },
  brandCard: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CFB4A4",
    border: "none",
    padding: 0,
  },
  brandCardBody: {
    backgroundColor: "#CFB4A4",
    border: "none",
    padding: 0,
  },
  cardBody: {
    backgroundColor: "#f8f9fa",
    border: "none",
    padding: 0,
  },
  blockquote: {
    padding: "20px",
    border: "none",
    position: "relative",
    zIndex: 1,
  },
  eventCard: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    border: "none",
    borderRadius: "15px", 
    overflow: "hidden", 
  },
  eventCardBody: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CFB4A4",
    border: "none",
    padding: 0,
    boxShadow: "none",
  },
  paddingLeft: {
    paddingLeft: "40px",
  },
  canvas: {
    position: "absolute",
    top: "38%", 
    transform: "translateY(-50%)", 
    left: 0,
    width: "100%",
    height: "8%",
    zIndex: 0,
    backgroundColor: "#CFB4A4",
    },
  break: {
    paddingTop: '1%',
    backgroundColor: "#CFB4A4",
  },
  div: {

    paddingTop: "15px"
  },
  brandImage: {
    height: 'auto',
    width: '80%', 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10px"
  },
  background: {
    backgroundColor: "#CFB4A4",
  },
  eventImage: {
    backgroundColor: "#CFB4A4",
    width: '80%', 
    height: 'auto',
    paddingTop: '30px',
    paddingBottom: '30px',
  },
  eventText: {
    padding: "300px", 
  width: "100%", 
  textAlign: "center", 
  zIndex: 1,
  }
  
};

export default function Home() {
  useEffect(() => {
    try {
      var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'left-right',
        isPausedWhenNotInView: true,
        states: {
          "default-state": {
            gradients: [
              ['#ff9966', '#ff5e62'],
              ['#00F260', '#0575E6'],
              ['#e1eec3', '#f05053']
            ]
          }
        }
      });
    } catch (error) {
      console.error('Error initializing Granim:', error);
    }
  }, []);
  
  return (
    <div style={styles.container}>
      <div style={styles.eventCardBody}>
      <img style={styles.image} src={hero} alt="" />
      </div>
      {/* <Row className="hero-product-card">
        <Card>
          <CardImg style={styles.image} src={hero}/> */
          /* <Card.Body style={{ ...styles.cardBody, padding: '0 !important'}}>
            <Row>
              <Col style={styles.col}>
                <Card.Img style={styles.image} src={lgCandle}/>
              </Col>
              <Col style={styles.col}>
                <h5>
                  Indulge your senses with lavish, natural products that soothe your soul.
                </h5>
                <CardText>Current products include Soy Wax Candles, Goat Milk Soaps, and Himalayan Salt Scrubs. View the shop page to view my entire selection.</CardText>
              </Col>
            </Row>
            </Card.Body> */
          /* </Card>
      </Row> */}
      <div style={styles.break}>
        <canvas id="canvas-basic" style={styles.canvas}></canvas>
        <blockquote className="blockquote" style={styles.blockquote}>
          <p style={styles.col}>
            "There is nothing more beautiful than a handmade gift.”
          </p>
          <footer style={styles.col} className="blockquote-footer">Unknown Author</footer>
        </blockquote>
      </div>

      <div className="creator-card" >
        <Row style={{ justifyContent: "center" }}>
          <img style={styles.brandImage} src={brandPic} alt="" />
        </Row>
        {/* <Col>
          <Card style={styles.brandCardBody}>
            <Card.Body style={{ ...styles.brandCardBody, padding: '0 !important' }}>
              <Row>
                <Col md={3}>
                <Card.Img style={styles.paddingLeft} src={createPic}/>
                </Col>
                <Col>
                  <Card.Text style={styles.brandCard}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto magni voluptates, architecto eos vero quis repellat? Molestiae cupiditate beatae nemo blanditiis repudiandae tempore odio at, in dolor aperiam distinctio quisquam.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col> */}
      </div>

      <Row className="upcoming-events-card">
        <Card style={styles.eventCardBody}>
          <Card.Img style={styles.eventImage} src={eventsPic} alt="Card image" />
            <Card.ImgOverlay style={styles.eventText}>
                <Card.Text>
                  Date, Time, and Location
                </Card.Text>
                <Card.Text>
                  Date, Time, and Location
                </Card.Text>
                <Card.Text>
                  Date, Time, and Location
                </Card.Text>
            </Card.ImgOverlay>
          </Card>
        {/* <Card style={styles.heroCard}>
          <Card.Body style={{ ...styles.eventCardBody, padding: '0 !important'}}>
            <Row>
              <Col style={styles.col}>
                <h5>Check out our upcoming events!</h5>
                </Col>
                <Col>
                <Card.Img style={styles.image} src={craftFair}/>
                </Col>
              </Row>
            </Card.Body>
          </Card> */}
      </Row>
    </div>
  );
}
