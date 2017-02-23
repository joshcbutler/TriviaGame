$(document).ready(function() {
    $("#game").hide();
});

var questions = [{
    "q": "Who played Count Dooku?",
    "c": ["Max Von Sydow", "Christopher Lee", "George Lucas", "Ian McDiarmid"],
    "answer": 1
}, {
    "q": "What location stood in for the Forest Moon of Endor?",
    "c": ["The Redwood Forests of Northern California", "Monteverde Cloud Forest in Costa Rica", "Daintree Rainforest in Australia", "The Black Forest in Germany"],
    "answer": 1
}, {
    "q": "Who was the only actor ever nominated for an Oscar for his/her work in one of the 'Star Wars' movies?",
    "c": ["Peter Cushing", "Harrison Ford", "Ewan McGregor", "Alex Guinness"],
    "answer": 3
}, {
    "q": "What George Lucas demand did Mel Brooks concede to in making 'Spaceballs'?",
    "c": ["He agreed not to make any 'Spaceballs' toys.", "He agreed to give George Lucas a cameo.", "He agrred to edit out a subplot where Princess Vespa has an ongoing affira with her brother.", "He agreed to roast Steven Spielberg at a charity dinner."],
    "answer": 0
}, {
    "q": "Who plays Chewbacca?",
    "c": ["Kenny Baker", "David Prowse", "Peter Mayhew", "Rick Baker"],
    "answer": 2
}, {
    "q": "What did Luke Skywalker's uncle, Owen, operate on Tatooine?",
    "c": ["A droid repair service", "A speeder repair garage", "A cantina", "A moisture farm"],
    "answer": 3
}, {
    "q": "Who was the puppeteer that voice Yoda?",
    "c": ["Jim Henson", "Stuart Freeborn", "Time Rose", "Frank Oz"],
    "answer": 3
}, {
    "q": "Whose DNA was used in the creation of the Cline Army?",
    "c": ["Count Dooku", "Boba Fett", "Anakin Skywalker", "Jango Fett"],
    "answer": 3
}, {
    "q": "How old was Padme Amidla when she was elected to the position of Queen of Naboo?",
    "c": ["22", "14", "106", "8"],
    "answer": 1
}, {
    "q": "In 'Return of the Jedi,' Luke Skywalker's lightsaber was green. What color was it in the first two movies?",
    "c": ["Red", "Green", "Purple", "Blue"],
    "answer": 3
}];

// on click of start button, hide instructions and start button, and show question page.
$('#startbutton').on('click', function() {
    $(this).hide();
    $("#instructions").hide();
    startGame();
});
// begins the game and starts the timer
function startGame() {
    $("#game").show();
    seconds = 120;
    $("#timer").html('Time Remaining: ' + seconds);
    time = setInterval(showTimer, 1000);
    $("#question").html(questions);
}
function showTimer(){
    seconds--;
    $('#timer').html('Time Remaining: ' + seconds);
    if (seconds < 1){
        clearInterval(time);
        engame();
    }
}
function endGame(){

}


