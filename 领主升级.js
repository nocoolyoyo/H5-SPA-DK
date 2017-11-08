const Fs = require('fs');
const Entry =  './src/pages';
const Output =  './pageConfig';
const index = 3;

Fs.readdir(Entry, function(err, files) {
    if (err) {
        throw err;
    }
    // files是一个数组
    // 每个元素是此目录下的文件或文件夹的名称
    console.log(files);
    let file = `module.exports = 
                        {
                            title: "${files[index]}",
                            entry: "./src/pages/${files[index]}/main.js"
                        };`;

    Fs.writeFileSync(Output, file);
});