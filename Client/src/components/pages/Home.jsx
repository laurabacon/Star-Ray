import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Home() {
  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row className="mt-5 hero-product-card" style={{ width: "100%" }}>
        <Col md={8}>
          <Card style={{ height: "100%" }}>
            <Row>
              <Col md={4}>
                <Card.Img src="path/to/hero-image.jpg" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>Welcome!</Card.Text>
                  <Card.Text>
                    Indulge your senses with lavish, natural products that
                    soothe your soul.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4 grainium-card" style={{ width: "100%" }}>
        <Col>
          <blockquote className="blockquote">
            <p className="mb-0">
              There is nothing more beautiful than a handmade gift.”
            </p>
            <footer className="mt-1 blockquote-footer">Unknown Author</footer>
          </blockquote>
        </Col>
      </Row>

      <Row className="mt-3 grainium-quote-card" style={{ width: "100%" }}>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <img
                    src="path/to/creator-image.jpg"
                    className="rounded-circle"
                    alt="Brand Creator"
                  />
                </Col>
                <Col md={9}>
                  <Card.Text>
                    Current products include Soy Wax Candles, Goat Milk Soaps,
                    and Himilayan Salt Scrubs. view the shop page to view my
                    entire selection.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3 upcoming-events-card" style={{ width: "100%" }}>
        <Col md={8}>
          <Card>
            <Card.Body>
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
