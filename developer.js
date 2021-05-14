

let team=[

    {
        mail:"vedantgandhipersonal@gmail.com",
        img:"https://image.freepik.com/free-vector/single-page-application-abstract-concept-illustration-spa-web-page-web-development-trend-app-inside-browser-dynamically-rewriting-page-responsive-website-creation_335657-899.jpg",
        name:"Vedant",
        desc:"I am a self learned programmer and my roots cover all aspects such as web development,mobile development,low level system development as well as Deep Learning Development.My goal is to bring sustainable technology for everyone.",
        post:"Web Developer",
        sociallinks:`
  
    <a href="https://github.com/Dictator890" target="_blank"><i class='bx bxl-github'></i></a>

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
        mail:"ishangawali02@gmail.com",
        img:"https://image.freepik.com/free-vector/developer-laptop-computer-with-open-robotic-soft-open-automation-architecture-open-source-robotics-soft-free-development-concept-bright-vibrant-violet-isolated-illustration_335657-474.jpg ",
        name:"Ishan Gawali",
        desc:"Hi I'm Ishan Gawali and I'm a web developer. I've been practising web development since 1.5 years now and I've gained alot of skills in it. I love to explore new languages/frameworks/technologies. I can easily work with a group of people. If anyone wants to collab with me pls contact me at ",
        post:"Web Developer",
        sociallinks:`
    <a href="https://github.com/ishan-18"><i class='bx bxl-github'></i></a>
        `
    },
    {
        mail:"khollam.vinit@mail.com",
        img:"https://cdn.dribbble.com/users/418188/screenshots/3863957/creative_ux_design_illustration_tubik.png?compress=1&resize=800x600",
        name:"Vinit",
        desc:`  I like to design UI UX of apps and website. I am a full-stack web developer. Would like to explore and learn new things as they come across my path `,
        post:"Web Designer",
        sociallinks:`
    <a href="https://github.com/vk17-starlord" target="_blank" href=""><i class='bx bxl-github'></i></a>
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