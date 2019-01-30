const fs = require('fs');
let iconsDir = './icons/';
// const filenames;
fs.readdir('./icons', (err, data) => {
    if (err) console.error(err);
    data.forEach(file => {
        console.log(file.substring(4))
        fs.rename(iconsDir + file, file.substring(4), err => console.error(err))
    })

})
