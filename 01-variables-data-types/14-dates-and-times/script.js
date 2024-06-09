
let d;
d = new Date();
d = d.toString();

d = new Date(2021, 1, 10, 12, 37); // 1 is Febuary
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');

d = Date.now();
d = new Date('07-10-2022 12:37:00');
d = d.getTime();
d = d.valueOf();

d = new Date(1657445820000);

d = Math.floor(Date.now() / 1000);
console.log(d);