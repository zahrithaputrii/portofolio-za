document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-link');

  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggleMenu);

  navItems.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  function highlightActiveLink() {
    let scrollY = window.scrollY;
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navItems.forEach(link => link.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', highlightActiveLink);

  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const bodyEl = document.body;

  function filterProjects(category) {
    bodyEl.classList.remove('filter-web', 'filter-uiux');
    if (category === 'web') bodyEl.classList.add('filter-web');
    if (category === 'uiux') bodyEl.classList.add('filter-uiux');

    projectCards.forEach(card => {
      if (card.classList.contains(category)) {
        card.classList.add('show');
      } else {
        card.classList.remove('show');
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      filterProjects(filterValue);
    });
  });

  filterProjects('web');

  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalHtml = submitBtn.innerHTML;
      
      submitBtn.innerHTML = 'Mengirim...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      const formData = new FormData(contactForm);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          submitBtn.innerHTML = 'Pesan Terkirim <i class="ri-check-line"></i>';
          submitBtn.style.backgroundColor = '#10b981';
          submitBtn.style.color = '#ffffff';
          submitBtn.style.opacity = '1';
          contactForm.reset();
        } else {
          submitBtn.innerHTML = 'Gagal Mengirim <i class="ri-error-warning-line"></i>';
          submitBtn.style.backgroundColor = '#ef4444';
          submitBtn.style.color = '#ffffff';
        }
      })
      .catch(error => {
        submitBtn.innerHTML = 'Koneksi Error <i class="ri-wifi-off-line"></i>';
        submitBtn.style.backgroundColor = '#ef4444';
        submitBtn.style.color = '#ffffff';
      })
      .finally(() => {
        setTimeout(() => {
          submitBtn.innerHTML = originalHtml;
          submitBtn.style.backgroundColor = '';
          submitBtn.style.color = '';
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
        }, 3000);
      });
    });
  }
});