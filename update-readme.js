const axios = require('axios');
const fs = require('fs');

axios.get('https://api.quotable.io/random')
  .then(response => {
    const quote = response.data.content;
    const author = response.data.author;
    const date = new Date().toDateString();
    const existingContent = fs.readFileSync('README.md', 'utf8');
    const newContent = `\n\n## Today's Inspiration (${date})\n\n"${quote}" - ${author}\n`;
    fs.appendFileSync('README.md', newContent);
  })
  .catch(error => console.error(error));
