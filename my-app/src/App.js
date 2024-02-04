import './App.css';
import Avatar from './components/Avatar.js';
import Footer from "./components/Footer.js"
import NavBar from './components/NavBar.js';
import ImageProcessing from './components/ImagePro.js';
import barbie from './barbie.jpg'



function App() {
  return (
    <div className="App">

      
      <div className="container">
        <div className="sidebar-left">
        </div>

        <div className="main"> 
          <header className="title">Barbie Image Processing</header>
          <NavBar />


          <div id="intro">
            <header className="subtitles">Introduction</header>
          </div>
          <div className="paragraph1">
            Welcome to Barbie Image Processing! You can use this website to edit image values and see changes in real-time. Test out how things like sharpness change the appearance of a picture by playing around with an image of Barbie!
          </div>

          <div id="process">
            <header className="subtitles">Image Processing</header>
          </div>
          <div className="paragraph2">
            Image Processor Place Holder
          </div>
          <ImageProcessing />

          <div id="howto">
            <header className="subtitles">How To</header>
          </div>
          <div className="paragraph3">
            Use the sliders on the side of the image editor to adjust the sharpness or blur of the image.
          </div>

          <div id="about">
            <header className="subtitles">About Us</header>
          </div>
          
          <div className="paragraph4">
            We are a small group of UTCS students who wanted to learn Processing and React for the WiCS 2024 Hackathon.
            <Avatar />
          </div>
        </div>
        <div className="sidebar-rigth">
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
