import {MatchReader} from './MatchReader'
import {MatchResult} from './MatchResult'
// '28/10/2018', 'Burnley', 'Chelsea', '0', '4', 'A', 'C Pawson'
//       0     ,     1    ,     2    ,  3 ,  4  , 5 ,     6

const reader = new MatchReader("football.csv");
reader.read();



let manUnitedWins = 0;

for(let match of reader.data){
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++;
    }else if(match[2] === 'Man United' && match[6] === MatchResult.AwayWin){
        manUnitedWins++;
    }
}

console.log(manUnitedWins);
