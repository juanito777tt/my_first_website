const buttons = document.querySelectorAll('.cta-button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Product added to cart!');
    });
});
