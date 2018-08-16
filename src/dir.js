const program = require('commander');
const fs = require('fs');
// console.log(333, __dirname);

program
    .arguments('<dirname>')
    .option('-l, --list', '列表形式')
    .action(function (dirname) {
        // console.log('参数'+dirname);
        // console.log(this.list);
        files = fs.readdirSync(dirname);
        if (this.list) {
            // console.log('4567890',files,this.list);
            let str = '';
            files.forEach(function (file) {
                str+=file+'\r\n'
            });
            console.log(str);
        } else {
            console.log(files);
        }
    })
;
/*let files = fs.readdirSync(__dirname);
console.log(files);*/
process.argv.push(__dirname);
program.parse(process.argv);