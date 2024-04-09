import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  const rollDie = (die) => {
    var result = Math.floor(Math.random() * 6) + 1; // Generate a random side index
    var animationDuration = 2000; // Duration of the rolling animation in milliseconds
    var faces = die.querySelectorAll('.face');

    // Apply rolling animation
    die.style.transition = 'transform ' + animationDuration / 1000 + 's cubic-bezier(0.6, 0.05, 0.28, 0.91)'; // Use cubic-bezier for realistic tumbling
    die.style.transform = 'rotateX(' + (360 * 5) + 'deg) rotateY(' + (360 * 5) + 'deg)'; // Rotate the die multiple times

    setTimeout(function() {
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
    }, animationDuration);

    // Display the rolled value after a short delay to match the animation duration
    setTimeout(function() {
        alert('Rolled: ' + result); // Display result
    }, animationDuration);
  };

  return (
    <div className="container">
      <Head>
        <title>Dice Widget</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                transition: transform 2s cubic-bezier(0.6, 0.05, 0.28, 0.91); /* Custom cubic-bezier for more realistic tumbling */
                background-color: #fff; /* Default background color */
            }

            .face {
                position: absolute;
                width: 100%;
                height: 100%;
                border: 2px solid black;
                display: none; /* Initially hide all faces */
                justify-content: center;
                align-items: center;
                font-size: 24px;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.2)); /* Gradient for lighting effect */
                transform-style: preserve-3d; /* Preserve 3D effect */
                backface-visibility: hidden; /* Hide back face during rotation */
            }

            .green { background-color: rgb(27, 214, 17); }
            .blue { background-color: rgb(45, 72, 250); }
            .red { background-color: rgb(245, 2, 2); }
            .yellow { background-color: rgb(250, 221, 5); }

            /* Set individual positions for each face */
            .front { transform: translateZ(50px); }
            .back { transform: rotateY(180deg) translateZ(50px); }
            .right { transform: rotateY(90deg) translateZ(50px); }
            .left { transform: rotateY(-90deg) translateZ(50px); }
            .top { transform: rotateX(90deg) translateZ(50px); }
            .bottom { transform: rotateX(-90deg) translateZ(50px); }

            /* On hover effect */
            .die:hover { transform: scale(1.1); /* Enlarge on hover */ }
        `}</style>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <div className="die-container">
          {/* Green Die */}
          <div className="die green" onClick={(e) => rollDie(e.target)}>
            <div className="face front">1</div>
            <div className="face back">6</div>
            <div className="face right">2</div>
            <div className="face left">5</div>
            <div className="face top">3</div>
            <div className="face bottom">4</div>
          </div>

          {/* Blue Die */}
          <div className="die blue" onClick={(e) => rollDie(e.target)}>
            <div className="face front">1</div>
            <div className="face back">6</div>
            <div className="face right">2</div>
            <div className="face left">5</div>
            <div className="face top">3</div>
            <div className="face bottom">4</div>
          </div>

          {/* Red Die */}
          <div className="die red" onClick={(e) => rollDie(e.target)}>
            <div className="face front">1</div>
            <div className="face back">6</div>
            <div className="face right">2</div>
            <div className="face left">5</div>
            <div className="face top">3</div>
            <div className="face bottom">4</div>
          </div>

          {/* Yellow Die */}
          <div className="die yellow" onClick={(e) => rollDie(e.target)}>
            <div className="face front">1</div>
            <div className="face back">6</div>
            <div className="face right">2</div>
            <div className="face left">5</div>
            <div className="face top">3</div>
            <div className="face bottom">4</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
