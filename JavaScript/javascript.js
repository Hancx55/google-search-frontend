//im feeling lucky
const luckyBtn = document.getElementById("luckyBtn");
const searchBar = document.getElementById("searchBar");


if (luckyBtn) {
    luckyBtn.addEventListener('click', () => {
        console.log("clicked");
        const query = encodeURIComponent(searchBar.value);
        window.location.href = `https://www.google.com/search?q=${query}&btnI=1`
    })
}

//advanced query search bar
function combineQuery() {
    const all = document.getElementById("all").value;
    const exact = document.getElementById("exact").value;
    const none = document.getElementById("none").value;

    let query = "";

    if (all) {
        query += (all + " ");
    }
    if (exact) {
        query += (`"${exact}" `);
    }
    if (none) {
        query += (`-${none}`);
    }

    document.getElementById("q").value = query.trim();
}