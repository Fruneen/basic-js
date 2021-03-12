const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    let codeName = '';
    for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) !== 'string') continue;
    if (members[i][0] === ' ') {
        for (let j = 0; j < members[i].length;) {
          if (members[i][j] !== ' ') {
            codeName += members[i][j];
            break;
          } else {
            j++;
          }
        }
    } else codeName += members[i][0];
    }
    codeName = codeName.toUpperCase().split('').sort().join('');
    return codeName;
};