function clicar(){
    document.getElementById("agradecimento"). innerHTML = "Obrigado";
    //alert("Obrigado por vir ao meu site!");
}

function redirecionar(){
    window.open("https://www.facebook.com/profile.php?id=100004297120110"); //Outra aba
    //window.location.href = "https://www.facebook.com/profile.php?id=100004297120110"; (Mesma Aba)
}

function trocar(elemento){
    //document.getElementById("mousemove"). innerHTML = "O mouse passou, o texto mudou!"
    elemento.innerHTML = "O mouse passou, o texto mudou!"
    //alert("Trocou o texto");
}

function voltar(elemento){
    //document.getElementById("mousemove"). innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
    //alert("Trocou o texto");
}

function load(){
    alert("Página Carregada!");
}

function funcaoChange(elemento){
    alert(elemento.value)
}