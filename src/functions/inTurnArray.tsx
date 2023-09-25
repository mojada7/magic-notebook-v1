import getWordsArray from "./getWordsArray"
import timeTest from "./timeTest"

function inTurnArray() {


  let wordsArray = getWordsArray()
  let now = new Date()


  let inTurn : any[] = []

  wordsArray.map(w=>{
    if((w.level == 1)&& !w.ltt[0]) {
      inTurn.push(w) 
    } else if((w.level == 1)&& timeTest(w.ltt,4)) {
      inTurn.push(w) 
    } else if((w.level == 2) && timeTest(w.ltt, 4)) {
      inTurn.push(w) 
    } else if((w.level == 3) && timeTest(w.ltt, 24)) {
      inTurn.push(w) 
    } else if((w.level == 4) && timeTest(w.ltt, 24)) {
      inTurn.push(w) 
    } else if((w.level == 5) && timeTest(w.ltt, 72)) {
      inTurn.push(w) 
    } else if((w.level == 6) && timeTest(w.ltt, 150)) {
      inTurn.push(w) 
    } else if((w.level == 7) && timeTest(w.ltt, 300)) {
      inTurn.push(w) 
    }
  })

  console.log(inTurn)
    
      

  return inTurn
}

export default inTurnArray