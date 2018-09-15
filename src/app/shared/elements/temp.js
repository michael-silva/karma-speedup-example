const fs = require('fs');

fs.readdir(__dirname, (err, files) => {
  files.forEach(file => {
    const extension = file.split('.')[2];
    if (extension !== 'ts') return;
    const number = +file.split('-')[2].split('.')[0];
    if (number > 65) {
      const filePath = __dirname + '/' + file;
      const content = fs.readFileSync(filePath,  'utf-8');
      fs.writeFileSync(filePath, content.replace(/\d+/gm, number), 'utf-8');
    }
  });
});
