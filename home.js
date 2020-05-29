
function myFunction(obj){
	//alert(obj);
	//console.log(obj.getElementsByClassName("btn"));
var x=obj;
var y =obj.nextElementSibling;
console.log(obj.nextSibling);
 if (x.style.display == "none") {
   x.style.display = "block";
   y.style.display = "none";
 } else {
   x.style.display = "none";
   y.style.display = "block";
 }
}
function myFunc(obj) {
var x = obj;
 var y = obj.previousElementSibling;
 if (y.style.display == "none") {
   y.style.display = "block";
   x.style.display = "none";
 } else {
   y.style.display = "none";
   x.style.display = "block";
 }
}
