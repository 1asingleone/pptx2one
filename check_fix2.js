const fs = require('fs');
const c = fs.readFileSync('D:\\00草稿\\pptx2one\\pptx2one.html', 'utf8');
const m = c.match(/<script>([\s\S]*?)<\/script>/);
if (m) {
  try {
    new Function(m[1]);
    console.log('JS syntax: OK');
  } catch(e) {
    console.log('JS syntax ERROR: ' + e.message);
  }
}
console.log('guard checks present: srcEntry=' + (c.match(/if\s*\(srcEntry\)/g) || []).length + ' zipEntry=' + (c.match(/if\s*\(zipEntry/g) || []).length);
