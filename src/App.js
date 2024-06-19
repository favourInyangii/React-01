// src/App.js
import React from 'react';
// Importing Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing the Card component from react-bootstrap
import { Card } from 'react-bootstrap';
// Importing the custom components
import greetingImage from './assets/candles.jpg';
import Description from './components/Description';
import Image from './components/Image';
import Name from './components/Name';
import Price from './components/Price';
// Root component of the React application
const App = () => {
  // Variable to store the user's first name
  const firstName = "Favour"; // Replace "YourName" with your actual first name or leave it as an empty string

  return (
    <div className="App">
      <header className="App-header">
        {/* Card component to display product details */}
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>
              <Name />
            </Card.Title>
            <Card.Text>
              <Price />
            </Card.Text>
            <Card.Text>
              <Description />
            </Card.Text>
            <Image />
          </Card.Body>
        </Card>
        {/* Displaying a greeting message */}
        <p>
          Hello, {firstName ? firstName : 'there'}!
        </p>
        {/* Conditionally displaying an image if the first name is provided */}
        {firstName && <img src={greetingImage} alt="Greeting" style={{ width: '100px', height: '100px' }} />}
      </header>
    </div>
  );
};

// Exporting the App component as the default export
export default App;
