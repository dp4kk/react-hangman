export function ShowNotificaton(setter){
    setter(true)
    setTimeout(()=>{
        setter(false)
    },2000)
}

export function CheckWin(word,win,lose){
    let status='win';

    //for win
    word.split('').forEach((letter)=>{
        if(!win.includes(letter)) {
            status=''
        }
    })

    //for lose
    if (lose.length>=6){
        status='lost'
    }

    return status;
}