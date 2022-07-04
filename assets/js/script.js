(async function () {
    document.querySelector('.movies').innerHTML = '<div class="col-md">Loading...</div>';

    let req = await fetch('https://api.b7web.com.br/cinema/');
    let reqJson = await req.json();

    mountMovie(reqJson);

    function mountMovie (list) {
        let html = '';

        for(let i in list) {
            html += 
            `<div class="col-md-4 bg-light border d-flex flex-column align-itens-center mb-3">                
                <img src="${list[i].avatar}" class="img-fluid p-2" alt="...">
                <span class="text-center">${list[i].titulo}</span>                
            </div>`;
        }

        document.querySelector('.movies').innerHTML = html;
    }
})();

