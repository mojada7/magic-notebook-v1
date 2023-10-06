function editWord(englishx : string, level : number) : void {

    let dataX : any
    dataX = localStorage.getItem('magic_notebook')
    let dataxx = JSON.parse(dataX)
    let data = {...dataxx}
    let his = data.data.words[englishx.toLowerCase()].test
    let meanin = data.data.words[englishx.toLowerCase()].meaning
    let ttlx = data.data.words[englishx.toLowerCase()].ltt
    let lev = data.data.words[englishx.toLowerCase()].level
    delete data.data.words[englishx.toLowerCase()]

    data.data.words[englishx.toLowerCase()] = {meaning : meanin, level : lev, test : his, ltt : ttlx}

    localStorage.setItem('magic_notebook', JSON.stringify(data))
    


}

export default editWord