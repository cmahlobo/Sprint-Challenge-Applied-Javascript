// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const retrieve = callback => {
    axios
      .get(`https://lambda-times-backend.herokuapp.com/articles`)
      .then(response => callback(response))
      .catch(error => console.log(error));
  };
  
 
  const allCards = (data, topic) =>{
      let articlesContainer = document.querySelector(".cards-container");
      data.articles[`${topic}`].forEach(article => {
        
        let card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute('data-topic', `${topic}`)
    
        let headline = document.createElement("div");
        headline.classList.add("headline");
        headline.textContent = article.headline;
        card.appendChild(headline);
    
        let author = document.createElement("div");
        author.classList.add("author");
        card.appendChild(author)
        
        let authImage = document.createElement('div')
        authImage.classList.add('img-container')
        author.appendChild(authImage)
       
        let image = document.createElement('img')
        image.src = article.authorPhoto
        authImage.appendChild(image)
       
        let name = document.createElement('span')
        name.textContent = `By ${article.authorName}`
        author.appendChild(name)
    
        articlesContainer.appendChild(card)
      });
  }

  
  const jquery = ({ data }) => {
    allCards(data, 'jquery')
};

  const bs = ({ data }) => {
    allCards(data, 'bootstrap')
  };
  
  const js = ({ data }) => {
    allCards(data, 'javascript')
  };
  
  const tech = ({ data }) => {
    allCards(data, 'technology')
};
  
  const node = ({ data }) => {
    allCards(data, 'node')
  };
  
  
  retrieve(bs)
  retrieve(js)
  retrieve(jquery)
  retrieve(node)
  retrieve(tech)