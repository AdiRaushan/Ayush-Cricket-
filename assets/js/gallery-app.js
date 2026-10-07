/**
 * Ayush Cricket Academy - Dynamic Gallery Controller
 * Manages the archive of 46 images & 54 hosted videos,
 * category filtering, responsive athletic card layout, and lazy load-more pagination.
 */

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('archive-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const loadMoreContainer = document.getElementById('load-more-container');
    const filterButtons = document.querySelectorAll('.gallery-filter-pill');
    const activeFilterCount = document.getElementById('filter-count');

    if (!galleryContainer || !window.academyMedia) return;

    // Helper map to assign crisp, high-res poster images based on category/index
    const posterFallbacks = {
      'training': [
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/professional-cricket-training.jpg',
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/cricket-coaching-in-chidderwala.jpg',
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/youth-cricket-coaching.jpg',
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/coach-training-students.jpg'
      ],
      'grounds': [
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/ayush-cricket-academy.jpg',
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/chidderwala-cricket-academy.jpg',
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/cricket-academy-chidderwala.jpg',
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/cricket-training-center-chidderwala.jpg'
      ],
      'gym-fitness': [
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/fitness-sessions-for-cricketers.jpg',
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/cricket-warmup-drills.jpg'
      ],
      'hostel-life': [
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/cricket-academy.jpg',
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/best-cricket-academy.jpg',
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/certified-cricket-academy.jpg'
      ],
      'canteen': [
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/summer-cricket-camp.jpg',
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/best-cricket-academy-uttarakhand.jpg'
      ],
      'match-practice': [
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/match-practice.jpg',
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/net-practice-cricket.jpg',
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/net-practice-cricket-academy.jpg',
        'https://ayushcricketacademy.com/wp-content/uploads/2025/05/match-practice-session.jpg'
      ]
    };

    function getPoster(item, index) {
      if (item.poster) return item.poster;
      const list = posterFallbacks[item.category] || posterFallbacks['training'];
      return list[index % list.length];
    }

    // Combine all media into an archive list
    const allImages = window.academyMedia.images.map(img => ({
      type: 'image',
      id: img.id,
      src: img.src,
      title: img.title,
      category: img.category,
      tag: img.tag,
      alt: img.alt
    }));

    const allVideos = window.academyMedia.videos.map((vid, idx) => ({
      type: 'video',
      id: vid.id,
      src: vid.src,
      title: vid.title,
      category: vid.category,
      tag: vid.tag,
      poster: getPoster(vid, idx)
    }));

    // Natural blend of images and videos
    const fullMediaArchive = [];
    const maxLen = Math.max(allImages.length, allVideos.length);
    for (let i = 0; i < maxLen; i++) {
      if (i < allImages.length) fullMediaArchive.push(allImages[i]);
      if (i < allVideos.length) fullMediaArchive.push(allVideos[i]);
    }

    let currentFilter = 'all';
    let displayedCount = 0;
    const ITEMS_PER_PAGE = 16;

    function getFilteredItems() {
      if (currentFilter === 'all') return fullMediaArchive;
      return fullMediaArchive.filter(item => {
        if (currentFilter === item.category) return true;
        if (currentFilter === 'training' && (item.category === 'batting' || item.category === 'bowling' || item.category === 'fielding')) {
          return true;
        }
        return false;
      });
    }

    function createMediaCard(item) {
      const card = document.createElement('div');

      if (item.type === 'image') {
        card.className = 'gallery-item group gallery-zoom-trigger cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 hover:-translate-y-1 flex flex-col';
        card.setAttribute('data-category', item.category);
        card.setAttribute('data-img', item.src);
        card.setAttribute('data-title', item.title);

        card.innerHTML = `
          <div class="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
            <img src="${item.src}" alt="${item.alt || item.title}" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            
            <!-- Category Tag -->
            <div class="absolute top-3 left-3 z-10">
              <span class="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-teal-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-teal-500/30">
                <i class="fa-regular fa-image text-[10px]"></i>
                <span>${item.tag}</span>
              </span>
            </div>

            <!-- Zoom Icon -->
            <div class="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-white/20 hover:bg-brandOrange text-white flex items-center justify-center backdrop-blur-md transition-colors shadow">
              <i class="fa-solid fa-expand text-xs"></i>
            </div>
          </div>

          <div class="p-4 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
            <div>
              <h3 class="font-bold text-sm font-heading text-slate-900 group-hover:text-brandTeal transition-colors line-clamp-1">${item.title}</h3>
              <p class="text-xs text-slate-500 mt-0.5">Ayush Cricket Academy • Uttarakhand</p>
            </div>
            <div class="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-brandTeal">
              <span>View Full Photo</span>
              <i class="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        `;
      } else {
        // Video card: Clean, robust, 100% clickable
        card.className = 'gallery-item group video-card-trigger cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 hover:-translate-y-1 flex flex-col';
        card.setAttribute('data-category', item.category);
        card.setAttribute('data-video', item.src);
        card.setAttribute('data-title', item.title);

        card.innerHTML = `
          <div class="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
            <img src="${item.poster}" alt="${item.title}" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108 brightness-90">
            <div class="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/40 transition-colors"></div>

            <!-- Top Tag Badges -->
            <div class="absolute top-3 left-3 z-10 flex items-center gap-1.5">
              <span class="inline-flex items-center gap-1 bg-brandOrange text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                <i class="fa-solid fa-play text-[8px]"></i>
                <span>${item.tag}</span>
              </span>
              <span class="bg-black/70 backdrop-blur-md text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-teal-500/30">
                HD Video
              </span>
            </div>

            <!-- Center Glowing Pulse Play Button -->
            <div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-brandOrange group-hover:bg-brandOrangeHover text-white flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 play-btn-pulse z-10">
              <i class="fa-solid fa-play text-sm ml-0.5"></i>
            </div>
          </div>

          <div class="p-4 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
            <div>
              <h3 class="font-bold text-sm font-heading text-slate-900 group-hover:text-brandOrange transition-colors line-clamp-1">${item.title}</h3>
              <p class="text-xs text-slate-500 mt-0.5">Ayush Cricket Academy Footage</p>
            </div>
            <div class="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-brandOrange">
              <span class="flex items-center gap-1">
                <i class="fa-solid fa-circle-play text-[11px]"></i>
                <span>Watch Video</span>
              </span>
              <i class="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        `;
      }

      return card;
    }

    function renderNextBatch() {
      const items = getFilteredItems();
      const nextBatch = items.slice(displayedCount, displayedCount + ITEMS_PER_PAGE);

      nextBatch.forEach((item) => {
        const card = createMediaCard(item);
        galleryContainer.appendChild(card);
      });

      displayedCount += nextBatch.length;

      // Update counters & Load More button visibility
      if (activeFilterCount) {
        activeFilterCount.textContent = `Showing ${displayedCount} of ${items.length} media assets`;
      }

      if (displayedCount >= items.length) {
        if (loadMoreContainer) loadMoreContainer.classList.add('hidden');
      } else {
        if (loadMoreContainer) loadMoreContainer.classList.remove('hidden');
      }
    }

    function applyFilter(category) {
      currentFilter = category;
      displayedCount = 0;
      galleryContainer.innerHTML = '';

      // Update active pill UI
      filterButtons.forEach(btn => {
        const btnFilter = btn.getAttribute('data-filter');
        if (btnFilter === category) {
          btn.className = 'gallery-filter-pill active bg-brandTeal text-white shadow-md shadow-brandTeal/30 px-4 py-2 rounded-full font-bold text-xs transition-all duration-300 flex items-center gap-1.5';
        } else {
          btn.className = 'gallery-filter-pill bg-white text-slate-700 hover:text-brandTeal hover:bg-slate-50 border border-slate-200 px-4 py-2 rounded-full font-semibold text-xs transition-all duration-300 flex items-center gap-1.5';
        }
      });

      renderNextBatch();
    }

    // Filter pill click listeners
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = btn.getAttribute('data-filter');
        applyFilter(cat);
      });
    });

    // Load More click listener
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderNextBatch();
      });
    }

    // Initial render
    applyFilter('all');
  });
})();
