const fs = require('fs');
const path = require('path');

// Get all .html files in the current directory
const files = fs.readdirSync('.')
    .filter(file => file.endsWith('.html') && file !== 'index.html')
    .sort();

// Create the files.json structure
const filesList = {
    files: files
};

// Write to files.json
fs.writeFileSync('files.json', JSON.stringify(filesList, null, 2));

console.log(`✓ Updated files.json with ${files.length} HTML files`);
console.log('Files:', files);