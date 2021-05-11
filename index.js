M.AutoInit();

let y = window.scrollY
console.log(y);
window.onscroll=()=>{
  if(window.scrollY>1000){
    document.querySelector('.fixed-action-btn').style.display="block";
  }else{
    document.querySelector('.fixed-action-btn').style.display="none";
  }
}


let ecard = [

    {

        color:'#56855e',
        img:'idea',
        title:"Idea Go",
        link:"./ideago-index.html",
        para:"Online hack aimed at solving everyday issues are classified into themes participants are expected to form a interdisciplinary team and come up with power point presentation for the solution of chosen problem statement",
    },
    {
        color:'#f77f00',
        img:'technica'
,        title:"Technica",
link:"./technica.html",
para:"This event comprised 2 competitions 1 Technical and 1 Non-Technical .Students can participate in contests organised by student's associations of respective departments",

    },
    
    {
        color:'#9d4edd',
        img:'cod',
        title:"Virtual Battleground",
        link:"./day3.html",
        para:"Three Online games to test student's concentration creativity , multitasking and team work . So far one of most favourite games such as COD  and popular among youth Valorent will be played along with the 3rd game chess  ",

    }
]


function showCard(index){
console.log(ecard)
let current=ecard[index];

var timelist=document.getElementById('list');

for(i=0 ; i<timelist.children.length;i++){
    timelist.children[i].classList.remove('active');
}

timelist.children[index].classList.add('active');
let html=`
<div class="row" id="animate">
  <div class="col s12 l7">
    <div class="img ${current.img}"></div>
          </div>
          <div class="col s12 l5">
     <div style="width:80%;">
      <h2>${current.title}.</h2>
      <p>${current.para}</p>
     
      <a href="${current.link}">
        <button>Learn More</button>
    
      </a>
     </div>
</div>
      </div>

</div>

`
document.getElementById('animate').animate([
    // keyframes
    { transform: 'translateY(-100%)' },

    ], {
    // timing options
    duration:1000,
    iterations: 1
  });


  document.getElementById('e-card').animate([
    // keyframes
    {backgroundColor: `${current.color}` },

    ], {
    // timing options
    duration:1000,
    iterations: 1
  });




setTimeout(()=>{
  document.getElementById('e-card').style.backgroundColor=current.color; 
    document.getElementById('e-card').innerHTML=html;
},1000)
}


