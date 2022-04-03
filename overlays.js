// ==UserScript==
// @name         BAC Alliance template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  BAC for r/place
// @author       Midokuni
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

// Only need to change this for adding/removing/changing templates
// Each {} set is 1 blueprint. 
// image = url to the image of the blueprint
// label = nothing, just something descriptive
// pos = Position of the top left pixel of the blueprint. [x, y]
//                                                  |
// size = Size of the blueprint [width ----, height | ]
//                                                  |
// opacity = set this to 1. to change only on emergency.
let data = [
    {
        image: "https://cdn.discordapp.com/attachments/959617264640983040/960001462459588640/rplace_Template_2.png",
        label: "Base 3 - Arona + Shiroko",
        pos: [1621, 441],
        size: [90/3, 139/3],
        opacity: 1,
    },
    {
        image: "https://cdn.discordapp.com/attachments/959617264640983040/960044445275930644/rplace_Template_3.png",
        label: "Base 1 - Hifumi + Forkbot",
        pos: [136, 963],
        size: [162/3, 111/3],
        opacity: 1,
    },
    {
        image: "https://raw.githubusercontent.com/portalthree/tweetch2/master/!dotted_Sprite-0004-export.png",
        label: "Start Button",
        pos: [0, 0],
        size: [1000, 1000],
        opacity: 1,
    },
    {
        image: "https://i.imgur.com/2rfTWAm.png",
        label: "Jerma Sus",
        pos: [0, 0],
        size: [1000, 1000],
        opacity: 1,
    }
]

if (window.top !== window.self) {
    window.addEventListener('load', () => {
        for(let d of data) {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = d.image;
                i.style = `position: absolute; opacity: ${d.opacity};left: ${d.pos[0]}px;top: ${d.pos[1]}px;image-rendering: pixelated;width: ${d.size[0]}px;height: ${d.size[1]}px;`;
                console.log(d.label, i);
                return i;
            })());
        }
    }, false);
}
