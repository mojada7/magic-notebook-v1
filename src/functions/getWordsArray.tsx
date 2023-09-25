function getWordsArray() {
    let wordsArray : {
        english : string,
        second : string,
        level : number,
        test : boolean[],
        ltt : any[]|[]
    }[] 
    wordsArray = []
    let datax : any = localStorage.getItem('magic_notebook')
    let dataxx : any = JSON.parse(datax)
    if(dataxx) {
        for (let word in dataxx.data.words) {

            const wordObject = {
                english : word,
                second : dataxx.data.words[`${word}`].meaning,
                level : dataxx.data.words[`${word}`].level,
                test : dataxx.data.words[`${word}`].test,
                ltt : dataxx.data.words[`${word}`].ltt
            }
            if(wordsArray[0]) {
                wordsArray.push(wordObject)
            } else {
                wordsArray[0] = wordObject
            }
    
        }
    }
  return wordsArray
}

export default getWordsArray