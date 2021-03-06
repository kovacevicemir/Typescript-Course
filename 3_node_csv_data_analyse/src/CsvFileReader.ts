import fs from 'fs';
// '28/10/2018', 'Burnley', 'Chelsea', '0', '4', 'A', 'C Pawson'

export class CsvFileReader{
    data:string[][] = [];
    
    constructor(public filename: string){}

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
    }
}