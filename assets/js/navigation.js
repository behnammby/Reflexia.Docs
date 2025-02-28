document.addEventListener('DOMContentLoaded', function() {
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const contentWrapper = document.querySelector('.content-wrapper');

  sidebarToggle.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
    contentWrapper.classList.toggle('shifted');
  });

  // Close sidebar when clicking outside
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 800) {
      if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        contentWrapper.classList.remove('shifted');
      }
    }
  });
});