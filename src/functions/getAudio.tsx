function getAudio(wrd:string, setaudioURL: any) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wrd}`).then(res=>res.json()).then(res=> {
            
    console.log(res)
    if(res[0].phonetics.length>0) {
            let resx = res[0].phonetics.map((x:any)=>{
                if(x.audio.length>0){
                    setaudioURL(x.audio)
                    return x
                }

        

                
            })
            resx.length==0&&setaudioURL('')
        } 

    }).catch(er=>console.log(er))
  }
  export default getAudio