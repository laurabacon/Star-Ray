import React from "react";
import { Container, Row, Col, Card, CardImg, CardText } from "react-bootstrap";
import lgCandle from "../../assets/hero.png";
import createPic from "../../assets/logo.jpg";
import craftFair from "../../assets/craft.png";

const styles = {
  container: {
    margin: "0 auto",
    border: "none",
    padding: "5px",
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
  image:{
    width: '75%', 
    height: 'auto',
  },
  heroCard: {
    overflow: "hidden",
    border: "none",
  },
  heroBody: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    border: "none",
    padding: 0,
  },
  cardBody: {
    backgroundColor: "#f8f9fa",
    border: "none",
    padding: 0,
  },
  blockquote: {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    border: "none",
  },
  eventCard: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    border: "none",
    borderRadius: "15px", 
    overflow: "hidden", 
  },
  paddingLeft: {
    paddingLeft: "40px",
  },
  
};

export default function Home() {
  return (
    <div style={styles.container}>
      <Row className="hero-product-card">
        <Card style={styles.heroCard}>
          <Card.Body style={{ ...styles.cardBody, padding: '0 !important'}}>
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
            </Card.Body>
          </Card>
      </Row>

      <Row className="grainium-card">
          <blockquote className="blockquote" style={styles.blockquote}>
            <p style={styles.col}>
              "There is nothing more beautiful than a handmade gift.”
            </p>
            <footer style={styles.col} className="blockquote-footer">Unknown Author</footer>
          </blockquote>
      </Row>

      <Row className="creator-card">
        <Col>
          <Card style={styles.card}>
            <Card.Body style={{ ...styles.cardBody, padding: '0 !important' }}>
              <Row>
                <Col md={3}>
                <Card.Img style={styles.paddingLeft} src={createPic}/>
                </Col>
                <Col>
                  <Card.Text style={styles.heroBody}>

                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="upcoming-events-card">
        <Card style={styles.heroCard}>
          <Card.Body style={{ ...styles.cardBody, padding: '0 !important'}}>
            <Row>
              <Col style={styles.col}>
                <h5>Check out our upcoming events!</h5>
                  <Card.Text>Event 1: Date and Location</Card.Text>
                  <Card.Text>Event 2: Date and Location</Card.Text>
                  <Card.Text>Event 3: Date and Location</Card.Text>
                  <Card.Text>Event 4: Date and Location</Card.Text>
                </Col>
                <Col>
                <Card.Img style={styles.image} src={craftFair}/>
                </Col>
              </Row>
            </Card.Body>
          </Card>
      </Row>
    </div>
  );
}
