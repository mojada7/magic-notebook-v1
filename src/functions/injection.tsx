

function injection() {
    let datax = localStorage.getItem('magic_notebook')
    let data : any 
    if(datax) {
        data = JSON.parse(datax)
    } else {
        data = {}
    }

    for (let key in data.data.words) {

        data.data.words[key].ltt = []
        data.data.words[key].level = 1
        data.data.words[key].test = []

    }

    localStorage.setItem('magic_notebook', JSON.stringify(data))




}


export default injection