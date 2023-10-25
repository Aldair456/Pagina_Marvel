const marvel = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=e0f3ed4896dcf64219f14e94b7e40eeb&hash=1be7fe08df7b9c0bbc604c4f999d607c';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const comic of json.data.results) {
            let urlComic = comic.urls[0].url;
            contentHTML += `
              <div class="col-md-4">
                  <a href="${urlComic}" target="_blank">
                    <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.title}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${comic.title}</h3>
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
  };
  
  marvel.render();