function showDetails(modelId) {
    let modelDescription = '';
    if (modelId === 'model1') {
        modelDescription = 'The Porsche 911 is a high-performance sports car that offers a thrilling driving experience.';
    } else if (modelId === 'model2') {
        modelDescription = 'The Porsche Cayenne is a luxury SUV that combines performance and comfort.';
    }
    document.getElementById('modelDescription').innerText = modelDescription;
    document.getElementById('modelDetails').style.display = 'block';
}

function closeDetails() {
    document.getElementById('modelDetails').style.display = 'none';
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});
