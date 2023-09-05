const fs = require('fs');

function checkForFileAvailability() {
    if (fs.existsSync('/home/vladimir/my_finances_db.sqlite3')) {
        return true;
    }
    return false;
}

module.exports = {
    checkForFileAvailability
}
