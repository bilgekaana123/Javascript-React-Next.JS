const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// socials.forEach(function (item) {
//    console.log(item);
// });

// Same thing
// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// function logSocials(social) {
//    console.log(social);
// }

// socials.forEach(logSocials);

//Arrays
const socialObjs = [
   { name: 'Twitter', url: 'https://twitter.com' },
   { name: 'Facebook', url: 'https://facebook.com' },
   { name: 'Linkedin', url: 'https://linkedin.com' },
];

socialObjs.forEach((item) => console.log(item.name));
