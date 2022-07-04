(async function () {
    document.querySelector('.movies').innerHTML = '<div class="col-md">Loading...</div>';

    let req = await fetch('https://api.b7web.com.br/cinema/');
    let reqJson = await req.json();

    mountMovie(reqJson);

    function mountMovie (list) {
        let html = '';

        for(let i in list) {
            html += 
            `<div class="col-md-4 d-flex justify-content-center">
                <figure class="figure text-center bg-light border">
                    <img src="${list[i].avatar}" class="figure-img img-fluid p-2" alt="...">
                    <figcaption class="figure-caption">${list[i].titulo}</figcaption>
                </figure>
            </div>`;
        }

        document.querySelector('.movies').innerHTML = html;
    }
})();

