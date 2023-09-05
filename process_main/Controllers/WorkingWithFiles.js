const Constants = require('../Constants');
const fs = require('fs');

function checkForFileAvailability() {
    if (fs.existsSync(Constants.DATABASE_PATH)) {
        return true;
    }
    return false;
}

module.exports = {
    checkForFileAvailability
}
