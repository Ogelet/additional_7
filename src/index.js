module.exports = function solveSudoku(matrix) {
  let result = false;
  let newMatrix = matrix;
  stagesArray = [];
  function check (number, row, column) {
    if(!result){
    console.log('RESSUULLTTTTTTTTTTTTTTTTTT!!!!!!!!!!!!! ', result)
    function checkRow (){
      for( i=0; i<=8; i++){
        console.log(newMatrix,newMatrix[row],'i',i,'newMatrix[row][i]', newMatrix[row][i],'number',number)
        if(newMatrix[row][i] === number){
          console.log('check row NOooo', 'newMatrix[row][i]', newMatrix[row][i], 'number', number );
          getNumber(row, column, number+1);
          return false;
        } else if(i === 8){
          console.log('checked row - TRUE');
          return true};
      }
    };
    function checkColumn (){
      for( i=0; i<=8; i++){
        if(newMatrix[i][column] === number){
          console.log('check column NOooo', 'newMatrix[row][i]', newMatrix[i][column], 'number', number );
          getNumber(row, column, number+1);
          return false;
        } else if(i === 8){
          console.log('checked COLUMN - TRUE');
          return true};
      }
    };
    function checkSegment (){
      const segment_row1 = Math.floor(row/3) * 3;
      const segment_row2 = segment_row1 + 2;
      const segment_column1 = Math.floor(column/3) * 3;
      const segment_column2 = segment_column1 + 2;
      /* console.log('segment', 'segment_row1 --- ', segment_row1, 'segment_row2 ---', segment_row2, 'segment_column1', segment_column1 ,'segment_column2', segment_column2); */
      for( i=segment_row1; i<=segment_row2; i++){
        for( j=segment_column1; j<=segment_column2; j++){
          if(newMatrix[i][j] === number){
          console.log('----Segment NOooo', 'check segment - i,j    ', i  ,   j , 'number', number );
          getNumber(row, column, number+1);
          return false;
      } else if(i === segment_row2 && j === segment_column2){    
        console.log('checked SEGMENT - TRUE');
        return true};
    } 
    };
    };
    console.log('!!!!!!!!!!!!!!!!!!!!!!checkRow() && checkColumn() && checkSegment()', checkRow() && checkColumn() && checkSegment(),'number', number);
    if(checkRow() && checkColumn() && checkSegment()){
      console.log(' --------------------------------true---------------------------------------');
      return true
    } else {console.log(' --------------------------------true---------------------------------------');
    return false}
  }};
  function backstage(){
    console.log('',' NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN', '!!!!!!!!!!!!!!!!!!!!!!!!','stagesArray', stagesArray);
    let row = stagesArray[stagesArray.length - 2][0];
    let column = stagesArray[stagesArray.length - 2][1];
    let number = stagesArray[stagesArray.length - 2][2] + 1;
    stagesArray.pop();
    console.log('row', row,'column', column,'number', number,'stagesArray', stagesArray);
    getNumber(row, column, number);
  }
  function getNumber(i, j, number = 1){
      for(let n = number; n < 10; n++){
        if(!result){
        console.log('NUMBER', n, 'getNumber');
        if(check(n,i,j)){
          newMatrix[i][j] = n;
          console.log("AAAAAAAAAAAAAAAAAAAAA", newMatrix);
          stagesArray[stagesArray.length - 1][2] = n;
          findZero();
        } else {
          console.log('=============================here=========================');
          backstage();
        }
      }    
    }
  };
  findZero();
  function findZero(){
    for( i=0; i<=8; i++){ if(result === false){
      for( j=0; j<=8; j++) { if (result === false){
       // console.log(newMatrix, i, j, newMatrix[i][j]);
        if (newMatrix[i][j] === 0){
          stagesArray.push([i,j,0]);
          console.log('findZero', 'newMatrix.indexOf(0)>-1', 'i=', i, 'j=', j, 'stagesArray', stagesArray);
          getNumber(i, j);
        } else if(i === 8 && j === 8){
          console.log('NOTTTT findZero', 'newMatrix.indexOf(0)>-1', 'i=', i, 'j=', j);
          result = true;
          return result;
        }
      } else {return};
    } 
    } else {return};
    };
  };
  console.log(newMatrix, stagesArray);
  if (result === true){
    return newMatrix;
  };
};


