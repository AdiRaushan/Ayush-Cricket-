const fs = require('fs');
const files = ['index.html', 'about.html', 'facilities.html', 'courses.html', 'courses-full-time.html', 'courses-part-time.html'];
const allMp4s = new Set();
const allJpgs = new Set();

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  const mp4s = content.match(/https?:\/\/[^\s"'<>]+\.mp4/g) || [];
  const imgs = content.match(/https?:\/\/[^\s"'<>]+\.(jpg|jpeg|png|webp)/gi) || [];
  mp4s.forEach(u => allMp4s.add(u));
  imgs.forEach(u => allJpgs.add(u));
});

console.log('Unique MP4s:', allMp4s.size);
console.log('Unique Images:', allJpgs.size);
console.log('--- MP4s ---');
console.log(Array.from(allMp4s));
console.log('--- Images Sample (first 15) ---');
console.log(Array.from(allJpgs).slice(0, 15));
