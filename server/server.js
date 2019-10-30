const app = require('./app');
const chalk = require('chalk');
/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://%s:%d in %s mode', chalk.green('✓'), app.get('host'), app.get('port'), app.get('env'));
  console.log('Host is set to : %s', app.get('host'));
  console.log('  Press CTRL-C to stop\n');
});
