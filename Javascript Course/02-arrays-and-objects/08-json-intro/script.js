 
 const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body'
 };

// Convert to JSON string
const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);

 console.log(obj);