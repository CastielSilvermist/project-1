var app = new Framework7({

    root: '#app',
    // make an array called routes. pay attention to how its formated.

    routes: [
        {
            //            path: '/' --> refers to index
            path: '/',
            url: 'index.html'
        },

        {
            //            links to page 2 
            path: '/page2/',
            url: 'pages/page2.html'
        }

    ]

})

var mainView = app.views.create(".view-main");

var $$ = Dom7;

var cardArray = [
    "baandari.png", "dragonscale.png", "dwarven.png", "flameatro.png", "frostatro.png", "gloom.png", "hollowjack.png", "newmoon.png",
    "psijic.png", "reaper.png", "scalecaller.png", "stormatro.png", "wildhunt.png", "xanmeer.png"
];

var lootArray = [
"CrownSoulGem.png", "ExperienceScroll.png", "GoldCoastDebilitatingPoison.png", "GoldCoastDrainingPoison.png", "GoldCoastEnfeeblingPoison.png",
    "SpellcasterElixir", "GoldCoastSurvivorElixir.png", "GoldCoastSwiftSurvivorElixir.png", "GoldCoastTrappingPoison.png",
    "GoldCoastWarriorElixir.png", "LethalPoison.png", "MysticStew.png", "RepairKit.png", "StoutMagicLiqueur.png", "TriRestorationPotion.png", "VigorousRagout.png", "VigorousTincture.png"
]
//INSTRUCTIONS

console.log("bonjour");

$$(document).on('page:init', '.page[data-name="page2"]', function (e) {
    // EVERYTHING on page 2 goes inside here!!!!


    var b1 = $("#card"); //card as a button
    var b2 = $("#loot"); //result 


    b2.hide()

    b1.on("click", function () {
        console.log("this works");
        var randomItem = cardArray[Math.floor(Math.random() * cardArray.length)];
        // document.getElementById("card").innerHTML = randomItem;
        b1.attr("src", "imgs/" + randomItem);

        console.log("results")
        var randomItem = lootArray[Math.floor(Math.random() * lootArray.length)];
        b2.attr("src", "imgs/loot/" + randomItem);
        b2.show([400])
        setTimeout(function () {
            $("#loot").fadeOut();
        }, 5000);


    })






});
