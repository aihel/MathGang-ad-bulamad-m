let questions=[];
for(let i=1;i<=50;i++) questions.push({q:`${i*2} kalem ${i*4} TL ise ${i*6} kalem kaç TL?`,a:i*12});
function askQuestion(obj){
  let q = questions.splice(Math.random()*questions.length|0,1)[0];
  let box=document.getElementById('questionBox'); box.style.display='block';
  box.innerHTML=`<p>${q.q}</p><input id='ans'><button onclick='checkAnswer(${q.a}, ${obj.position.z})'>OK</button>`;
}
function checkAnswer(ans,posZ){
  let val=document.getElementById('ans').value;
  if(val==ans) speed+=0.05; else speed-=0.05;
  document.getElementById('questionBox').style.display='none';
  // düşmanı sahneden kaldır
  scene.children.forEach(c=>{if(c.position.z===posZ)c.position.z-=100;});
}
