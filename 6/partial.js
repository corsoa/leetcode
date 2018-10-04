:/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    debugger;
    const colsArrs = [];
    const letters = s.split('');
    let currentColumn = 0;
    let colsFromFullLine = 0;
    let columnContents = [];
    let remainingSpace = (letters.length / numRows)
    while (letters.length && letters.length < remainingSpace) {
        // consider numRows like the max "height" of the column
        if (currentColumn === 0 || currentColumn  % (numRows - 1) === 0) {
            // pop off numRows into this column.
            for (let j = 0; j < numRows; j++) {
                if (letters.length) {
                    columnContents.push(letters.shift());
                }
                else {
                    columnContents.push(null);
                }
            }
            currentColumn += 1;
            colsFromFullLine = 1;
            colsArrs.push(columnContents);
            columnContents = [];
        }
        else {
            // this column gets only one character in a certain position depending on currentCol
            for (let j = 0; j < numRows; j++) {
                const nonNullPos = (numRows - colsFromFullLine - 1);
                if (j === nonNullPos) {
                    columnContents.push(letters.shift());
                }
                else {
                    columnContents.push(null);
                }
            }
            currentColumn++;
            colsFromFullLine++;
            colsArrs.push(columnContents);
            columnContents = [];
        }
    }
    var builtStr = '';
    for (let j = 0; j < numRows; j++) {
      for (let i = 0; i < colsArrs.length; i++) {
        if (colsArrs[i][j]) {
          builtStr += colsArrs[i][j];
        }
      }
    }
    return builtStr;
};
