(() => {
    const toggleButtons = document.querySelectorAll('.dropdown-toggle');
    toggleButtons.forEach((toggleButton) => {
        toggleButton.addEventListener('click', () => {
            toggleButton.parentElement.classList.toggle('dropdown--open');
        });
    });
})();
