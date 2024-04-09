<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dice Widget</title>
<style>
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
    }

    /* Faces of the die */
    .green .front {
        background-color: #6ab04c; /* Green */
        color: black;
        transform: rotateY(0deg) translateZ(50px);
    }
    .green .back {
        background-color: #6ab04c; /* Green */
        color: black;
        transform: rotateY(180deg) translateZ(50px);
    }
    .green .right {
        background-color: #6ab04c; /* Green */
        color: black;
        transform: rotateY(90deg) translateZ(50px);
    }
    .green .left {
        background-color: #6ab04c; /* Green */
        color: black;
        transform: rotateY(-90deg) translateZ(50px);
    }
    .green .top {
        background-color: #6ab04c; /* Green */
        color: black;
        transform: rotateX(90deg) translateZ(50px);
    }
    .green .bottom {
        background-color: #6ab04c; /* Green */
        color: black;
        transform: rotateX(-90deg) translateZ(50px);
    }

    .blue .front {
        background-color: #00a0d6; /* Blue */
        color: black;
        transform: rotateY(0deg) translateZ(50px);
    }
    .blue .back {
        background-color: #00a0d6; /* Blue */
        color: black;
        transform: rotateY(180deg) translateZ(50px);
    }
    .blue .right {
        background-color: #00a0d6; /* Blue */
        color: black;
        transform: rotateY(90deg) translateZ(50px);
    }
    .blue .left {
        background-color: #00a0d6; /* Blue */
        color: black;
        transform: rotateY(-90deg) translateZ(50px);
    }
    .blue .top {
        background-color: #00a0d6; /* Blue */
        color: black;
        transform: rotateX(90deg) translateZ(50px);
    }
    .blue .bottom {
        background-color: #00a0d6; /* Blue */
        color: black;
        transform: rotateX(-90deg) translateZ(50px);
    }

    .red .front {
        background-color: #d60000; /* Red */
        color: black;
        transform: rotateY(0deg) translateZ(50px);
    }
    .red .back {
        background-color: #d60000; /* Red */
        color: black;
        transform: rotateY(180deg) translateZ(50px);
    }
    .red .right {
        background-color: #d60000; /* Red */
        color: black;
        transform: rotateY(90deg) translateZ(50px);
    }
    .red .left {
        background-color: #d60000; /* Red */
        color: black;
        transform: rotateY(-90deg) translateZ(50px);
    }
    .red .top {
        background-color: #d60000; /* Red */
        color: black;
        transform: rotateX(90deg) translateZ(50px);
    }
    .red .bottom {
        background-color: #d60000; /* Red */
        color: black;
        transform: rotateX(-90deg) translateZ(50px);
    }

    .yellow .front {
        background-color: #ffd700; /* Yellow */
        color: black;
        transform: rotateY(0deg) translateZ(50px);
    }
    .yellow .back {
        background-color: #ffd700; /* Yellow */
        color: black;
        transform: rotateY(180deg) translateZ(50px);
    }
    .yellow .right {
        background-color: #ffd700; /* Yellow */
        color: black;
        transform: rotateY(90deg) translateZ(50px);
    }
    .yellow .left {
        background-color: #ffd700; /* Yellow */
        color: black;
        transform: rotateY(-90deg) translateZ(50px);
    }
    .yellow .top {
        background-color: #ffd700; /* Yellow */
        color: black;
        transform: rotateX(90deg) translateZ(50px);
    }
    .yellow .bottom {
        background-color: #ffd700; /* Yellow */
        color: black;
        transform: rotateX(-90deg) translateZ(50px);
    }
</style>
</head>
<body>
<div class="die-container">
    <!-- Green Die -->
    <div class="die green" onclick="rollDie(this)">
        <div class="face front">4</div>
        <div class="face back">4</div>
        <div class="face right">4</div>
        <div class="face left">4</div>
        <div class="face top">0</div>
        <div class="face bottom">0</div>
    </div>

    <!-- Blue Die -->
    <div class="die blue" onclick="rollDie(this)">
        <div class="face front">3</div>
        <div class="face back">3</div>
        <div class="face right">3</div>
        <div class="face left">3</div>
        <div class="face top">3</div>
        <div class="face bottom">3</div>
    </div>

    <!-- Red Die -->
    <div class="die red" onclick="rollDie(this)">
        <div class="face front">2</div>
        <div class="face back">2</div>
        <div class="face right">6</div>
        <div class="face left">2</div>
        <div class="face top">2</div>
        <div class="face bottom">6</div>
    </div>

    <!-- Yellow Die -->
    <div class="die yellow" onclick="rollDie(this)">
        <div class="face front">5</div>
        <div class="face back">1</div>
        <div class="face right">5</div>
        <div class="face left">1</div>
        <div class="face top">5</div>
        <div class="face bottom">1</div>
    </div>
</div>

<script>
function rollDie(die) {
    var result = Math.floor(Math.random() * 6); // Generate a random side index
    var animationDuration = 1000; // Duration of the rolling animation in milliseconds
    var faces = die.querySelectorAll('.face');

    // Apply rolling animation
    die.style.transition = 'transform ' + animationDuration / 1000 + 's ease-out';
    die.style.transform = 'rotateX(360deg) rotateY(360deg)'; // Rotate the die

    setTimeout(function() {
        // Update the text content of the front face with the rolled value
        die.querySelector('.front').textContent = faces[result].textContent;
        // Reset the rotation and transition properties after the animation
        die.style.transition = '';
        die.style.transform = '';
    }, animationDuration);

    // Display the rolled value after a short delay to match the animation duration
    setTimeout(function() {
        alert('Rolled: ' + faces[result].textContent);
    }, animationDuration);
}
</script>
</body>
</html>
