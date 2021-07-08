const chalk = require('chalk');
module.exports.success = (msg) => console.log(chalk.green(msg));
module.exports.error = (msg) => console.log(chalk.red(msg));
module.exports.status = (msg) => console.log(chalk.blue(msg));
module.exports.object = ({ ...obj }) => console.log(JSON.stringify(obj));