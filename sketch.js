function preload(){
  im = loadImage('mario.jpeg')
}
  
let wheretfismariojudah = false

const lyrics = "I'm a big dog, big bear, fella, I'm a lion I'm the predator of the prey that is hiding Oh my, oh my, I have found you, fella Don't you run from me, lil' fella You are not fast enough You are not brave enough You are out of luck Now it's time for you to die very rough You have been warned There is nowhere to run You will pay the price I will take your life There's no running back Now your loved ones are so sad You had a choice, but you failed I'm a big dog, big bear, fella, I'm a lion I'm the predator of the prey that is hiding Oh my, oh my, I have found you, fella Don't you run from me, lil' fella You are not fast enough You are not brave enough You are out of luck Now it's time for you to die very rough"

const seperate = lyrics.split(' ')
console.log(seperate)

let x = 0



  function setup() {
  createCanvas(windowWidth, windowHeight);


}

function draw() {
  background(0);
  rectMode(CENTER)
  
  
  textAlign(CENTER)
  if(mouseX>width/2-150 && mouseX<width/2+150 && mouseY<height/2+50 && mouseY>height/2-50){
    fill('#374A67')
    textSize(80)
    rect(width/2, height/2, 310, 110, 100)
    fill(255)
    text('?',width/2, height/2+20)
  } else{
    fill('#374A67')
    textSize(60)
    rect(width/2, height/2, 300, 100, 100)
    fill(255)
    text('!',width/2, height/2+20)
  }
  
  
  if(wheretfismariojudah){
  im.save(seperate[x], 'png')
  x++
  }

}



function mouseClicked(){
  if(mouseX>width/2-150 && mouseX<width/2+150 && mouseY<height/2+50 && mouseY>height/2-50){
    wheretfismariojudah = true
  }
}
