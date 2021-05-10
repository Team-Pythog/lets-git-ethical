
module.exports = function () {
    const env = process.env['ENV'] || 'dev'
    try {
        // const data = fs.readFileSync(`./${env}.js`, 'utf8')
        const data = require(`./${env}.js`)
        console.log('File loaded successfully');
        
        return data;
    } catch (err) {
        const errorMessage = 'Environment does not exist';
          console.error(errorMessage, err);
        throw err;
      }
}();