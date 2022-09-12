/**
 * referencia: https://www.npmjs.com/package/excel4node
 * autor: juan ortiz
 * año: 11-09-2022
 */

// Require library
var xl = require('excel4node');

// Create a new instance of a Workbook class
var wb = new xl.Workbook();

// Add Worksheets to the workbook
var ws = wb.addWorksheet('Sheet 1');
var ws2 = wb.addWorksheet('Sheet 2');

// Create a reusable style
var style = wb.createStyle({
  font: {
    color: '#FF0800',
    size: 12,
  },
  //numberFormat: '$#,##0.00; ($#,##0.00); -',
});


let experimento = [1,2,3,4,5,6,7,8,9,0]
for (let cnt=0; cnt<experimento.length;cnt++){
    ws.cell(cnt+1,1).string(String(experimento[cnt])).style(style)
}


wb.write('Excel.xls');



/*
ws.cell(1, 1).number(100).style(style);
ws.cell(1, 2).number(200).style(style);
ws.cell(1, 3).formula('A1 + B1').style(style);
ws.cell(2, 1).string('string').style(style);
ws.cell(3, 1).bool(true).style(style).style({font: {size: 14}});

*/
