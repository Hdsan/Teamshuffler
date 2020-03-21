function go(){
    var $gob = document.querySelector('#gobt');
    $gob.removeEventListener('click',go);
    var $prt = document.querySelector('#versus');
    var todos = document.getElementById("listo").getElementsByTagName("li");
    var arraytodos = [];
    arraytodos = shuffle(todos);

    for(let i = 0;i<arraytodos.length; i += 2){
    
        var x = '<li>' + arraytodos[i].innerHTML + " X "  +  arraytodos[i+1].innerHTML + '</li>';
        console.log(arraytodos[i].innerHTML);
        console.log(arraytodos[i+1].innerHTML);
        $prt.innerHTML += x;

    }

    if(arraytodos.length %2 != 0){
        alert("Um time jogará 1 jogo a mais!");                                                                                                                                                                                                                                                                                                                                                                            
    }
    else{
 alert("normal");
    }
  
  }

  function addTime(){
    var item = '<li>' + $time.value + '</li>';
    
    if(item.length == 9 ){
        alert("espaço vazio!")
        return false;
    }
      else {
    $lista.innerHTML += item;
    $time.value = '';
    $time.focus();
    }
      }





  function shuffle(arra1) { //not me
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
