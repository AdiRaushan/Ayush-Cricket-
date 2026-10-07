/**
 * Ayush Cricket Academy - Shared Header & Footer Component Loader
 * Single source of truth for site-wide navigation, announcement bar, drawer, footer, and modals.
 * Works seamlessly in both HTTP/HTTPS (local/live server) and local file:/// environments.
 */

(function () {
  const HEADER_TEMPLATE = `
<!-- ==================== TOP INFORMATION ANNOUNCEMENT BAR ==================== -->
<div class="hidden lg:block bg-slate-950 text-slate-300 text-xs py-2.5 px-4 border-b border-slate-800/80 relative z-50">
  <div class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-2">
    <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-[11px] sm:text-xs">
      <span class="inline-flex items-center gap-1.5 bg-brandTeal/20 text-teal-300 px-2.5 py-0.5 rounded-full border border-brandTeal/30 font-bold">
        <span class="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
        <span>Admissions Open 2025-26</span>
      </span>
      <a href="https://maps.google.com/?q=Ayush+Cricket+Academy+Chidderwala" target="_blank" rel="noopener" class="flex items-center gap-1.5 hover:text-teal-300 transition-colors">
        <i class="fa-solid fa-location-dot text-brandTeal"></i>
        <span>Chidderwala, Kansrao, Uttarakhand 249204</span>
      </a>
      <span class="flex items-center gap-1.5 text-slate-400">
        <i class="fa-solid fa-clock text-brandTeal"></i>
        <span>Batches: 6 AM - 7 PM</span>
      </span>
      <a href="tel:+919084667088" class="flex items-center gap-1.5 font-semibold text-white hover:text-teal-300 transition-colors">
        <i class="fa-solid fa-phone text-brandTeal"></i>
        <span>+91 9084667088 / 9084669088</span>
      </a>
    </div>
    
    <div class="flex items-center gap-4 text-xs">
      <a href="https://wa.me/919084667088?text=Hi%20Ayush%20Cricket%20Academy%2C%20I%20want%20to%20enquire%20about%20admission" target="_blank" rel="noopener" class="hidden sm:inline-flex items-center gap-1.5 bg-brandTeal hover:bg-brandTealDark text-white px-3 py-1 rounded-full font-bold text-[11px] transition-colors shadow-sm">
        <i class="fa-brands fa-whatsapp text-sm"></i>
        <span>WhatsApp Inquiry</span>
      </a>
      <div class="flex items-center gap-3 text-slate-400">
        <span class="text-slate-500 font-medium">Follow:</span>
        <a href="https://facebook.com" target="_blank" rel="noopener" class="hover:text-brandTeal transition-colors" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noopener" class="hover:text-brandTeal transition-colors" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" class="hover:text-brandTeal transition-colors" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
</div>

<!-- ==================== FLOATING GLASS CAPSULE NAVBAR ==================== -->
<header id="main-header" class="sticky top-3 z-50 pointer-events-none transition-all duration-300 -mb-16 lg:mb-0">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 pointer-events-auto">
    <div class="nav-capsule-glass flex items-center justify-between px-4 sm:px-6 py-2 rounded-full transition-all duration-300">
      
      <!-- Official Black Logo & Academy Title -->
      <a href="index.html" class="flex items-center gap-2.5 group shrink-0">
        <img src="assets/images/logo.png" onerror="this.onerror=null; this.src='https://ayushcricketacademy.com/wp-content/uploads/2025/05/Ayush-Cricket-Academy-ayushcricketacademy.in_.png';" alt="Ayush Cricket Academy Logo" class="black-logo h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105">
        <span class="font-extrabold font-heading text-slate-900 text-xs sm:text-sm tracking-tight leading-none uppercase lg:hidden">AYUSH <span class="text-brandTeal">CRICKET</span></span>
      </a>

      <!-- Desktop Nav Menu -->
      <nav class="hidden lg:flex items-center gap-1 font-semibold text-slate-800 text-xs xl:text-sm tracking-tight">
        <a href="index.html" class="nav-link-cool text-slate-700 hover:text-brandTeal hover:bg-slate-100/80 px-3.5 py-1.5 rounded-full transition-all duration-300" data-page="home">Home</a>
        <a href="about.html" class="nav-link-cool text-slate-700 hover:text-brandTeal hover:bg-slate-100/80 px-3.5 py-1.5 rounded-full transition-all duration-300" data-page="about">About Us</a>
        <a href="facilities.html" class="nav-link-cool text-slate-700 hover:text-brandTeal hover:bg-slate-100/80 px-3.5 py-1.5 rounded-full transition-all duration-300" data-page="facilities">Facilities</a>
        
        <!-- Course Dropdown -->
        <div class="nav-dropdown">
          <a href="courses.html" class="nav-link-cool text-slate-700 hover:text-brandTeal hover:bg-slate-100/80 px-3.5 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5" data-page="courses">
            <span>Our Courses</span>
            <i class="fa-solid fa-chevron-down text-[9px] text-slate-400 transition-transform duration-300"></i>
          </a>
          <div class="nav-dropdown-menu">
            <a href="courses.html" class="nav-dropdown-item" data-subpage="courses">
              <i class="fa-solid fa-graduation-cap text-brandTeal text-xs"></i>
              <span>Courses Overview</span>
            </a>
            <a href="courses-full-time.html" class="nav-dropdown-item" data-subpage="courses-full-time">
              <i class="fa-solid fa-sun text-brandOrange text-xs"></i>
              <span>Full-Time Program</span>
            </a>
            <a href="courses-part-time.html" class="nav-dropdown-item" data-subpage="courses-part-time">
              <i class="fa-solid fa-moon text-teal-600 text-xs"></i>
              <span>Part-Time Program</span>
            </a>
          </div>
        </div>

        <a href="gallery.html" class="nav-link-cool text-slate-700 hover:text-brandTeal hover:bg-slate-100/80 px-3.5 py-1.5 rounded-full transition-all duration-300" data-page="gallery">Gallery</a>
        
        <!-- Booking Dropdown -->
        <div class="nav-dropdown">
          <button type="button" class="nav-link-cool text-slate-700 hover:text-brandTeal hover:bg-slate-100/80 px-3.5 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 focus:outline-none" data-page="booking" aria-haspopup="true" aria-expanded="false">
            <span>Booking</span>
            <i class="fa-solid fa-chevron-down text-[9px] text-slate-400 transition-transform duration-300"></i>
          </button>
          <div class="nav-dropdown-menu booking-dropdown-menu">
            <a href="corporate-ground-booking.html" class="nav-dropdown-item group" data-subpage="corporate-ground-booking">
              <div class="w-8 h-8 rounded-lg bg-teal-50 text-brandTeal flex items-center justify-center shrink-0 group-hover:bg-brandTeal group-hover:text-white transition-colors">
                <i class="fa-solid fa-building text-xs"></i>
              </div>
              <div>
                <div class="font-bold text-slate-800 group-hover:text-brandTeal text-xs leading-snug">Corporate Booking</div>
                <div class="text-[10px] text-slate-500 font-normal leading-tight">Corporate cricket events, tournaments &amp; team-building matches</div>
              </div>
            </a>
            <a href="professional-team-ground-booking.html" class="nav-dropdown-item group" data-subpage="professional-team-ground-booking">
              <div class="w-8 h-8 rounded-lg bg-orange-50 text-brandOrange flex items-center justify-center shrink-0 group-hover:bg-brandOrange group-hover:text-white transition-colors">
                <i class="fa-solid fa-trophy text-xs"></i>
              </div>
              <div>
                <div class="font-bold text-slate-800 group-hover:text-brandTeal text-xs leading-snug">Professional Team Booking</div>
                <div class="text-[10px] text-slate-500 font-normal leading-tight">High-performance training, practice camps &amp; professional team sessions</div>
              </div>
            </a>
            <a href="regular-ground-booking.html" class="nav-dropdown-item group" data-subpage="regular-ground-booking">
              <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <i class="fa-solid fa-baseball-bat-ball text-xs"></i>
              </div>
              <div>
                <div class="font-bold text-slate-800 group-hover:text-brandTeal text-xs leading-snug">Ground Booking</div>
                <div class="text-[10px] text-slate-500 font-normal leading-tight">Regular ground bookings for clubs, schools, colleges, academies &amp; individuals</div>
              </div>
            </a>
          </div>
        </div>

        <a href="testimonials.html" class="nav-link-cool text-slate-700 hover:text-brandTeal hover:bg-slate-100/80 px-3.5 py-1.5 rounded-full transition-all duration-300" data-page="testimonials">Reviews</a>
      </nav>

      <!-- Action CTA Button (Serves as primary Contact / Admission Enquiry) -->
      <div class="hidden sm:flex items-center gap-3 shrink-0">
        <a href="contact.html" class="btn-shine bg-gradient-to-r from-brandOrange to-brandOrangeHover text-white px-5 py-2 rounded-full font-extrabold text-xs tracking-wider uppercase shadow-md shadow-brandOrange/25 hover:shadow-brandOrange/45 hover:scale-105 transition-all duration-300 flex items-center gap-2">
          <span>Admission Enquiry</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </a>
      </div>

      <!-- Mobile Controls: Direct WhatsApp + Hamburger Menu -->
      <div class="lg:hidden flex items-center gap-2">
        <a href="https://wa.me/919084667088?text=Hi%20Ayush%20Cricket%20Academy%2C%20I%20want%20to%20enquire%20about%20admission" target="_blank" rel="noopener" class="w-9 h-9 rounded-full bg-brandTeal hover:bg-brandTealDark text-white flex items-center justify-center text-sm shadow-sm transition-all" title="WhatsApp Admissions">
          <i class="fa-brands fa-whatsapp text-base"></i>
        </a>
        <button id="mobile-menu-btn" class="text-slate-900 hover:text-brandTeal p-2 focus:outline-none" aria-label="Toggle Navigation">
          <i class="fa-solid fa-bars-staggered text-xl"></i>
        </button>
      </div>

    </div>
  </div>
</header>

<!-- ==================== MOBILE MENU DRAWER ==================== -->
<div id="mobile-overlay" class="fixed inset-0 bg-slate-950/70 z-50 hidden transition-opacity"></div>
<div id="mobile-drawer" class="fixed top-0 right-0 bottom-0 w-84 max-w-[85vw] bg-white text-slate-900 z-50 shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out p-6 flex flex-col justify-between overflow-y-auto">
  <div>
    <div class="flex items-center justify-between pb-5 border-b border-slate-100">
      <a href="index.html">
        <img src="assets/images/logo.png" onerror="this.onerror=null; this.src='https://ayushcricketacademy.com/wp-content/uploads/2025/05/Ayush-Cricket-Academy-ayushcricketacademy.in_.png';" alt="Ayush Cricket Academy Logo" class="black-logo h-11 w-auto object-contain">
      </a>
      <button id="mobile-menu-close" class="text-slate-500 hover:text-slate-900 p-2" aria-label="Close Navigation">
        <i class="fa-solid fa-xmark text-2xl"></i>
      </button>
    </div>

    <!-- Quick Info Bar in Mobile Drawer -->
    <div class="mt-4 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs space-y-2">
      <div class="flex items-center gap-2 text-brandTeal font-bold">
        <span class="w-2 h-2 rounded-full bg-brandTeal animate-pulse"></span>
        <span>Admissions Open 2025-26</span>
      </div>
      <div class="text-slate-600 text-[11px] flex items-center gap-1.5">
        <i class="fa-solid fa-location-dot text-brandTeal"></i>
        <span>Chidderwala, Kansrao, Uttarakhand</span>
      </div>
      <div class="text-slate-600 text-[11px] flex items-center gap-1.5">
        <i class="fa-solid fa-clock text-brandTeal"></i>
        <span>Morning: 6-9:30 AM | Evening: 3:30-7 PM</span>
      </div>
    </div>

    <nav class="flex flex-col gap-1.5 mt-5 font-semibold text-slate-800 text-sm">
      <a href="index.html" class="mobile-nav-link text-slate-700 hover:text-brandTeal py-2.5 px-4 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between" data-page="home">
        <span>Home</span>
        <i class="fa-solid fa-chevron-right text-xs text-slate-300"></i>
      </a>
      <a href="about.html" class="mobile-nav-link text-slate-700 hover:text-brandTeal py-2.5 px-4 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between" data-page="about">
        <span>About Us</span>
        <i class="fa-solid fa-chevron-right text-xs text-slate-300"></i>
      </a>
      <a href="facilities.html" class="mobile-nav-link text-slate-700 hover:text-brandTeal py-2.5 px-4 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between" data-page="facilities">
        <span>Facilities</span>
        <i class="fa-solid fa-chevron-right text-xs text-slate-300"></i>
      </a>

      <!-- Collapsible Courses Submenu in Mobile Drawer -->
      <div class="mobile-dropdown-container">
        <button id="mobile-courses-toggle" type="button" class="mobile-nav-link w-full text-slate-700 hover:text-brandTeal py-2.5 px-4 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between" data-page="courses">
          <span class="flex items-center gap-2">Our Courses</span>
          <i id="mobile-courses-chevron" class="fa-solid fa-chevron-down text-xs text-slate-400 transition-transform duration-300"></i>
        </button>
        <div id="mobile-courses-menu" class="hidden flex flex-col pl-4 pr-1 py-1 space-y-1">
          <a href="courses.html" class="mobile-subnav-link text-slate-600 hover:text-brandTeal py-2 px-3.5 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2" data-subpage="courses">
            <span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span>Courses Overview</span>
          </a>
          <a href="courses-full-time.html" class="mobile-subnav-link text-slate-600 hover:text-brandTeal py-2 px-3.5 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2" data-subpage="courses-full-time">
            <span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span>Full-Time Program</span>
          </a>
          <a href="courses-part-time.html" class="mobile-subnav-link text-slate-600 hover:text-brandTeal py-2 px-3.5 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2" data-subpage="courses-part-time">
            <span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span>Part-Time Program</span>
          </a>
        </div>
      </div>
      <a href="gallery.html" class="mobile-nav-link text-slate-700 hover:text-brandTeal py-2.5 px-4 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between" data-page="gallery">
        <span>Gallery</span>
        <i class="fa-solid fa-chevron-right text-xs text-slate-300"></i>
      </a>

      <!-- Collapsible Booking Submenu in Mobile Drawer -->
      <div class="mobile-dropdown-container">
        <button id="mobile-booking-toggle" type="button" class="mobile-nav-link w-full text-slate-700 hover:text-brandTeal py-2.5 px-4 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between" data-page="booking">
          <span class="flex items-center gap-2">Booking</span>
          <i id="mobile-booking-chevron" class="fa-solid fa-chevron-down text-xs text-slate-400 transition-transform duration-300"></i>
        </button>
        <div id="mobile-booking-menu" class="hidden flex flex-col pl-4 pr-1 py-1 space-y-1">
          <a href="corporate-ground-booking.html" class="mobile-subnav-link text-slate-600 hover:text-brandTeal py-2 px-3.5 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2" data-subpage="corporate-ground-booking">
            <i class="fa-solid fa-building text-[11px] text-brandTeal"></i>
            <div>
              <span class="block">Corporate Booking</span>
              <span class="block text-[10px] text-slate-400 font-normal">Events &amp; tournaments</span>
            </div>
          </a>
          <a href="professional-team-ground-booking.html" class="mobile-subnav-link text-slate-600 hover:text-brandTeal py-2 px-3.5 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2" data-subpage="professional-team-ground-booking">
            <i class="fa-solid fa-trophy text-[11px] text-brandOrange"></i>
            <div>
              <span class="block">Professional Team Booking</span>
              <span class="block text-[10px] text-slate-400 font-normal">High-performance camps</span>
            </div>
          </a>
          <a href="regular-ground-booking.html" class="mobile-subnav-link text-slate-600 hover:text-brandTeal py-2 px-3.5 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2" data-subpage="regular-ground-booking">
            <i class="fa-solid fa-baseball-bat-ball text-[11px] text-emerald-600"></i>
            <div>
              <span class="block">Ground Booking</span>
              <span class="block text-[10px] text-slate-400 font-normal">Clubs, schools &amp; individuals</span>
            </div>
          </a>
        </div>
      </div>

      <a href="testimonials.html" class="mobile-nav-link text-slate-700 hover:text-brandTeal py-2.5 px-4 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between" data-page="testimonials">
        <span>Reviews</span>
        <i class="fa-solid fa-chevron-right text-xs text-slate-300"></i>
      </a>
    </nav>
  </div>

  <div class="pt-5 mt-4 border-t border-slate-100 flex flex-col gap-2.5">
    <a href="tel:+919084667088" class="w-full bg-brandTeal text-white text-center py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2">
      <i class="fa-solid fa-phone"></i>
      <span>Call: +91 9084667088</span>
    </a>
    <a href="contact.html" class="mobile-nav-link w-full bg-gradient-to-r from-brandOrange to-brandOrangeHover text-white text-center py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg shadow-brandOrange/25">
      Admission Enquiry
    </a>
    <div class="text-xs text-slate-400 text-center mt-2">
      &copy; 2025 Ayush Cricket Academy
    </div>
  </div>
</div>
`;

  const FOOTER_TEMPLATE = `
<!-- ==================== INFORMATIVE FOOTER SECTION ==================== -->
<footer class="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
      
      <!-- Col 1: Brand Identity & Accreditation (4 Cols) -->
      <div class="lg:col-span-4 space-y-4">
        <a href="index.html" class="flex items-center gap-3">
          <img src="assets/images/logo.png" onerror="this.onerror=null; this.src='https://ayushcricketacademy.com/wp-content/uploads/2025/05/Ayush-Cricket-Academy-ayushcricketacademy.in_.png';" alt="Ayush Cricket Academy Logo" class="h-12 w-auto object-contain bg-white/10 p-1.5 rounded-xl border border-white/20">
          <span class="font-extrabold font-heading text-white text-base tracking-tight leading-none">AYUSH <span class="text-teal-400">CRICKET</span><br><span class="text-[10px] text-slate-400 tracking-widest uppercase">ACADEMY</span></span>
        </a>
        <p class="text-slate-400 text-xs leading-relaxed font-normal">
          Ayush Cricket Academy is Uttarakhand's premier cricket institute offering professional coaching, certified trainers, modern facilities, video analysis, indoor gym, hostel and dining hall in Uttarakhand.
        </p>
        
        <!-- Key Highlights Badges -->
        <div class="flex flex-wrap gap-2 pt-1">
          <span class="text-[10px] bg-slate-900 border border-slate-800 text-teal-300 px-2.5 py-1 rounded-md font-bold">⭐ 4.9 Student Rating</span>
          <span class="text-[10px] bg-slate-900 border border-slate-800 text-teal-300 px-2.5 py-1 rounded-md font-bold">🏆 500+ Players Trained</span>
          <span class="text-[10px] bg-slate-900 border border-slate-800 text-teal-300 px-2.5 py-1 rounded-md font-bold">🏠 Residential Hostel</span>
        </div>

        <div class="flex items-center gap-3 pt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm text-teal-400 hover:bg-brandOrange hover:text-white transition-colors" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm text-teal-400 hover:bg-brandOrange hover:text-white transition-colors" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm text-teal-400 hover:bg-brandOrange hover:text-white transition-colors" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>

      <!-- Col 2: Navigation & Programs (3 Cols) -->
      <div class="lg:col-span-3">
        <h4 class="text-xs font-bold uppercase tracking-wider text-teal-400 font-heading mb-4 border-b border-slate-800 pb-2">ACADEMY & PROGRAMS</h4>
        <ul class="space-y-2.5 text-xs text-slate-400">
          <li><a href="index.html" class="hover:text-teal-300 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-chevron-right text-[9px] text-teal-500"></i> Home</a></li>
          <li><a href="about.html" class="hover:text-teal-300 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-chevron-right text-[9px] text-teal-500"></i> About Us</a></li>
          <li><a href="facilities.html" class="hover:text-teal-300 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-chevron-right text-[9px] text-teal-500"></i> Training Facilities</a></li>
          <li><a href="courses.html" class="hover:text-teal-300 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-chevron-right text-[9px] text-teal-500"></i> Coaching Courses</a></li>
          <li><a href="gallery.html" class="hover:text-teal-300 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-chevron-right text-[9px] text-teal-500"></i> Photo Gallery</a></li>
          <li><a href="testimonials.html" class="hover:text-teal-300 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-chevron-right text-[9px] text-teal-500"></i> Student Reviews</a></li>
          <li><a href="regular-ground-booking.html" class="hover:text-teal-300 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-chevron-right text-[9px] text-teal-500"></i> Ground Booking</a></li>
          <li><a href="contact.html" class="hover:text-teal-300 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-chevron-right text-[9px] text-teal-500"></i> Admission Enquiry</a></li>
        </ul>
      </div>

      <!-- Col 3: Contact & Timings (3 Cols) -->
      <div class="lg:col-span-3">
        <h4 class="text-xs font-bold uppercase tracking-wider text-teal-400 font-heading mb-4 border-b border-slate-800 pb-2">CONTACT & TIMINGS</h4>
        <ul class="space-y-3 text-xs text-slate-400">
          <li class="flex items-start gap-2.5">
            <i class="fa-solid fa-location-dot text-teal-400 mt-1 shrink-0"></i>
            <span>Ayush Cricket Academy<br>Chidderwala, Kansrao, Uttarakhand 249204</span>
          </li>
          <li class="flex items-center gap-2.5">
            <i class="fa-solid fa-phone text-teal-400 shrink-0"></i>
            <a href="tel:+919084667088" class="hover:text-white transition-colors">+91 9084667088 / 9084669088</a>
          </li>
          <li class="flex items-center gap-2.5">
            <i class="fa-solid fa-envelope text-teal-400 shrink-0"></i>
            <span>info@ayushcricketacademy.com</span>
          </li>
          <li class="flex items-start gap-2.5 pt-1 border-t border-slate-900">
            <i class="fa-solid fa-clock text-teal-400 mt-0.5 shrink-0"></i>
            <div>
              <span class="text-white font-semibold block mb-0.5">Daily Batch Schedule:</span>
              <span>Morning: 6:00 AM - 9:30 AM<br>Evening: 3:30 PM - 7:00 PM</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- Col 4: Map Location & Direct Action (2 Cols) -->
      <div class="lg:col-span-2 space-y-3">
        <h4 class="text-xs font-bold uppercase tracking-wider text-teal-400 font-heading mb-4 border-b border-slate-800 pb-2">CAMPUS LOCATION</h4>
        <div class="w-full h-28 rounded-xl overflow-hidden border border-slate-800 relative shadow-md">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13812.37898854497!2d78.204561!3d30.063421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e0000000001%3A0x1!2sChidderwala%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" class="w-full h-full border-0" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <a href="tel:+919084667088" class="w-full bg-brandTeal hover:bg-teal-700 text-white text-center py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors">
          <i class="fa-solid fa-phone text-[10px]"></i>
          <span>Call Admissions</span>
        </a>
      </div>

    </div>

    <!-- Copyright Bottom Bar -->
    <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
      <div>
        &copy; Copyright 2025 Ayush Cricket Academy. All rights reserved.
      </div>
      <div class="flex items-center gap-6">
        <a href="#main-header" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:bg-brandOrange hover:text-white transition-colors" title="Back to Top">
          <i class="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </div>

  </div>
</footer>

<!-- Floating Contact / WhatsApp Widget -->
<div id="floating-contact-widget" class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
  <a href="https://wa.me/919084667088?text=Hi%20Ayush%20Cricket%20Academy%2C%20I%20want%20to%20enquire%20about%20admission" target="_blank" rel="noopener" class="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-2.5 rounded-full shadow-lg shadow-green-900/30 hover:scale-105 transition-all duration-300 text-xs font-bold" title="Chat on WhatsApp" aria-label="Chat with Academy on WhatsApp">
    <i class="fa-brands fa-whatsapp text-lg"></i>
    <span class="hidden sm:inline">WhatsApp Chat</span>
  </a>
  <a href="contact.html" class="flex items-center gap-2 bg-gradient-to-r from-brandOrange to-brandOrangeHover text-white px-3.5 py-2.5 rounded-full shadow-lg shadow-orange-900/30 hover:scale-105 transition-all duration-300 text-xs font-bold" title="Admissions & Contact">
    <i class="fa-solid fa-envelope text-sm"></i>
    <span class="hidden sm:inline">Enquire Now</span>
  </a>
</div>

<!-- ==================== MODALS ==================== -->
<!-- Polished Lightbox Modal for Gallery Images -->
<div id="lightbox-modal" class="fixed inset-0 modal-backdrop z-50 hidden items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md">
  <!-- Close Button Top Right -->
  <button id="lightbox-close" class="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-brandOrange text-white flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-105" aria-label="Close Lightbox (Esc)">
    <i class="fa-solid fa-xmark text-xl"></i>
  </button>

  <!-- Left Prev Button -->
  <button id="lightbox-prev" class="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-brandTeal text-white flex items-center justify-center transition-all duration-200 border border-white/20 hover:scale-110 shadow-xl" aria-label="Previous Image (Left Arrow)">
    <i class="fa-solid fa-chevron-left text-lg"></i>
  </button>

  <!-- Right Next Button -->
  <button id="lightbox-next" class="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-brandTeal text-white flex items-center justify-center transition-all duration-200 border border-white/20 hover:scale-110 shadow-xl" aria-label="Next Image (Right Arrow)">
    <i class="fa-solid fa-chevron-right text-lg"></i>
  </button>

  <!-- Main Image Container -->
  <div class="relative max-w-5xl w-full flex flex-col items-center justify-center">
    <div class="relative max-h-[78vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-black/40">
      <img id="lightbox-img" src="" alt="Gallery Preview" class="max-h-[78vh] w-auto max-w-full object-contain rounded-2xl transition-opacity duration-200">
    </div>
    
    <!-- Bottom Info Bar with Title & Counter -->
    <div class="mt-4 flex flex-col sm:flex-row items-center justify-between w-full px-2 gap-2 text-center sm:text-left">
      <div>
        <h4 id="lightbox-title" class="font-bold text-sm sm:text-base font-heading text-teal-400"></h4>
        <p class="text-xs text-slate-400">Ayush Cricket Academy Visual Archive</p>
      </div>
      <div class="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
        <i class="fa-regular fa-image text-brandTeal text-xs"></i>
        <span id="lightbox-counter" class="font-mono text-xs font-bold text-white tracking-widest">01 / 46</span>
      </div>
    </div>
  </div>
</div>

<!-- Video Modal -->
<div id="video-modal" class="fixed inset-0 modal-backdrop z-50 hidden items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md">
  <div class="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
    <button id="video-modal-close" class="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-brandOrange transition-colors" aria-label="Close Video">
      <i class="fa-solid fa-xmark text-xl"></i>
    </button>
    <div id="video-container" class="aspect-video w-full bg-black flex items-center justify-center">
      <!-- Dynamic video element inserted here via JS -->
    </div>
  </div>
</div>
`;

  function initSharedComponents() {
    const headerContainer = document.getElementById('site-header');
    const footerContainer = document.getElementById('site-footer');

    // 1. Render Header if placeholder is present
    if (headerContainer) {
      // Determine active page identifier
      let activePage = headerContainer.getAttribute('data-active');
      if (!activePage) {
        const path = window.location.pathname.toLowerCase();
        if (path.includes('courses-full-time')) activePage = 'courses-full-time';
        else if (path.includes('courses-part-time')) activePage = 'courses-part-time';
        else if (path.includes('courses')) activePage = 'courses';
        else if (path.includes('corporate-ground-booking')) activePage = 'corporate-ground-booking';
        else if (path.includes('professional-team-ground-booking')) activePage = 'professional-team-ground-booking';
        else if (path.includes('regular-ground-booking')) activePage = 'regular-ground-booking';
        else if (path.includes('about')) activePage = 'about';
        else if (path.includes('facilities')) activePage = 'facilities';
        else if (path.includes('gallery')) activePage = 'gallery';
        else if (path.includes('testimonials')) activePage = 'testimonials';
        else if (path.includes('booking')) activePage = 'regular-ground-booking';
        else if (path.includes('contact')) activePage = 'contact';
        else activePage = 'home';
      }

      const temp = document.createElement('div');
      temp.innerHTML = HEADER_TEMPLATE;

      const isCoursesSection = activePage.startsWith('courses');
      const isBookingSection = activePage.includes('booking') || activePage.includes('ground-booking');

      // Apply active state on desktop navbar
      const desktopLinks = temp.querySelectorAll('nav a[data-page], nav button[data-page]');
      desktopLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        const isActive = (linkPage === activePage) || (linkPage === 'courses' && isCoursesSection) || (linkPage === 'booking' && isBookingSection);
        if (isActive) {
          link.classList.remove('text-slate-700');
          link.classList.add('text-brandTeal', 'bg-brandTeal/10', 'font-bold', 'flex', 'items-center', 'gap-1.5');
          if (!link.querySelector('.animate-pulse')) {
            const dot = document.createElement('span');
            dot.className = 'w-1.5 h-1.5 rounded-full bg-brandTeal animate-pulse';
            link.appendChild(dot);
          }
        }
      });

      // Highlight active dropdown item on desktop
      const dropdownItems = temp.querySelectorAll('.nav-dropdown-item[data-subpage]');
      dropdownItems.forEach(item => {
        if (item.getAttribute('data-subpage') === activePage) {
          item.classList.add('active');
        }
      });

      // Apply active state on mobile drawer nav
      const mobileLinks = temp.querySelectorAll('.mobile-nav-link[data-page]');
      mobileLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        const isActive = (linkPage === activePage) || (linkPage === 'courses' && isCoursesSection) || (linkPage === 'booking' && isBookingSection);
        if (isActive) {
          link.classList.remove('text-slate-700');
          link.classList.add('text-brandTeal', 'bg-brandTeal/10', 'font-bold');
          const chevron = link.querySelector('.fa-chevron-right');
          if (chevron) {
            chevron.classList.remove('text-slate-300');
            chevron.classList.add('text-brandTeal');
          }
        }
      });

      // If in courses section, auto-expand mobile submenu and highlight subpage
      if (isCoursesSection) {
        const mobileMenu = temp.querySelector('#mobile-courses-menu');
        const mobileChevron = temp.querySelector('#mobile-courses-chevron');
        if (mobileMenu) mobileMenu.classList.remove('hidden');
        if (mobileChevron) mobileChevron.classList.add('rotate-180', 'text-brandTeal');

        const mobileSublinks = temp.querySelectorAll('.mobile-subnav-link[data-subpage]');
        mobileSublinks.forEach(sublink => {
          if (sublink.getAttribute('data-subpage') === activePage) {
            sublink.classList.remove('text-slate-600');
            sublink.classList.add('text-brandTeal', 'bg-brandTeal/10', 'font-bold');
            const dot = sublink.querySelector('span');
            if (dot) {
              dot.className = 'w-1.5 h-1.5 rounded-full bg-brandTeal animate-pulse';
            }
          }
        });
      }

      // If in booking section, auto-expand mobile booking submenu and highlight subpage
      if (isBookingSection) {
        const mobileBookingMenu = temp.querySelector('#mobile-booking-menu');
        const mobileBookingChevron = temp.querySelector('#mobile-booking-chevron');
        if (mobileBookingMenu) mobileBookingMenu.classList.remove('hidden');
        if (mobileBookingChevron) mobileBookingChevron.classList.add('rotate-180', 'text-brandTeal');

        const mobileBookingSublinks = temp.querySelectorAll('#mobile-booking-menu .mobile-subnav-link[data-subpage]');
        mobileBookingSublinks.forEach(sublink => {
          if (sublink.getAttribute('data-subpage') === activePage) {
            sublink.classList.remove('text-slate-600');
            sublink.classList.add('text-brandTeal', 'bg-brandTeal/10', 'font-bold');
          }
        });
      }

      // Unpack elements directly into body so <header id="main-header"> is a direct child of <body>
      // This is crucial for CSS `position: sticky` so it stays sticky across the entire document
      while (temp.firstChild) {
        headerContainer.parentNode.insertBefore(temp.firstChild, headerContainer);
      }
      headerContainer.remove();
    }

    // 2. Render Footer if placeholder is present
    if (footerContainer) {
      const tempFooter = document.createElement('div');
      tempFooter.innerHTML = FOOTER_TEMPLATE;
      while (tempFooter.firstChild) {
        footerContainer.parentNode.insertBefore(tempFooter.firstChild, footerContainer);
      }
      footerContainer.remove();
    }

    // Dispatch event so main.js or other scripts can hook into elements if needed
    document.dispatchEvent(new CustomEvent('componentsLoaded'));
  }

  // Execute synchronously if DOM is already parsed, or on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSharedComponents);
  } else {
    initSharedComponents();
  }
})();
