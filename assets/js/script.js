(async function () {
    document.querySelector('.movies').innerHTML = '<div class="col-md">Loading...</div>';

    let req = await fetch('https://api.b7web.com.br/cinema/');
    let reqJson = await req.json();

    mountMovie = (list) => {
        let html = '';

        for(let i in list) {
            html += `
            <div class="col-md-4">
                <img src="${list[i].avatar}" />
                
            `;
        }
    }
})();

