# 集字用户二维码生成器

<br/>
<br/>

# 说明

一次生成用户分享小程序二维码图

<br/>

# 安装

    $ npm install share_ewmimg

# 用法

可以在 `test/test.js` 看到用法，也可以直接到test目录运行查看效果。 

```js
var createImg = require('share_ewmimg');
var ewm = 'ewm.jpg'; 
var head = 'head.jpg';
createImg(ewm, head, '诗仙李白', 5, 1123, 'new.png');

```    

[![Kibana](http://h0.hucdn.com/open/201748/eb4143423babc14f_652x916.png)]

# 参数解释


``` js
createImg(ewm, head, userName, bearNum, money, img_path)

```

* `ewm`: 用户的小程序分享二维码文件地址(支持在线 http://|https:// 地址或本地路径)
* `head`: 需要展示的用户头像文件地址(支持在线 http://|https:// 地址或本地路径)
* `userName`: 分享图片上的用户名
* `bearNum`: 用户已经集齐的熊的数量
* `money`: 可以分到的钱数
* `img_path`: 生成的图片放置的位置

<br/>

