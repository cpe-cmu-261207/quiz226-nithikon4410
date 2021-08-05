const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here
}

const search =document.getElementById('search')
const reset = document.getElementById('reset')
const text = document.getElementById('text')



let state=false
let textOg=text.innerText
search.onclick= ()=> {
  let array =text.innerText.split(' ')
  for(let i=0;i<array.length;i++){
    if(array[i].length>=length.value){
      array[i]= "<span style= 'color:"+ color.value +"'>" +array[i] +"</span>"
    }
  }
  const fusion=array.join(' ')
  text.innerHTML=fusion
  state=true
}

color.oninput =()=>{
  if(state==true){
    let array =text.innerText.split(' ')
    for(let i=0;i<array.length;i++){
    if(array[i].length>=length.value){
      array[i]= "<span style= 'color:"+ color.value +"'>" +array[i] +"</span>"
    }
  }
  const fusion=array.join(' ')
  text.innerHTML=fusion
  }
}

reset.onclick=()=>{
    length.value=5
    text.innerHTML=textOg
    color.value="#FF0000"
}
