document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });

function onOpen(){
    const pop_up = document.querySelector(".pop-up-card");
    pop_up.style.display = "block";
}

function onOpen1(){
    const pop_up = document.querySelector(".pop-up-card1");
    pop_up.style.display = "block";
}

var global_obj = [
    {
        event_name: 'Kryptek Quiz',
        event_type: 'Technical',
        event_branch: 'EESA',
        fees: 50,
        participants: 1,
        rules: [
            "There will be total 15 questions.",
            "All questions will be technical questions in riddle form and the time for each question will be 10 secs. ",
            "At the end of the quiz the winners and the Runner Ups will be announced based on the score seen on the quizziz app."
        ],
        desc: "This Quiz will be conducted on Quizziz App (a MCQ based app). The quiz link and the quiz code will be forwarded to the participants on the day of the event. When the host hostess the quiz, the participants will join the link with the given code and start the quiz. He/she will be entering the name which he/she gave at the time of registration.",
        image: "/assets/quiz.jpg",
        time: "21 May, 10:00- 11:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfn2llNFJ2bJi5YLm_zASL3a-ZJ6Joyj6ljjUJAAYstn2idzQ/viewform",
        logo: "/assets/EESA_logo.jpg",
        person1: "Abulfaiz: 8983385403",
        person2: "Abhay: 9156902666"
    },
    {
        event_name: 'Cryptic Coder',
        event_type: 'Technical',
        event_branch: 'ACES',
        fees: 30,
        participants: 1,
        rules: [
            "A participant’s score depends on the number of test cases a participant’s code submission successfully passes.",
            "If a participant submits more than one solution per challenge, then the participant’s score will reflect the highest score achieved. In a game challenge, the participant's score will reflect the last code submission.",
            "Participants are ranked by score. If two or more participants achieve the same score, then the tie is broken by the total time taken to submit the last solution resulting in a higher score.",
        ],
        desc: "Each question has pre-determined score based on the difficulty of that program. Hard difficulty have 40 points. Medium difficulty have 20 points. Easy difficulty have 10 points.",
        image: "/assets/crypticcoder.jpg",
        time: "21 May, 10:00- 11:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScybCeuLo-X_rdbX2CQMCN94GmdiNJTDxiPVMlg4o_i4tPdVQ/viewform",
        logo: "/assets/ACES_LOGO.png",
        person1: "Anuja: 9325502393",
        person2: "Vaibhav: 7588115116"
    },
    {
        event_name: 'Creative Writing',
        event_type: 'Technical',
        event_branch: 'ITSA',
        fees: 30,
        participants: 1,
        rules: [
            "Plagiarism is strictly not allowed. (We have special softwares to find out if you have copied the article from internet or not).",
            "Content should only be in English Language.",
            "Camera must be on while writing the article.",
            "Competition will held on WebEx Platform",
            "Should be debative and creative type of writing.",
            "Time limit will be 1 hour and word range is between 300-500 words. "
        ],
        desc: "5 Topics will be revealed on the spot. You have to choose any one and write on it. Participants will be judged on the principles of creativity, knowledge of the English language, Writing Skills and Expression on respective content. E-certificates for participants. Cash prize of Rs. 500.",
        image: "/assets/creativewriting.jpg",
        time: "21 May, 10:00- 11:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfgV1xSYZ4PxkNifGCKMiQ7S7UNu0WxMWguNYEmIg4lB5QMNQ/viewform",
        logo: "/assets/itsa_logo.jpeg",
        person1: "Raj: 9172002670",
        person2: "Shivani: 7262855284"
    },
    {
        event_name: 'CNC Programming',
        event_type: 'Technical',
        event_branch: 'MESA',
        fees: 40,
        participants: 1,
        rules: [
            "Only Diploma appearing students of any branch can participate in this competition.",
            "All participants need to keep college I-card with him during competition.",
            "Only individual participation is allowed.",
            "Competition will be monitored online on Webex platform. https://meetingsapac34.webex.com/join/pr1663477814",
            "During competition hours participants need to keep their mobile/laptop camera ON",
            "Sketch of the part for programming  will be displayed on Webex platform during meeting."
        ],
        desc: "All registered students need to join the following whatapps group",
        image: "/assets/cncprog.webp",
        time: "21 May, 10:00- 11:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfXMBNKE8JZsX6rzaItoO9JG-R7peC2TZ32W-A3Nr_CGPDcTA/viewform",
        logo: "/assets/MESA_LOGO.jpeg",
        person1: "Parth: 8378836511",
        person2: "Shyam: 8600138609"
    },
    {
        event_name: 'CAD MANIA',
        event_type: 'Technical',
        event_branch: 'CESA',
        fees: 30,
        participants: 1,
        rules: [
            "Winners would be judged on the basis of following.",
            "-Dimensions -Proper And Complete Labeling -Completeness Of The Plan -Scale -Outer Lining Of The Plan -Inner Lining Of The Plan",
            "Time required will also be considered (if he or she submits early)",
            "Among all the participants three winners will be judged on the basis of the above  performance",
            "First and second and third winners will be awarded with a cash price along  Winning Certificate.",
            "E- Certificates will be provided to all the Participants."
        ],
        desc: "The participants would be given a plan,along with its dimensions. Participants will have to complete the plan in given time of 1hr duration, Extra 5 minutes will be given to upload the file.",
        image: "/assets/cadmania.webp",
        time: "21 May, 10:00- 11:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfcmiR9_zm0XSf6bkXdK-gSMIUcTTxxUfeHK2QBhJQjSl9Zzw/viewform",
        logo: "/assets/cesaaaa.JPG",
        person1: "Shivam: 8975506477",
        person2: "Shravni: 9545246841"
    },
    {
        event_name: 'Friends Quiz',
        event_type: 'Non-Technical',
        event_branch: 'EESA',
        fees: 50,
        participants: 1,
        rules: [
            "There will be total 30 questions out of which 10 questions would be in the form of riddle.",
            "All questions will be based on FRIENDS web-series questions and the time for each question will be 10 secs. ",
            "At the end of the quiz the winners and the Runner Ups will be announced based on the score seen on the quizziz app.",
        ],
        desc: "This Quiz will also be conducted on Quizziz App (a MCQ based app). The quiz link and the quiz code will be forwarded to the participants on the day of the event. When the host hostess the quiz, the participants will join the link with the given code and start the quiz. He/she will be entering the name which he/she gave at the time of registration.",
        image: "/assets/quiz3.svg",
        time: "21 May, 12:30- 02:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfn2llNFJ2bJi5YLm_zASL3a-ZJ6Joyj6ljjUJAAYstn2idzQ/viewform",
        logo: "/assets/EESA_logo.jpg",
        person1: "Abulfaiz: 8983385403",
        person2: "Abhay: 9156902666"
    },
    {
        event_name: 'One- Minute Short-Film',
        event_type: 'Non-Technical',
        event_branch: 'ITSA',
        fees: 50,
        participants: 1,
        rules: [
            "Time limit of the video should be 60 seconds max.", 
            "You have 24 hours to make a video of your choice and there is no size limit.",
            "You can use any smartphone, camera and editing gear and own all copyrights.",
            "English Subtitles are must.",
            "Movie should not contain any offensive content or foul language.",
            "After completion of the video, upload it on the given google drive link."
        ],
        desc: "Please do a small intro of 5-10 seconds before starting the main content of your video. Work with the theme of your choice. Content Should be only in English, Hindi, Marathi Language",
        image: "/assets/film.jpg",
        time: "21 May, 12:30- 02:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfgV1xSYZ4PxkNifGCKMiQ7S7UNu0WxMWguNYEmIg4lB5QMNQ/viewform",
        logo: "/assets/itsa_logo.jpeg",
        person1: "Raj: 9172002670",
        person2: "Shivani: 7262855284"
    },
    {
        event_name: 'Poster Making Competition',
        event_type: 'Non-Technical',
        event_branch: 'MESA',
        fees: 40,
        participants: 1,
        rules: [
            "Prepare Actual/Virtual poster.",
            "Only Diploma appearing students of any branch can participate in this competition.",
            "All participants need to keep college I-card with him/her during competition.",
            "Only individual participation is allowed."
        ],
        desc: "COVID Awareness. Competition will be monitored online on Webex platform. https://meetingsapac35.webex.com/meet/pr1660187791. During competition hours participants need to keep their mobile/laptop camera ON. All registered students need to join the following whatsapp group",
        image: "/assets/postermaking.webp",
        time: "21 May, 12:30- 02:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfXMBNKE8JZsX6rzaItoO9JG-R7peC2TZ32W-A3Nr_CGPDcTA/viewform",
        logo: "/assets/MESA_LOGO.jpeg",
        person1: "Parth: 8378836511",
        person2: "Shyam: 8600138609"
    },
    {
        event_name: 'Mock placement',
        event_type: 'Non-Technical',
        event_branch: 'CESA',
        fees: 50,
        participants: 1,
        rules: [
            "3 rounds will be Conducted",
            "First round will be an introductory round, where the participants will have to answer general knowledge questions",
            "Second round will be based on IQ questions",
            "Third round would be an interview.",
            "Questions will be given in Google form Platform",
            "Interview will be conducted on webex virtual platform",
            "The 4 participants selected in the interview would be declared as 1st , 2nd , 3rd, 4th winners respectively",
            "Winners will be judged on the basis of following: Confidence, Enthusiasm, Outfit, Reasoning Skills, Number Of Score In Previous Rounds, Answering Question"
        ],
        desc: "Cash prize for 1st 2nd 3rd Winners , and vouchers for 4th winner. E Certificates for the participants",
        image: "/assets/mock.png",
        time: "21 May, 12:30- 02:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfcmiR9_zm0XSf6bkXdK-gSMIUcTTxxUfeHK2QBhJQjSl9Zzw/viewform",
        logo: "/assets/cesaaaa.JPG",
        person1: "Shivam: 8975506477",
        person2: "Shravni: 9545246841"
    },
    {
        event_name: 'Trivia Quiz',
        event_type: 'Non-Technical',
        event_branch: 'ACES',
        fees: 30,
        participants: 1,
        rules: [
            "Letter wise hints will be given.",
            "You need to find those points on google maps and join them using direction.",
            "After joining the points letter will be formed.",
            "Combining all those letters would result in a name of a series which will take them to the next round.",
            "The second consists of a quiz based the series you got in first round.",
            "At the end of the quiz the winners and the Runner Ups will be announced based on the score (the word formed at the end)"
        ],
        desc: "The quiz link and the quiz code will be forwarded to the participants on the day of the event. When the host hostess the quiz, the participants will join the link with the given code and start the quiz. He/she will be entering the name which he/she gave at the time of registration.",
        image: "/assets/quiz3.svg",
        time: "21 May, 12:30- 02:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScybCeuLo-X_rdbX2CQMCN94GmdiNJTDxiPVMlg4o_i4tPdVQ/viewform",
        logo: "/assets/ACES_LOGO.png",
        person1: "Anuja: 9325502393",
        person2: "Vaibhav: 7588115116"
    },
];

var technica_events = [
    {
        event_name: 'Kryptek Quiz',
        event_type: 'Technical',
        event_branch: 'EESA',
        fees: 50,
        participants: 1,
        rules: [
            "There will be total 15 questions.",
            "All questions will be technical questions in riddle form and the time for each question will be 10 secs. ",
            "At the end of the quiz the winners and the Runner Ups will be announced based on the score seen on the quizziz app."
        ],
        desc: "This Quiz will be conducted on Quizziz App (a MCQ based app). The quiz link and the quiz code will be forwarded to the participants on the day of the event. When the host hostess the quiz, the participants will join the link with the given code and start the quiz. He/she will be entering the name which he/she gave at the time of registration.",
        image: "/assets/quiz.jpg",
        time: "21 May, 10:00- 11:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfn2llNFJ2bJi5YLm_zASL3a-ZJ6Joyj6ljjUJAAYstn2idzQ/viewform",
        logo: "/assets/EESA_logo.jpg",
        person1: "Abulfaiz: 8983385403",
        person2: "Abhay: 9156902666"
    },
    {
        event_name: 'Cryptic Coder',
        event_type: 'Technical',
        event_branch: 'ACES',
        fees: 30,
        participants: 1,
        rules: [
            "A participant’s score depends on the number of test cases a participant’s code submission successfully passes.",
            "If a participant submits more than one solution per challenge, then the participant’s score will reflect the highest score achieved. In a game challenge, the participant's score will reflect the last code submission.",
            "Participants are ranked by score. If two or more participants achieve the same score, then the tie is broken by the total time taken to submit the last solution resulting in a higher score.",
        ],
        desc: "Each question has pre-determined score based on the difficulty of that program. Hard difficulty have 40 points. Medium difficulty have 20 points. Easy difficulty have 10 points.",
        image: "/assets/crypticcoder.jpg",
        time: "21 May, 10:00- 11:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScybCeuLo-X_rdbX2CQMCN94GmdiNJTDxiPVMlg4o_i4tPdVQ/viewform",
        logo: "/assets/ACES_LOGO.png",
        person1: "Anuja: 9325502393",
        person2: "Vaibhav: 7588115116"
    },
    {
        event_name: 'Creative Writing',
        event_type: 'Technical',
        event_branch: 'ITSA',
        fees: 30,
        participants: 1,
        rules: [
            "Plagiarism is strictly not allowed. (We have special softwares to find out if you have copied the article from internet or not).",
            "Content should only be in English Language.",
            "Camera must be on while writing the article.",
            "Competition will held on WebEx Platform",
            "Should be debative and creative type of writing.",
            "Time limit will be 1 hour and word range is between 300-500 words. "
        ],
        desc: "5 Topics will be revealed on the spot. You have to choose any one and write on it. Participants will be judged on the principles of creativity, knowledge of the English language, Writing Skills and Expression on respective content. E-certificates for participants. Cash prize of Rs. 500.",
        image: "/assets/creativewriting.jpg",
        time: "21 May, 10:00- 11:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfgV1xSYZ4PxkNifGCKMiQ7S7UNu0WxMWguNYEmIg4lB5QMNQ/viewform",
        logo: "/assets/itsa_logo.jpeg",
        person1: "Raj: 9172002670",
        person2: "Shivani: 7262855284"
    },
    {
        event_name: 'CNC Programming',
        event_type: 'Technical',
        event_branch: 'MESA',
        fees: 40,
        participants: 1,
        rules: [
            "Only Diploma appearing students of any branch can participate in this competition.",
            "All participants need to keep college I-card with him during competition.",
            "Only individual participation is allowed.",
            "Competition will be monitored online on Webex platform. https://meetingsapac34.webex.com/join/pr1663477814",
            "During competition hours participants need to keep their mobile/laptop camera ON",
            "Sketch of the part for programming  will be displayed on Webex platform during meeting."
        ],
        desc: "All registered students need to join the following whatapps group",
        image: "/assets/cncprog.webp",
        time: "21 May, 10:00- 11:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfXMBNKE8JZsX6rzaItoO9JG-R7peC2TZ32W-A3Nr_CGPDcTA/viewform",
        logo: "/assets/MESA_LOGO.jpeg",
        person1: "Parth: 8378836511",
        person2: "Shyam: 8600138609"
    },
    {
        event_name: 'CAD MANIA',
        event_type: 'Technical',
        event_branch: 'CESA',
        fees: 30,
        participants: 1,
        rules: [
            "Winners would be judged on the basis of following.",
            "-Dimensions -Proper And Complete Labeling -Completeness Of The Plan -Scale -Outer Lining Of The Plan -Inner Lining Of The Plan",
            "Time required will also be considered (if he or she submits early)",
            "Among all the participants three winners will be judged on the basis of the above  performance",
            "First and second and third winners will be awarded with a cash price along  Winning Certificate.",
            "E- Certificates will be provided to all the Participants."
        ],
        desc: "The participants would be given a plan,along with its dimensions. Participants will have to complete the plan in given time of 1hr duration, Extra 5 minutes will be given to upload the file.",
        image: "/assets/cadmania.webp",
        time: "21 May, 10:00- 11:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfcmiR9_zm0XSf6bkXdK-gSMIUcTTxxUfeHK2QBhJQjSl9Zzw/viewform",
        logo: "/assets/cesaaaa.JPG",
        person1: "Shivam: 8975506477",
        person2: "Shravni: 9545246841"
    },
    {
        event_name: 'Friends Quiz',
        event_type: 'Non-Technical',
        event_branch: 'EESA',
        fees: 50,
        participants: 1,
        rules: [
            "There will be total 30 questions out of which 10 questions would be in the form of riddle.",
            "All questions will be based on FRIENDS web-series questions and the time for each question will be 10 secs. ",
            "At the end of the quiz the winners and the Runner Ups will be announced based on the score seen on the quizziz app.",
        ],
        desc: "This Quiz will also be conducted on Quizziz App (a MCQ based app). The quiz link and the quiz code will be forwarded to the participants on the day of the event. When the host hostess the quiz, the participants will join the link with the given code and start the quiz. He/she will be entering the name which he/she gave at the time of registration.",
        image: "/assets/quiz3.svg",
        time: "21 May, 12:30- 02:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfn2llNFJ2bJi5YLm_zASL3a-ZJ6Joyj6ljjUJAAYstn2idzQ/viewform",
        logo: "/assets/EESA_logo.jpg",
        person1: "Abulfaiz: 8983385403",
        person2: "Abhay: 9156902666"
    },
    {
        event_name: 'One- Minute Short-Film',
        event_type: 'Non-Technical',
        event_branch: 'ITSA',
        fees: 50,
        participants: 1,
        rules: [
            "Time limit of the video should be 60 seconds max.", 
            "You have 24 hours to make a video of your choice and there is no size limit.",
            "You can use any smartphone, camera and editing gear and own all copyrights.",
            "English Subtitles are must.",
            "Movie should not contain any offensive content or foul language.",
            "After completion of the video, upload it on the given google drive link."
        ],
        desc: "Please do a small intro of 5-10 seconds before starting the main content of your video. Work with the theme of your choice. Content Should be only in English, Hindi, Marathi Language",
        image: "/assets/film.jpg",
        time: "21 May, 12:30- 02:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfgV1xSYZ4PxkNifGCKMiQ7S7UNu0WxMWguNYEmIg4lB5QMNQ/viewform",
        logo: "/assets/itsa_logo.jpeg",
        person1: "Raj: 9172002670",
        person2: "Shivani: 7262855284"
    },
    {
        event_name: 'Poster Making Competition',
        event_type: 'Non-Technical',
        event_branch: 'MESA',
        fees: 40,
        participants: 1,
        rules: [
            "Prepare Actual/Virtual poster.",
            "Only Diploma appearing students of any branch can participate in this competition.",
            "All participants need to keep college I-card with him/her during competition.",
            "Only individual participation is allowed."
        ],
        desc: "COVID Awareness. Competition will be monitored online on Webex platform. https://meetingsapac35.webex.com/meet/pr1660187791. During competition hours participants need to keep their mobile/laptop camera ON. All registered students need to join the following whatsapp group",
        image: "/assets/postermaking.webp",
        time: "21 May, 12:30- 02:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfXMBNKE8JZsX6rzaItoO9JG-R7peC2TZ32W-A3Nr_CGPDcTA/viewform",
        logo: "/assets/MESA_LOGO.jpeg",
        person1: "Parth: 8378836511",
        person2: "Shyam: 8600138609"
    },
    {
        event_name: 'Mock placement',
        event_type: 'Non-Technical',
        event_branch: 'CESA',
        fees: 50,
        participants: 1,
        rules: [
            "3 rounds will be Conducted",
            "First round will be an introductory round, where the participants will have to answer general knowledge questions",
            "Second round will be based on IQ questions",
            "Third round would be an interview.",
            "Questions will be given in Google form Platform",
            "Interview will be conducted on webex virtual platform",
            "The 4 participants selected in the interview would be declared as 1st , 2nd , 3rd, 4th winners respectively",
            "Winners will be judged on the basis of following: Confidence, Enthusiasm, Outfit, Reasoning Skills, Number Of Score In Previous Rounds, Answering Question"
        ],
        desc: "Cash prize for 1st 2nd 3rd Winners , and vouchers for 4th winner. E Certificates for the participants",
        image: "/assets/mock.png",
        time: "21 May, 12:30- 02:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfcmiR9_zm0XSf6bkXdK-gSMIUcTTxxUfeHK2QBhJQjSl9Zzw/viewform",
        logo: "/assets/cesaaaa.JPG",
        person1: "Shivam: 8975506477",
        person2: "Shravni: 9545246841"
    },
    {
        event_name: 'Trivia Quiz',
        event_type: 'Non-Technical',
        event_branch: 'ACES',
        fees: 30,
        participants: 1,
        rules: [
            "Letter wise hints will be given.",
            "You need to find those points on google maps and join them using direction.",
            "After joining the points letter will be formed.",
            "Combining all those letters would result in a name of a series which will take them to the next round.",
            "The second consists of a quiz based the series you got in first round.",
            "At the end of the quiz the winners and the Runner Ups will be announced based on the score (the word formed at the end)"
        ],
        desc: "The quiz link and the quiz code will be forwarded to the participants on the day of the event. When the host hostess the quiz, the participants will join the link with the given code and start the quiz. He/she will be entering the name which he/she gave at the time of registration.",
        image: "/assets/quiz3.svg",
        time: "21 May, 12:30- 02:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScybCeuLo-X_rdbX2CQMCN94GmdiNJTDxiPVMlg4o_i4tPdVQ/viewform",
        logo: "/assets/ACES_LOGO.png",
        person1: "Anuja: 9325502393",
        person2: "Vaibhav: 7588115116"
    },
];

const cards = document.querySelector('.cards')
let html = ''

function getRules(rules){
    let li = ""
    rules.forEach((rule)=>{
        li += `<li>${rule}</li>`
    })
    return li
}

function render(event_array){
    event_array.forEach(tech =>{
        var events = document.querySelector("select[name='events']");
        var select = events.value;
        var event_type1 = document.querySelector("select[name='event_type']");
        var select1 = event_type1.value;
        if(tech.event_branch == select && tech.event_type == select1){
            html = `<div class="tech-card">
            <div class="tech-card-image">
            <img src="${tech.image}" alt="">
            </div>
            <div class="tech-card-body">
            <div class="tech-card-heading">
                <h1>${tech.event_name}</h1>
                <h6>${tech.event_type}</h6>
            </div>
            <div class="tech-card-content">
                <p>${tech.desc}</p>
            </div>
            <div class="tech-card-flex">
                <div class="tech-card-info">
                <h6>Branch: ${tech.event_branch}</h6>
                <span>&#8377; ${tech.fees}</span>
                </div>
                <div class="tech-card-action">
                <a class="modal-trigger" href="#modal1">Rules</a>
                <!-- Modal Structure -->
                </div>
            </div>
            <div class="participants">
                <p>Participants allowed: ${tech.participants}</p>
                <p>Time: ${tech.time} </p>
            </div>
            <div class="tech-card-action1">
                <a href="${tech.link}" class="register-btn">Register</a>
            </div>
            </div>
        </div>
        <footer>
          <h1>Organizing Students' Organisation</h1>
          <div class="logos">
            <img src=${tech.logo} alt=""/>
            <div class="info">
                <h1>${tech.event_branch}</h1>
                <h6>Contact Us:</h6>
                <p>${tech.person1}</p>
                <p>${tech.person2}</p>
            </div>
          </div>
        </footer>
      `}
      if(tech.event_branch == select && tech.event_type == select1){
        document.querySelector(".rules-list").innerHTML = getRules(tech.rules)
      }
    })
    cards.innerHTML = html
}

render(technica_events)

function onFilterByBranch(){
    var events = document.querySelector("select[name='events']");
    const select = events.value;

    technica_events = global_obj.filter(glob=>{
        return glob.event_branch === select
    })
    render(technica_events)
}

function onFilterByType(){
    var event_type1 = document.querySelector("select[name='event_type']");
    const select1 = event_type1.value;

    technica_events = global_obj.filter(glob=>{
        return glob.event_type === select1
    })
    render(technica_events)
}




























// {
//     event_name: 'FRIENDS Quiz (Web series)',
//     event_type: 'Non Technical',
//     event_branch: 'EESA',
//     fees: 50,
//     participants: 1,
//     rules: [
//         {
//             rule1: "There will be total 30 questions out of which 10 questions would be in the form of riddle."
//         },
//         {
//             rule2: "All questions will be based on FRIENDS web-series questions and the time for each question will be 10 secs."
//         },
//         {
//             rule3: "At the end of the quiz the winners and the Runner Ups will be announced based on the score seen on the quizziz app."
//         }
//     ],
//     desc: "This Quiz will be conducted on Quizziz App (a MCQ based app). The quiz link and the quiz code will be forwarded to the participants on the day of the event. When the host hostess the quiz, the participants will join the link with the given code and start the quiz. He/she will be entering the name which he/she gave at the time of registration.",
//     image: "",
//     time: ""
// } 



// dept. team
// gpay cha no.
// day1 overall
// day2-3 along with coordinators
// logos
// 
