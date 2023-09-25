function addWord(w : {
    english : string,
    secend : string
}) {

    let datax : any 
    datax = localStorage.getItem('magic_notebook')
    datax = JSON.parse(datax)
    if(datax.data.words[`${w.english}`] == null ) {
        datax.data.words[`${w.english}`] = {
            meaning : w.secend,
            level : 1,
            test : [],
            ttl : []
        }
        localStorage.setItem('magic_notebook' ,JSON.stringify(datax))
        return(1)
    }


  return (
    0
  )
}

export default addWord