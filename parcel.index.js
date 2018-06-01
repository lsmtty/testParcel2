const path = require('path'),
       Bundler = require('parcel-bundler')
       babel = require("babel-polyfill");
var prod = process.env.NODE_ENV === 'production';
var srcRoot = path.join(__dirname,'./src');
var htmlRoot = path.join(srcRoot,'./html');

var rootHtml = path.join(htmlRoot,'./index.html');

//入口文件路径
const file = path.join(htmlRoot,'./index.html');

// Bundler 选项
const options = {
  outDir: './dist', // 将生成的文件放入输出目录下，默认为 dist
  outFile: 'index.html', // 输出文件的名称
  publicUrl: './', // 静态资源的 url ，默认为 dist
  watch: prod, // 是否需要监听文件并在发生改变时重新编译它们
  cache: true, // 启用或禁用缓存，默认为 true
  cacheDir: '.cache', // 存放缓存的目录，默认为 .cache
  minify: !prod, // 压缩文件，当 process.env.NODE_ENV === 'production' 时，会启用
  target: 'browser', // 浏览器/node/electron, 默认为 browser
  https: true, // 服务器文件使用 https 或者 http，默认为 false
  logLevel: 3, // 3 = 输出所有内容，2 = 输出警告和错误, 1 = 输出错误
  hmrPort: 8998, // hmr socket 运行的端口，默认为随机空闲端口(在 Node.js 中，0 会被解析为随机空闲端口)
  sourceMaps: true, // 启用或禁用 sourcemaps，默认为启用(在精简版本中不支持)
  hmrHostname: './', // 热模块重载的主机名，默认为 ''
  detailedReport: false // 打印 bundles、资源、文件大小和使用时间的详细报告，默认为 false，只有在禁用监听状态时才打印报告
};

const bundler = new Bundler(file,options);

const bundle = bundle.bundle();


