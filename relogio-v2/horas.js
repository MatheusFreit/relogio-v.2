setInterval(carregar);
   
    function carregar(){

    const horas = document.getElementById('hr');
    const minutos = document.getElementById('min');
    const segundos = document.getElementById('seg');

    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let s = date.getSeconds();

    if(hr < 10 ){hr="0"+ hr;}
    if(min < 10 ){min="0"+ min;} 
    if(s < 10 ){s= "0"+ s;} 

    horas.innerHTML= hr; 
    minutos.innerHTML= min;
    segundos.innerHTML= s; 

}

