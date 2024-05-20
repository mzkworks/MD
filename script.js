document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image');
    const speeds = [];

    // Assign a random speed for each image
    images.forEach(image => {
        const speed = 0.1 + Math.random() * 0.25; // Random speed between 0.1 and 0.2
        speeds.push(speed);
    });

    // Use requestAnimationFrame for smoother animation
    document.addEventListener('mousemove', (event) => {
        parallax(event, images, speeds);
    });
});

function parallax(event, images, speeds) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    images.forEach((image, index) => {
        const speed = speeds[index];
        const offsetX = (mouseX - centerX) * speed;
        const offsetY = (mouseY - centerY) * speed;
        requestAnimationFrame(() => {
            image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    });
}
