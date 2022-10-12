const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generateEl = document.getElementById('Gen-button');
let elFirstPassword = document.getElementById('first-password');
let elSecondPassword = document.getElementById('second-password');


//var num = (Math.floor(Math.random() * characters.length))
/* var newArray = [];
var password1 = ""

//console.log(characters[num]);

for(var i = 0; i <15; i++)
{
    var  nums = (Math.floor(Math.random() * characters.length));
    newArray.push(characters[nums]);
   

} 

password1 += newArray.join('');

console.log(newArray);
console.log(password1);
*/

elFirstPassword.value = '';
elSecondPassword.value = '';
 generateEl.addEventListener("click", function(){

    
    let newArray1 = [];
    let newArray2 = [];
    for(var i = 0; i<15; i++){
        var nums = (Math.floor(Math.random() * characters.length));
        newArray1.push(characters[nums]);
    }
    for(var j = 0; j<15; j++){
        var nums = (Math.floor(Math.random() * characters.length));
        newArray2.push(characters[nums])
    }

    elFirstPassword.value = newArray1.join('');
    elSecondPassword.value = newArray2.join('');

    //Task
    //Generate two random passwords each of 15 characters from the given characters above. 
    //Display them in the appropriate fields created. 

})