const affirmations = [
    "You are enough.",
    "Progress, not perfection.",
    "You’re doing better than you think.",
    "Your feelings are valid."
];

$(document).ready(function() {
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    alert(random);

    $('#affirmation-btn').click(function() {
        const newRandom = affirmations[Math.floor(Math.random() * affirmations.length)];
        $('#affirmation-display').hide().text(newRandom).fadeIn(800);
    });
});
