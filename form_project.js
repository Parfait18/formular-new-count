function save(){
    var element1=document.getElementById("name");
    var element2=document.getElementById("surname");
    var element3=document.getElementById("password");
       if(element1.value=="" ||element2.value=="" || element3.value=="" ){
          // alert("Veuillez remplir tous les champs obligatoires !!");
          myFunction();
       }
}
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }