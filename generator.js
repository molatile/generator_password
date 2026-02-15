// Character sets for password generation
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number   = "0123456789";
const symbol   = "!@#$%^&*()_+[]{}|;:,.<>?/`~-=\\\"'";

const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");
const btn4=document.querySelector("#btn4");
let size=document.querySelector(".size");

let g1=document.querySelector("#g1");
let g2=document.querySelector("#g2");

const btn5=document.querySelector(".generator");

const active=document.querySelector(".active");

let activator=4;
 btn4.classList.add("active2");

function removal(){
    if(activator===1){
        btn2.classList.remove("active1");
        btn3.classList.remove("active2");
        btn4.classList.remove("active2");
    }else if(activator===2){
        btn1.classList.remove("active1");
        btn3.classList.remove("active2");
        btn4.classList.remove("active2");
    }else if(activator===3){
        btn1.classList.remove("active1");
        btn2.classList.remove("active1");
        btn4.classList.remove("active2");
    }else{
        btn2.classList.remove("active1");
        btn3.classList.remove("active2");
        btn1.classList.remove("active1");
    }
}

btn1.addEventListener("click",function(){
    if(activator !==1){
        btn1.classList.add("active1");
        
        activator=1;
        removal();
    }
});

btn2.addEventListener("click",function(){
    if(activator !==2){
        btn2.classList.add("active1");
    
        activator=2;
        removal();
    }
});

btn3.addEventListener("click",function(){
    if(activator !==3){
        btn3.classList.add("active2");
     
        activator=3;
        removal();
    }
});

btn4.addEventListener("click",function(){
    if(activator !==4){
        btn4.classList.add("active2");
      
        activator=4;
        removal();
    }
});

function pswd(){
    
    if(activator===4){
    combination=lowercase+uppercase;
    rannum=Math.floor(Math.random()*combination.length);
    return combination[rannum];
}   else if(activator===3){
    combination=lowercase+uppercase+number+symbol;
    rannum=Math.floor(Math.random()*combination.length);
    return combination[rannum];

}else if(activator===2){
    combination=lowercase+uppercase+number;
    rannum=Math.floor(Math.random()*combination.length);
    return combination[rannum];
}else{
    combination=lowercase+uppercase+symbol;
    rannum=Math.floor(Math.random()*combination.length);
    return combination[rannum];
}

}

let pswd1="";
let pswd2="";

btn5.addEventListener("click",function (){

    if(size.value===""){
        alert("Enter size");
    }
   
    for(let i=0; i<Number(size.value);i++){   
        let p1=pswd();
        pswd1+=p1;
        
    }
    
    g1.textContent=pswd1;

    for(let i=0; i<Number(size.value);i++){   
        let p2=pswd();
        pswd2+=p2;
    }
  
    g2.textContent=pswd2;
    size.value="";

    pswd1="";
    pswd2=""; 
});


