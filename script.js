console.log("ca fonctionne");
//VARIABLES 

// const // non réassignable & portée limitée 
// let  // réassignable & Portée limtée


// Portée de
const firstname ="imane";
const lastname="benali";
 function hello(){
    
    console.log(firstname);
    console.log(lastname);
 }
 hello();
 
 //types variables
 //const stringA = "salut"; //string = chaine de caractère ="",'',´´
 //const numberA = 0;// nombre= number = 0
 //let booleanA= true ; //boolean = boolean = true ou false
 //const arrayA= []; //Array=tableau=[]
 //const pbjectA={};// object = objet ={}


 // LES TABLEAUX PLUS PRECISEMENT/
 const fruits =['pomme','Fraise','Mangue', 'Kiwi','Banane'];
 console.log(fruits);
//les objets plus précisement
const chats ={
    nom: "imane",
    age:23,
    couleur:["noir","jaune","tigre"],
    sexe: "female",
    sterilise: true,
    puce: undefined,
};
console.log(chats)//type objets 
console.log(chats.nom);//chaine de caractere=string
console.log(chats.age);
console.log(chats.couleur);
console.log(chats.sexe);
console.log(chats.sterilise);
console.log(chats.puce);