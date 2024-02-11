export function convertToSnakeCase(camelCase:string):string {
  const snakeCaseArray = camelCase.split("").map((letter)=>{
    if(letter === letter.toUpperCase()){
      return `_${letter.toLowerCase()}`
    }else{
      return letter
    }
  })
  return snakeCaseArray.join("")
}

