/**
 * Ayush Cricket Academy - Reusable Ground Reservation Engine
 * Handles dynamic calendar, ground selection, time slot rendering, summary calculations,
 * client-side form validation, and booking request submissions across all 3 booking pages.
 */

(function () {
  'use strict';

  // State Management
  const state = {
    pageType: 'regular', // 'corporate' | 'professional' | 'regular'
    currentMonthDate: new Date(), // Calendar viewing month
    selectedDate: new Date(),     // Selected reservation date (defaults to today)
    selectedGroundId: 'ground-1', // Default to 1st Ground
    selectedSlotId: 'g1-s1',      // Default to 1st slot of Ground 1
    bookingRequestSubmitted: false,
    lastSubmissionData: null
  };

  // Helper: Format Date to readable string
  function formatDateReadable(date) {
    if (!date) return '';
    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
  }

  function formatDateFull(date) {
    if (!date) return '';
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
  }

  function isSameDay(d1, d2) {
    if (!d1 || !d2) return false;
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  function isPastDate(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(date);
    target.setHours(0, 0, 0, 0);
    return target < today;
  }

  // --- Backend Abstraction Layer ---
  /**
   * Abstracted slot provider.
   * In a future release with a live backend, this will fetch real-time slots via fetch(`/api/slots?date=${date}&ground=${groundId}`)
   */
  function getAvailableSlots(date, groundId) {
    const grounds = window.bookingData ? window.bookingData.grounds : [];
    const ground = grounds.find(g => g.id === groundId) || grounds[0];
    if (!ground) return [];

    // Return slots defined for this ground.
    // Ground 1 has 3 slots; Ground 2 has 2 slots.
    return ground.slots.map(slot => ({
      ...slot,
      status: 'available'
    }));
  }

  /**
   * Abstracted booking request submission.
   * Simulates network latency and resolves with a unique booking request receipt.
   */
  function submitBookingRequest(payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomNum = Math.floor(100000 + Math.random() * 900000);
        const receipt = {
          success: true,
          referenceId: `ACA-REQ-${randomNum}`,
          submittedAt: new Date().toISOString(),
          status: 'Booking Request Received',
          ...payload
        };
        resolve(receipt);
      }, 600);
    });
  }

  // --- UI Renderers ---

  // 1. Render Calendar UI
  function renderCalendar() {
    const calendarGrid = document.getElementById('booking-calendar-grid');
    const monthTitle = document.getElementById('calendar-month-heading');
    const prevBtn = document.getElementById('calendar-prev-month');
    const nextBtn = document.getElementById('calendar-next-month');

    if (!calendarGrid || !monthTitle) return;

    const currentYear = state.currentMonthDate.getFullYear();
    const currentMonth = state.currentMonthDate.getMonth();

    // Set Month Heading
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    // Disable Prev button if viewing current month of real today
    const realToday = new Date();
    if (prevBtn) {
      const isCurrentOrPastMonth =
        currentYear < realToday.getFullYear() ||
        (currentYear === realToday.getFullYear() && currentMonth <= realToday.getMonth());
      prevBtn.disabled = isCurrentOrPastMonth;
      if (isCurrentOrPastMonth) {
        prevBtn.classList.add('opacity-30', 'cursor-not-allowed');
      } else {
        prevBtn.classList.remove('opacity-30', 'cursor-not-allowed');
      }
    }

    // Clear days
    calendarGrid.innerHTML = '';

    // Day headers (Sun - Sat)
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
      const headerEl = document.createElement('div');
      headerEl.className = 'calendar-day-header';
      headerEl.textContent = day;
      calendarGrid.appendChild(headerEl);
    });

    // Calculate dates
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Empty cells before 1st of month
    for (let i = 0; i < firstDayIndex; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'calendar-day-btn is-empty';
      calendarGrid.appendChild(emptyCell);
    }

    // Days in current month
    for (let day = 1; day <= daysInMonth; day++) {
      const cellDate = new Date(currentYear, currentMonth, day);
      const isPast = isPastDate(cellDate);
      const isToday = isSameDay(cellDate, realToday);
      const isSelected = isSameDay(cellDate, state.selectedDate);

      const dayBtn = document.createElement('button');
      dayBtn.type = 'button';
      dayBtn.className = 'calendar-day-btn';
      dayBtn.textContent = day;
      dayBtn.setAttribute('data-day', day);
      dayBtn.setAttribute('aria-label', `${day} ${monthNames[currentMonth]} ${currentYear}`);

      if (isPast) {
        dayBtn.disabled = true;
        dayBtn.classList.add('is-disabled');
        dayBtn.setAttribute('aria-disabled', 'true');
      } else {
        if (isToday) dayBtn.classList.add('is-today');
        if (isSelected) {
          dayBtn.classList.add('is-selected');
          dayBtn.setAttribute('aria-selected', 'true');
        }

        dayBtn.addEventListener('click', () => {
          state.selectedDate = cellDate;
          renderCalendar();
          updateSummary();
        });
      }

      calendarGrid.appendChild(dayBtn);
    }
  }

  // 2. Render Ground Selection Tabs
  function renderGroundTabs() {
    const groundTabsContainer = document.getElementById('ground-tabs-container');
    if (!groundTabsContainer || !window.bookingData) return;

    groundTabsContainer.innerHTML = '';
    const grounds = window.bookingData.grounds;

    grounds.forEach(ground => {
      const isActive = ground.id === state.selectedGroundId;
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = `ground-tab-btn p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left w-full ${
        isActive ? 'is-active' : ''
      }`;
      tab.setAttribute('data-ground-id', ground.id);
      tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');

      tab.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200">
            <img src="${ground.image}" alt="${ground.name}" class="w-full h-full object-cover">
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-extrabold font-heading text-slate-900 text-sm sm:text-base">${ground.name}</span>
              <span class="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded-full">${ground.slotsPerDayText}</span>
            </div>
            <p class="text-xs text-slate-500 font-normal">Ayush Cricket Academy Turf Ground</p>
          </div>
        </div>
        <div class="sm:text-right shrink-0">
          <div class="text-base sm:text-lg font-black text-brandTeal font-heading">${ground.feeDisplay}</div>
          <div class="text-[10px] text-slate-400 font-medium">${ground.feeUnit}</div>
        </div>
      `;

      tab.addEventListener('click', () => {
        if (state.selectedGroundId !== ground.id) {
          state.selectedGroundId = ground.id;
          // Verify if currently selected slot exists on newly selected ground
          const availableSlots = getAvailableSlots(state.selectedDate, ground.id);
          const slotExists = availableSlots.some(s => s.id === state.selectedSlotId);
          if (!slotExists) {
            state.selectedSlotId = availableSlots[0] ? availableSlots[0].id : null;
          }
          renderGroundTabs();
          renderTimeSlots();
          updateSummary();
        }
      });

      groundTabsContainer.appendChild(tab);
    });
  }

  // 3. Render Time Slot Cards
  function renderTimeSlots() {
    const slotsContainer = document.getElementById('time-slots-container');
    const slotCountBadge = document.getElementById('slot-count-badge');
    if (!slotsContainer) return;

    slotsContainer.innerHTML = '';
    const slots = getAvailableSlots(state.selectedDate, state.selectedGroundId);

    if (slotCountBadge) {
      slotCountBadge.textContent = `${slots.length} Slots Available`;
    }

    slots.forEach(slot => {
      const isSelected = slot.id === state.selectedSlotId;
      const card = document.createElement('div');
      card.className = `slot-card ${isSelected ? 'is-selected' : ''}`;
      card.setAttribute('role', 'radio');
      card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      card.setAttribute('tabindex', '0');

      card.innerHTML = `
        <div class="flex items-center justify-between gap-3 mb-2">
          <span class="slot-badge text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
            isSelected ? 'bg-white/20 text-white border border-white/30' : 'bg-teal-50 text-brandTeal border border-teal-200'
          }">
            <i class="fa-regular fa-clock mr-1 text-[10px]"></i>
            ${slot.label}
          </span>
          <span class="text-xs font-bold ${isSelected ? 'text-teal-200' : 'text-slate-400'}">
            ${slot.duration}
          </span>
        </div>
        <div class="flex items-center justify-between gap-4">
          <div>
            <h4 class="slot-heading text-base sm:text-lg font-black font-heading ${
              isSelected ? 'text-white' : 'text-slate-900'
            }">
              ${slot.time}
            </h4>
            <div class="slot-subtext text-xs ${isSelected ? 'text-teal-100' : 'text-slate-500'}">
              Full 4-Hour Exclusive Ground Slot
            </div>
          </div>
          <div class="text-right shrink-0">
            <div class="slot-price text-lg font-black font-heading ${
              isSelected ? 'text-white' : 'text-brandTeal'
            }">
              ${slot.feeDisplay}
            </div>
            <div class="text-[11px] font-semibold flex items-center justify-end gap-1 ${
              isSelected ? 'text-white' : 'text-emerald-600'
            }">
              <i class="fa-solid fa-${isSelected ? 'circle-check' : 'circle-dot'} text-xs"></i>
              <span>${isSelected ? 'Selected' : 'Available'}</span>
            </div>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        state.selectedSlotId = slot.id;
        renderTimeSlots();
        updateSummary();
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          state.selectedSlotId = slot.id;
          renderTimeSlots();
          updateSummary();
        }
      });

      slotsContainer.appendChild(card);
    });
  }

  // 4. Update Summary Card
  function updateSummary() {
    const summaryDate = document.getElementById('summary-date');
    const summaryGround = document.getElementById('summary-ground');
    const summaryTime = document.getElementById('summary-time');
    const summaryDuration = document.getElementById('summary-duration');
    const summaryFee = document.getElementById('summary-fee');
    const summaryTotal = document.getElementById('summary-total');
    const formGroundField = document.getElementById('form-booking-ground');
    const formDateField = document.getElementById('form-booking-date');
    const formSlotField = document.getElementById('form-booking-slot');

    const grounds = window.bookingData ? window.bookingData.grounds : [];
    const currentGround = grounds.find(g => g.id === state.selectedGroundId) || grounds[0];
    const slots = currentGround ? currentGround.slots : [];
    const currentSlot = slots.find(s => s.id === state.selectedSlotId) || slots[0];

    const dateStr = formatDateFull(state.selectedDate);
    const groundName = currentGround ? currentGround.name : '1st Ground';
    const timeStr = currentSlot ? currentSlot.time : '8:00 AM – 12:00 PM';
    const feeStr = '₹15,000';

    if (summaryDate) summaryDate.textContent = dateStr;
    if (summaryGround) summaryGround.textContent = groundName;
    if (summaryTime) summaryTime.textContent = timeStr;
    if (summaryDuration) summaryDuration.textContent = '4 hours';
    if (summaryFee) summaryFee.textContent = feeStr;
    if (summaryTotal) summaryTotal.textContent = feeStr;

    // Keep hidden/sync inputs up to date
    if (formGroundField) formGroundField.value = groundName;
    if (formDateField) formDateField.value = formatDateReadable(state.selectedDate);
    if (formSlotField) formSlotField.value = timeStr;
  }

  // 5. Client-Side Form Validation & Submission
  function initBookingForm() {
    const form = document.getElementById('ground-booking-form');
    const continueBtn = document.getElementById('continue-to-booking-btn');
    const formSection = document.getElementById('customer-form-section');
    const confirmationSection = document.getElementById('booking-confirmation-section');

    if (continueBtn && formSection) {
      continueBtn.addEventListener('click', (e) => {
        e.preventDefault();
        formSection.classList.remove('hidden');
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const nameInput = document.getElementById('customer-name');
        if (nameInput) setTimeout(() => nameInput.focus(), 400);
      });
    }

    if (!form) return;

    // Helper: validate single field
    function validateField(inputEl, condition, errorMsg) {
      if (!inputEl) return true;
      const errorContainer = document.getElementById(`${inputEl.id}-error`);
      if (!condition) {
        inputEl.setAttribute('aria-invalid', 'true');
        inputEl.classList.add('is-invalid');
        if (errorContainer) {
          errorContainer.textContent = errorMsg;
          errorContainer.classList.remove('hidden');
        }
        return false;
      } else {
        inputEl.removeAttribute('aria-invalid');
        inputEl.classList.remove('is-invalid');
        if (errorContainer) {
          errorContainer.textContent = '';
          errorContainer.classList.add('hidden');
        }
        return true;
      }
    }

    const nameInput = document.getElementById('customer-name');
    const phoneInput = document.getElementById('customer-phone');
    const emailInput = document.getElementById('customer-email');
    const orgInput = document.getElementById('customer-organization');

    // Blur events
    if (nameInput) {
      nameInput.addEventListener('blur', () => {
        validateField(nameInput, nameInput.value.trim().length >= 3, 'Please enter your full name (minimum 3 letters).');
      });
    }

    if (phoneInput) {
      phoneInput.addEventListener('blur', () => {
        const phoneRegex = /^[6-9]\d{9}$/;
        const cleanPhone = phoneInput.value.replace(/[\s-]/g, '');
        validateField(phoneInput, phoneRegex.test(cleanPhone), 'Please enter a valid 10-digit mobile number.');
      });
    }

    if (emailInput) {
      emailInput.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        validateField(emailInput, emailRegex.test(emailInput.value.trim()), 'Please enter a valid email address.');
      });
    }

    // Form Submit
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      let isValid = true;
      let firstInvalid = null;

      // Validate Name
      if (nameInput) {
        const validName = validateField(
          nameInput,
          nameInput.value.trim().length >= 3,
          'Please enter your full name (minimum 3 letters).'
        );
        if (!validName) {
          isValid = false;
          firstInvalid = firstInvalid || nameInput;
        }
      }

      // Validate Phone
      if (phoneInput) {
        const phoneRegex = /^[6-9]\d{9}$/;
        const cleanPhone = phoneInput.value.replace(/[\s-]/g, '');
        const validPhone = validateField(
          phoneInput,
          phoneRegex.test(cleanPhone),
          'Please enter a valid 10-digit Indian mobile number.'
        );
        if (!validPhone) {
          isValid = false;
          firstInvalid = firstInvalid || phoneInput;
        }
      }

      // Validate Email
      if (emailInput) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validEmail = validateField(
          emailInput,
          emailRegex.test(emailInput.value.trim()),
          'Please enter a valid email address.'
        );
        if (!validEmail) {
          isValid = false;
          firstInvalid = firstInvalid || emailInput;
        }
      }

      // If corporate or professional, organization is required
      if (orgInput && (state.pageType === 'corporate' || state.pageType === 'professional')) {
        const validOrg = validateField(
          orgInput,
          orgInput.value.trim().length >= 2,
          'Please enter your team or company name.'
        );
        if (!validOrg) {
          isValid = false;
          firstInvalid = firstInvalid || orgInput;
        }
      }

      if (!isValid) {
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Disable submit button and show spinner
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <i class="fa-solid fa-circle-notch fa-spin"></i>
          <span>Submitting Request...</span>
        `;
      }

      const grounds = window.bookingData ? window.bookingData.grounds : [];
      const currentGround = grounds.find(g => g.id === state.selectedGroundId) || grounds[0];
      const slots = currentGround ? currentGround.slots : [];
      const currentSlot = slots.find(s => s.id === state.selectedSlotId) || slots[0];

      const payload = {
        name: nameInput ? nameInput.value.trim() : '',
        phone: phoneInput ? phoneInput.value.trim() : '',
        email: emailInput ? emailInput.value.trim() : '',
        organization: orgInput ? orgInput.value.trim() : 'N/A',
        playersCount: document.getElementById('customer-players')?.value || '15',
        requirements: document.getElementById('customer-notes')?.value || '',
        date: formatDateFull(state.selectedDate),
        ground: currentGround ? currentGround.name : '1st Ground',
        slot: currentSlot ? currentSlot.time : '',
        duration: '4 hours',
        fee: '₹15,000',
        pageType: state.pageType
      };

      try {
        const receipt = await submitBookingRequest(payload);
        state.bookingRequestSubmitted = true;
        state.lastSubmissionData = receipt;

        // Render Confirmation State
        renderConfirmation(receipt);

        if (formSection) formSection.classList.add('hidden');
        if (confirmationSection) {
          confirmationSection.classList.remove('hidden');
          confirmationSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } catch (err) {
        console.error('Booking submission error:', err);
        alert('There was an issue submitting your request. Please try again or call +91 9084667088.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }
    });
  }

  // 6. Render Confirmation State
  function renderConfirmation(receipt) {
    const confirmationSection = document.getElementById('booking-confirmation-section');
    if (!confirmationSection || !receipt) return;

    confirmationSection.innerHTML = `
      <div class="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-teal-200 shadow-2xl text-center relative overflow-hidden animate-fadeIn">
        <div class="w-20 h-20 mx-auto rounded-full bg-teal-50 border-2 border-brandTeal flex items-center justify-center text-brandTeal text-3xl mb-5 shadow-inner">
          <i class="fa-solid fa-check"></i>
        </div>

        <span class="inline-block bg-teal-100 text-teal-800 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3">
          Request Reference: ${receipt.referenceId}
        </span>

        <h3 class="text-2xl sm:text-3xl font-black font-heading text-slate-900 mb-3">
          Booking Request Received
        </h3>

        <p class="text-slate-600 text-sm leading-relaxed mb-6">
          Your ground booking request has been submitted successfully. Our academy coordination team will contact you to verify slot schedule and confirm the reservation.
        </p>

        <!-- Summary Receipt Box -->
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-3 mb-6">
          <div class="flex items-center justify-between pb-2 border-b border-slate-200">
            <span class="text-slate-500 font-semibold">Booking Type:</span>
            <span class="font-bold text-slate-900">${
              state.pageType === 'corporate'
                ? 'Corporate Cricket Event'
                : state.pageType === 'professional'
                ? 'Professional Team Training'
                : 'Regular Ground Booking'
            }</span>
          </div>
          <div class="flex items-center justify-between pb-2 border-b border-slate-200">
            <span class="text-slate-500 font-semibold">Reserved Ground:</span>
            <span class="font-bold text-brandTeal">${receipt.ground}</span>
          </div>
          <div class="flex items-center justify-between pb-2 border-b border-slate-200">
            <span class="text-slate-500 font-semibold">Date of Match:</span>
            <span class="font-bold text-slate-900">${receipt.date}</span>
          </div>
          <div class="flex items-center justify-between pb-2 border-b border-slate-200">
            <span class="text-slate-500 font-semibold">Slot Timing:</span>
            <span class="font-bold text-slate-900">${receipt.slot} (4 hours)</span>
          </div>
          <div class="flex items-center justify-between pb-2 border-b border-slate-200">
            <span class="text-slate-500 font-semibold">Ground Fee:</span>
            <span class="font-bold text-brandTeal text-sm">${receipt.fee}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-500 font-semibold">Contact Person:</span>
            <span class="font-bold text-slate-900">${receipt.name} (${receipt.phone})</span>
          </div>
        </div>

        <!-- Clarification Notice -->
        <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-900 mb-6 flex items-start gap-2.5 text-left">
          <i class="fa-solid fa-circle-info text-amber-600 mt-0.5 shrink-0"></i>
          <div>
            <strong>Booking Request Notice:</strong> This submission is a formal booking request. Official pitch allocation and ground access are confirmed after verification by our academy manager. No upfront online payment was taken.
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-3">
          <button id="book-another-slot-btn" type="button" class="btn-shine bg-brandTeal hover:bg-brandTealDark text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md">
            <span>Book Another Slot</span>
          </button>
          <a href="tel:+919084667088" class="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2">
            <i class="fa-solid fa-phone text-brandTeal"></i>
            <span>Call Coordinator</span>
          </a>
        </div>
      </div>
    `;

    const bookAnotherBtn = document.getElementById('book-another-slot-btn');
    if (bookAnotherBtn) {
      bookAnotherBtn.addEventListener('click', () => {
        confirmationSection.classList.add('hidden');
        const formSection = document.getElementById('customer-form-section');
        if (formSection) formSection.classList.add('hidden');
        const form = document.getElementById('ground-booking-form');
        if (form) form.reset();
        window.scrollTo({ top: document.getElementById('booking-section').offsetTop - 80, behavior: 'smooth' });
      });
    }
  }

  // 7. Ground Comparison CTA smooth scroll and select
  function initGroundComparisonTriggers() {
    const comparisonBtns = document.querySelectorAll('.select-ground-trigger');
    comparisonBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetGroundId = btn.getAttribute('data-ground');
        if (targetGroundId) {
          state.selectedGroundId = targetGroundId;
          const availableSlots = getAvailableSlots(state.selectedDate, targetGroundId);
          state.selectedSlotId = availableSlots[0] ? availableSlots[0].id : null;
          renderGroundTabs();
          renderTimeSlots();
          updateSummary();

          const bookingSection = document.getElementById('booking-section');
          if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  // 8. Month Navigation Handlers
  function initMonthNavigation() {
    const prevBtn = document.getElementById('calendar-prev-month');
    const nextBtn = document.getElementById('calendar-next-month');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const year = state.currentMonthDate.getFullYear();
        const month = state.currentMonthDate.getMonth();
        state.currentMonthDate = new Date(year, month - 1, 1);
        renderCalendar();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const year = state.currentMonthDate.getFullYear();
        const month = state.currentMonthDate.getMonth();
        state.currentMonthDate = new Date(year, month + 1, 1);
        renderCalendar();
      });
    }
  }

  // --- Main Initializer ---
  function initBookingEngine() {
    const bookingContainer = document.getElementById('booking-section');
    if (!bookingContainer) return;

    // Detect Page Type from container attribute
    const typeAttr = bookingContainer.getAttribute('data-booking-type');
    if (typeAttr && ['corporate', 'professional', 'regular'].includes(typeAttr)) {
      state.pageType = typeAttr;
    }

    // Set initial date: current date (never hardcoded)
    state.selectedDate = new Date();
    state.currentMonthDate = new Date();

    // Render components
    renderCalendar();
    renderGroundTabs();
    renderTimeSlots();
    updateSummary();
    initMonthNavigation();
    initBookingForm();
    initGroundComparisonTriggers();
  }

  // Boot up when ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBookingEngine);
  } else {
    initBookingEngine();
  }
})();
