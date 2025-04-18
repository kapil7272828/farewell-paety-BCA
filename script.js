// Fireworks colors with Indian festival theme
const festiveColors = [
    { main: '#FF9933', shimmer: '#FFC266' }, // Orange
    { main: '#138808', shimmer: '#1ED10E' }, // Green
    { main: '#FF1744', shimmer: '#FF616F' }, // Bright Red
    { main: '#FFD700', shimmer: '#FFF3B0' }, // Golden
    { main: '#9C27B0', shimmer: '#CE93D8' }, // Purple
    { main: '#FF4081', shimmer: '#FF80AB' }  // Pink
];
// Function to animate gift box
function animateGiftBox() {
    const giftBox = document.querySelector('.gift-box');
    const giftFace = document.querySelector('.gift-face');
    const giftMouth = document.querySelector('.gift-mouth');
}

// Function to toggle RSVP form visibility
function toggleRSVP() {
    const rsvpForm = document.getElementById('rsvpForm');
    if (rsvpForm.style.display === 'none') {
        rsvpForm.style.display = 'block';
        rsvpForm.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        rsvpForm.style.display = 'none';
    }
}

// Function to check form completion and show submit button
function checkFormCompletion() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const rating = document.querySelector('input[name="rating"]:checked');
    const message = document.getElementById('message').value.trim();
    const submitBtn = document.getElementById('submitReviewBtn');

    // Check if all fields are filled
    if (name && email && phone && rating && message) {
        submitBtn.style.display = 'block';
        submitBtn.style.opacity = '1';
        submitBtn.style.transform = 'translateY(0)';
        submitBtn.disabled = false;
    } else {
        submitBtn.style.display = 'none';
        submitBtn.disabled = true;
    }
}

// Add event listeners to all form inputs
document.querySelectorAll('#reviewForm input, #reviewForm textarea').forEach(input => {
    input.addEventListener('input', checkFormCompletion);
    input.addEventListener('change', checkFormCompletion);
});

// Add event listener to rating inputs
document.querySelectorAll('input[name="rating"]').forEach(input => {
    input.addEventListener('change', checkFormCompletion);
});

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Get form values
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const rating = formData.get('rating');
    const message = formData.get('message');
    
    // Validate form data
    if (!name || !email || !phone || !rating || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Submit the form
    form.submit();
    
    // Clear form and hide submit button
    form.reset();
    const submitBtn = document.getElementById('submitReviewBtn');
    submitBtn.style.display = 'none';
    submitBtn.disabled = true;
}

// Gift Box Opening Animation
function openInvitation() {
    const giftBox = document.querySelector('.gift-box');
    const container = document.querySelector('.initial-button-container');
    const mainContainer = document.getElementById('mainContainer');
    
    // Add opening animation
    giftBox.classList.add('opening');
    container.classList.add('opening');
    
    // Play background music
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.play();
    
    // Float upwards animation
    setTimeout(() => {
        giftBox.style.transform = 'translateY(-100vh) scale(0.8)';
        giftBox.style.transition = 'transform 2s ease-out';
        
        // Show main content after animation
        setTimeout(() => {
            container.style.opacity = '0';
            setTimeout(() => {
                container.style.display = 'none';
                mainContainer.style.display = 'block';
                mainContainer.style.opacity = '1';
            }, 500);
        }, 2000);
    }, 1500);
}

// Music Toggle Function
function toggleMusic() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.classList.remove('muted');
    } else {
        bgMusic.pause();
        musicToggle.classList.add('muted');
    }
}

// Add hover effect to gift box
document.querySelector('.gift-box').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

document.querySelector('.gift-box').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

console.log(name,email,phone,star5,star4,star3,star2,star1,message);
