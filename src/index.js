module.exports = function solveSudoku(matrix){
  stagesArray = [];

  function check (number, row, column) {
    // console.log('function check');
    function checkRowColumn (){
      // console.log('function checkRowColumn');
      for( i=0; i<=8; i++){
        if(matrix[row][i] === number || matrix[i][column] === number){
          getNumber(row, column, number+1);
          return false;
        } else if(i === 8){
          return true};
      }
    };
    function checkSegment (){
      // console.log('function checkSegment');
      const segment_row1 = Math.floor(row/3) * 3;
      const segment_row2 = segment_row1 + 2;
      const segment_column1 = Math.floor(column/3) * 3;
      const segment_column2 = segment_column1 + 2;
      for( i=segment_row1; i<=segment_row2; i++){
        for( j=segment_column1; j<=segment_column2; j++){
          if(matrix[i][j] === number){
          getNumber(row, column, number+1);
          return false;
      } else if(i === segment_row2 && j === segment_column2){    
        return true};
    }};
    };
    if(checkRowColumn() && checkSegment()){ return true
    } else { return false }
  };

  function backstage(){
    // console.log('function backstage');
    const aLenght = stagesArray.length - 1;
    if(aLenght >= 0 ){
    let row = stagesArray[aLenght][0];
    let column = stagesArray[aLenght][1];
    let number = stagesArray[aLenght][2] + 1;
    // console.log(row, 'row', column, 'column', number, 'number');
    if(number === 10){
      matrix[row][column] = 0;
      stagesArray.pop();
      backstage();
    } else {
      getNumber(row, column, number);
    }
  }};

  function getNumber(i, j, number = 1){
    // console.log('function getNumber');
    for(let n = number; n < 10; n++){
      
      if(check(n,i,j)){
          matrix[i][j] = n;
          stagesArray[stagesArray.length - 1][2] = n;
          if(!checkZero()){
            return
          } else {
            findZero();
          }       
      } else {
          if(checkZero()){
            matrix[i][j]=0;
            stagesArray.pop();
            backstage();
          } else {
            return
          }
      }
    }
  };

  function checkZero(){
    // console.log('function checkZero');
    for( let i=0; i<=8; i++){
      if(matrix[i].includes(0)){
        return  true;
      }
    }
  };

  function findZero(){
    // console.log('function findZero');
    for( i=0; i<=8; i++){
      for( j=0; j<=8; j++){
        if (matrix[i][j] === 0){
          stagesArray.push([i,j,0]);
          getNumber(i, j);
        } else if (i === 8 && j === 8){
          break;
        }
      }
    }
  };

  if(checkZero()){
    findZero();
  };

  console.log(matrix);
  return matrix;
};


