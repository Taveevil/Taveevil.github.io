var coins = 0;
var clickAmount = 1;
var coinsPerSecond = 0;

// function to increase coins when button is clicked.
// also checks if bonus is active (TRUE/FALSE)
// As well has the plusOne & randomizeChris functions attached to it
function increaseCoins() {
    if (bonusRunning == true) {
        coins += bonusClickAmount;
        document.getElementById("score").innerHTML = coins.toFixed(0);
        shrink();
        randomizeChris();
        pointsAnimation();
    } else {
        coins += clickAmount;
        document.getElementById("score").innerHTML = coins.toFixed(0);
        shrink();
        randomizeChris();
        pointsAnimation();
    }
}

// the +POINT animation plays while clicking the button.
// this function here
// the if/else is just checking if the bonus is active. if true, adds the correct point amount and plays correct animation
function pointsAnimation() {
    if (bonusRunning == true) {
        const button = document.querySelector('#chrisButton');
        button.addEventListener('click', function handleClick() {
            const span = document.createElement('span');
            var plusOne = document.querySelector('#chrisButton');
            span.innerHTML = '+' + Math.floor(bonusClickAmount) + '';
            span.classList.add('plus-one');
            plusOne.appendChild(span);

            setTimeout(() => {
                button.removeEventListener('click', handleClick)
                span.classList.remove('plus-one');
                button.removeChild(span);
            }, 500);
        });
    } else {
        const button = document.querySelector('#chrisButton');
        // has an even listener for a click on the '#chrisButton' to run the function 'handleClick'
        button.addEventListener('click', function handleClick() { // creates a 'span' element
            const span = document.createElement('span');
            var plusOne = document.querySelector('#chrisButton');
            span.innerHTML = '+' + Math.floor(clickAmount) + '';
            span.classList.add('plus-one');
            plusOne.appendChild(span);

            setTimeout(() => {
                // removes the eventListener applied to the button var above.
                // so that it the code within the eventListener isnt called multiple times.
                button.removeEventListener('click', handleClick)
                span.classList.remove('plus-one');
                button.removeChild(span);
            }, 500);
        });
    }
}


var chris = document.querySelector(".chris");
var chrisType = ["pointon", "chuckry", "brower"];
var oldChris = 0;
var clicked = 0;
var afk_timer = 0.1 * 60;

/*----- AFK CHECK -----*/

var afk_check = setInterval(function () {
    if (clicked > 0) {
        -- clicked;
    } else if (clicked <= 0) {
        afk_check = true;
        afk();
    }
}, 1000 * afk_timer);

function afk() {
    if (afk_check === false) {
        document.getElementById('bubble').classList.remove('afk');
        document.getElementById('bubble').classList.add('not-afk');
    } else if (afk_check === true) {
        document.getElementById('bubble').classList.remove('not-afk');
        document.getElementById('bubble').classList.add('afk');
    }
}

/*----- CHRIS BUTTON -----*/

// This function switches between the various Chris'
function randomizeChris() { // the size of the chris array
    var size = chrisType.length;
    // selects a random entry of the array (math.floor rounds the number down the decimal)
    var chrisIndex = Math.floor(size * Math.random());

    // if oldChris and chrisIndex are the same value we run the randomized again
    if (oldChris === chrisIndex) { // as long as the condition is still met we run a loop until it's different
        while (oldChris == chrisIndex) {
            chrisIndex = Math.floor(size * Math.random());
        }
    }
    // if we find an unused Chris we replace the Old chris with the new one
    oldChris = chrisIndex;
    // and change the id(the photo) of the button
    chris.id = chrisType[chrisIndex];
    clicked = 2;
    afk_check = false;
    afk();
}

function shrink() { // shrink Chris whenever the play presses or holds down mouseclick over the head
    chris.classList.remove("grow");
    chris.classList.add("shrink");
}

document.addEventListener("mouseup", function () { // whenever the player lets go of mouse button
    chris.classList.remove("shrink"); // remove the shrink animation and play the grow animation
    chris.classList.add("grow");
});

/*----- UPGRADES -----*/

var upgrade1 = document.getElementById("upgrade1");
var upgrade2 = document.getElementById("upgrade2");
var upgrade3 = document.getElementById("upgrade3");

// UPGRADE #1 - increases points per click

var upgradeCostOne = 10;

function upgradeOne() {
    if (coins >= upgradeCostOne) {
        document.getElementById("score").innerHTML = Math.floor(coins - upgradeCostOne);

        const scorePosition = document.querySelector('#purchaseSub');

        const scoreSpan = document.createElement('span');

        scoreSpan.innerHTML = '-' + upgradeCostOne + '';
        scoreSpan.classList.add('score-subtraction');
        scorePosition.appendChild(scoreSpan);

        setTimeout(() => {

            scoreSpan.classList.remove('score-subtraction');
            scorePosition.removeChild(scoreSpan);
        }, 1000);

        // subtracts points from score for purchase
        coins = Math.floor(coins - upgradeCostOne);
        // increases the upgrade cost
        upgradeCostOne += 10;
        // increases the points per click
        clickAmount += 1;

        // adjusts the button htmls to reflect 
        upgrade1.querySelector(".cost").innerHTML = "Cost: " + upgradeCostOne;
        upgrade1.querySelector(".spec").innerHTML = "Coins per click: " + clickAmount;

    } else {

        return;

    }
}

//calculates coins/sec to add with upgrade
setInterval(function () {
    coins = coins + coinsPerSecond;
    score.innerHTML = Math.floor(coins);
  }, 1000);


  // UPGRADE #2 - INCREASE COINS PER SECOND
var upgradeCostTwo = 10;

function upgradeTwo() {
    if (coins >= upgradeCostTwo) {

        document.getElementById("score").innerHTML = Math.floor(coins - upgradeCostTwo);
        const scorePosition = document.querySelector('#purchaseSub');
        const scoreSpan = document.createElement('span');

        scoreSpan.innerHTML = '-' + upgradeCostTwo + '';
        scoreSpan.classList.add('score-subtraction');
        scorePosition.appendChild(scoreSpan);

        setTimeout(() => {
            scoreSpan.classList.remove('score-subtraction');
            scorePosition.removeChild(scoreSpan);
        }, 1000);

        coins = Math.floor(coins - upgradeCostTwo);
        upgradeCostTwo += 10;
        coinsPerSecond += 0.2;

        document.getElementById("upgrade2").querySelector(".cost").innerHTML = "<div>Cost: " + upgradeCostTwo;
        document.getElementById("upgrade2").querySelector(".spec").innerHTML = "Coins earned per sec: " + coinsPerSecond.toFixed(1);
        document.getElementById("coinspersec").innerHTML = "Coins Per Second: " + coinsPerSecond.toFixed(1) + "";
    } else {
        return;
    }
}

// UPGRADE 3 - INCREASES BONUS MULTIPLIER
var upgradeCostThree = 30;

function upgradeThree() {
    if (coins >= upgradeCostThree) {

        document.getElementById("score").innerHTML = Math.floor(coins - upgradeCostThree);
        const scorePosition = document.querySelector('#purchaseSub');
        const scoreSpan = document.createElement('span');

        scoreSpan.innerHTML = '-' + upgradeCostThree + '';
        scoreSpan.classList.add('score-subtraction');
        scorePosition.appendChild(scoreSpan);

        setTimeout(() => {
            scoreSpan.classList.remove('score-subtraction');
            scorePosition.removeChild(scoreSpan);
        }, 1000);

        coins = Math.floor(coins - upgradeCostThree);
        // upgrade cost increases based off percentage, instead of a flat amount.
        upgradeCostThree = Math.floor(upgradeCostThree * 1.8);
        bonus_upgrade += 0.2;

        document.getElementById("upgrade3").querySelector(".cost").innerHTML = "<div>Cost: " + upgradeCostThree;
        document.getElementById("upgrade3").querySelector(".spec").innerHTML = "Multiplier: " + bonus_upgrade.toFixed(1);
    } else {
        return;
    }
}

/*----- BONUS FUNCTION -----*/

// beginning of timer
// active timer
var a_timer = 1;
// cooldown timer
var cd_timer = 1;
// the number needed to activate the bonus
var key = 2;
// the number being generated
var randomNum;
// how long the bonus stays active
var active = 60;
// how long before the bonus generator can start again
var cooldown = 120;
// the range the random number generator will go to
var odds = 50;
// The bonus multiplier
var bonus_upgrade = 2;

// Bonus generator
function bonus() { // every 1s this function will run
    var randomizer = setTimeout(function () { // every time its called, check if the RNG and key are matched
        if (key == randomNum) {
            a_timer = 1; // if matched reset the timer to 1
            bonus_anim();
            clearTimeout(randomizer); // clear the current function that repeats this one
            bonus_active(); // and call the next function
        } else { // otherwise keep generating random numbers until the conditions are met
            randomNum = Math.floor(odds * Math.random()); // randomly generates number based on the odds
            console.log(randomNum);
            bonus(); // call the function again
        }
    }, 1000); // repeats every 1000ms
}

// top gradient
var grad_top = document.getElementById("top");
// bottom gradient
var grad_bot = document.getElementById("bot");

// calls all bonus animations
function bonus_anim() { // add fire element on top of the mouse cursor
    document.getElementById("fire").classList.add("flame");
    // Remove the slide-out animations
    grad_bot.classList.remove("bot-slide-out");
    grad_top.classList.remove("top-slide-out");
    // Add the slide-in animations
    grad_top.classList.add("top-slide-in");
    grad_bot.classList.add("bot-slide-in");
}

// clears all bonus animations
function bonus_clear() { // remove fire animation from cursor
    document.getElementById("fire").classList.remove("flame");
    // remove slide-in animations
    grad_top.classList.remove("top-slide-in");
    grad_bot.classList.remove("bot-slide-in");
    // add slide-out animations
    grad_bot.classList.add("bot-slide-out");
    grad_top.classList.add("top-slide-out");
}

var bonusClickAmount;
var bonusRunning = false;

function bonus_active() {
    var bonus_ON = setTimeout(function () { // every 1s this function will run
        console.log("a" + a_timer);
        a_timer++; // increment the timer by 1
        if (a_timer < active) { // if the timer is less than the cool down repeat the function
            bonusRunning = true;
            bonusClickAmount = clickAmount * bonus_upgrade;
            bonus_active(); // call the function that activates the multiplier
        } else { // once it's done

            console.log("reset");
            bonus_clear();
            randomNum = 0;
            cd_timer = 1; // set timer back to 1
            clearTimeout(bonus_ON);
            bonus_cooldown(); // call the cooldown function
            bonusRunning = false;
        }
    }, 1000);
}

// the cooldown period before the generator can be called again
function bonus_cooldown() {
    var bonus_cd = setTimeout(function () {
        console.log("cd" + cd_timer);
        cd_timer++;
        if (cd_timer < cooldown) {
            bonus_cooldown();
        } else {
            clearTimeout(bonus_cd);
            randomNum = 0; // set the random number back to 0
            bonus(); // call the bonus function
        }
    }, 1000);
}

bonus();
// start the function


/*----- UPGRADE ANIMATIONS -----*/

var giallo = document.getElementById("giallo");
var networking = document.getElementById("networking");
var ill = document.getElementById("ill");

upgrade1.addEventListener("mouseover", function () { // If the mouse is over the upgrade button
    giallo.classList.remove("icon-inactive"); // remove the in-active class
    giallo.classList.add("icon-active"); // reveal the upgrade's icon above it
});

upgrade1.addEventListener("mouseout", function () { // once the mouse is removed from the upgrade button
    giallo.classList.remove("icon-active"); // and we remove the active class
    giallo.classList.add("icon-inactive"); // the in-active animation plays
});

upgrade2.addEventListener("mouseover", function () {
    networking.classList.remove("icon-inactive");
    networking.classList.add("icon-active");
});

upgrade2.addEventListener("mouseout", function () {
    networking.classList.remove("icon-active");
    networking.classList.add("icon-inactive");
});

upgrade3.addEventListener("mouseover", function () {
    ill.classList.remove("icon-inactive");
    ill.classList.add("icon-active");
});

upgrade3.addEventListener("mouseout", function () {
    ill.classList.remove("icon-active");
    ill.classList.add("icon-inactive");
});
