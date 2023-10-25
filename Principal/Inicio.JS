
const marvel = {
  render: () => {
    const urlAPI = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e0f3ed4896dcf64219f14e94b7e40eeb&hash=1be7fe08df7b9c0bbc604c4f999d607c';
    const container = document.querySelector('#marvel-row');
    let contentHTML = '';

    fetch(urlAPI)
      .then(res => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
            <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
            </div>`;
        }
        container.innerHTML = contentHTML;
      })
  }
};
marvel.render();


const marvel1 = {
  render: () => {
    const urlAPI = 'https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=e0f3ed4896dcf64219f14e94b7e40eeb&hash=1be7fe08df7b9c0bbc604c4f999d607c'
    const container = document.querySelector('#marvel1-row');
    let contentHTML = '';

    fetch(urlAPI)
      .then(res => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          let imageUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
          contentHTML += `
            <div class="col-md-4">
              <a href="${urlHero}" target="_blank">
                <img src="${imageUrl}" alt="${hero.name}" class="img-thumbnail">
              </a>

              </div>`;
        }
        container.innerHTML = contentHTML;
      })
  }
};

marvel1.render();
