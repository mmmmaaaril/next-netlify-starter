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
    /* other colors and faces here */
</style>
