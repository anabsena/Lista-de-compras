
function adicionar(){
let v=document.getElementById('valor').value;
let q=document.getElementById('quantidade').value;
let d=document.getElementById('lista');
document.getElementById('espace').innerHTML += "<br><input type='checkbox'>"+" "+q+" "+v;
}

