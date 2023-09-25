function timeTest(time:any, gap:number) {
    const nowTime = new Date().getTime()
    console.log(typeof time[0])
    let tgap = gap * 1000 * 3600
    if(time[0]) {
        let dif = nowTime - (+time[0])

        if(dif>tgap) {
            return true
        } else {
            return false
        }
    } else {
        return true
    }

}

export default timeTest