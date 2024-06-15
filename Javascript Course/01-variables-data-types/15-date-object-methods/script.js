
let x;
let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;


x = Intl.DateTimeFormat('en-US').format(d); // IMPORTANT
x = Intl.DateTimeFormat('default').format(d); // IMPORTANT
x = Intl.DateTimeFormat('default', { month: 'long'}).format(d); // IMPORTANT

x = d.toLocaleString('default', { month: 'short'});
x = d.toLocaleString('default', { month: 'long'});


x = d.toLocaleDataString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Turkey',

});

console.log(x);
