document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default jump behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Enable smooth scrolling with JS
            });
        }
    });
});













// Get elements
const dropBtn = document.getElementById('navDropdown');
const dropContent = document.getElementById('dropdownContent');

// Toggle dropdown on click
dropBtn.addEventListener('click', function(e) {
  e.preventDefault(); // Prevents page from jumping to top
  dropContent.classList.toggle('show');
});

// Close if user clicks outside
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    if (dropContent.classList.contains('show')) {
      dropContent.classList.remove('show');
    }
  }
}