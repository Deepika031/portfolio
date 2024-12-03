// Select the second circle element
const circle = document.querySelector('.design .circle:nth-child(2)');

// Event listener to change image on hover
circle.addEventListener('mouseenter', function() {
    // Change the background image on hover
    circle.style.backgroundImage = 'url("./new-image.jpg")';
});

// Event listener to revert the image on mouse leave
circle.addEventListener('mouseleave', function() {
    // Revert to the original image
    circle.style.backgroundImage = 'url("./picture.jpg")';
});

// Function to toggle between two images on click
circle.addEventListener('click', function() {
    if (circle.style.backgroundImage === 'url("http://localhost/picture.jpg")') {
        // Change the image to new image
        circle.style.backgroundImage = 'url("./new-image.jpg")';
    } else {
        // Revert back to the original image
        circle.style.backgroundImage = 'url("./picture.jpg")';
    }
});

// Function to resize the circle
function resizeCircle() {
    circle.style.width = '35rem'; // Change width
    circle.style.height = '35rem'; // Change height
}

// Add a button to trigger resizing
const resizeButton = document.createElement('button');
resizeButton.textContent = 'Resize Circle';
resizeButton.style.padding = '10px 20px';
resizeButton.style.fontSize = '1.2rem';
resizeButton.style.cursor = 'pointer';
resizeButton.addEventListener('click', resizeCircle);

// Append the button to the body (or any container)
document.body.appendChild(resizeButton);

// Add some basic styles for the resize button
resizeButton.style.position = 'absolute';
resizeButton.style.top = '20px';
resizeButton.style.left = '20px';
resizeButton.style.zIndex = '9999';

