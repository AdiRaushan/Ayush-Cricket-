/**
 * Ayush Cricket Academy - Centralized Media Data Repository
 * Contains all 46 verified image assets and 54+ hosted MP4 video assets
 * extracted directly from the official academy archives.
 */

window.academyMedia = (function () {
  const imgBase = 'https://ayushcricketacademy.com/wp-content/uploads/2025/05/';
  const videoBase = 'https://ayushcricketacademy.com/wp-content/uploads/2025/07/';

  // 46 Verified Academy Images
  const images = [
    { id: 'img-1', src: imgBase + 'Ayush-Cricket-Academy-Player.jpg', title: 'Academy Player In Action', category: 'academy-life', tag: 'Academy Life', alt: 'Ayush Cricket Academy trainee during practice session' },
    { id: 'img-2', src: imgBase + 'Ayush-Cricket-Academy-Best-Played.jpg', title: 'Student Match Performance', category: 'academy-life', tag: 'Academy Life', alt: 'Ayush Cricket Academy student batting performance' },
    { id: 'img-3', src: imgBase + 'ayush-cricket-academy.jpg', title: 'Academy Campus Grounds', category: 'grounds', tag: 'Grounds', alt: 'Ayush Cricket Academy green training grounds in Uttarakhand' },
    { id: 'img-4', src: imgBase + 'batting-practice.jpg', title: 'Batting Technique & Drill', category: 'batting', tag: 'Batting', alt: 'Cricket batting stroke practice at the nets' },
    { id: 'img-5', src: imgBase + 'batting-practice-1.jpg', title: 'Front Foot Defense & Drive', category: 'batting', tag: 'Batting', alt: 'Student batsman practicing front foot drive in practice session' },
    { id: 'img-6', src: imgBase + 'youth-cricket-coaching.jpg', title: 'Youth Coaching Batch', category: 'training', tag: 'Training', alt: 'Youth cricket coaching batch undergoing skill development' },
    { id: 'img-7', src: imgBase + 'young-cricket-talent.jpg', title: 'Young Talents at Training', category: 'academy-life', tag: 'Academy Life', alt: 'Young cricket trainees at Ayush Cricket Academy' },
    { id: 'img-8', src: imgBase + 'uttarakhand-cricket-training.jpg', title: 'Uttarakhand Cricket Training', category: 'training', tag: 'Training', alt: 'Cricket training session in Uttarakhand academy' },
    { id: 'img-9', src: imgBase + 'summer-cricket-camp.jpg', title: 'Academy Intensive Camp', category: 'training', tag: 'Training', alt: 'Cricket camp trainees gathered at training facility' },
    { id: 'img-10', src: imgBase + 'professional-cricket-coaching-uttarakhand.jpg', title: 'Professional Coaching Session', category: 'training', tag: 'Training', alt: 'Professional cricket coaching drill by academy coaches' },
    { id: 'img-11', src: imgBase + 'professional-cricket-training.jpg', title: 'Specialized Skill Coaching', category: 'training', tag: 'Training', alt: 'Structured technical training drill on turf wicket' },
    { id: 'img-12', src: imgBase + 'personal-cricket-coaching.jpg', title: '1-on-1 Personalized Coaching', category: 'training', tag: 'Training', alt: 'Personalized 1-on-1 cricket coaching session' },
    { id: 'img-13', src: imgBase + 'personal-cricket-coaching-1.jpg', title: 'Coach Guidance & Feedback', category: 'training', tag: 'Training', alt: 'Coach providing technical guidance to young batsman' },
    { id: 'img-14', src: imgBase + 'net-practice-cricket.jpg', title: 'Turf Net Practice', category: 'match-practice', tag: 'Match Practice', alt: 'Cricketers practicing in outdoor nets' },
    { id: 'img-15', src: imgBase + 'net-practice-cricket-academy.jpg', title: 'Academy Practice Nets', category: 'match-practice', tag: 'Match Practice', alt: 'Practice nets and batting session at the academy' },
    { id: 'img-16', src: imgBase + 'match-practice-session.jpg', title: 'Match Simulation Session', category: 'match-practice', tag: 'Match Practice', alt: 'Academy cricketers during match practice session' },
    { id: 'img-17', src: imgBase + 'match-practice.jpg', title: 'Center Pitch Match Practice', category: 'match-practice', tag: 'Match Practice', alt: 'Center pitch cricket match practice session' },
    { id: 'img-18', src: imgBase + 'junior-cricket-coaching.jpg', title: 'Junior Group Coaching', category: 'training', tag: 'Training', alt: 'Junior cricket batch practicing technical drills' },
    { id: 'img-19', src: imgBase + 'fitness-sessions-for-cricketers.jpg', title: 'Conditioning & Stamina Drill', category: 'gym-fitness', tag: 'Gym & Fitness', alt: 'Cricket fitness and conditioning session for athletes' },
    { id: 'img-20', src: imgBase + 'fielding-training.jpg', title: 'Agility & Catching Drills', category: 'fielding', tag: 'Fielding', alt: 'Fielding practice and agility drill on the ground' },
    { id: 'img-21', src: imgBase + 'fielding-training-1.jpg', title: 'Ground Fielding & Throwing', category: 'fielding', tag: 'Fielding', alt: 'Fielders working on throwing technique and quick reflex catches' },
    { id: 'img-22', src: imgBase + 'cricket-warmup-drills.jpg', title: 'Pre-Session Warmup Drills', category: 'gym-fitness', tag: 'Gym & Fitness', alt: 'Cricket warmup and physical conditioning drills' },
    { id: 'img-23', src: imgBase + 'cricket-training-center-chidderwala.jpg', title: 'Chidderwala Training Center', category: 'grounds', tag: 'Grounds', alt: 'Training center at Chidderwala campus' },
    { id: 'img-24', src: imgBase + 'cricket-coaching-in-chidderwala.jpg', title: 'Practice & Skill Coaching', category: 'training', tag: 'Training', alt: 'Cricket coaching sessions in Chidderwala academy' },
    { id: 'img-25', src: imgBase + 'cricket-academy-uttarakhand.jpg', title: 'Academy Pavilion & Nets', category: 'grounds', tag: 'Grounds', alt: 'Outdoor cricket nets and academy facilities' },
    { id: 'img-26', src: imgBase + 'cricket-academy-near-dehradun.jpg', title: 'Campus Sports Ground', category: 'grounds', tag: 'Grounds', alt: 'Ayush Cricket Academy ground near Dehradun Uttarakhand' },
    { id: 'img-27', src: imgBase + 'cricket-academy-chidderwala.jpg', title: 'Academy Facility & Grounds', category: 'grounds', tag: 'Grounds', alt: 'Cricket academy facility in Chidderwala Kansrao' },
    { id: 'img-28', src: imgBase + 'cricket-training-for-kids.jpg', title: 'Grassroots Talent Coaching', category: 'training', tag: 'Training', alt: 'Grassroots cricket coaching for young children' },
    { id: 'img-29', src: imgBase + 'cricket-skill-development.jpg', title: 'Technical Skill Development', category: 'training', tag: 'Training', alt: 'Cricket skill development session with coaches' },
    { id: 'img-30', src: imgBase + 'cricket-match-preparation.jpg', title: 'Tournament Match Preparation', category: 'match-practice', tag: 'Match Practice', alt: 'Cricket match preparation and strategy session' },
    { id: 'img-31', src: imgBase + 'cricket-coaching.jpg', title: 'Structured Coaching Routine', category: 'training', tag: 'Training', alt: 'Structured cricket training drill with bat and ball' },
    { id: 'img-32', src: imgBase + 'cricket-academy.jpg', title: 'Academy Campus Environment', category: 'academy-life', tag: 'Academy Life', alt: 'Campus environment at Ayush Cricket Academy' },
    { id: 'img-33', src: imgBase + 'cricket-coaching-center.jpg', title: 'Coaching Practice Area', category: 'training', tag: 'Training', alt: 'Cricket coaching practice ground and nets' },
    { id: 'img-34', src: imgBase + 'coach-training-students.jpg', title: 'Coach Mentoring Students', category: 'training', tag: 'Training', alt: 'Cricket coach instructing student on batting stance' },
    { id: 'img-35', src: imgBase + 'certified-cricket-academy.jpg', title: 'Athletes in Training Gear', category: 'academy-life', tag: 'Academy Life', alt: 'Trainees gathered in official cricket whites' },
    { id: 'img-36', src: imgBase + 'chidderwala-cricket-academy.jpg', title: 'Turf Pitch & Practice Nets', category: 'grounds', tag: 'Grounds', alt: 'Natural turf pitch and practice nets at Chidderwala' },
    { id: 'img-37', src: imgBase + 'bowling-coaching.jpg', title: 'Fast Bowling Run-up Drill', category: 'bowling', tag: 'Bowling', alt: 'Bowler running in during bowling coaching drill' },
    { id: 'img-38', src: imgBase + 'bowling-drills.jpg', title: 'Bowling Action Correction', category: 'bowling', tag: 'Bowling', alt: 'Bowling drill focusing on release and line-and-length' },
    { id: 'img-39', src: imgBase + 'best-cricket-coaching-near-me.jpg', title: 'Daily Cricket Coaching Batch', category: 'training', tag: 'Training', alt: 'Daily cricket coaching batch in session' },
    { id: 'img-40', src: imgBase + 'best-cricket-training-for-beginners.jpg', title: 'Foundational Cricket Drills', category: 'training', tag: 'Training', alt: 'Beginner cricket coaching fundamentals' },
    { id: 'img-41', src: imgBase + 'best-cricket-academy.jpg', title: 'Academy Trainees Assembly', category: 'academy-life', tag: 'Academy Life', alt: 'Cricket trainees assembled on academy grounds' },
    { id: 'img-42', src: imgBase + 'best-cricket-academy-uttarakhand.jpg', title: 'Academy Cricketers Squad', category: 'academy-life', tag: 'Academy Life', alt: 'Group of academy players at Ayush Cricket Academy' },
    { id: 'img-43', src: imgBase + 'experienced-cricket-coaches.jpg', title: 'Academy Coaching Faculty', category: 'academy-life', tag: 'Academy Life', alt: 'Coaching staff and faculty on the training ground' },
    { id: 'img-44', src: imgBase + 'cricket-coaching-with-facilities.jpg', title: 'Comprehensive Training Grounds', category: 'grounds', tag: 'Grounds', alt: 'Cricket academy training grounds and facilities' },
    { id: 'img-45', src: imgBase + 'under-14-cricket-academy.jpg', title: 'Under-14 Development Squad', category: 'training', tag: 'Training', alt: 'Under-14 junior cricket development trainees' },
    { id: 'img-46', src: imgBase + 'top-cricket-academy-India.jpg', title: 'Full Academy Training Squad', category: 'academy-life', tag: 'Academy Life', alt: 'Academy training squad on the field' }
  ];

  // 54 Verified Hosted Academy Videos
  const trainingVideos = [
    { id: 'vid-train-1', src: videoBase + 'Training-Video-1-Ayush-Cricket-Academy.mp4', title: 'Academy Training Session 1', category: 'training', tag: 'Training', poster: imgBase + 'cricket-coaching-in-chidderwala.jpg' },
    { id: 'vid-train-2', src: videoBase + 'Training-Video-2-Ayush-Cricket-Academy.mp4', title: 'Academy Training Session 2', category: 'training', tag: 'Training', poster: imgBase + 'professional-cricket-training.jpg' }
  ];

  const groundVideos = [
    { id: 'vid-ground-1', src: videoBase + 'Ground-Video-1-Ayush-Cricket-Academy.mp4', title: 'Cricket Ground Overview 1', category: 'grounds', tag: 'Grounds', poster: imgBase + 'ayush-cricket-academy.jpg' },
    { id: 'vid-ground-2', src: videoBase + 'Ground-Video-2-Ayush-Cricket-Academy.mp4', title: 'Main Turf Wicket & Outfield 2', category: 'grounds', tag: 'Grounds', poster: imgBase + 'chidderwala-cricket-academy.jpg' },
    { id: 'vid-ground-3', src: videoBase + 'Ground-Video-3-Ayush-Cricket-Academy.mp4', title: 'Practice Ground & Nets 3', category: 'grounds', tag: 'Grounds', poster: imgBase + 'cricket-academy-chidderwala.jpg' },
    { id: 'vid-ground-4', src: videoBase + 'Ground-Video-4-Ayush-Cricket-Academy.mp4', title: 'Ground Boundary & Pavilion 4', category: 'grounds', tag: 'Grounds', poster: imgBase + 'cricket-academy-near-dehradun.jpg' },
    { id: 'vid-ground-5', src: videoBase + 'Ground-Video-5-Ayush-Cricket-Academy.mp4', title: 'Campus Ground Facilities 5', category: 'grounds', tag: 'Grounds', poster: imgBase + 'cricket-training-center-chidderwala.jpg' }
  ];

  const gymVideos = [
    { id: 'vid-gym-1', src: videoBase + 'Gym-Video-1-Ayush-Cricket-Academy.mp4', title: 'Academy Fitness Center 1', category: 'gym-fitness', tag: 'Gym & Fitness', poster: imgBase + 'fitness-sessions-for-cricketers.jpg' },
    { id: 'vid-gym-2', src: videoBase + 'Gym-Video-2-Ayush-Cricket-Academy.mp4', title: 'Strength Training Facility 2', category: 'gym-fitness', tag: 'Gym & Fitness', poster: imgBase + 'cricket-warmup-drills.jpg' },
    { id: 'vid-gym-3', src: videoBase + 'Gym-Video-3-Ayush-Cricket-Academy.mp4', title: 'Cardio & Agility Drills 3', category: 'gym-fitness', tag: 'Gym & Fitness', poster: imgBase + 'fitness-sessions-for-cricketers.jpg' },
    { id: 'vid-gym-4', src: videoBase + 'Gym-Video-4-Ayush-Cricket-Academy.mp4', title: 'Player Conditioning Routine 4', category: 'gym-fitness', tag: 'Gym & Fitness', poster: imgBase + 'cricket-warmup-drills.jpg' }
  ];

  const hostelVideos = [
    { id: 'vid-hostel-1', src: videoBase + 'Hostal-Video-1-Ayush-Cricket-Academy.mp4', title: 'Residential Hostel Rooms 1', category: 'hostel-life', tag: 'Hostel Life', poster: imgBase + 'cricket-academy.jpg' },
    { id: 'vid-hostel-2', src: videoBase + 'Hostal-Video-2-Ayush-Cricket-Academy.mp4', title: 'Hostel Living Quarters 2', category: 'hostel-life', tag: 'Hostel Life', poster: imgBase + 'cricket-academy.jpg' },
    { id: 'vid-hostel-3', src: videoBase + 'Hostal-Video-3-Ayush-Cricket-Academy.mp4', title: 'Hostel Accommodations 3', category: 'hostel-life', tag: 'Hostel Life', poster: imgBase + 'cricket-academy.jpg' },
    { id: 'vid-hostel-4', src: videoBase + 'Hostal-Video-4-Ayush-Cricket-Academy.mp4', title: 'Student Dormitory 4', category: 'hostel-life', tag: 'Hostel Life', poster: imgBase + 'cricket-academy.jpg' },
    { id: 'vid-hostel-5', src: videoBase + 'Hostal-Video-5-Ayush-Cricket-Academy.mp4', title: 'Residential Complex 5', category: 'hostel-life', tag: 'Hostel Life', poster: imgBase + 'cricket-academy.jpg' },
    { id: 'vid-hostel-6', src: videoBase + 'Hostal-Video-6-Ayush-Cricket-Academy.mp4', title: 'Hostel Amenities 6', category: 'hostel-life', tag: 'Hostel Life', poster: imgBase + 'cricket-academy.jpg' },
    { id: 'vid-hostel-out-2', src: videoBase + 'Hostal-Outside-Video-2-Ayush-Cricket-Academy.mp4', title: 'Hostel Exterior Grounds 2', category: 'hostel-life', tag: 'Hostel Life', poster: imgBase + 'cricket-academy.jpg' },
    { id: 'vid-hostel-out-3', src: videoBase + 'Hostal-Outside-Video-3-Ayush-Cricket-Academy.mp4', title: 'Hostel Building Exterior 3', category: 'hostel-life', tag: 'Hostel Life', poster: imgBase + 'cricket-academy.jpg' },
    { id: 'vid-hostel-out-4', src: videoBase + 'Hostal-Outside-Video-4-Ayush-Cricket-Academy.mp4', title: 'Hostel Campus Courtyard 4', category: 'hostel-life', tag: 'Hostel Life', poster: imgBase + 'cricket-academy.jpg' }
  ];

  const canteenVideos = [
    { id: 'vid-canteen-1', src: videoBase + 'Canteen-Video-1-Ayush-Cricket-Academy.mp4', title: 'Nutritional Dining Hall 1', category: 'canteen', tag: 'Canteen', poster: imgBase + 'summer-cricket-camp.jpg' },
    { id: 'vid-canteen-2', src: videoBase + 'Canteen-Video-2-Ayush-Cricket-Academy.mp4', title: 'Canteen Meal Preparation 2', category: 'canteen', tag: 'Canteen', poster: imgBase + 'summer-cricket-camp.jpg' },
    { id: 'vid-canteen-3', src: videoBase + 'Canteen-Video-3-Ayush-Cricket-Academy.mp4', title: 'Student Dining Area 3', category: 'canteen', tag: 'Canteen', poster: imgBase + 'summer-cricket-camp.jpg' },
    { id: 'vid-canteen-4', src: videoBase + 'Canteen-Video-4-Ayush-Cricket-Academy.mp4', title: 'Hygienic Kitchen Facility 4', category: 'canteen', tag: 'Canteen', poster: imgBase + 'summer-cricket-camp.jpg' },
    { id: 'vid-canteen-5', src: videoBase + 'Canteen-Video-5-Ayush-Cricket-Academy.mp4', title: 'Daily Meals Service 5', category: 'canteen', tag: 'Canteen', poster: imgBase + 'summer-cricket-camp.jpg' },
    { id: 'vid-canteen-6', src: videoBase + 'Canteen-Video-6-Ayush-Cricket-Academy.mp4', title: 'Dining Hall Atmosphere 6', category: 'canteen', tag: 'Canteen', poster: imgBase + 'summer-cricket-camp.jpg' },
    { id: 'vid-canteen-7', src: videoBase + 'Canteen-Video-7-Ayush-Cricket-Academy.mp4', title: 'Player Meal Gathering 7', category: 'canteen', tag: 'Canteen', poster: imgBase + 'summer-cricket-camp.jpg' }
  ];

  const practiceVideos = [];
  for (let i = 1; i <= 27; i++) {
    practiceVideos.push({
      id: 'vid-practice-' + i,
      src: videoBase + 'Practice-' + i + '-Ayush-Cricket-Academy.mp4',
      title: 'Practice Session ' + i,
      category: 'match-practice',
      tag: 'Match Practice',
      poster: imgBase + (i % 2 === 0 ? 'net-practice-cricket.jpg' : 'match-practice.jpg')
    });
  }

  // Combined Videos Array (54 items)
  const videos = [
    ...trainingVideos,
    ...groundVideos,
    ...gymVideos,
    ...hostelVideos,
    ...canteenVideos,
    ...practiceVideos
  ];

  // 4 Verified Student Video Testimonials
  const testimonials = [
    {
      id: 'test-1',
      name: 'Akshay',
      location: 'Sikkim',
      state: 'Sikkim',
      role: 'Residential Academy Trainee',
      src: videoBase + 'Akshay-from-Shikkam-Student-Ayush-Cricket-Academy.mp4',
      thumbnail: imgBase + 'young-cricket-talent.jpg',
      tag: 'STUDENT STORY'
    },
    {
      id: 'test-2',
      name: 'Ashu Jaiswal',
      location: 'Bihar',
      state: 'Bihar',
      role: 'Academy Trainee',
      src: videoBase + 'Ashu-Jaiswal-from-Bihar-Student-Ayush-Cricket-Academy.mp4',
      thumbnail: imgBase + 'Ayush-Cricket-Academy-Player.jpg',
      tag: 'STUDENT STORY'
    },
    {
      id: 'test-3',
      name: 'Jiten Sharma',
      location: 'Haryana',
      state: 'Haryana',
      role: 'Full-Time Program Trainee',
      src: videoBase + 'Jatin-Sharma-from-Haryana-Student-Ayush-Cricket-Academy.mp4',
      thumbnail: imgBase + 'Ayush-Cricket-Academy-Best-Played.jpg',
      tag: 'STUDENT STORY'
    },
    {
      id: 'test-4',
      name: 'Tanishq Khatri',
      location: 'Delhi',
      state: 'Delhi',
      role: 'Academy Trainee',
      src: videoBase + 'Tanishq-Khatri-from-Delhi-Student-Ayush-Cricket-Academy.mp4',
      thumbnail: imgBase + 'cricket-skill-development.jpg',
      tag: 'STUDENT STORY'
    }
  ];

  // Faculty and Academy Overview Videos
  const coachesVideos = [
    { id: 'coach-1', name: 'Head Coach Gajendra Rawat', role: 'Head Coach', src: videoBase + 'Head-Coach-Gajendra-Rawats-Videos-Ayush-Cricket-Academy.mp4' },
    { id: 'coach-2', name: 'Coach Puneet Tiwari', role: 'Senior Coach', src: videoBase + 'Coach-Puneet-Tiwaris-Video-Ayush-Cricket-Academy.mp4' },
    { id: 'coach-3', name: 'Deepak Rajput', role: 'Coach', src: videoBase + 'Deepak-Rajputs-Video-Ayush-Cricket-Academy.mp4' },
    { id: 'coach-4', name: 'Vikrant Singh Dangi', role: 'Coach', src: videoBase + 'Vikrant-Singh-Dangis-Videos-Ayush-Cricket-Academy.mp4' },
    { id: 'coach-5', name: 'Malay Kumar', role: 'Coach', src: videoBase + 'Malay-Kumars-Video-Ayush-Cricket-Academy.mp4' },
    { id: 'coach-6', name: 'Deepak Kumar', role: 'Coach', src: videoBase + 'Deepak-Kumars-Video-Ayush-Cricket-Academy.mp4' }
  ];

  const overviewVideo = 'https://ayushcricketacademy.com/wp-content/uploads/2025/05/Ayush-Cricket-Academy-Indias-Best-Cricket-Academy.mp4';

  return {
    images,
    videos,
    testimonials,
    coachesVideos,
    overviewVideo,
    // Categorized sub-collections for quick filtering/rendering
    facilityMedia: {
      grounds: groundVideos,
      gym: gymVideos,
      hostel: hostelVideos,
      canteen: canteenVideos
    },
    trainingMedia: trainingVideos,
    groundMedia: groundVideos,
    hostelMedia: hostelVideos,
    gymMedia: gymVideos,
    canteenMedia: canteenVideos,
    practiceMedia: practiceVideos
  };
})();
