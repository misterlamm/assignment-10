
/**
 * Ex-02 : simpOrSamp()
 *
 * Write a function called `simpOrSamp` that takes an array of strings as input:
 *   If an element in the array is less than 6 characters, append 'Sampson': e.g. "Homer Sampson"
 *   If an element in the array is 6 characters or longer, append 'Simpson': 'Jessica Simpson'
 *
*/
function simpOrSamp(array){
var newArr = []
for (var i = 0; i < array.length; i++){
  var name = array[i]
    if (name.length < 6 ){
      var newName = name + ' Sampson'
      newArr.push(newName)

    }else{
      var newName = name + ' Simpson'
      newArr.push(newName)
      console.log("else", array[i])
    }
  }

  return newArr
}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]
console.log(simpList.length)
console.log(simpList[2].length)

var modifiedNamesList = simpOrSamp(simpList)

console.assert( modifiedNamesList[1] === 'OJ Sampson' )
console.assert( modifiedNamesList[2] === 'Marge Sampson' )
console.assert( modifiedNamesList[5] === 'Maggie Simpson' )
console.assert( modifiedNamesList[0] !== 'Homer Simpson' )
