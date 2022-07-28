
function trocaFilme(id) {
  let imgMain = document.getElementById('filme');
  let title = document.getElementById('title');
  let description = document.getElementById('description');
  

  fetch('../server/api.js')
    .then(response => response.json())
    .then(response => {

      
      let data = response[0].data.filter(film => {
        if(id==film.id){
          return film
        }
      })[0];
      title.innerHTML=data.title;
      description.innerHTML=data.text;
      
      
      // imgMain.style.backgroundImage = "url("+data.img+")";
      // imgMain.style.backgroundColor = linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50));

      imgMain.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)), url("+data.img+")";
      // imgMain.style.background = `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)), url(${data.img}) no-repeat`;
      imgMain.style.backgroundSize = "cover"
      console.log(data);

  
    })

  
}



// // {
    //   "title":"Lucifer",
    //   "text":"descricao",
    //   "img":"resources/img/luciferBanner.jpg"
    // }