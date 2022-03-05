
export const submitValues:any = (a:any, numberOfPoints:number) =>{
let pointsMatrix:any = []
let tempArray = []
    for(let i=0; i<numberOfPoints; i++){
      tempArray.push(parseFloat(a[i]))
      tempArray.push(parseFloat(a[i+numberOfPoints]))
      pointsMatrix.push(tempArray)
      tempArray=[]
    }
    return(pointsMatrix)
  
}

export const polionomialLsm:any = (matrix:any, numberOfEcuations:number) =>{

  let augmented_matrix = []
  let tempArray=[]
  for(let i=0; i<numberOfEcuations+1; i++){
    tempArray.push(0)
    tempArray.push(0)
    augmented_matrix.push(tempArray)
    tempArray=[]
  }
  console.log(augmented_matrix)
  let counter = 0;
  let x = []
  let y = []

  for (let i=0; i<matrix.length; i++){
    x.push(matrix[i][0])
    y.push(matrix[i][1])
    counter+=1
  }
  counter = 0

  for (let i=0; i<numberOfEcuations; i++){
    for(let j=0; j<numberOfEcuations+1; j++){
      let sum = 0
      if(j<numberOfEcuations){
        sum = calculate_coefficient(x, (j+counter))
      }else{
        sum = calculate_vector(x,y,i)
      }
      augmented_matrix[i][j] = sum
    }
    counter++;
  }
  console.log(augmented_matrix)
  let solution = gaussMethod(augmented_matrix, numberOfEcuations, false)
  return solution
}

export const calculate_coefficient = (x:any,p:any) =>{
  let coeff = 0
  for (let i=0; i<x.length;i++){
    coeff += Math.pow(x[i], p)
  }
  return coeff
}

export const calculate_vector = (x:any,y:any,p:any) =>{
  let vector = 0
  for (let i=0; i<x.length;i++){
    vector += Math.pow(x[i], p)*y[i]
  }
  return vector
}



export const gaussMethod: any = (matrix:any, numberOfEquations:any, nonlin:boolean) =>{
  let column_count = 0
  let row_count = 0
  let multiplyCOnstant = 0
  let interpolated_polynom = '';
  let x_solution = []
  for (let i=0; i<numberOfEquations; i++){
    for (let j=i+1; j<numberOfEquations; j++){
      multiplyCOnstant = matrix[j][i]/matrix[i][i]
      for(let k=0; k<numberOfEquations+1; k++){
        matrix[j][k] = matrix[j][k] -(multiplyCOnstant*matrix[i][k])
      }
    }
    if (column_count > 6){
      row_count += 1
      column_count += 1
    }
  }
  for(let i=0; i<numberOfEquations; i++){
    x_solution.push(0)
  }
  x_solution[numberOfEquations-1] = (matrix[numberOfEquations-1][numberOfEquations]/matrix[numberOfEquations-1][numberOfEquations-1])
  for(let i=numberOfEquations-2; i>-1; i--){
    x_solution[i] = matrix[i][numberOfEquations]
    for(let j=i+1; j<numberOfEquations; j++){
      x_solution[i] = x_solution[i]-matrix[i][j] * x_solution[j]
    }
  x_solution[i] = x_solution[i]/matrix[i][i]
  }

  //ispis polinoma
  if(nonlin==false){
    for(let i=0; i<numberOfEquations; i++){
      if(x_solution[i]<0 ||i==0){
        if(i==0){
          interpolated_polynom += (Math.round(x_solution[i]).toString())
        }
        else if(i==1){
          interpolated_polynom += (Math.round(x_solution[i]).toString()) + '*x'
        }
        else{
          interpolated_polynom += (Math.round(x_solution[i]).toString()) + '*x^' + i.toString()
        }
      }
      else if(x_solution[i]==0){
        continue
      }
      else{
        if(i==1){
          interpolated_polynom += (Math.round(x_solution[i]).toString()) + '*x'
        }
        else{
          interpolated_polynom += (Math.round(x_solution[i]).toString()) + '*x^' + i.toString()
        }
      }
    }
  }
  console.log(interpolated_polynom);
}


