const fs = require('fs');

const html = fs.readFileSync('c:/Users/learner/Documents/Sorbet/products.html', 'utf8');

// Simple regex to extract products from .pro-grid
const productRegex = /<div class="pro-card">[\s\S]*?<img src="(.*?)".*?>[\s\S]*?<div class="pro-brand">(.*?)<\/div>[\s\S]*?<div class="pro-name">(.*?)<\/div>/g;
let match;
const products = [];

while ((match = productRegex.exec(html)) !== null) {
    products.push({
        _type: 'product',
        title: match[3].trim(),
        images: [
            {
                _type: 'image',
                category: match[2].trim(),
                // Note: Image upload needs to be done via Sanity CLI/API. 
                // This script just extracts the metadata.
            }
        ]
    });
}

// Extract specials
const specialRegex = /<div class="special-card">[\s\S]*?<img src="(.*?)".*?alt="(.*?)".*?>[\s\S]*?(?:<span class="special-ribbon (.*?)">(.*?)<\/span>)?[\s\S]*?<div class="special-body">[\s\S]*?<h3>(.*?)<\/h3>[\s\S]*?<p>(.*?)<\/p>[\s\S]*?<div class="special-price">(.*?)<\/div>[\s\S]*?<div class="special-meta">([\s\S]*?)<\/div>/g;
const specials = [];

while ((match = specialRegex.exec(html)) !== null) {
    const metaHtml = match[8];
    const meta = [];
    const metaItemRegex = /<i class="(.*?)"><\/i> (.*?)<\/span>/g;
    let metaMatch;
    while ((metaMatch = metaItemRegex.exec(metaHtml)) !== null) {
        meta.push({ icon: metaMatch[1].trim(), text: metaMatch[2].trim() });
    }

    post.push({
        _type: 'post',
        title: match[5].trim(),
        ribbon: match[4] ? match[4].trim() : '',
        ribbonColor: match[3] ? match[3].trim() : '',
        description: match[6].trim(),
        price: match[7].replace(/<span>.*?<\/span>/g, '').trim(),
        oldPrice: (match[7].match(/<span>(.*?)<\/span>/) || [])[1] || '',
        meta: meta
    });
}

console.log('Extracted Products:', products.length);
console.log('Extracted Post:', post.length);

fs.writeFileSync('/tmp/extracted_data.json', JSON.stringify({ products, post }, null, 2));
console.log('Data saved to /tmp/extracted_data.json');
