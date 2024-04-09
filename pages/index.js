import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useState } from 'react';

export default function Home() {
  const [rolling, setRolling] = useState(false);

  const rollDie = (die) => {
    if (rolling) return; // Prevent rolling while animation is in progress
    setRolling(true);
    var result = Math.floor(Math.random() * 6) + 1; // Generate a random side index
    var animationDuration = 2000; // Duration of the rolling animation in milliseconds
    var faces = die.querySelectorAll('.face');

    // Apply rolling animation
    die.style.transition = 'transform ' + animationDuration / 1000 + 's ease-out';
    die.style.transform = 'rotateX(' + (360 * 5) + 'deg) rotateY(' + (360 * 5) + 'deg)'; // Rotate the die multiple times

    setTimeout(function () {
      // Update the text content of the front face with the rolled value
      faces.forEach((face, index) => {
        if (index === result - 1) {
          face.style.display = 'flex';
        } else {
          face.style.display = 'none';
        }
      });
      // Reset the rotation and transition properties after the animation
      die.style.transition = '';
      die.style.transform = '';
      setRolling(false);
    }, animationDuration);

    // Display the rolled value after a short delay to match the animation duration
    setTimeout(function () {
      alert('Rolled: ' + result); // Display result
    }, animationDuration);
  };

  return (
    <div className="container">
      <Head>
        <title>Dice Widget</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@900&display=swap" rel="stylesheet" />
        <style>{`
            .die-container {
                perspective: 1000px; /* Perspective for 3D effect */
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }

            .die {
                width: 100px;
                height: 100px;
                margin: 10px;
                position: relative;
                transform-style: preserve-3d; /* Apply 3D transforms to children */
                cursor: pointer;
                transition: transform 1s ease-out; /* Transition for rolling animation */
                background-color: transparent; /* Transparent background color */
            }

            .face {
                position: absolute;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.2)); /* Gradient for lighting effect */
                color: white;
                font-family: 'Roboto Serif', serif; /* Use Roboto Serif Black font */
                text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black; /* Black outline */
            }

            /* Set individual positions for each face */
            .front { transform: rotateX(90deg) translateZ(50px); }
            .back { transform: rotateX(-90deg) translateZ(50px); }
            .right { transform: rotateY(90deg) translateZ(50px); }
            .left { transform: rotateY(-90deg) translateZ(50px); }
            .top { transform: rotateY(180deg) rotateZ(90deg) translateZ(50px); }
            .bottom { transform: rotateY(180deg) rotateZ(-90deg) translateZ(50px); }
        `}</style>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <div className="die-container">
          {/* Green Die */}
          <div className="die" onClick={(e) => rollDie(e.currentTarget)}>
            <div className="face front" style={{ backgroundColor: 'rgb(27, 214, 17)' }}>1</div>
            <div className="face back" style={{ backgroundColor: 'rgb(27, 214, 17)' }}>6</div>
            <div className="face right" style={{ backgroundColor: 'rgb(27, 214, 17)' }}>2</div>
            <div className="face left" style={{ backgroundColor: 'rgb(27, 214, 17)' }}>5</div>
            <div className="face top" style={{ backgroundColor: 'rgb(27, 214, 17)' }}>3</div>
            <div className="face bottom" style={{ backgroundColor: 'rgb(27, 214, 17)' }}>4</div>
          </div>

          {/* Blue Die */}
          <div className="die" onClick={(e) => rollDie(e.currentTarget)}>
            <div className="face front" style={{ backgroundColor: 'rgb(45, 72, 250)' }}>1</div>
            <div className="face back" style={{ backgroundColor: 'rgb(45, 72, 250)' }}>6</div>
            <div className="face right" style={{ backgroundColor: 'rgb(45, 72, 250)' }}>2</div>
            <div className="face left" style={{ backgroundColor: 'rgb(45, 72, 250)' }}>5</div>
            <div className="face top" style={{ backgroundColor: 'rgb(45, 72, 250)' }}>3</div>
            <div className="face bottom" style={{ backgroundColor: 'rgb(45, 72, 250)' }}>4</div>
          </div>

          {/* Red Die */}
          <div className="die" onClick={(e) => rollDie(e.currentTarget)}>
            <div className="face front" style={{ backgroundColor: 'rgb(245, 2, 2)' }}>1</div>
            <div className="face back" style={{ backgroundColor: 'rgb(245, 2, 2)' }}>6</div>
            <div className="face right" style={{ backgroundColor: 'rgb(245, 2, 2)' }}>2</div>
            <div className="face left" style={{ backgroundColor: 'rgb(245, 2, 2)' }}>5</div>
            <div className="face top" style={{ backgroundColor: 'rgb(245, 2, 2)' }}>3</div>
            <div className="face bottom" style={{ backgroundColor: 'rgb(245, 2, 2)' }}>4</div>
          </div>

          {/* Yellow Die */}
          <div className="die" onClick={(e) => rollDie(e.currentTarget)}>
            <div className="face front" style={{ backgroundColor: 'rgb(250, 221, 5)' }}>1</div>
            <div className="face back" style={{ backgroundColor: 'rgb(250, 221, 5)' }}>6</div>
            <div className="face right" style={{ backgroundColor: 'rgb(250, 221, 5)' }}>2</div>
            <div className="face left" style={{ backgroundColor: 'rgb(250, 221, 5)' }}>5</div>
            <div className="face top" style={{ backgroundColor: 'rgb(250, 221, 5)' }}>3</div>
            <div className="face bottom" style={{ backgroundColor: 'rgb(250, 221, 5)' }}>4</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
