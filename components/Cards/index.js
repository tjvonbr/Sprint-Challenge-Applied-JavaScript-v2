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

const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        articleData = response.data.articles;
        // console.log(response.data.articles);
        
        const articleKeys = Object.keys(articleData);
        // console.log(articleKeys);

        articleKeys.forEach(art => {
            articleData[art].forEach(indyData => {
                const cardCreator = articleCreator(indyData);
                cardContainer.appendChild(cardCreator);
            })
        })
    })
    .catch(error => {
        console.log('Sorry, but the Lambda Times server is currently unavailable.', error);
    })

function articleCreator(receivedData) {

    // Create elements
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardImgContainer = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardSignature = document.createElement('span');

    // Class lists
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    cardImgContainer.classList.add('img-container');

    // Text content
    cardHeadline.textContent = receivedData.headline;
    cardImg.src = receivedData.authorPhoto;
    cardSignature.textContent = receivedData.authorName;

    // Append children
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(cardImgContainer);
    cardAuthor.appendChild(cardSignature);
    cardImgContainer.appendChild(cardImg);

    return card;
}
