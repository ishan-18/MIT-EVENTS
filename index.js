M.AutoInit();


let ecard = [

    {

        color:'#56855e',
        img:'idea',
        title:"Lorem, ipsum dolor",
        link:"",
        para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quis vitae repudiandae voluptatibus porro animi velit impedit aliquid commodi eveniet?",
    },
    {
        color:'#f77f00',
        img:'technica'
,        title:"Lorem, ipsum dolor",
link:"",
para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quis vitae repudiandae voluptatibus porro animi velit impedit aliquid commodi eveniet?",

    },
    {
        color:'#9d4edd',
        img:'cod',
        title:"Lorem, ipsum dolor",
        link:"",
        para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quis vitae repudiandae voluptatibus porro animi velit impedit aliquid commodi eveniet?",

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


