// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicContainer = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        // console.log(response.data.topics);
        const passedData = response.data.topics;

        passedData.forEach(item => {
            const newTab = tabCreator(item);
            topicContainer.appendChild(newTab);
        })
    })
    .catch(error => {
        console.log('Sorry, but the Lambda Times server is currently unavailable.', error);
    })


function tabCreator(receivedData) {
    
    // Create element
    const tabTopic = document.createElement('div');

    // Class list
    tabTopic.classList.add('tab');

    // Text Content
    tabTopic.textContent = `${receivedData}`;

    return tabTopic;
}