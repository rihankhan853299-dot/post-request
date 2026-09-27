const nameinput=document.getElementById("name");
const sendbtn=document.getElementById("send");
sendbtn.addEventListener("click",async ()=>{
    console.log("javaScript is Running");
const name=nameinput.value;
console.log(name);
// yana par input value string ki formate mein name naam ke var mein store hogi.
const response = await fetch("http://localhost:3000/name",{
 // mere frontend ko backend(http://localhost:3000) se connect kar do---> fronten ki 
 // request iss par bhejo.
 // name server ka route/endpoint h.  
 // wait--> intjaar karna
 //response---> jab server frontend se bheji gayi request ka response bheje
 //  usse response naam ke variable mein store kar do(backend se response obj form form/ JSON ki m aayega).

 /* 
 * Simple Meaning *

"JavaScript, localhost:3000/name par request bhejo, server ka response 
aane tak wait karo, aur jo response aaye use response variable mein rakh do."

 */
method:"POST",
// Post (method:"POST" ) ek HTTP Request h jiss ka use server ko naya data bhejne k liye kya jata h.

headers:{
    "Content-Type":"application/json"
},
// ye backend/server ko batata h http request ke through body mein bheja gaya data kiss fomate mein h
//---> request body mein bheje gaye data ka formate(type).
// yahan par data JSON Formate mein h.
body:JSON.stringify({
    name:name
})
    /*
    body---> jo data server ko bhejna h usse body mein rakhte h or server 
    ko jo data bhejna h usse body naam ke Packet ke andar Store kar do.
    yahan par left vala name--> key(property) h
    aur right vala name---> user ki actual value jo input ke tour par enter ki
     h(like--> Rihan or nameinpuvalue)
     body:JSON.stringify---> body ke anadar jo data h usse JSON string formate mein convert kar do.
     JSON string Formate ? 

    */
});
//const data= await response.text();
/* backend se aane response ka wait karo agr aa jayen to response ko text ki form mein read karna
(text ki form mein convert karna) aur response ko  data variable mein store kar dena
*/
//console.log(data);
// iss ka output console mein print hoga jo backend se aaya h ye data.

const resbackend=await response.json();
// backend se aaye hue response ko json mein read karne tak ka wait karo
//  and resbackend naam ke folder mein store kar do.
console.log(resbackend);

});
