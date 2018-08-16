let program = require('commander');
// console.log(34567,process.argv);


program
//设置当前版本的信息,自动添加-V,--version
    .version('1.0.3', '-v, --version')
    //设置说明书
    .usage('我是说明书')
    .option('-a, --a', '查看所有', function (arg1) {
        console.log(333, arg1);
    })
    //[v]中括号为可选参数，<v>尖括号为必选参数
    .option('-n, --number <v>', '数字', function (arg1) {
        console.log('您传入的数字为：' + arg1);
    })
;
program
//创建子命令
    .command('create <project_name>')
    .description('创建新的应用')
    .usage('我是create的说明书')//有了action说明书才起作用
    .action(function (args) {
        console.log('创建新应用:' + args);
    })
;
//解析当前命令行中的数据
program.parse(process.argv);
// console.log(program.parse(process.argv));