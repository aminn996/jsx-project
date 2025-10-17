import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  const firstName = "Amin"; // Change this to "" to test "Hello, there!"

  // Optional: click handler
  const handleBuy = () => {
    alert("Thank you for your purchase! 🎧");
  };

  return (
    <Container className="d-flex flex-column align-items-center">
      <Card style={{ width: "20rem" }}>
        <Image />
        <Card.Body className="text-center">
          <Name />
          <Price />
          <Description />

          {/*  Buy Now Button */}
          <Button
            variant="primary"
            style={{
              marginTop: "10px",
              borderRadius: "10px",
              padding: "10px 20px",
              backgroundColor: "#5563DE",
            }}
            onClick={handleBuy}
          >
            Buy Now
          </Button>
        </Card.Body>
      </Card>

      <div className="greeting">
        {firstName ? (
          <>
            <h4>Hello, {firstName}!</h4>
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              alt="hello"
              width="80"
            />
          </>
        ) : (
          <h4>Hello, there!</h4>
        )}
      </div>
    </Container>
  );
}

export default App;
