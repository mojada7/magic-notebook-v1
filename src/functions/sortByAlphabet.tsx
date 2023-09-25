function sortByAlphabet(entryArray : string[]) : string[] {

    let cc = (word:string, index:number)=> {
        if(entryArray[0]) {
            return(word[index].toLowerCase().charCodeAt(0))
        } else return 10000
    }
    let words : any[] = [...entryArray]
    let wordsx : any[] = []
    const count = words.length
    for(let i=0; i<count ;i++) {
        let flg ='zzz'
        words.map(w=>{
            if(cc(w,0)<cc(flg,0)) {
                flg = w
            } else if(cc(w,0)==cc(flg,0)&&cc(w,1)<cc(flg,1)){
                flg = w
            } else if(cc(w,0)==cc(flg,0)&&cc(w,1)==cc(flg,1)&&cc(w,2)<cc(flg,2)){
                flg = w
            }
        })
        words = words.filter(w=> {
            return(w != flg)
        })

        flg!='zzz'&&wordsx.push(flg)
    }
    console.log(wordsx)

  return (
    wordsx
  )
}

export default sortByAlphabet