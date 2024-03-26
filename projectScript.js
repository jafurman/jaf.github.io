function toggleDescription(documentID) {
    var description = document.getElementById(documentID);
    if (description) {
        description.style.display = (description.style.display === "none" || description.style.display === "") ? "block" : "none";
    } else {
        console.error("Element with ID '" + documentID + "' not found.");
    }
}

function toggleImage(index) {
    var images = document.querySelectorAll('.image');
    var buttons = document.querySelectorAll('.buttons button');

    images.forEach(function(image, i) {
        if (i === index) {
            image.style.display = 'flex';
        } else {
            image.style.display = 'none';
        }
    });

    buttons.forEach(function(button, i) {
        if (i === index) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.project-images img'); // Select all images

    images.forEach(function(image) {
        image.style.display = 'none'; // Initially hide all images
    });
});