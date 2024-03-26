document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('themeToggle');
    themeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});