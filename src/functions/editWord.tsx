function editWord(englishx : string, meaningx : string, before : string) : void {

    let dataX : any
    dataX = localStorage.getItem('magic_notebook')
    let dataxx = JSON.parse(dataX)
    let data = {...dataxx}
    let his = data.data.words[before].test
    let ttlx = data.data.words[before].ttl
    let lev = data.data.words[before].level
    delete data.data.words[before]

    data.data.words[englishx] = {meaning : meaningx, level : lev, test : his, ttl : ttlx}

    localStorage.setItem('magic_notebook', JSON.stringify(data))
    


}

export default editWord