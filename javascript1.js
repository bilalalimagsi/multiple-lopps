let element=document.getElementById('showhere')

function more() {
    let output=''
    let number=document.getElementById('done').value
    for (let abc = 1; abc <=number; abc++) {
        let row = '';
        for (let asd = 1; asd <=number; asd++) {
            row += "*"; }
            output += row + "<br>";}



            element.innerHTML= output;
}
let element1=document.getElementById('showhere')

function more1() {
    let output=''
    let number=document.getElementById('done1').value
    for (let abc = 1; abc <=number; abc++) {
        let row = '';
        for (let asd = 1; asd <=abc; asd++) {
            row += "*"; }
            output += row + "<br>";}


            
            element1.innerHTML= output;   
}