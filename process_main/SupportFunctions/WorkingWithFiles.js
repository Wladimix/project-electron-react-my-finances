const fs = require("fs");

function checkForFileAvailability(filePath) {
    if (fs.existsSync(filePath)) {
        return true;
    }
    return false;
}

module.exports = {
    checkForFileAvailability
}
