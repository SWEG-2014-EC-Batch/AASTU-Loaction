function showCategory(category) {
    const cards = document.querySelectorAll('.location-card');
    const buttons = document.querySelectorAll('.category-btn');
    const categoryTitles = document.querySelectorAll('.category-title');
    
    cards.forEach(card => {
        card.style.display = (category === 'all' || card.getAttribute('data-category') === category) ? 'block' : 'none';
    });
    
    buttons.forEach(button => {
        if (button.textContent.toLowerCase().includes(category) || (category === 'all' && button.textContent === 'All Locations')) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    categoryTitles.forEach(title => {
        if (category === 'all' || title.getAttribute('data-category') === category) {
            title.style.display = 'block';
        } else {
            title.style.display = 'none';
        }
    });
}

function showImage(src, alt) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = src;
    modalImg.alt = alt;
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

// Close the modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showCategory('all');
});