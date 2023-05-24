
// Js Buat Navbar
const navLinks = document.querySelectorAll('.navbar-nav li a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    this.classList.add('active');
  });
});
// End Js Navbar