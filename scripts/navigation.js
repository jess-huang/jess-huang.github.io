// Fetch the navbar.html file and insert its content
fetch('navigation.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;

        // Navigation bar
        const tabs = document.querySelectorAll('.tab');
        const sidetabs = document.querySelectorAll('.sidetab');
        
        // Get the current page's filename
        const currentPage = window.location.pathname.split('/').pop();
        // Loop through all tabs
        tabs.forEach(tab => {
          // Remove the 'active' class from all tabs
          tab.classList.remove('active');

          // If the href of the tab matches the current page, add the 'active' class
          if (tab.getAttribute('href') === currentPage) {
            tab.classList.add('active');
          }
        });

        // Loop through all side tabs
        sidetabs.forEach(tab => {
          // Remove the 'active' class from all tabs
          tab.classList.remove('active');

          // If the href of the tab matches the current page, add the 'active' class
          if (tab.getAttribute('href') === currentPage) {
            tab.classList.add('active');
          }
        });
    });

// Toggle the mobile menu
window.onload = function() {
  const hamburger = document.querySelector('.hamburger');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const navLinks = document.querySelector('.navbar-links');
  const close = document.getElementById('close-button');

  /// Hamburger Menu Logic
  hamburger.addEventListener('click', function () {
    openNav()
    document.getElementById("sidenav").classList.add('active')
  });

  close.addEventListener('click', function () {
    closeNav()
    document.getElementById("sidenav").classList.remove('active')
  });

  function openNav() {
    document.getElementById("sidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }
}