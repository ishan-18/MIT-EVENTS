

let team=[


    {
        mail:"johndoe@mail.com",
        img:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        name:"Vinit",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, reiciendis. Dicta ad necessitatibus vitae ipsa vero praesentium nemo. Recusandae, ratione.",
        post:"UI UX designer",
        sociallinks:`
    <a href=""><i class='bx bxl-facebook-circle'></i></a>
    <a href=""><i class='bx bxl-github'></i></a>
    <a href=""><i class='bx bxl-instagram' ></i></a>
        `
    },

    {
        mail:"johndoe@mail.com",
        img:"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        name:"Vedant",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, reiciendis. Dicta ad necessitatibus vitae ipsa vero praesentium nemo. Recusandae, ratione.",
        post:"Product designer",
        sociallinks:`
    <a href=""><i class='bx bxl-facebook-circle'></i></a>
    <a href=""><i class='bx bxl-github'></i></a>
    <a href=""><i class='bx bxl-instagram' ></i></a>
        `
    },

    {
        mail:"johndoe@mail.com",
        img:"https://images.pexels.com/photos/3778560/pexels-photo-3778560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        name:"Utkarsh",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, reiciendis. Dicta ad necessitatibus vitae ipsa vero praesentium nemo. Recusandae, ratione.",
        post:"sales manager",
        sociallinks:`
    <a href=""><i class='bx bxl-facebook-circle'></i></a>
    <a href=""><i class='bx bxl-github'></i></a>
    <a href=""><i class='bx bxl-instagram' ></i></a>
        `
    },
    {
        mail:"johndoe@mail.com",
        img:"https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        name:"Ishan",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, reiciendis. Dicta ad necessitatibus vitae ipsa vero praesentium nemo. Recusandae, ratione.",
        post:"sales manager",
        sociallinks:`
    <a href=""><i class='bx bxl-facebook-circle'></i></a>
    <a href=""><i class='bx bxl-github'></i></a>
    <a href=""><i class='bx bxl-instagram' ></i></a>
        `
    },
]

let index=0

function setCard(){
    console.log(index)


let length=team.length;

    if(index>=length-1){
        index=0;
        showCard(index);
    }else{
        index=index+1;
        console.log('else')
        showCard(index)
    }
}

function showCard(cindex){


    let person=team[cindex]
    let nextimg=''
    if(index+1>=team.length){
        nextimg=team[0].img;
    }
    else{

        nextimg=team[index+1].img;
    }

let html=`

<div class="current col s12 l10 m10 row">
<div class="col s12 l4 m4">
    <div class="img" style="background-image: url('${person.img}')!important;"></div>
</div>
<div class="col s12 l8 m8 txt">

<h1><i class='bx bxs-quote-alt-left'></i></h1>
<h2 class="name">${person.name}</h2>
<p>${person.desc}</p>

<p class="post">${person.post}</p>
<p class="mail">${person.mail}</p>
<div class="social">
${person.sociallinks}
</div>

</div>
</div>
    <div class="next col s12 l2 m2 preview-img" style="background-image: url('${nextimg}')!important;" >
<div class="overlay">
    <h2><i class='bx bxs-right-arrow-circle' onclick="setCard()"></i></h2>
</div>
    </div>
`

document.getElementById('p-container').animate([
    // keyframes
    {opacity:0 },
    {opacity:1 },

    ], {
    // timing options
    duration:1000,
    iterations: 1
  });

document.getElementById('p-container').innerHTML=html;
}


setInterval(() => {
    setCard()
}, 5000);
setCard()