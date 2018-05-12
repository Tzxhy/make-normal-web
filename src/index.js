var fs = require('fs');
var path = require('path');
var projectName = process.argv[2];
var projectDir = process.cwd();
var baseDir = path.join(projectDir, projectName);
// create html file

function makeDir(path) {
    try {
        fs.accessSync(path, fs.constants.F_OK);
    } catch (err) {
        fs.mkdirSync(path);
        console.log('目录创建成功:\t' + path);
    }
}

function copyFile(sourcePath, desPath) {
    fs.readFile(sourcePath, function(err, data) {
        if (err) {
            throw err;
        }
        fs.writeFile(desPath, data, function(err) {
            if (err) throw err;
        })
    })
}


function buildProject () {
    makeDir(baseDir);
    makeDir(path.join(baseDir, 'css'));
    makeDir(path.join(baseDir, 'js'));
    makeDir(path.join(baseDir, 'images'));
    // 创建index.html
    copyFile(path.resolve(__dirname, './template/index.html'), path.join(baseDir, 'index.html'));
    copyFile(path.resolve(__dirname, './template/main.js'), path.join(baseDir, 'js', 'main.js'));
    copyFile(path.resolve(__dirname, './template/main.css'), path.join(baseDir, 'css', 'main.css'));
    console.log('创建完成！');
}



module.exports = buildProject;



