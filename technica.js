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
            "There will be total 40 questions.",
            "All questions will be technical questions in riddle form and the time for each question will be 10 secs. ",
            "At the end of the quiz the winners and the Runner Ups will be announced based on the score seen on the quizziz app."
        ],
        desc: "The quiz will contain all the technical questions related to the Electronics and Telecommunication Department. The questions will be displayed first and to answer them a time of 10 seconds/question will be given to the participants. Accordingly, there will be 40 questions to answer. The winner will be getting an exciting cash prize and an ecertificate will provided to all the participants.",
        image: "/assets/quiz.jpg",
        time: "21 May, 10:00- 11:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfn2llNFJ2bJi5YLm_zASL3a-ZJ6Joyj6ljjUJAAYstn2idzQ/viewform",
        logo: "/assets/EESA_logo.jpg",
        person1: "Abulfaiz: 8983385403",
        person2: "Abhay: 9156902666",
        teams: [
            "PROF. A.A. BAKARE<br><h6>HOD Computer Dept</h6>",
            "MRS. S.K. PAWAR<br><h6>Staff Co-ordinator</h6></h6>",
            "MRS. V.V. PANGAVE<br><h6>Staff Co-ordinator</h6>",
            "Vijay Gadre<br><h6>President</h6>",
            "Sanika Sashte<br><h6>Vice President</h6>",
            "Shivanjali Nigade<br><h6>Secretary</h6>",
            "Pranita Mohite<br><h6>Asst. Secretary</h6>",
            "Abulfaiz Bangi<br><h6>Event Coordinator</h6>",
            "GAYATRI RELEKAR<br><h6>Event Coordinator</h6>",
            "SUJEETSING MORE<br><h6>Event Coordinator</h6>",
            "ABHAY PATIL<br><h6>Publicity</h6>",
            "PRAJWAL KALSHETTY<br><h6>Publicity</h6>",
            "SHIVAM CHAVAN<br><h6>Photography</h6>",
            "TARUN KOLA<br><h6>Photography</h6>",
        ],
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
        person2: "Vaibhav: 7588115116",
        teams: [
            "Mrs J P Khurpade<br><h6>HOD Computer Dept</h6>",
            "Mr M V Chavan<br><h6>Staff Co-ordinator</h6></h6>",
            "Mr.M.P.Shinde<br><h6>Staff Co-ordinator</h6>",
            "Anuja Ambewadikar<br><h6>President</h6>",
            "Vaibhav Gurap<br><h6>Vice President</h6>",
            "Abhimanyu Umrani<br><h6>Secretary</h6>",
            "Rudra Chopde<br><h6>Asst. Secretary</h6>",
            "Harshvardhan Mulay<br><h6>Asst. Secretary</h6>",
            "Jinesha Sharma<br><h6>Treasurer</h6>",
            "Madhura Borkar<br><h6>Asst. Treasurer</h6>",
            "Rupali Patra<br><h6>Technical Event Coordinator</h6>",
            "Riya Shinde<br><h6>Asst. Technical Event Coordinator</h6>",
            "Eshan Sanap<br><h6>Non-Technical Event Coordinator</h6>",
            "Bhagyaudai Singh<br><h6>Asst. Non tech Event co-ordinator</h6>",
            "Rohan Aware<br><h6>Publicity Coordinator</h6>",
            "Aayush Kulkarni<br><h6>Asst. Publicity Coordinator</h6>",
            "Ishan Gawali<br><h6>Graphics Head</h6>",
            "Arya Jawale<br><h6>Asst. Graphics Co-ordinator</h6>",
            "Ishan Gawali<br><h6>Web Co-ordinator</h6>",
            "Isha Saswade<br><h6>Co-editor</h6>",
        ],
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
        person2: "Shivani: 7262855284",
        teams: [
            "Prof. M. P. Fatangare<br><h6>HOD Computer Dept</h6>",
            "Prof. Y. J. Gaikwad<br><h6>Staff Co-ordinator</h6></h6>",
            "Prof. V. C. Rathod<br><h6>Staff Co-ordinator</h6>",
            "Raj Trivedi<br><h6>President</h6>",
            "Shivani Patil<br><h6>Vice President</h6>",
            "Debashri Basu<br><h6>Secretary</h6>",
            "Vashnavi Shinde<br><h6>Asst. Secretary</h6>",
            "Arkam Tola<br><h6>Technical Head</h6>",
            "Pranav Gaikwad<br><h6>Media Co – Ordinator</h6>",
            "Aniket Rajkuntwar<br><h6>Media Co – Ordinator</h6>",
            "Ati Sai Kartik<br><h6>Graphics Designer</h6>",
            "Rutwik Kamble<br><h6>Asst. Graphics Designer</h6>",
            "Atharva Kulkarni<br><h6>Treasurer</h6>",
            "Yash Kataria<br><h6>Asst. Treasurer</h6>",
            "Sakshi Lodha<br><h6>Asst. Treasurer</h6>",
            "Sakshi Bhor<br><h6>Event Coordinator</h6>",
            "Shivani Sarode<br><h6>Event Coordinator</h6>",
            "Dhanuja Sagade<br><h6>Asst. Event Coordinator</h6>",
            "Sushil Pathare<br><h6>Asst. Event Coordinator</h6>",
            "Deepak Shivatre<br><h6>Publicity Coordinator</h6>",
            "Assad Mujawar<br><h6>Publicity Coordinator</h6>",
            "Aishwarya Farande<br><h6>Asst. Publicity Coordinator</h6>",
            "Vedant Shinde<br><h6>Asst. Publicity Coordinator</h6>",
            "Suresh Samdade<br><h6>Asst. Publicity Coordinator</h6>",
            "Kishor Wanave<br><h6>Photographer</h6>",
            "Youser Shaikh<br><h6>Photographer</h6>",
        ],
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
            "Competition will be monitored online on Webex platform.",
            "During competition hours participants need to keep their mobile/laptop camera ON",
            "Sketch of the part for programming  will be displayed on Webex platform during meeting."
        ],
        desc: "All registered students need to join the following whatapps group",
        image: "/assets/cncprog.webp",
        time: "21 May, 10:00- 11:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfXMBNKE8JZsX6rzaItoO9JG-R7peC2TZ32W-A3Nr_CGPDcTA/viewform",
        logo: "/assets/MESA_LOGO.jpeg",
        person1: "Parth: 8378836511",
        person2: "Shyam: 8600138609",
        teams: [
            "Prof Dr N K Patil<br><h6>HOD Computer Dept</h6>",
            "Prof Vaibhav Rangari<br><h6>Staff Co-ordinator</h6></h6>",
            "Prof Mrs Jyoti Avhad<br><h6>Staff Co-ordinator</h6>",
            "Parth Ghube<br><h6>President</h6>",
            "Rahan Kharadkar<br><h6>Vice President</h6>",
            "Sakshi Agarwal<br><h6>Ladies Representative</h6>",
            "Suraj Poman<br><h6>Graphics Head</h6>",
            "Yash Bora<br><h6>Event Co ordinator</h6>",
            "Shyam Chhaparwal<br><h6>Member</h6>",
            "Saurabh Dharmadhikari<br><h6>Member</h6>",
            "Kundan Pednekar<br><h6>Member</h6>",
            "Sayali Wagh<br><h6>Member</h6>",
            "Ruturaj Sonawane<br><h6>Member</h6>",
            "Aarya Paradkar<br><h6>Member</h6>",
            "Rutvij Valega<br><h6>Member</h6>",
            "Sakshi Kambale<br><h6>Asst. Member</h6>",
        ],
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
        person2: "Shravni: 9545246841",
        teams: [
            "Prof. Mrs. Kavita Bavdekar<br><h6>HOD Computer Dept</h6>",
            "Prof. Mrs. Shweta Kashid<br><h6>Staff Co-ordinator</h6></h6>",
            "Prof. Mr. Sagar Sonawane<br><h6>Staff Co-ordinator</h6></h6>",
            "Shivam Chavan<br><h6>President</h6>",
            "Shravani Mathwad<br><h6>Vice President</h6>",
            "Ayush Rajput<br><h6>Secretary</h6>",
            "Pranjal Bhujbal<br><h6>Asst. Secretary</h6>",
            "Aditya Renuse<br><h6>Asst. Secretary</h6>",
            "Jainam Shah<br><h6>Treasurer</h6>",
            "Tanuj Hadikar<br><h6>Publicity Incharge</h6>",
            "Kartik Shah<br><h6>Publicity Incharge</h6>",
            "Vishesh Anagadi<br><h6>Graphic Designer</h6>",
            "Apoorva Rathod<br><h6>Ladies Representative</h6>",
            "Ajinkya Gore<br><h6>Class Representative</h6>",
            "Siddhant Deshmukh<br><h6>Class Representative</h6>",
            "Yukta Tanksale<br><h6>Class Representative</h6>",
            "Shubham Pawar<br><h6>Photographer</h6>",
            "Shubham Khedekar<br><h6>Photographer</h6>"
        ],
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
        person2: "Abhay: 9156902666",
        teams: [
            "PROF. A.A. BAKARE<br><h6>HOD Computer Dept</h6>",
            "MRS. S.K. PAWAR<br><h6>Staff Co-ordinator</h6></h6>",
            "MRS. V.V. PANGAVE<br><h6>Staff Co-ordinator</h6>",
            "Vijay Gadre<br><h6>President</h6>",
            "Sanika Sashte<br><h6>Vice President</h6>",
            "Shivanjali Nigade<br><h6>Secretary</h6>",
            "Pranita Mohite<br><h6>Asst. Secretary</h6>",
            "Abulfaiz Bangi<br><h6>Event Coordinator</h6>",
            "GAYATRI RELEKAR<br><h6>Event Coordinator</h6>",
            "SUJEETSING MORE<br><h6>Event Coordinator</h6>",
            "ABHAY PATIL<br><h6>Publicity</h6>",
            "PRAJWAL KALSHETTY<br><h6>Publicity</h6>",
            "SHIVAM CHAVAN<br><h6>Photography</h6>",
            "TARUN KOLA<br><h6>Photography</h6>",
        ],
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
        person2: "Shivani: 7262855284",
        teams: [
            "Prof. M. P. Fatangare<br><h6>HOD Computer Dept</h6>",
            "Prof. Y. J. Gaikwad<br><h6>Staff Co-ordinator</h6></h6>",
            "Prof. V. C. Rathod<br><h6>Staff Co-ordinator</h6>",
            "Raj Trivedi<br><h6>President</h6>",
            "Shivani Patil<br><h6>Vice President</h6>",
            "Debashri Basu<br><h6>Secretary</h6>",
            "Vashnavi Shinde<br><h6>Asst. Secretary</h6>",
            "Arkam Tola<br><h6>Technical Head</h6>",
            "Pranav Gaikwad<br><h6>Media Co – Ordinator</h6>",
            "Aniket Rajkuntwar<br><h6>Media Co – Ordinator</h6>",
            "Ati Sai Kartik<br><h6>Graphics Designer</h6>",
            "Rutwik Kamble<br><h6>Asst. Graphics Designer</h6>",
            "Atharva Kulkarni<br><h6>Treasurer</h6>",
            "Yash Kataria<br><h6>Asst. Treasurer</h6>",
            "Sakshi Lodha<br><h6>Asst. Treasurer</h6>",
            "Sakshi Bhor<br><h6>Event Coordinator</h6>",
            "Shivani Sarode<br><h6>Event Coordinator</h6>",
            "Dhanuja Sagade<br><h6>Asst. Event Coordinator</h6>",
            "Sushil Pathare<br><h6>Asst. Event Coordinator</h6>",
            "Deepak Shivatre<br><h6>Publicity Coordinator</h6>",
            "Assad Mujawar<br><h6>Publicity Coordinator</h6>",
            "Aishwarya Farande<br><h6>Asst. Publicity Coordinator</h6>",
            "Vedant Shinde<br><h6>Asst. Publicity Coordinator</h6>",
            "Suresh Samdade<br><h6>Asst. Publicity Coordinator</h6>",
            "Kishor Wanave<br><h6>Photographer</h6>",
            "Youser Shaikh<br><h6>Photographer</h6>",
        ],
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
        desc: "COVID Awareness. Competition will be monitored online on Webex platform. During competition hours participants need to keep their mobile/laptop camera ON. All registered students need to join the following whatsapp group",
        image: "/assets/postermaking.webp",
        time: "21 May, 12:30- 02:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfXMBNKE8JZsX6rzaItoO9JG-R7peC2TZ32W-A3Nr_CGPDcTA/viewform",
        logo: "/assets/MESA_LOGO.jpeg",
        person1: "Parth: 8378836511",
        person2: "Shyam: 8600138609",
        teams: [
            "Prof Dr N K Patil<br><h6>HOD Computer Dept</h6>",
            "Prof Vaibhav Rangari<br><h6>Staff Co-ordinator</h6></h6>",
            "Prof Mrs Jyoti Avhad <br><h6>Staff Co-ordinator</h6>",
            "Parth Ghube<br><h6>President</h6>",
            "Rahan Kharadkar<br><h6>Vice President</h6>",
            "Sakshi Agarwal<br><h6>Ladies Representative</h6>",
            "Suraj Poman<br><h6>Graphics Head</h6>",
            "Yash Bora<br><h6>Event Co ordinator</h6>",
            "Shyam Chhaparwal<br><h6>Member</h6>",
            "Saurabh Dharmadhikari<br><h6>Member</h6>",
            "Kundan Pednekar<br><h6>Member</h6>",
            "Sayali Wagh<br><h6>Member</h6>",
            "Ruturaj Sonawane<br><h6>Member</h6>",
            "Aarya Paradkar<br><h6>Member</h6>",
            "Rutvij Valega<br><h6>Member</h6>",
            "Sakshi Kambale<br><h6>Asst. Member</h6>",
        ],
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
        person2: "Shravni: 9545246841",
        teams: [
            "Prof. Mrs. Kavita Bavdekar<br><h6>HOD Computer Dept</h6>",
            "Mrs. Shweta Kashid<br><h6>Staff Co-ordinator</h6></h6>",
            "Prof. Mr. Sagar Sonawane<br><h6>Staff Co-ordinator</h6></h6>",
            "Shivam Chavan<br><h6>President</h6>",
            "Shravani Mathwad<br><h6>Vice President</h6>",
            "Ayush Rajput<br><h6>Secretary</h6>",
            "Pranjal Bhujbal<br><h6>Asst. Secretary</h6>",
            "Aditya Renuse<br><h6>Asst. Secretary</h6>",
            "Jainam Shah<br><h6>Treasurer</h6>",
            "Tanuj Hadikar<br><h6>Publicity Incharge</h6>",
            "Kartik Shah<br><h6>Publicity Incharge</h6>",
            "Vishesh Anagadi<br><h6>Graphic Designer</h6>",
            "Apoorva Rathod<br><h6>Ladies Representative</h6>",
            "Ajinkya Gore<br><h6>Class Representative</h6>",
            "Siddhant Deshmukh<br><h6>Class Representative</h6>",
            "Yukta Tanksale<br><h6>Class Representative</h6>",
            "Shubham Pawar<br><h6>Photographer</h6>",
            "Shubham Khedekar<br><h6>Photographer</h6>"
        ],
    },
    {
        event_name: 'Web-Series Trivia',
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
        person2: "Vaibhav: 7588115116",
        teams: [
            "Mrs J P Khurpade<br><h6>HOD Computer Dept</h6>",
            "Mr M V Chavan<br><h6>Staff Co-ordinator</h6></h6>",
            "Mr.M.P.Shinde<br><h6>Staff Co-ordinator</h6>",
            "Anuja Ambewadikar<br><h6>President</h6>",
            "Vaibhav Gurap<br><h6>Vice President</h6>",
            "Abhimanyu Umrani<br><h6>Secretary</h6>",
            "Rudra Chopde<br><h6>Asst. Secretary</h6>",
            "Harshvardhan Mulay<br><h6>Asst. Secretary</h6>",
            "Jinesha Sharma<br><h6>Treasurer</h6>",
            "Madhura Borkar<br><h6>Asst. Treasurer</h6>",
            "Rupali Patra<br><h6>Technical Event Coordinator</h6>",
            "Riya Shinde<br><h6>Asst. Technical Event Coordinator</h6>",
            "Eshan Sanap<br><h6>Non-Technical Event Coordinator</h6>",
            "Bhagyaudai Singh<br><h6>Asst. Non tech Event co-ordinator</h6>",
            "Rohan Aware<br><h6>Publicity Coordinator</h6>",
            "Aayush Kulkarni<br><h6>Asst. Publicity Coordinator</h6>",
            "Ishan Gawali<br><h6>Graphics Head</h6>",
            "Arya Jawale<br><h6>Asst. Graphics Co-ordinator</h6>",
            "Ishan Gawali<br><h6>Web Co-ordinator</h6>",
            "Isha Saswade<br><h6>Co-editor</h6>",
        ],
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
            "There will be total 40 questions.",
            "All questions will be technical questions in riddle form and the time for each question will be 10 secs. ",
            "At the end of the quiz the winners and the Runner Ups will be announced based on the score seen on the quizziz app."
        ],
        desc: "The quiz will contain all the technical questions related to the Electronics and Telecommunication Department. The questions will be displayed first and to answer them a time of 10 seconds/question will be given to the participants. Accordingly, there will be 40 questions to answer. The winner will be getting an exciting cash prize and an ecertificate will provided to all the participants.",
        image: "/assets/quiz.jpg",
        time: "21 May, 10:00- 11:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfn2llNFJ2bJi5YLm_zASL3a-ZJ6Joyj6ljjUJAAYstn2idzQ/viewform",
        logo: "/assets/EESA_logo.jpg",
        person1: "Abulfaiz: 8983385403",
        person2: "Abhay: 9156902666",
        teams: [
            "PROF. A.A. BAKARE<br><h6>HOD Computer Dept</h6>",
            "MRS. S.K. PAWAR<br><h6>Staff Co-ordinator</h6></h6>",
            "MRS. V.V. PANGAVE<br><h6>Staff Co-ordinator</h6>",
            "Vijay Gadre<br><h6>President</h6>",
            "Sanika Sashte<br><h6>Vice President</h6>",
            "Shivanjali Nigade<br><h6>Secretary</h6>",
            "Pranita Mohite<br><h6>Asst. Secretary</h6>",
            "Abulfaiz Bangi<br><h6>Event Coordinator</h6>",
            "GAYATRI RELEKAR<br><h6>Event Coordinator</h6>",
            "SUJEETSING MORE<br><h6>Event Coordinator</h6>",
            "ABHAY PATIL<br><h6>Publicity</h6>",
            "PRAJWAL KALSHETTY<br><h6>Publicity</h6>",
            "SHIVAM CHAVAN<br><h6>Photography</h6>",
            "TARUN KOLA<br><h6>Photography</h6>",
        ],
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
        person2: "Vaibhav: 7588115116",
        teams: [
            "Mrs J P Khurpade<br><h6>HOD Computer Dept</h6>",
            "Mr M V Chavan<br><h6>Staff Co-ordinator</h6></h6>",
            "Mr.M.P.Shinde<br><h6>Staff Co-ordinator</h6>",
            "Anuja Ambewadikar<br><h6>President</h6>",
            "Vaibhav Gurap<br><h6>Vice President</h6>",
            "Abhimanyu Umrani<br><h6>Secretary</h6>",
            "Rudra Chopde<br><h6>Asst. Secretary</h6>",
            "Harshvardhan Mulay<br><h6>Asst. Secretary</h6>",
            "Jinesha Sharma<br><h6>Treasurer</h6>",
            "Madhura Borkar<br><h6>Asst. Treasurer</h6>",
            "Rupali Patra<br><h6>Technical Event Coordinator</h6>",
            "Riya Shinde<br><h6>Asst. Technical Event Coordinator</h6>",
            "Eshan Sanap<br><h6>Non-Technical Event Coordinator</h6>",
            "Bhagyaudai Singh<br><h6>Asst. Non tech Event co-ordinator</h6>",
            "Rohan Aware<br><h6>Publicity Coordinator</h6>",
            "Aayush Kulkarni<br><h6>Asst. Publicity Coordinator</h6>",
            "Ishan Gawali<br><h6>Graphics Head</h6>",
            "Arya Jawale<br><h6>Asst. Graphics Co-ordinator</h6>",
            "Ishan Gawali<br><h6>Web Co-ordinator</h6>",
            "Isha Saswade<br><h6>Co-editor</h6>",
        ],
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
        person2: "Shivani: 7262855284",
        teams: [
            "Prof. M. P. Fatangare<br><h6>HOD Computer Dept</h6>",
            "Prof. Y. J. Gaikwad<br><h6>Staff Co-ordinator</h6></h6>",
            "Prof. V. C. Rathod<br><h6>Staff Co-ordinator</h6>",
            "Raj Trivedi<br><h6>President</h6>",
            "Shivani Patil<br><h6>Vice President</h6>",
            "Debashri Basu<br><h6>Secretary</h6>",
            "Vashnavi Shinde<br><h6>Asst. Secretary</h6>",
            "Arkam Tola<br><h6>Technical Head</h6>",
            "Pranav Gaikwad<br><h6>Media Co – Ordinator</h6>",
            "Aniket Rajkuntwar<br><h6>Media Co – Ordinator</h6>",
            "Ati Sai Kartik<br><h6>Graphics Designer</h6>",
            "Rutwik Kamble<br><h6>Asst. Graphics Designer</h6>",
            "Atharva Kulkarni<br><h6>Treasurer</h6>",
            "Yash Kataria<br><h6>Asst. Treasurer</h6>",
            "Sakshi Lodha<br><h6>Asst. Treasurer</h6>",
            "Sakshi Bhor<br><h6>Event Coordinator</h6>",
            "Shivani Sarode<br><h6>Event Coordinator</h6>",
            "Dhanuja Sagade<br><h6>Asst. Event Coordinator</h6>",
            "Sushil Pathare<br><h6>Asst. Event Coordinator</h6>",
            "Deepak Shivatre<br><h6>Publicity Coordinator</h6>",
            "Assad Mujawar<br><h6>Publicity Coordinator</h6>",
            "Aishwarya Farande<br><h6>Asst. Publicity Coordinator</h6>",
            "Vedant Shinde<br><h6>Asst. Publicity Coordinator</h6>",
            "Suresh Samdade<br><h6>Asst. Publicity Coordinator</h6>",
            "Kishor Wanave<br><h6>Photographer</h6>",
            "Youser Shaikh<br><h6>Photographer</h6>",
        ],
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
            "Competition will be monitored online on Webex platform.",
            "During competition hours participants need to keep their mobile/laptop camera ON",
            "Sketch of the part for programming  will be displayed on Webex platform during meeting."
        ],
        desc: "All registered students need to join the following whatapps group",
        image: "/assets/cncprog.webp",
        time: "21 May, 10:00- 11:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfXMBNKE8JZsX6rzaItoO9JG-R7peC2TZ32W-A3Nr_CGPDcTA/viewform",
        logo: "/assets/MESA_LOGO.jpeg",
        person1: "Parth: 8378836511",
        person2: "Shyam: 8600138609",
        teams: [
            "Prof Dr N K Patil<br><h6>HOD Computer Dept</h6>",
            "Prof Vaibhav Rangari<br><h6>Staff Co-ordinator</h6></h6>",
            "Prof Mrs Jyoti Avhad<br><h6>Staff Co-ordinator</h6>",
            "Parth Ghube<br><h6>President</h6>",
            "Rahan Kharadkar<br><h6>Vice President</h6>",
            "Sakshi Agarwal<br><h6>Ladies Representative</h6>",
            "Suraj Poman<br><h6>Graphics Head</h6>",
            "Yash Bora<br><h6>Event Co ordinator</h6>",
            "Shyam Chhaparwal<br><h6>Member</h6>",
            "Saurabh Dharmadhikari<br><h6>Member</h6>",
            "Kundan Pednekar<br><h6>Member</h6>",
            "Sayali Wagh<br><h6>Member</h6>",
            "Ruturaj Sonawane<br><h6>Member</h6>",
            "Aarya Paradkar<br><h6>Member</h6>",
            "Rutvij Valega<br><h6>Member</h6>",
            "Sakshi Kambale<br><h6>Asst. Member</h6>",
        ],
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
        person2: "Shravni: 9545246841",
        teams: [
            "Prof. Mrs. Kavita Bavdekar<br><h6>HOD Computer Dept</h6>",
            "Prof. Mrs. Shweta Kashid<br><h6>Staff Co-ordinator</h6></h6>",
            "Prof. Mr. Sagar Sonawane<br><h6>Staff Co-ordinator</h6></h6>",
            "Shivam Chavan<br><h6>President</h6>",
            "Shravani Mathwad<br><h6>Vice President</h6>",
            "Ayush Rajput<br><h6>Secretary</h6>",
            "Pranjal Bhujbal<br><h6>Asst. Secretary</h6>",
            "Aditya Renuse<br><h6>Asst. Secretary</h6>",
            "Jainam Shah<br><h6>Treasurer</h6>",
            "Tanuj Hadikar<br><h6>Publicity Incharge</h6>",
            "Kartik Shah<br><h6>Publicity Incharge</h6>",
            "Vishesh Anagadi<br><h6>Graphic Designer</h6>",
            "Apoorva Rathod<br><h6>Ladies Representative</h6>",
            "Ajinkya Gore<br><h6>Class Representative</h6>",
            "Siddhant Deshmukh<br><h6>Class Representative</h6>",
            "Yukta Tanksale<br><h6>Class Representative</h6>",
            "Shubham Pawar<br><h6>Photographer</h6>",
            "Shubham Khedekar<br><h6>Photographer</h6>"
        ],
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
        person2: "Abhay: 9156902666",
        teams: [
            "PROF. A.A. BAKARE<br><h6>HOD Computer Dept</h6>",
            "MRS. S.K. PAWAR<br><h6>Staff Co-ordinator</h6></h6>",
            "MRS. V.V. PANGAVE<br><h6>Staff Co-ordinator</h6>",
            "Vijay Gadre<br><h6>President</h6>",
            "Sanika Sashte<br><h6>Vice President</h6>",
            "Shivanjali Nigade<br><h6>Secretary</h6>",
            "Pranita Mohite<br><h6>Asst. Secretary</h6>",
            "Abulfaiz Bangi<br><h6>Event Coordinator</h6>",
            "GAYATRI RELEKAR<br><h6>Event Coordinator</h6>",
            "SUJEETSING MORE<br><h6>Event Coordinator</h6>",
            "ABHAY PATIL<br><h6>Publicity</h6>",
            "PRAJWAL KALSHETTY<br><h6>Publicity</h6>",
            "SHIVAM CHAVAN<br><h6>Photography</h6>",
            "TARUN KOLA<br><h6>Photography</h6>",
        ],
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
        person2: "Shivani: 7262855284",
        teams: [
            "Prof. M. P. Fatangare<br><h6>HOD Computer Dept</h6>",
            "Prof. Y. J. Gaikwad<br><h6>Staff Co-ordinator</h6></h6>",
            "Prof. V. C. Rathod<br><h6>Staff Co-ordinator</h6>",
            "Raj Trivedi<br><h6>President</h6>",
            "Shivani Patil<br><h6>Vice President</h6>",
            "Debashri Basu<br><h6>Secretary</h6>",
            "Vashnavi Shinde<br><h6>Asst. Secretary</h6>",
            "Arkam Tola<br><h6>Technical Head</h6>",
            "Pranav Gaikwad<br><h6>Media Co – Ordinator</h6>",
            "Aniket Rajkuntwar<br><h6>Media Co – Ordinator</h6>",
            "Ati Sai Kartik<br><h6>Graphics Designer</h6>",
            "Rutwik Kamble<br><h6>Asst. Graphics Designer</h6>",
            "Atharva Kulkarni<br><h6>Treasurer</h6>",
            "Yash Kataria<br><h6>Asst. Treasurer</h6>",
            "Sakshi Lodha<br><h6>Asst. Treasurer</h6>",
            "Sakshi Bhor<br><h6>Event Coordinator</h6>",
            "Shivani Sarode<br><h6>Event Coordinator</h6>",
            "Dhanuja Sagade<br><h6>Asst. Event Coordinator</h6>",
            "Sushil Pathare<br><h6>Asst. Event Coordinator</h6>",
            "Deepak Shivatre<br><h6>Publicity Coordinator</h6>",
            "Assad Mujawar<br><h6>Publicity Coordinator</h6>",
            "Aishwarya Farande<br><h6>Asst. Publicity Coordinator</h6>",
            "Vedant Shinde<br><h6>Asst. Publicity Coordinator</h6>",
            "Suresh Samdade<br><h6>Asst. Publicity Coordinator</h6>",
            "Kishor Wanave<br><h6>Photographer</h6>",
            "Youser Shaikh<br><h6>Photographer</h6>",
        ],
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
        desc: "COVID Awareness. Competition will be monitored online on Webex platform. During competition hours participants need to keep their mobile/laptop camera ON. All registered students need to join the following whatsapp group",
        image: "/assets/postermaking.webp",
        time: "21 May, 12:30- 02:00",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfXMBNKE8JZsX6rzaItoO9JG-R7peC2TZ32W-A3Nr_CGPDcTA/viewform",
        logo: "/assets/MESA_LOGO.jpeg",
        person1: "Parth: 8378836511",
        person2: "Shyam: 8600138609",
        teams: [
            "Prof Dr N K Patil<br><h6>HOD Computer Dept</h6>",
            "Prof Vaibhav Rangari<br><h6>Staff Co-ordinator</h6></h6>",
            "Prof Mrs Jyoti Avhad <br><h6>Staff Co-ordinator</h6>",
            "Parth Ghube<br><h6>President</h6>",
            "Rahan Kharadkar<br><h6>Vice President</h6>",
            "Sakshi Agarwal<br><h6>Ladies Representative</h6>",
            "Suraj Poman<br><h6>Graphics Head</h6>",
            "Yash Bora<br><h6>Event Co ordinator</h6>",
            "Shyam Chhaparwal<br><h6>Member</h6>",
            "Saurabh Dharmadhikari<br><h6>Member</h6>",
            "Kundan Pednekar<br><h6>Member</h6>",
            "Sayali Wagh<br><h6>Member</h6>",
            "Ruturaj Sonawane<br><h6>Member</h6>",
            "Aarya Paradkar<br><h6>Member</h6>",
            "Rutvij Valega<br><h6>Member</h6>",
            "Sakshi Kambale<br><h6>Asst. Member</h6>",
        ],
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
        person2: "Shravni: 9545246841",
        teams: [
            "Prof. Mrs. Kavita Bavdekar<br><h6>HOD Computer Dept</h6>",
            "Mrs. Shweta Kashid<br><h6>Staff Co-ordinator</h6></h6>",
            "Prof. Mr. Sagar Sonawane<br><h6>Staff Co-ordinator</h6></h6>",
            "Shivam Chavan<br><h6>President</h6>",
            "Shravani Mathwad<br><h6>Vice President</h6>",
            "Ayush Rajput<br><h6>Secretary</h6>",
            "Pranjal Bhujbal<br><h6>Asst. Secretary</h6>",
            "Aditya Renuse<br><h6>Asst. Secretary</h6>",
            "Jainam Shah<br><h6>Treasurer</h6>",
            "Tanuj Hadikar<br><h6>Publicity Incharge</h6>",
            "Kartik Shah<br><h6>Publicity Incharge</h6>",
            "Vishesh Anagadi<br><h6>Graphic Designer</h6>",
            "Apoorva Rathod<br><h6>Ladies Representative</h6>",
            "Ajinkya Gore<br><h6>Class Representative</h6>",
            "Siddhant Deshmukh<br><h6>Class Representative</h6>",
            "Yukta Tanksale<br><h6>Class Representative</h6>",
            "Shubham Pawar<br><h6>Photographer</h6>",
            "Shubham Khedekar<br><h6>Photographer</h6>"
        ],
    },
    {
        event_name: 'Web-Series Trivia',
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
        person2: "Vaibhav: 7588115116",
        teams: [
            "Mrs J P Khurpade<br><h6>HOD Computer Dept</h6>",
            "Mr M V Chavan<br><h6>Staff Co-ordinator</h6></h6>",
            "Mr.M.P.Shinde<br><h6>Staff Co-ordinator</h6>",
            "Anuja Ambewadikar<br><h6>President</h6>",
            "Vaibhav Gurap<br><h6>Vice President</h6>",
            "Abhimanyu Umrani<br><h6>Secretary</h6>",
            "Rudra Chopde<br><h6>Asst. Secretary</h6>",
            "Harshvardhan Mulay<br><h6>Asst. Secretary</h6>",
            "Jinesha Sharma<br><h6>Treasurer</h6>",
            "Madhura Borkar<br><h6>Asst. Treasurer</h6>",
            "Rupali Patra<br><h6>Technical Event Coordinator</h6>",
            "Riya Shinde<br><h6>Asst. Technical Event Coordinator</h6>",
            "Eshan Sanap<br><h6>Non-Technical Event Coordinator</h6>",
            "Bhagyaudai Singh<br><h6>Asst. Non tech Event co-ordinator</h6>",
            "Rohan Aware<br><h6>Publicity Coordinator</h6>",
            "Aayush Kulkarni<br><h6>Asst. Publicity Coordinator</h6>",
            "Ishan Gawali<br><h6>Graphics Head</h6>",
            "Arya Jawale<br><h6>Asst. Graphics Co-ordinator</h6>",
            "Ishan Gawali<br><h6>Web Co-ordinator</h6>",
            "Isha Saswade<br><h6>Co-editor</h6>",
        ],
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

function getTeams(teams){
    let card = ""
    teams.forEach((team)=>{
        card += `
        <div class="first">
            <h3>${team}</h3>
        </div>`
    })
    return card
}

// function getPosts(posts){
//     let desig = ""
//     posts.forEach(post=>{
//         desig += `<h6 class="p_post">${post}</h6>`
//     })
//     return desig
// }

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
        <div class="teams">
          <h1>Our Team</h1>
          <div class="team-grid">
            ${getTeams(tech.teams)}
          </div>
        </div>

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
