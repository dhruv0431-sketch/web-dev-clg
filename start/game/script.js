// let arr=[1,2,3,4,5];
// console.log(arr.length);
// arr.push(6);
// console.log(arr);
 
// arr.forEach((a,b,c,)=>{ 
//     console.log(c,'foreach'); 

// }) 
// let arr1=arr.map((a,b,c)=>{ 
//     return a

// }) 
// console.log(arr1,);
// let filterV= arr.filter((a,b,c)=>{ 
//     return a>2 
// }) 
// let sum= arr.reduce((a,b,c,d)=>{ 
//     console.log(a,);
//     console.log(b);
//     return a+b
// }) 
// console.log(sum); 
 
// arr=[1,2,3,5,53,6,3,6,3,3,345,2] 
// let filterv1= arr.filter((x)=>{
//     return x>2
// }); 
// console.log(filterv1); 
// let h3=document.querySelector("h3"); 
// let name= prompt(" enter your name ")
// h3.innertext= "name"+" "+ name;  

// let inp=document.querySelector("input");
// let h2= document.querySelector("h2"); 
// let btn=document.querySelector("button"); 
  
// console.log(btn,"hello");

 
// btn.addEventListener("click",function(){ 
//     console.log(btn,"hello");
//     let data=inp.value
//     h2.innerText=data; 
//     inp.value="";
// }) 

// let inp = document.querySelector("input");
//   let buttons= document.querySelectorAll("buttons");
//   for(let btn of buttons){ 
//     btn.addEventListener("click",function(){
//         let btntext=btn.innerText;
//         console.log(btntext);
//         if(btntext==="C"){ 
//             inp.value="";
//         }else if(btntext==="="){ 
//             inp.value=eval(inp.value)
//         }else{
//             inp.value+=btntext;
//         }
//   })} 
// let inp = document.querySelector("input");

// // Select all buttons
// let buttons = document.querySelectorAll("button");

// // Loop through buttons
// for (let btn of buttons) {

//     btn.addEventListener("click", function () {

//         let btntext = btn.innerText;

//         // Clear input
//         if (btntext === "C") {

//             inp.value = "";

//         }

        
//         else if (btntext === "=") {

//             try {
//                 inp.value = eval(inp.value);
//             } 
//             catch {
//                 inp.value = "Error";
//             }

//         }

//         // Add button value to input
//         else {

//             inp.value += btntext;

//         }

//     });

// }  
// let canvas=document.querySelector("canvas")
//   let pen=   canvas.getContext("2d")
//   let snakeCell=[[0,0]]
//   let cell=50
//   let direction="right"


//   document.addEventListener("keydown",(e)=>{
//     console.log(e);
//     if(e.key=="ArrowUp"){
//         direction='up'
//     }else if(e.key=='ArrowDown'){
//         direction='down'
//     }else if(e.key=='ArrowLeft'){
//         direction="left"

//     }else{
//         direction='right'
//     }
    
//   })


//   function draw(){
//     pen.fillStyle="red"
//     pen.clearRect(0,0,1000,600)
//     for(let a of snakeCell){
//         pen.fillRect(a[0],a[1],cell,cell)

//     }
//   }
//   draw()
//   function update(){
//   let headX=  snakeCell[snakeCell.length-1][0]
//   let headY=  snakeCell[snakeCell.length-1][1]

//  let newX
//   let newY
//   if(direction=='right'){
//     newX=headX+cell
//     newY=headY
//   }
//   else if(direction=="left"){
//     newX=headX-cell
//     newY=headY
//   }
//   else if(direction=="down"){
//     newX=headX
//     newY=headY+cell
//   }
//   else{
//     newX=headX
//     newY=headY-cell
//   }
//   snakeCell.push([newX,newY])
//   snakeCell.shift()
//   }

//   setInterval(()=>{
//     draw()
//     update()

//   },200) 
 
// let canvas=document.querySelector("canvas")
//   let pen=   canvas.getContext("2d")
//   let snakeCell=[[0,0]]
//   let cell=50
//   let direction="right" 
//   let gameOver=false
//   let id=setInterval(()=>{
//     draw()
//     update()

//   },200)


//   document.addEventListener("keydown",(e)=>{
//     console.log(e);
//     if(e.key=="ArrowUp"){
//         direction='up'
//     }else if(e.key=='ArrowDown'){
//         direction='down'
//     }else if(e.key=='ArrowLeft'){
//         direction="left"

//     }else{
//         direction='right'
//     }
    
//   })


//   function draw(){ 
//     if  (gameOver==true){
//         clearInterval(id)
//         return
//     }
//     pen.fillStyle="red"
//     pen.clearRect(0,0,1000,600)
//     for(let a of snakeCell){
//         pen.fillRect(a[0],a[1],cell,cell)

//     }
//   }
//   draw()
//   function update(){
//   let headX=  snakeCell[snakeCell.length-1][0]
//   let headY=  snakeCell[snakeCell.length-1][1]

//  let newX
//   let newY
//   if(direction=='right'){
//     newX=headX+cell
//     newY=headY 
//     if(newX==1000){
//         gameOver=true
//     }
//   }
//   else if(direction=="left"){
//     newX=headX-cell
//     newY=headY 
//     if(newX<0){
//         gameOver=true
//     }
//   }
//   else if(direction=="down"){
//     newX=headX
//     newY=headY+cell 
//     if (newY==600){
//         gameOver=true
//     }
//   }
//   else{
//     newX=headX
//     newY=headY-cell 
//     if (newY<0){ 
//         gameOver=true
//     }
        
//     }
//     snakeCell.push([newX,newY])
//     snakeCell.shift()
//   } 

  

//   function generateR(){ 
//     return[ 
//       Math.floor(Math.random()*950)*cell,
//       Math.floor(Math.random()*550)*cell
//     ]
//   } 

let canvas=document.querySelector("canvas")
  let pen=   canvas.getContext("2d")
  let snakeCell=[[0,0]]
  let cell=50
  let direction="right"
  let gameOver=false
  let randomCell=generateR()
  let score=0
  let id=setInterval(()=>{
    draw()
    update()

  },00)

  document.addEventListener("keydown",(e)=>{
    console.log(e);
    if(e.key=="ArrowUp"){
        direction='up'
    }else if(e.key=='ArrowDown'){
        direction='down'
    }else if(e.key=='ArrowLeft'){
        direction="left"

    }else{
        direction='right'
    }
    
  })


  function draw(){
    if(gameOver==true){
      clearInterval(id)
      pen.fillStyle="snow"
      pen.font="40px sans-sarif"
      pen.fillText("Game over!!",200,100)
      return
    }
   
    pen.fillStyle="red"
    pen.clearRect(0,0,1000,600)
    for(let a of snakeCell){
        pen.fillRect(a[0],a[1],cell,cell)

    }
    pen.fillStyle="pink"
    pen.font="40px sans-sarif"
pen.fillText(`${score}`,100,300)
    pen.fillStyle="yellow"
    pen.fillRect(randomCell[0],randomCell[1],cell,cell)
  }

  function update(){
  let headX=  snakeCell[snakeCell.length-1][0]
  let headY=  snakeCell[snakeCell.length-1][1]

 let newX
  let newY
  if(direction=='right'){
    newX=headX+cell
    newY=headY
    if(newX==1000){
      gameOver=true
    }
  }
  else if(direction=="left"){
    newX=headX-cell
    newY=headY
    if(newX<0){
      gameOver=true
    }
  }
  else if(direction=="down"){
    newX=headX
    newY=headY+cell
    if(newY==600){
      gameOver=true
    }
  }
  else{
    newX=headX
    newY=headY-cell
    if(newY<0){
      gameOver=true
    }
  }
  snakeCell.push([newX,newY])
  if(newX==randomCell[0] && newY==randomCell[1]){
    randomCell=generateR()
    score++;
  }else{
    snakeCell.shift()

  }

  }


     function generateR(){
      return [
            Math.floor(Math.random()*950/cell)*cell ,
         Math.floor(Math.random()*550/cell)*cell 
      ]

     }
 
     

      // console.log(Math.random()*950,"RANDOM DATAAAA X");
      // console.log(Math.random()*550,"RANDOM DATAAAA   Y");

      
