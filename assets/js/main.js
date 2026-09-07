/**
 * Ayush Cricket Academy - Interactive JS
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Sticky Navigation & Scroll Active Indicator ---
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Highlight active nav item on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link-cool');

  window.addEventListener('scroll', () => {
    let currentSection = 'hero';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const targetSec = link.getAttribute('data-section');
      if (targetSec === currentSection) {
        link.classList.add('text-brandTeal', 'bg-brandTeal/10', 'font-bold');
        link.classList.remove('text-slate-700');
        if (!link.querySelector('.animate-pulse')) {
          const dot = document.createElement('span');
          dot.className = 'w-1.5 h-1.5 rounded-full bg-brandTeal animate-pulse ml-1.5 inline-block';
          link.appendChild(dot);
        }
      } else {
        link.classList.remove('text-brandTeal', 'bg-brandTeal/10', 'font-bold');
        link.classList.add('text-slate-700');
        const dot = link.querySelector('.animate-pulse');
        if (dot) dot.remove();
      }
    });
  });

  // --- 2. Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-overlay');

  function openMobileMenu() {
    mobileDrawer.classList.remove('translate-x-full');
    mobileOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.add('translate-x-full');
    mobileOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  // Close mobile menu on clicking nav links
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // --- 3. Gallery Filtering ---
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active state from all buttons
      filterBtns.forEach(b => {
        b.classList.remove('bg-brandTeal', 'text-white', 'shadow-md');
        b.classList.add('text-slate-600', 'hover:text-slate-900');
      });

      // Add active state to clicked button
      btn.classList.add('bg-brandTeal', 'text-white', 'shadow-md');
      btn.classList.remove('text-slate-600', 'hover:text-slate-900');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === itemCategory) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // --- 4. Lightbox Modal for Gallery ---
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxClose = document.getElementById('lightbox-close');

  const galleryTriggers = document.querySelectorAll('.gallery-zoom-trigger');
  galleryTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = trigger.getAttribute('data-img');
      const title = trigger.getAttribute('data-title');
      
      lightboxImg.src = imgSrc;
      lightboxTitle.textContent = title || 'Ayush Cricket Academy Gallery';
      lightboxModal.classList.remove('hidden');
      lightboxModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.add('hidden');
      lightboxModal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // --- 5. Video Testimonial Modal (Supports YouTube & HTML5 MP4) ---
  const videoModal = document.getElementById('video-modal');
  const videoContainer = document.getElementById('video-container');
  const videoModalClose = document.getElementById('video-modal-close');
  const videoTriggers = document.querySelectorAll('.video-play-btn');

  videoTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const mediaUrl = btn.getAttribute('data-video');
      const playerTitle = btn.getAttribute('data-title') || 'Student Testimonial';

      if (!mediaUrl) return;

      // Clear previous content
      videoContainer.innerHTML = '';

      if (mediaUrl.endsWith('.mp4')) {
        const videoElement = document.createElement('video');
        videoElement.src = mediaUrl;
        videoElement.controls = true;
        videoElement.autoplay = true;
        videoElement.className = 'w-full h-full rounded-xl object-contain bg-black';
        videoContainer.appendChild(videoElement);
      } else {
        const iframeElement = document.createElement('iframe');
        iframeElement.src = mediaUrl;
        iframeElement.title = playerTitle;
        iframeElement.className = 'w-full h-full rounded-xl border-0';
        iframeElement.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframeElement.allowFullscreen = true;
        videoContainer.appendChild(iframeElement);
      }

      videoModal.classList.remove('hidden');
      videoModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeVideoModal() {
    if (videoModal) {
      videoContainer.innerHTML = '';
      videoModal.classList.add('hidden');
      videoModal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }

  if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  // --- 6. Number Counter Animation ---
  const counters = document.querySelectorAll('.stat-counter');
  let animated = false;

  function runCounters() {
    const scrollPos = window.scrollY + window.innerHeight;
    const statsSection = document.getElementById('stats-section');
    if (!statsSection) return;

    if (!animated && scrollPos > statsSection.offsetTop + 100) {
      animated = true;
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCount = () => {
          current += step;
          if (current < target) {
            counter.innerText = Math.ceil(current);
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target + (counter.getAttribute('data-suffix') || '');
          }
        };
        updateCount();
      });
    }
  }

  window.addEventListener('scroll', runCounters);

  // --- 7. ESC Key Close Modals ---
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeVideoModal();
      closeMobileMenu();
    }
  });
});
