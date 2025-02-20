// Fetch the navbar.html file and insert its content
fetch('navigation.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;

        // Navigation bar
        const tabs = document.querySelectorAll('.tab');
        const tabIcons = document.querySelectorAll('.tab-icon');
        
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

        // Loop through all tab icons
        tabIcons.forEach(tab => {
          // Remove the 'active' class from all tabs
          tab.classList.remove('active');

          // If the href of the tab matches the current page, add the 'active' class
          if (tab.getAttribute('href') === currentPage) {
            tab.classList.add('active');
          }
        });
    });
