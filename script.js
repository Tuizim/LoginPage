function selectTheme(){
var btnDark = document.getElementById('btn-dark');
var btnLight = document.getElementById('btn-light')
var html= document.getElementsByTagName('html');

if (btnDark.checked){
    html[0].dataset.bsTheme='dark';
}
if (btnLight.checked){
    html[0].dataset.bsTheme='light';
}
}