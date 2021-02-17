(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const e=a?`${n}${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t=()=>'\n        <section class="Error404">\n            <h2>Error 404</h2>\n        </section>\n    ',s={"/":async()=>`\n        <div class="Characters">\n            ${(await a()).results.map((n=>`\n                <article class="Character-item">\n                    <a href="#/${n.id}/">\n                        <img src="${n.image}" alt="${n.name}">\n                        <h2>${n.name}</h2>\n                    </a>\n                </article>\n            `)).join("")}\n        </div>\n    `,"/:id":async()=>{const n=e(),t=await a(n);return`\n        <section class="Characters-inner">\n            <article class="Characters-card">\n                <img src="${t.image}" alt="${t.name}">\n                <h2>${t.name}</h2>\n            </article>\n            <article class="Character-card">\n                <h3>Episodes: <span>${t.episode.length}</span></h3>\n                <h3>Status: <span>${t.status}</span></h3>\n                <h3>Species: <span>${t.species}</span></h3>\n                <h3>Gender: <span>${t.gender}</span></h3>\n                <h3>Origin: <span>${t.origin.name}</span></h3>\n                <h3>Last Location: <span>${t.location.name}</span></h3>\n            </article>\n        </section>\n    `},"/contact":"Contact"},c=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n        <header class="Header-main">\n            <div class="Header-logo">\n                <h1>\n                    <a href="/">\n                        100tifi.co\n                    </a>\n                </h1>\n            </div>\n            <nav class="Header-nav">\n                <a href="#/about/">\n                    About\n                </a>\n            </nav>\n        </header>\n    ';let c=e(),r=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(c),i=s[r]?s[r]:t;a.innerHTML=await i()};window.addEventListener("load",c),window.addEventListener("hashchange",c)})();