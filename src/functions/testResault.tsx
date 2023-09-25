

function testResault(
    word : string, 
    res : number
) {

    let dataX : any
    dataX = localStorage.getItem('magic_notebook')
    let dataxx = JSON.parse(dataX)
    let data = {...dataxx}
    let nowTime = new Date()

    if(res == 0) {
        data.data.words[word].test.push(true)
        let newLevel = data.data.words[word].level + 1
        data.data.words[word].level = newLevel
        data.data.words[word].ltt[0] = nowTime.getTime()  
    } else if (res == 1) {
        data.data.words[word].test.push(true)
        let newLevel = data.data.words[word].level
        data.data.words[word].level = newLevel
        data.data.words[word].ltt[0] = nowTime.getTime()  
    } else {
        data.data.words[word].test.push(false)
        let newLevel = (data.data.words[word].level>1)?(data.data.words[word].level-1):(data.data.words[word].level)
        data.data.words[word].level = newLevel
        data.data.words[word].ltt[0] = nowTime.getTime()  
    }
    localStorage.setItem('magic_notebook', JSON.stringify(data))
}

export default testResault