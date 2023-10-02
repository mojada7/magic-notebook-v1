function editWord(englishx : string, meaningx : string, before : string) : void {

    let dataX : any
    dataX = localStorage.getItem('magic_notebook')
    let dataxx = JSON.parse(dataX)
    let data = {...dataxx}
    let his = data.data.words[before.toLowerCase()].test
    let ttlx = data.data.words[before.toLowerCase()].ltt
    let lev = data.data.words[before.toLowerCase()].level
    delete data.data.words[before.toLowerCase()]

    data.data.words[englishx.toLowerCase()] = {meaning : meaningx, level : lev, test : his, ltt : ttlx}

    localStorage.setItem('magic_notebook', JSON.stringify(data))
    


}

export default editWord