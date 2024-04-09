import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  const rollDie = (die) => {
    var result = Math.floor(Math.random() * 6); // Generate a random side index
    var animationDuration = 1000; // Duration of the rolling animation in milliseconds
    var faces = die.querySelectorAll('.face');

    // Apply rolling animation
    die.style.transition = 'transform ' + animationDuration / 1000 + 's ease-out';
    die.style.transform = 'rotateX(360deg) rotateY(360deg)'; // Rotate the die

    setTimeout(function() {
        // Update the text content of the front face with the rolled value
        faces.forEach((face, index) => {
          if (index === result) {
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
        alert('Rolled: ' + (result + 1)); // Display result (adding 1 to match dice numbering)
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
                transition: transform 1s ease-out; /* Transition for rolling animation */
            }

            .face {
                position: absolute;
                width: 100%;
                height: 100%;
                border: 2px solid black;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.2)); /* Gradient for lighting effect */
                transform-style: preserve-3d; /* Preserve 3D effect */
                backface-visibility: hidden; /* Hide back face during rotation */
                display: none; // Initially hide all faces
            }

            /* Faces of the die */
            .green .front {
                background-color: #6ab04c; /* Green */
            }
            .blue .front {
                background-color: #00a0d6; /* Blue */
            }
            .red .front {
                background-color: #d60000; /* Red */
            }
            .yellow .front {
                background-color: #ffd700; /* Yellow */
            }

            /* On hover effect */
            .die:hover {
                transform: scale(1.1); /* Enlarge on hover */
            }
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
