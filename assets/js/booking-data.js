/**
 * Ayush Cricket Academy - Centralized Booking Data
 * Single source of truth for grounds, pricing, time slots, benefits, copy, and FAQs.
 */

window.bookingData = {
  // Ground Configuration
  grounds: [
    {
      id: 'ground-1',
      name: '1st Ground',
      title: '1st Ground Booking',
      fee: 15000,
      feeDisplay: '₹15,000',
      feeUnit: 'per 4-hour time slot',
      duration: '4 hours',
      slotsCount: 3,
      slotsPerDayText: '3 slots/day',
      image: 'https://ayushcricketacademy.com/wp-content/uploads/2025/05/floodlights.jpg',
      features: [
        '3 daily slots available',
        'Morning, Afternoon & Floodlit Evening slots',
        'Official match turf wickets',
        'Warm-up nets access',
        'High-mast floodlights'
      ],
      slots: [
        {
          id: 'g1-s1',
          time: '8:00 AM – 12:00 PM',
          duration: '4 hours',
          fee: 15000,
          feeDisplay: '₹15,000',
          label: 'Morning Slot',
          available: true
        },
        {
          id: 'g1-s2',
          time: '1:00 PM – 5:00 PM',
          duration: '4 hours',
          fee: 15000,
          feeDisplay: '₹15,000',
          label: 'Afternoon Slot',
          available: true
        },
        {
          id: 'g1-s3',
          time: '5:30 PM – 11:59 PM',
          duration: '4 hours',
          fee: 15000,
          feeDisplay: '₹15,000',
          label: 'Floodlit Evening Slot',
          available: true
        }
      ]
    },
    {
      id: 'ground-2',
      name: '2nd Ground',
      title: '2nd Ground Booking',
      fee: 15000,
      feeDisplay: '₹15,000',
      feeUnit: 'per 4-hour time slot',
      duration: '4 hours',
      slotsCount: 2,
      slotsPerDayText: '2 slots/day',
      image: 'https://ayushcricketacademy.com/wp-content/uploads/2025/05/floodlights.jpg',
      features: [
        '2 daily slots available',
        'Morning & Afternoon slots',
        'Official match turf wickets',
        'Pristine green outfield',
        'Warm-up nets access'
      ],
      slots: [
        {
          id: 'g2-s1',
          time: '8:00 AM – 12:00 PM',
          duration: '4 hours',
          fee: 15000,
          feeDisplay: '₹15,000',
          label: 'Morning Slot',
          available: true
        },
        {
          id: 'g2-s2',
          time: '1:00 PM – 5:00 PM',
          duration: '4 hours',
          fee: 15000,
          feeDisplay: '₹15,000',
          label: 'Afternoon Slot',
          available: true
        }
      ]
    }
  ],

  // Shared Video Asset
  media: {
    videoUrl: 'https://ayushcricketacademy.com/wp-content/uploads/2025/05/Ayush-Cricket-Academy-Indias-Best-Cricket-Academy.mp4',
    poster: 'https://ayushcricketacademy.com/wp-content/uploads/2025/05/floodlights.jpg',
    groundImage: 'https://ayushcricketacademy.com/wp-content/uploads/2025/05/floodlights.jpg'
  },

  // Page Specific Content Configurations
  pages: {
    corporate: {
      type: 'corporate',
      pageTitle: 'Corporate Ground Booking',
      titleHtml: 'Corporate <span class="bg-gradient-to-r from-teal-300 via-teal-100 to-white bg-clip-text text-transparent">Ground Booking</span>',
      heroEyebrow: 'CORPORATE CRICKET RESERVATIONS',
      mainHeadline: 'Book Your Cricket Ground for Your Corporate Event',
      breadcrumb: 'Corporate Booking',
      context: 'For corporate teams looking for premium cricket facilities for employee matches, tournaments, team-building activities, and after-office cricket sessions.',
      bookingCategory: 'Corporate Cricket Event',
      orgLabel: 'Company / Organization Name',
      orgPlaceholder: 'e.g. Tata Consultancy Services / Tech Mahindra',
      benefits: [
        {
          title: 'Flexible Timings',
          desc: 'Book matches for mornings, full-day, or evenings under floodlights.',
          icon: 'fa-regular fa-clock'
        },
        {
          title: 'Professional-Grade Ground',
          desc: 'Full-size ground with turf wickets for a real match experience.',
          icon: 'fa-solid fa-shield-halved'
        },
        {
          title: 'Team Building Focus',
          desc: 'Perfect for enhancing employee bonding and leadership skills.',
          icon: 'fa-solid fa-users-gear'
        },
        {
          title: 'Modern Infrastructure',
          desc: 'Floodlights, indoor nets, gym, and bowling machine access.',
          icon: 'fa-solid fa-building'
        },
        {
          title: 'On-Site Support Team',
          desc: 'From pitch setup to event coordination, we manage it seamlessly.',
          icon: 'fa-solid fa-hands-holding-circle'
        },
        {
          title: 'Evening Match Option',
          desc: 'Conduct after-office hour matches under bright floodlights.',
          icon: 'fa-solid fa-lightbulb'
        },
        {
          title: 'Optional Residential Stay',
          desc: 'Short-term stay programs with full boarding.',
          icon: 'fa-solid fa-hotel'
        },
        {
          title: 'Trophies and Medals',
          desc: 'Add a winning touch to your corporate tournament.',
          icon: 'fa-solid fa-trophy'
        },
        {
          title: 'Photography & Media',
          desc: 'Capture your event with professional photography support.',
          icon: 'fa-solid fa-camera'
        }
      ],
      faqs: [
        {
          q: 'What types of corporate bookings are available?',
          a: 'Corporate teams can book full-day tournaments, half-day fixtures, friendly matches between departments, and evening floodlit matches across our 4-hour slots.'
        },
        {
          q: 'Can we book the ground for evening matches?',
          a: 'Yes, evening slots under bright floodlights are available on Ground 1 (5:30 PM – 11:59 PM).'
        },
        {
          q: 'Do you provide catering arrangements?',
          a: 'Catering arrangements and refreshments can be coordinated during booking request review with our academy management.'
        },
        {
          q: 'Is parking available for employees?',
          a: 'Yes, spacious on-campus vehicle parking is available for corporate teams and visitors.'
        },
        {
          q: 'Do you provide trophies or medals for tournaments?',
          a: 'Yes, tournament presentation accessories such as trophies and medals can be arranged on request.'
        },
        {
          q: 'Are there changing rooms and washrooms?',
          a: 'Yes, dedicated team changing rooms, seating areas, and clean washroom facilities are available on-site.'
        },
        {
          q: 'Do you provide event staff support?',
          a: 'Yes, on-site academy ground staff manage pitch preparation, boundary markings, and basic match coordination.'
        },
        {
          q: 'How can we book a corporate cricket event?',
          a: 'Choose your desired date, ground, and 4-hour slot using the booking engine above, provide your organization contact details, and submit a booking request. Our team will contact you to confirm details.'
        }
      ]
    },

    professional: {
      type: 'professional',
      pageTitle: 'Professional Team Ground Booking',
      titleHtml: 'Professional Team <span class="bg-gradient-to-r from-teal-300 via-teal-100 to-white bg-clip-text text-transparent">Ground Booking</span>',
      heroEyebrow: 'PROFESSIONAL TEAM & SQUAD SLOTS',
      mainHeadline: 'Take Your Team’s Practice to the Next Level',
      breadcrumb: 'Professional Team Booking',
      context: 'For state teams, cricket clubs, academies, and professional squads seeking premium practice and match facilities.',
      bookingCategory: 'Professional Team',
      orgLabel: 'Team / Club / Academy Name',
      orgPlaceholder: 'e.g. Uttarakhand State Squad / Delhi Cricket Club',
      benefits: [
        {
          title: 'Flexible Time Slots',
          desc: 'Morning, afternoon, or evening sessions as per your training plan.',
          icon: 'fa-regular fa-clock'
        },
        {
          title: 'Professional-Grade Ground',
          desc: 'Full-size ground with match-ready turf wickets.',
          icon: 'fa-solid fa-baseball-bat-ball'
        },
        {
          title: 'Complete Training Ecosystem',
          desc: 'Outdoor nets, indoor nets, bowling machine, gym, and video analysis.',
          icon: 'fa-solid fa-cubes-stacked'
        },
        {
          title: 'High-Performance Facilities',
          desc: 'Everything a professional team needs in one place.',
          icon: 'fa-solid fa-bolt'
        },
        {
          title: 'On-Site Support Team',
          desc: 'Ensuring smooth ground setup and training coordination.',
          icon: 'fa-solid fa-user-check'
        },
        {
          title: 'Floodlit Sessions',
          desc: 'Ideal for match simulations under lights.',
          icon: 'fa-solid fa-lightbulb'
        },
        {
          title: 'Residential Camp Options',
          desc: 'Hostel accommodation with nutritious meals for multi-day camps.',
          icon: 'fa-solid fa-hotel'
        },
        {
          title: 'Experienced Environment',
          desc: 'Train in a structured, disciplined, and professional atmosphere.',
          icon: 'fa-solid fa-medal'
        }
      ],
      faqs: [
        {
          q: 'What types of teams can book the ground?',
          a: 'State squads, district teams, registered cricket clubs, sports academies, and professional touring teams.'
        },
        {
          q: 'Can we book for multiple days?',
          a: 'Yes, multi-day training camps, consecutive day reservations, and weekly training schedules can be booked.'
        },
        {
          q: 'Are evening sessions available?',
          a: 'Yes, 5:30 PM – 11:59 PM floodlit sessions are available on Ground 1 for realistic day-night match scenarios.'
        },
        {
          q: 'Is accommodation available for teams?',
          a: 'Yes, on-campus residential hostel accommodation with dining is available for visiting squads during training camps.'
        },
        {
          q: 'Do you provide fitness and gym access?',
          a: 'Yes, access to our strength and conditioning fitness gym is available for booked teams.'
        },
        {
          q: 'Is video analysis included?',
          a: 'Technical video analysis facilities can be incorporated into multi-day practice camp bookings upon request.'
        },
        {
          q: 'How can we book?',
          a: 'Select your team training date, ground, and slot above, enter your squad details, and submit your booking request. Our team will verify and confirm.'
        }
      ]
    },

    regular: {
      type: 'regular',
      pageTitle: 'Ground Booking',
      titleHtml: 'Ground Booking & <span class="bg-gradient-to-r from-teal-300 via-teal-100 to-white bg-clip-text text-transparent">Match Slots</span>',
      heroEyebrow: 'REGULAR GROUND BOOKING',
      mainHeadline: 'Book Our Cricket Ground for Your Matches',
      breadcrumb: 'Ground Booking',
      context: 'For local clubs, schools, colleges, academies, and individuals seeking premium cricket ground facilities.',
      bookingCategory: 'Regular Ground Booking',
      orgLabel: 'Team / Club / School Name (Optional)',
      orgPlaceholder: 'e.g. Doon Warriors Club / Individual Booking',
      idealFor: [
        'friendly matches',
        'local tournaments',
        'school matches',
        'college matches',
        'academy games',
        'personal practice sessions'
      ],
      benefits: [
        {
          title: 'Flexible Time Slots',
          desc: 'Morning, afternoon, or evening bookings available.',
          icon: 'fa-regular fa-clock'
        },
        {
          title: 'Professional Cricket Ground',
          desc: 'Full-size ground with turf wickets and quality outfield.',
          icon: 'fa-solid fa-baseball-bat-ball'
        },
        {
          title: 'Practice Nets Access',
          desc: 'Warm-up sessions before your match or event.',
          icon: 'fa-solid fa-bullseye'
        },
        {
          title: 'Floodlit Matches',
          desc: 'Perfect for evening games and tournaments.',
          icon: 'fa-solid fa-lightbulb'
        },
        {
          title: 'On-Site Staff Support',
          desc: 'Ensuring smooth setup and basic event coordination.',
          icon: 'fa-solid fa-hands-holding-circle'
        },
        {
          title: 'Safe and Secure',
          desc: '24/7 security for hassle-free matches.',
          icon: 'fa-solid fa-shield'
        },
        {
          title: 'Trophies & Photography',
          desc: 'Make your event memorable with our support services.',
          icon: 'fa-solid fa-award'
        },
        {
          title: 'Affordable Packages',
          desc: 'Competitive rates for regular bookings and tournaments.',
          icon: 'fa-solid fa-tag'
        }
      ],
      faqs: [
        {
          q: 'What is the ground booking fee and slot duration?',
          a: 'The ground booking fee is ₹15,000 per 4-hour time slot on both 1st Ground and 2nd Ground.'
        },
        {
          q: 'What time slots are available each day?',
          a: '1st Ground offers 3 slots per day: 8:00 AM – 12:00 PM, 1:00 PM – 5:00 PM, and 5:30 PM – 11:59 PM (Floodlights). 2nd Ground offers 2 slots per day: 8:00 AM – 12:00 PM and 1:00 PM – 5:00 PM.'
        },
        {
          q: 'Who can book the ground for matches?',
          a: 'Our grounds are available for local clubs, schools, colleges, academies, and individuals seeking friendly matches, tournaments, or practice games.'
        },
        {
          q: 'Are warm-up practice nets available before the match?',
          a: 'Yes, turf practice nets are available on campus for warm-up before your match slot commences.'
        },
        {
          q: 'How do I submit a ground booking request?',
          a: 'Select your preferred date on the calendar, choose your ground and time slot, enter your contact information, and click Submit Booking Request. Our academy staff will contact you to confirm.'
        }
      ]
    }
  }
};
