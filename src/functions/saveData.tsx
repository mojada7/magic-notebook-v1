const  saveData = () : void=> {
    let dataxx : any
    dataxx = localStorage.getItem('magic_notebook')
    let datax = JSON.parse(dataxx)


    fetch('/api/user/words', {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
          },
        body : JSON.stringify({email : datax.email, data : datax})
    })
    
}

export default saveData