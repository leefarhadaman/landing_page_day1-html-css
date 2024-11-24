// Animate components on scroll using IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
    // Set up the IntersectionObserver for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'visible' class to trigger animations when the section is in view
            entry.target.classList.add("visible");
            
            // Stop observing once it's in view
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );
  
    // Observe all sections with the class 'fade-in'
    const fadeInSections = document.querySelectorAll('.fade-in');
    fadeInSections.forEach(section => {
      observer.observe(section);
    });
  
    // Observe specific elements like the about section and its children
    const aboutSection = document.querySelector("#about");
    const aboutText = document.querySelector(".about-text");
    const videoContainer = document.querySelector(".video-container");
  
    observer.observe(aboutSection);
    observer.observe(aboutText);
    observer.observe(videoContainer);
  
    // Scroll event listener to toggle navbar background
    const navbar = document.querySelector('.navbar');
    const toggleNavbarBackground = () => {
      if (window.scrollY > 50) {
        navbar.classList.remove('transparent');
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('transparent');
      }
    };
  
    // Initial check for navbar background
    toggleNavbarBackground();
  
    // Attach scroll event listener for navbar
    window.addEventListener('scroll', toggleNavbarBackground);
  
    // Handle hover to play video
    const iframe = document.querySelector('#video');
    videoContainer.addEventListener('mouseenter', function() {
      iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1'); // Start playing the video
    });
    
    videoContainer.addEventListener('mouseleave', function() {
      iframe.src = iframe.src.replace('autoplay=1', 'autoplay=0'); // Stop the video when hover is removed
    });
  
    // Services section visibility on scroll
    const servicesSection = document.querySelectorAll('.service-item');
  
    // Function to handle visibility on scroll
    const checkServicesScroll = () => {
      const windowHeight = window.innerHeight;
      servicesSection.forEach(service => {
        const serviceTop = service.getBoundingClientRect().top;
  
        // Check if the service item is in view
        if (serviceTop < windowHeight - 150) {
          service.classList.add('fade-in-active');
        }
      });
    };

    

    const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('navbar-links');

navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('open');
  navbarToggle.classList.toggle('open');
});

  
    // Initial check for services
    checkServicesScroll();
  
    // Scroll event listener for services
    window.addEventListener('scroll', checkServicesScroll);
  });

  // JavaScript for menu toggle
