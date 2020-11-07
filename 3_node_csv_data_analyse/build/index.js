"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
// '28/10/2018', 'Burnley', 'Chelsea', '0', '4', 'A', 'C Pawson'
//       0     ,     1    ,     2    ,  3 ,  4  , 5 ,     6
var reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[6] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
