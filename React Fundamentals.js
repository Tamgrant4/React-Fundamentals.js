const Header = () => {
  return (
    <header className="header">
      <div className="overlay">
        <h1>John Doe</h1> 
      </div>
    </header>
  );
};

.header {
  background-image: url('path-to-your-image.jpg');
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
}

.overlay h1 {
  color: white;
  font-size: 48px;
}

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <p>Hello! I'm a web developer with a passion for creating dynamic web applications.</p>
    </section>
  );
};

class Contact extends Component {
  render() {
    return (
      <section>
        <h2>Contact Information</h2>
        <p>Email: tamekagrant@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/tamkegrant/">Tameka Grant</a></p>
      </section>
    );
  }
}

import Header from './Header';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Contact />
    </div>
  );
};



