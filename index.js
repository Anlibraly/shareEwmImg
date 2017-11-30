var fs              = require('fs');
var gm              = require('gm');
var path            = require('path');

var resize = (img_url, width, height) => {
    return new Promise((resolve, reject) => {
            gm(img_url)
            .resize(width, height)
            .write(img_url, function (err) {
              if (!err) {
                console.log(' resize Ok! ');
                resolve();
              } else {
                console.log(err);
                reject();
              }
            });
    });
};

var processImg = (change_image_url, base_image_url, output_file, geometry) => {
    return new Promise((resolve, reject) => {
        if(geometry) {
            gm()
            .command('composite') 
            .geometry(geometry)
            .in(change_image_url)
            .in(base_image_url)
            .write(output_file, function (err) {
              if (!err) {
                console.log(' hooray! ');
                resolve();
              } else {
                console.log(err);
                reject();
              }
            });
        } else {
            gm()
            .command('composite') 
            .in('-gravity', 'center')
            .in(change_image_url)
            .in(base_image_url)
            .write(output_file, function (err) {
              if (!err) {
                console.log(' hooray! ');
                resolve();
              } else {
                console.log(err);
                reject();
              }
            });            
        }
    });
};

var pintu = (up, mid, down, new_one) => {
    return new Promise((resolve, reject) => {
        gm(up)
        .append(mid, down)
        .write(new_one, function (err) {
            if (!err) {
                console.log(' pin tu over! ');
                resolve();
            } else {
                console.log(err);
                reject(err);
            }
        });
    });
};

var addText = (img, font, size, x, y, text, color) => {
       return new Promise((resolve, reject) => {
            gm(img)
            .font(font)
            .fill(color)       
            .fontSize(size)          
            .drawText(x, y, text, 'Center')
            .write(img, function (err) {
              if (!err) {
                console.log(' draw text Ok! ');
                resolve();
              } else {
                console.log(err);
                reject();
              }
            });
       }); 
};

var removeImg = (img) => {
    return new Promise((resolve, reject) => {
        fs.unlink(img, function(err) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });
};

var createShareImage = (ewm, head, userName, bearNum, money, img_path) => {
    var mark = `${userName}_${bearNum}`;
    var dataPath = path.join(__dirname, 'data');

    return resize(ewm, 252, 252)
    .then(() => processImg(ewm, `${dataPath}/down_ewm.png`, `${dataPath}/new_ewm_${mark}.png`, '+198+89'))
    .then(() => processImg(`${dataPath}/down_ewm.png`, `${dataPath}/new_ewm_${mark}.png`, `${dataPath}/new_ewm_${mark}.png`))
    .then(() => addText(`${dataPath}/new_ewm_${mark}.png`, `${dataPath}/FZLTY_GBK.ttf`, 24, 0, -240, `我已经集齐${bearNum}套新年熊`, '#ffffff'))
    .then(() => addText(`${dataPath}/new_ewm_${mark}.png`, `${dataPath}/FZLTY_GBK.ttf`, 24, 0, -210, `预计可开${money}元！`, '#ffffff'))
    .then(() => resize(head, 110, 110))
    .then(() => processImg(head, `${dataPath}/mid_head.png`, `${dataPath}/new_head_${mark}.png`, '+270+18'))
    .then(() => processImg(`${dataPath}/mid_head.png`, `${dataPath}/new_head_${mark}.png`, `${dataPath}/new_head_${mark}.png`))
    .then(() => addText(`${dataPath}/new_head_${mark}.png`, `${dataPath}/FZLTY_GBK_ZC.ttf`, 26, 0, 60, userName, '#ffffff'))
    .then(() => pintu(`${dataPath}/up_text.png`, `${dataPath}/new_head_${mark}.png`, `${dataPath}/new_ewm_${mark}.png`, img_path))
    .then(() => removeImg(`${dataPath}/new_ewm_${mark}.png`))
    .then(() => removeImg(`${dataPath}/new_head_${mark}.png`));
};

module.exports = createShareImage;