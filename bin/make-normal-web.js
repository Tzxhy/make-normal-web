#!/usr/bin/env node


if (!process.argv[2]) {
    console.log('使用make-web-dir <your-app-name>来创建静态web项目目录。');
} else {
    var buildProject = require('../src/index.js');
    buildProject();
}