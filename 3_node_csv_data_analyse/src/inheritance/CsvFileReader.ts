import fs from 'fs';
// '28/10/2018', 'Burnley', 'Chelsea', '0', '4', 'A', 'C Pawson'

export abstract class CsvFileReader <T>{
    data:T[] = [];
    
    constructor(public filename: string){}

    abstract mapRow(row: string[]): T;


    read():void{
        this.data = fs.readFileSync(this.filename, {
            encoding:'utf-8'
        })
        .split('\n')
        .map(
          (row: string): string[] =>{
            return row.split(',');
          }
        )
        .map(this.mapRow)
    }

}