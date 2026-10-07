/**
 * Ayush Cricket Academy - Interactive JS
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Sticky Navigation & Scroll Active Indicator ---
  window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Highlight active nav item on scroll (only if data-section links exist, e.g. on single-page landing)
  const sections = document.querySelectorAll("section[id]");
  const navSectionLinks = document.querySelectorAll(
    ".nav-link-cool[data-section]",
  );

  if (navSectionLinks.length > 0 && sections.length > 0) {
    window.addEventListener("scroll", () => {
      let currentSection = "hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      navSectionLinks.forEach((link) => {
        const targetSec = link.getAttribute("data-section");
        if (targetSec === currentSection) {
          link.classList.add("text-brandTeal", "bg-brandTeal/10", "font-bold");
          link.classList.remove("text-slate-700");
          if (!link.querySelector(".animate-pulse")) {
            const dot = document.createElement("span");
            dot.className =
              "w-1.5 h-1.5 rounded-full bg-brandTeal animate-pulse ml-1.5 inline-block";
            link.appendChild(dot);
          }
        } else {
          link.classList.remove(
            "text-brandTeal",
            "bg-brandTeal/10",
            "font-bold",
          );
          link.classList.add("text-slate-700");
          const dot = link.querySelector(".animate-pulse");
          if (dot) dot.remove();
        }
      });
    });
  }

  // --- 2. Mobile Menu Toggle ---
  function openMobileMenu() {
    const mobileDrawer = document.getElementById("mobile-drawer");
    const mobileOverlay = document.getElementById("mobile-overlay");
    if (mobileDrawer) mobileDrawer.classList.remove("translate-x-full");
    if (mobileOverlay) mobileOverlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    const mobileDrawer = document.getElementById("mobile-drawer");
    const mobileOverlay = document.getElementById("mobile-overlay");
    if (mobileDrawer) mobileDrawer.classList.add("translate-x-full");
    if (mobileOverlay) mobileOverlay.classList.add("hidden");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest("#mobile-menu-btn")) {
      openMobileMenu();
    } else if (
      e.target.closest("#mobile-menu-close") ||
      e.target.id === "mobile-overlay"
    ) {
      closeMobileMenu();
    } else if (e.target.closest("#mobile-courses-toggle")) {
      e.preventDefault();
      const menu = document.getElementById("mobile-courses-menu");
      const chevron = document.getElementById("mobile-courses-chevron");
      if (menu) menu.classList.toggle("hidden");
      if (chevron) chevron.classList.toggle("rotate-180");
    } else if (e.target.closest("#mobile-booking-toggle")) {
      e.preventDefault();
      const menu = document.getElementById("mobile-booking-menu");
      const chevron = document.getElementById("mobile-booking-chevron");
      if (menu) menu.classList.toggle("hidden");
      if (chevron) chevron.classList.toggle("rotate-180");
    } else if (e.target.closest(".mobile-subnav-link")) {
      closeMobileMenu();
    } else if (
      e.target.closest(
        ".mobile-nav-link:not(#mobile-courses-toggle):not(#mobile-booking-toggle)",
      )
    ) {
      closeMobileMenu();
    }
  });

  // --- Accordion FAQ Handler (Delegated) ---
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".accordion-trigger");
    if (trigger) {
      e.preventDefault();
      const item = trigger.closest(".accordion-item");
      if (!item) return;
      const isOpen = item.classList.contains("active");
      const parentContainer = item.closest(".accordion-group");
      if (parentContainer) {
        parentContainer.querySelectorAll(".accordion-item").forEach((other) => {
          if (other !== item) other.classList.remove("active");
        });
      }
      item.classList.toggle("active", !isOpen);
    }
  });

  // --- 3. Gallery Filtering ---
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active state from all buttons
      filterBtns.forEach((b) => {
        b.classList.remove("bg-brandTeal", "text-white", "shadow-md");
        b.classList.add("text-slate-600", "hover:text-slate-900");
      });

      // Add active state to clicked button
      btn.classList.add("bg-brandTeal", "text-white", "shadow-md");
      btn.classList.remove("text-slate-600", "hover:text-slate-900");

      const filterValue = btn.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        if (filterValue === "all" || filterValue === itemCategory) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 50);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.9)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // --- 4. Lightbox Modal for Gallery with Prev/Next, Counter & Keyboard Arrows ---
  let activeLightboxItems = [];
  let currentLightboxIndex = 0;
  let savedScrollY = 0;

  function collectLightboxItems() {
    const triggers = Array.from(
      document.querySelectorAll(".gallery-zoom-trigger"),
    );
    // Filter triggers to visible ones in current view
    const visibleTriggers = triggers.filter((t) => {
      const parent = t.closest(".gallery-item");
      return !parent || parent.style.display !== "none";
    });

    if (visibleTriggers.length > 0) {
      activeLightboxItems = visibleTriggers.map((t) => ({
        src: t.getAttribute("data-img"),
        title: t.getAttribute("data-title") || "Ayush Cricket Academy Gallery",
      }));
    } else if (window.academyMedia && window.academyMedia.images) {
      activeLightboxItems = window.academyMedia.images.map((img) => ({
        src: img.src,
        title: img.title,
      }));
    }
  }

  function updateLightboxView() {
    if (!activeLightboxItems.length) return;
    const item = activeLightboxItems[currentLightboxIndex];
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxCounter = document.getElementById("lightbox-counter");

    if (lightboxImg) {
      lightboxImg.style.opacity = "0.3";
      lightboxImg.src = item.src;
      lightboxImg.onload = () => {
        lightboxImg.style.opacity = "1";
      };
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCounter) {
      const currentNum = String(currentLightboxIndex + 1).padStart(2, "0");
      const totalNum = String(activeLightboxItems.length).padStart(2, "0");
      lightboxCounter.textContent = `${currentNum} / ${totalNum}`;
    }
  }

  function openLightbox(index) {
    collectLightboxItems();
    if (!activeLightboxItems.length) return;
    currentLightboxIndex =
      (index + activeLightboxItems.length) % activeLightboxItems.length;

    const lightboxModal = document.getElementById("lightbox-modal");
    if (!lightboxModal) return;

    savedScrollY = window.scrollY;
    updateLightboxView();

    lightboxModal.classList.remove("hidden");
    lightboxModal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    const lightboxModal = document.getElementById("lightbox-modal");
    if (lightboxModal && !lightboxModal.classList.contains("hidden")) {
      lightboxModal.classList.add("hidden");
      lightboxModal.classList.remove("flex");
      document.body.style.overflow = "";
      window.scrollTo(0, savedScrollY);
    }
  }

  function prevLightboxImage() {
    if (!activeLightboxItems.length) return;
    currentLightboxIndex =
      (currentLightboxIndex - 1 + activeLightboxItems.length) %
      activeLightboxItems.length;
    updateLightboxView();
  }

  function nextLightboxImage() {
    if (!activeLightboxItems.length) return;
    currentLightboxIndex =
      (currentLightboxIndex + 1) % activeLightboxItems.length;
    updateLightboxView();
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".gallery-zoom-trigger");
    if (trigger) {
      e.preventDefault();
      collectLightboxItems();
      const clickedSrc = trigger.getAttribute("data-img");
      const foundIdx = activeLightboxItems.findIndex(
        (it) => it.src === clickedSrc,
      );
      openLightbox(foundIdx !== -1 ? foundIdx : 0);
      return;
    }

    if (e.target.closest("#lightbox-prev")) {
      e.preventDefault();
      e.stopPropagation();
      prevLightboxImage();
      return;
    }

    if (e.target.closest("#lightbox-next")) {
      e.preventDefault();
      e.stopPropagation();
      nextLightboxImage();
      return;
    }

    if (
      e.target.closest("#lightbox-close") ||
      e.target.id === "lightbox-modal"
    ) {
      closeLightbox();
    }
  });

  // --- 5. Video Player Modal (Supports .video-play-btn and .video-card-trigger) ---
  function closeVideoModal() {
    const videoModal = document.getElementById("video-modal");
    const videoContainer = document.getElementById("video-container");
    if (videoModal && !videoModal.classList.contains("hidden")) {
      const activeVideo = document.getElementById("active-modal-video");
      if (activeVideo) {
        activeVideo.pause();
        activeVideo.src = "";
      }
      if (videoContainer) videoContainer.innerHTML = "";
      videoModal.classList.add("hidden");
      videoModal.classList.remove("flex");
      document.body.style.overflow = "";
      window.scrollTo(0, savedScrollY);
    }
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".video-play-btn, .video-card-trigger");
    if (trigger) {
      e.preventDefault();
      const videoModal = document.getElementById("video-modal");
      const videoContainer = document.getElementById("video-container");
      const mediaUrl =
        trigger.getAttribute("data-video") ||
        trigger.querySelector("[data-video]")?.getAttribute("data-video");
      const playerTitle =
        trigger.getAttribute("data-title") ||
        trigger.querySelector("[data-title]")?.getAttribute("data-title") ||
        "Ayush Cricket Academy Video";

      if (!mediaUrl || !videoModal || !videoContainer) return;

      savedScrollY = window.scrollY;
      videoContainer.innerHTML = "";

      if (mediaUrl.endsWith(".mp4")) {
        videoContainer.innerHTML = `
          <div class="relative w-full h-full flex flex-col justify-center items-center bg-black rounded-2xl overflow-hidden">
            <video id="active-modal-video" controls autoplay playsinline preload="auto" class="w-full max-h-[72vh] object-contain rounded-xl bg-black">
              <source src="${mediaUrl}" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
            <div class="w-full bg-slate-900 border-t border-slate-800 p-3 sm:p-4 flex items-center justify-between text-xs text-white">
              <div class="truncate mr-3">
                <span class="font-bold text-teal-400 font-heading block sm:inline mr-2 truncate">${playerTitle}</span>
                <span class="text-slate-400 text-[11px] hidden sm:inline">Ayush Cricket Academy Archive</span>
              </div>
              <a href="${mediaUrl}" target="_blank" rel="noopener" class="text-brandOrange hover:underline text-[11px] font-semibold shrink-0 flex items-center gap-1 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                <span>Direct Link</span>
                <i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
              </a>
            </div>
          </div>
        `;
        const videoElement = document.getElementById("active-modal-video");
        if (videoElement) {
          videoElement.play().catch(() => {});
        }
      } else {
        const iframeElement = document.createElement("iframe");
        iframeElement.src = mediaUrl;
        iframeElement.title = playerTitle;
        iframeElement.className = "w-full h-full rounded-xl border-0";
        iframeElement.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframeElement.allowFullscreen = true;
        videoContainer.appendChild(iframeElement);
      }

      videoModal.classList.remove("hidden");
      videoModal.classList.add("flex");
      document.body.style.overflow = "hidden";
      return;
    }

    if (
      e.target.closest("#video-modal-close") ||
      e.target.id === "video-modal"
    ) {
      closeVideoModal();
    }
  });

  // --- 6. Number Counter Animation ---
  const counters = document.querySelectorAll(".stat-counter");
  let animated = false;

  function runCounters() {
    const scrollPos = window.scrollY + window.innerHeight;
    const statsSection = document.getElementById("stats-section");
    if (!statsSection) return;

    if (!animated && scrollPos > statsSection.offsetTop + 100) {
      animated = true;
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCount = () => {
          current += step;
          if (current < target) {
            counter.innerText = Math.ceil(current);
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText =
              target + (counter.getAttribute("data-suffix") || "");
          }
        };
        updateCount();
      });
    }
  }

  window.addEventListener("scroll", runCounters);

  // --- 7. Keyboard Navigation (ESC, Left/Right Arrows) ---
  document.addEventListener("keydown", (e) => {
    const lightboxModal = document.getElementById("lightbox-modal");
    const isLightboxOpen =
      lightboxModal && !lightboxModal.classList.contains("hidden");

    if (e.key === "Escape") {
      closeLightbox();
      closeVideoModal();
      closeMobileMenu();
    } else if (isLightboxOpen && e.key === "ArrowLeft") {
      prevLightboxImage();
    } else if (isLightboxOpen && e.key === "ArrowRight") {
      nextLightboxImage();
    }
  });
});
