module.exports = function solveSudoku(matrix){
  let result = false;
  let newMatrix = matrix;
  stagesArray = [];
  function check (number, row, column) {
    if(!result){
    function checkRowColumn (){
      for( i=0; i<=8; i++){
        if(newMatrix[row][i] === number || newMatrix[i][column] === number){
          getNumber(row, column, number+1);
          return false;
        } else if(i === 8){
          return true};
      }
    };
    function checkSegment (){
      const segment_row1 = Math.floor(row/3) * 3;
      const segment_row2 = segment_row1 + 2;
      const segment_column1 = Math.floor(column/3) * 3;
      const segment_column2 = segment_column1 + 2;
      for( i=segment_row1; i<=segment_row2; i++){
        for( j=segment_column1; j<=segment_column2; j++){
          if(newMatrix[i][j] === number){
          getNumber(row, column, number+1);
          return false;
      } else if(i === segment_row2 && j === segment_column2){    
        return true};
    } 
    };
    };
    if(checkRowColumn() && checkSegment()){
      // console.log('-checked all - it is true-');
      return true
    } else {//console.log(' --- checked all - it is false');
    return false}
  }};
  function backstage(){
    if(stagesArray.length > 0 ){
    // console.log('',' NNNNNNNNNNNNNN', '!!!!!!!!!!!!!!!!!!!!!!!!','stagesArray', stagesArray, stagesArray.length);
    let row = stagesArray[stagesArray.length - 2][0];
    let column = stagesArray[stagesArray.length - 2][1];
    let number = stagesArray[stagesArray.length - 2][2] + 1;
    stagesArray.pop();
    if(number === 10){
      // console.log('row', row,'column', column,'number', number,'stagesArray', stagesArray);
      newMatrix[row][column] = 0;
      backstage();
    } else {
      // console.log('row', row,'column', column,'number', number,'stagesArray', stagesArray);
      getNumber(row, column, number);
    }
    }
  }
  function getNumber(i, j, number = 1){
    if(checkZero()){
      for(let n = number; n < 10; n++){
        if(checkZero()){
        if(check(n,i,j)){
          newMatrix[i][j] = n;
          stagesArray[stagesArray.length - 1][2] = n;
          if(!checkZero()){
            return
          } else {
            findZero();
          }
         
        } else {
          if(!checkZero()){
            // console.log('trueeeee', result, newMatrix);
            return
          } else {
            // console.log('=======   here we go on backstage() ============','i - ', i, 'j', j, stagesArray, '!!!!!!!!!!!!', 'result', result );
            newMatrix[i][j]=0;
            backstage();
          }
        }
      }
    }
   } else
   {
    // console.log('new matrixxxxxx', newMatrix)
   }

  };
    
  function checkZero(){
    let zerosMatrix = false;
    for( let i=0; i<=8; i++){
    for( let j=0; j<=8; j++){
      if (newMatrix[i][j] === 0){
        zerosMatrix = true;
      }
    }
    }
    return zerosMatrix;
  }
  function findZero(){
    for( i=0; i<=8; i++){ if(result === false){
      for( j=0; j<=8; j++) { if (result === false){
       // console.log(newMatrix, i, j, newMatrix[i][j]);
        if (newMatrix[i][j] === 0){
          stagesArray.push([i,j,0]);
          // console.log('findZero','stagesArray', stagesArray);
          getNumber(i, j);
        } else if(i === 8 && j === 8){
         // console.log('NOTTTT findZero');
          result = true;
          break;
        }
      } else {return};
    } 
    } else {return};
    };
  };

  if(checkZero()){
    findZero();
  };
  return newMatrix;
};


