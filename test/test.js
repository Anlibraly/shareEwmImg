var createImg       = require('../index');
var path            = require('path');
/*var ewm = 'ewm.jpg'; 
var head = 'head.jpg';*/
var ewm = 'http://h0.hucdn.com/open/201748/d8b43ee31d202e2c_252x252.jpg'; 
var head = 'http://hdn.xnimg.cn/photos/hdn221/20120704/1305/h_main_8eWD_2c16000000ad1376.jpg';
//var head = 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKkGpNuUhaBns9jHOwZyeP4JpnE4opFzRZTFao2g0GXPSNfMEkRKrnJQnt6zRpl9A5ibdDONXvJNug/0';
createImg(ewm, head, '诗仙李白', 5, 1123, 'new.png'/*, path.join(__dirname, '../data')*/);