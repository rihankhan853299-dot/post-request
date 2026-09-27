import express from "express";
// node se node.js ka tool(module) express humne apne project mein import kar liya.
import cors from "cors";
// cors---> ye ek node.js ka tool/package h jiska use hum frontend aur backend ko connect
//  karne ke liye use karte h.
// cors ka full form ?
// Cross Origin Resource Sharing
// cors browser ka ek security feature h jiska use hum frontend aur backend ko connect karne ke liye karte h.
// cors ko required cross origin permission dene ke liye use karte h.
const app = express();
// express ko call karo aur uska object app mein store karlo.
app.use(cors());
// app.use(cors())---> iss cors tool ko express application mein use kar rahe h.
app.use(express.json());

//express.json---> ye express ka built-in middle ware h ye frontend se aaye hue
// data ko js object ki form mein available karata h aur req.body mein data ko bhejta h.
// app.use--> iss middle ware ko Express Application mein use karo.
// yah ek controller jo post,get,listen request ko controll karta h.

app.post("/name",(req,res)=>{
    //app.post---> ye batata h ki server ko post request handle karni h(ye post request ko handle karega)
// name--ye rout ka naam name h
// what is route ?
/*
route Backend ka ek special Address hota h jahan par fronend request bhejta h kisi khass kaam ke liye
---> poore backend server ke adnar ke khaas address jo kisi khaas kaam ke liye h.
*/

    console.log("Post route hit");
console.log(req.body);
//Frontend se request ki body mein jo data backend ko mila hai
//  us data ko terminal mein print karo(ye poori body ek object h jisme key aur value dono h).
const name=req.body.name;
// 
console.log(name);
// body ke andar jo name h uss ke andar jo value name variable mein only usse print karo.
//res.send(`Hello ${name} from backend`); // ye dynamivly resonse bhej raha h.
// res.send---> ye backend se frontend ko response bhejne ke liye use hota h 
// aur ye frontend ko data plain text mein bhejta h.


/*
res.json ?
iss ki help se backend frontend ko jo data bhejta h vo JSON Formate mein bhejta h.
*/

res.json({
    name:name,
    message:"ye res backend ka h",
    success:true
});
});

app.listen(3000,()=>{
    console.log("server port 3000 par chal raha h");
})
