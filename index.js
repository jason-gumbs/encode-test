let encode = (str)=>{
    let arr= []
    for (var i = 0; i < str.length; i++) {
        let position = str.charAt(i).charCodeAt(0) - 97
        position = 25 - position
        arr.push(idOf(position) );
    }
    return arr.join().replace(/,/g, "")
}
function idOf(i) {
    return (i >= 26 ? idOf((i / 26 >> 0) - 1) : '') +  'abcdefghijklmnopqrstuvwxyz'[i % 26 >> 0];
}
encode("acp");
