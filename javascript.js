
/*
const btn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="dark"){
    document.body.classList.add("dark");
    btn.textContent="☀️";
}

btn.addEventListener("click", ()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        btn.textContent="☀️";
        localStorage.setItem("theme","dark");

    }else{

        btn.textContent="🌙";
        localStorage.setItem("theme","light");

    }

});
*/

const btn = document.getElementById("themeBtn");
let theme = localStorage.getItem("theme");

function updateThemeUI(currentTheme) {
    if (!btn) return;
    if (currentTheme === "dark") {

        btn.innerHTML = `<span class="theme-icon">☀️</span> <span class="theme-label">Light</span>`;
    } else {
        btn.innerHTML = `<span class="theme-icon">🌙</span> <span class="theme-label">Dark</span>`;
    }
}

if (theme) {
    document.body.className = theme;
    updateThemeUI(theme);
}

if (btn) {
    btn.addEventListener("click", function () {
        if (document.body.className === "dark") {
            document.body.className = "light";
            updateThemeUI("light");
        } else {
            document.body.className = "dark";
            updateThemeUI("dark");
        }
        localStorage.setItem("theme", document.body.className);
    });
}



const loading = document.getElementById("loading");
const trending = document.getElementById("trending");

if (loading && trending) {
    loading.style.display = "block";

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=6")

        .then((response) => response.json())

        .then((data) => {

            loading.style.display = "none";

            data.forEach((item) => {

                const link = document.createElement("a");

                link.href = "#";

                link.className = "trending-topic-link";
                link.style.display = "block";
                link.style.margin = "6px 0";
                link.style.font="10px";
                link.style.color = "var(--primary)";
                link.style.textDecoration = "none";
                link.textContent = "#" + item.title.substring(0, 15);

                trending.appendChild(link);
            });
        })

        .catch(() => {
            loading.style.display = "none";
            trending.textContent = "Could not load trending topics";
        });
}


/*
const loading = document.getElementById("loading");

const trending = document.getElementById("trending");

loading.style.display = "block";

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")

.then((response) => response.json())

.then((data) => {

   loading.style.display = "none";

    data.forEach((item) => {

        const card = document.createElement("div");
        card.className = "trending-card";

        const img = document.createElement("img");
        img.src = item.thumbnailUrl;
        img.alt = item.title;
        img.className = "trending-image";

        const title = document.createElement("a");
        title.href = item.url;
        title.target = "_blank";
        title.className = "trending-topic-link";
        title.textContent = item.title.substring(0, 25);

        card.appendChild(img);
        card.appendChild(title);

        trending.appendChild(card);

    });

})

.catch(() => {

    loading.style.display = "none";

    trending.textContent = "Could not load trending topics";

});
*/