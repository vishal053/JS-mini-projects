var cel= document.getElementById("cel");
var fah =document.getElementById("fah");

cel.addEventListener("input",function(){
let c =this.value;
let f= (9/5 * c) + 32;
if(!Number.isInteger(f)){
    f = f.toFixed(4);
}
fah.value= f;
});

fah.addEventListener("input",function(){
   let f = this.value;
   let c = 5/9*(f - 32);
   if(!Number.isInteger(c)){
       c = c.toFixed(4);
   }
   cel.value = c;
});