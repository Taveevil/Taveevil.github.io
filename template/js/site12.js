// Game carousel
let game_list = document.querySelector(".game-list");

// Default page is set to 1
let game_page = 1;

// Multi-dimensional array storing all games
let games = {
    "page":
    {
        0: {
            0: {
                "name": "Steven Saves the world",
                "shortname": "blooquest",
                "link": "bloodquest.html",
                "game_image": "template/img/site12/game-thumbnails/gameplay-sstw.png",
                "tag": ["Action"]
            },
            1: {
                "name": "Pleasant Valley",
                "shortname": "pleasant-valley",
                "link": "bloodquest.html",
                "game_image": "template/img/site12/game-thumbnails/gameplay-pleasantvalley.png",
                "tag": ["shooter"]
            },
            2: {
                "name": "Full Ascent",
                "shortname": "full-ascent",
                "link": "Full Ascent",
                "game_image": "template/img/site12/game-thumbnails/gameplay-fullascent.png",
                "tag": ["platformer"]
            },
            3: {
                "name": "Haxwell Modem: Beyond the firewall",
                "shortname": "haxwell",
                "link": "bloodquest.html",
                "game_image": "template/img/site12/game-thumbnails/gameplay-haxwell.png",
                "tag": ["arcade"]
            },
            4: {
                "name": "Deep Dish Delivery",
                "shortname": "ddd",
                "link": "bloodquest.html",
                "game_image": "template/img/site12/game-thumbnails/gameplay-ddd.png",
                "tag": ["beat em up"]
            },
            5: {
                "name": "Vultures at dawn",
                "shortname": "vultures",
                "link": "bloodquest.html",
                "game_image": "template/img/site12/game-thumbnails/gameplay-vultures.png",
                "tag": ["multiplayer"]
            },
        }

        ,

        1: {
            0: {
                "name": "BloodQuest",
                "shortname": "bloodquest",
                "link": "bloodquest.html",
                "game_image": "template/img/site12/game-thumbnails/gameplay-bloodquest.png",
                "tag": ["action"]
            },
            1: {
                "name": "Bad Art",
                "shortname": "pleasant-valley",
                "link": "bloodquest.htmlt",
                "game_image": "template/img/site12/game-thumbnails/comingsoon.png",
                "tag": ["Party"]
            },
            2: {
                "name": "Perma Frost",
                "shortname": "full-ascent",
                "link": "bloodquest.html",
                "game_image": "template/img/site12/game-thumbnails/comingsoon.png",
                "tag": ["Shooter"]
            },
            3: {
                "name": "Fetch Quest",
                "shortname": "fetchquest",
                "link": "bloodquest.html",
                "game_image": "template/img/site12/game-thumbnails/comingsoon.png",
                "tag": ["Adventure"]
            },
            4: {
                "name": "Can You?",
                "shortname": "canyou",
                "link": "bloodquest.html",
                "game_image": "template/img/site12/game-thumbnails/comingsoon.png",
                "tag": ["Arcade"]
            },
            5: {
                "name": "Fish Flop",
                "shortname": "fish",
                "link": "bloodquest.html",
                "game_image": "template/img/site12/game-thumbnails/comingsoon.png",
                "tag": ["Arcade"]
            },
        }
    }
}

function update_list(x) {
    const create_page = document.createElement("ul");
    create_page.setAttribute("id", "page-" + game_page);
    game_list.appendChild(create_page);

    const page_num = document.querySelector(".page-num");
    page_num.innerHTML = game_page + " / " + Object.values(games.page).length;

    let selected_page = game_page - 1;
    let cards = games.page[selected_page];
    let cards_array = Object.values(cards);
    let hidden;

    if (x == "hidden") {
        hidden = "hidden";
    }
    else {
        hidden = "";
    }

    cards_array.forEach(x => {
        create_page.innerHTML += `
    <li class="game-card `+ hidden + `" id="` + x.shortname + `-card">
        <a href="`+ x.link + `">
            <div class="card-image">
            <img src="`+ x.game_image + `" alt="Gameplay of ` + x.name + `">
            </div>
            <h5>`+ x.name + `</h5>
            <div class="tags"></div>
        </a>
    </li>
    `;
    
        x.tag.forEach((tag) => {
            let p = document.createElement("p");
            p.classList.add("tag");
            let tags = create_page.querySelector("#" + x.shortname + "-card").querySelector(".tags");
            p.innerHTML = tag;
            tags.appendChild(p)
        });

    });
}

let page_left = document.querySelector(".page-left");
let page_right = document.querySelector(".page-right");


if(game_list){
    update_list();
    
    page_left.addEventListener("click", () => { page_switch("left") });
    page_right.addEventListener("click", () => { page_switch("right") });

}


let interval = 100;
let game_cards;

function page_switch(direction) {

    if (direction === "left") {
        if (game_page != 1) {
            game_page--;
            game_cards = document.querySelectorAll(".game-card");
            animate_cards(game_cards, "fade-left");
            page_right.setAttribute("disabled","");

            setTimeout(() => {
                update_list("hidden");
                game_cards = document.querySelectorAll(".game-card");
                animate_cards(game_cards, "appear-left");
                game_list.removeChild(document.querySelector("#page-" + (game_page + 1)));

                setTimeout(() => {
                    game_cards.forEach((x) => {
                        x.classList.remove("hidden");
                        x.classList.remove("appear-left");
                    })
                    page_right.removeAttribute("disabled");
                }, interval * game_cards.length);
            }, interval * game_cards.length);
        }
        else {
            return;
        }
    }
    if (direction === "right") {
        if (game_page < Object.values(games.page).length) {
            game_page++;
            game_cards = document.querySelectorAll(".game-card");
            animate_cards(game_cards, "fade-right");
            page_left.setAttribute("disabled","");

            setTimeout(() => {
                update_list("hidden");
                game_cards = document.querySelectorAll(".game-card");
                animate_cards(game_cards, "appear-right");
                game_list.removeChild(document.querySelector("#page-" + (game_page - 1)));

                setTimeout(() => {
                    game_cards.forEach((x) => {
                        x.classList.remove("hidden");
                        x.classList.remove("appear-right");
                    })
                    page_left.removeAttribute("disabled");
                }, interval * game_cards.length);
            }, interval * game_cards.length);
        }
        else {
            return;
        }
    }


};

async function animate_cards(cards, direction) {
    for (var i = 0; i < cards.length; i++) {
        let card = cards[i];
        card.classList.add(direction);

        // wait for the delay to finish before moving on to the next item
        await delay(interval - 50);
    }
}

// New promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let thumbnails = document.querySelectorAll(".thumbnail");

// get all the thumbnails and set an event listner to it
thumbnails.forEach((thumb)=>{
    thumb.addEventListener("click",(this_ele)=>{
        let media = document.querySelector(".media");
        let source;
    
        // remove all the active traits from the thumbnails
        thumbnails.forEach((x)=>{
            x.classList.remove("active");
        });

        // add the active trait to the one the user clicked on 
        thumb.classList.add("active");
        
        // if there are any children in the media div, remove them
        while (media.firstChild) {
            media.removeChild(media.firstChild);
        }
    
        // if there's a video link attached to the img
        // make a new video source within the media div
        if(this_ele.target.dataset.video){
            source = this_ele.target.dataset.video;
            media.innerHTML = '<video controls><source src="'+source+'" type="video/mp4"></video>';
        }
        // other wise make a new img within the div with the same source as the thumbnail
        else{
            source = this_ele.target.src;
            let img = document.createElement("img");
            img.src = source;
            img.alt = this_ele.target.alt;
            media.appendChild(img);
        }
    
        
    
    })
})

let nav_toggle = document.querySelector(".nav-toggle");

nav_toggle.addEventListener("click", ()=>{
    let nav = document.querySelector("nav");

    nav.classList.toggle("visible");

})





