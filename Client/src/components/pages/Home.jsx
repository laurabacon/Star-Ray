import React from "react";
import { Container, Row, Col, Card, CardImg } from "react-bootstrap";
import lgCandle from "../../assets/hero.png";
import createPic from "../../assets/logo.jpg";

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  card: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "15px",
    overflow: "hidden",
    marginBottom: "20px",
  },
  heroBody: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  cardBody: {
    backgroundColor: "#f8f9fa",
    padding: "20px",
  },
  blockquote: {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "15px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    marginBottom: "20px",
  },
  eventCard: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    padding: "20px",
    borderRadius: "15px", 
    overflow: "hidden", 
    marginBottom: "20px",
  },
};

export default function Home() {
  return (
    <Container style={styles.container}>
      <Row className="hero-product-card">
        <Col>
          <Card style={styles.card}>
            <Row>
              <Col>
              <Card.Img src={lgCandle}/>
              </Col>
              <Col md={6}>
                <Card.Body style={styles.heroBody}>
                  <Card.Title style={styles.heroBody}>
                    Indulge your senses with lavish, natural products that
                    soothe your soul.
                  </Card.Title>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4 grainium-card">
        <Col>
          <blockquote className="blockquote" style={styles.blockquote}>
            <p className="mb-0">
              There is nothing more beautiful than a handmade gift.”
            </p>
            <footer className="mt-1 blockquote-footer">Unknown Author</footer>
          </blockquote>
        </Col>
      </Row>

      <Row className="creator-card">
        <Col>
          <Card style={styles.card}>
            <Card.Body>
              <Row>
                <Col md={3}>
                <Card.Img src={createPic}/>
                </Col>
                <Col md={9}>
                  <Card.Text style={styles.heroBody}>
                    Current products include Soy Wax Candles, Goat Milk Soaps,
                    and Himalayan Salt Scrubs. View the shop page to view my
                    entire selection.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="upcoming-events-card">
        <Col>
          <Card style={styles.eventCard}>
            <Card.Body style={styles.cardBody}>
              <Row>
                <Col md={6}>
                  <h5>Check out our upcoming events!</h5>
                  <Card.Text>Event 1: Date and Location</Card.Text>
                  <Card.Text>Event 2: Date and Location</Card.Text>
                  <Card.Text>Event 3: Date and Location</Card.Text>
                  <Card.Text>Event 4: Date and Location</Card.Text>
                </Col>
                <Col md={6}>
                  <Card.Img src="path/to/event-image.jpg" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
