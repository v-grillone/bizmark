// Fake API
locations = [
  {
    id: 1,
    img:'./assets/paris-background.jpg',
    country: 'France',
    city: 'Paris',
    description: 'France ipsum dolor sit amet consectetur adipisicing elit. Dicta natus esse error ratione mollitia exercitationem ducimus. Quam amet similique nisi, ipsam libero illum consequuntur repellendus ut placeat, iste optio perferendis dignissimos quas facere voluptas facilis. Voluptatum quas, quae exercitationem maxime voluptatem non commodi. Qui eius modi iusto, quam quae accusamus eveniet adipisci iure sed odio ducimus suscipit repellendus minima fuga natus, totam delectus. Similique.',
    flightCost: '100$',
    hotelCost: '750$ / 7 Days'
  },
  {
    id: 2,
    img:'./assets/rome-background.jpg',
    country: 'Italy',
    city: 'Rome',
    description: 'Italy ipsum dolor sit amet consectetur adipisicing elit. Dicta natus esse error ratione mollitia exercitationem ducimus. Quam amet similique nisi, ipsam libero illum consequuntur repellendus ut placeat, iste optio perferendis dignissimos quas facere voluptas facilis. Voluptatum quas, quae exercitationem maxime voluptatem non commodi. Qui eius modi iusto, quam quae accusamus eveniet adipisci iure sed odio ducimus suscipit repellendus minima fuga natus, totam delectus. Similique. fuga natus, totam delectus. Similique.',
    flightCost: '210$',
    hotelCost: '600$ / 7 Days'
  },
  {
    id: 3,
    img:'./assets/tokyo-background.jpg',
    country: 'Japan',
    city: 'Tokyo',
    description: 'Japan ipsum dolor sit amet consectetur adipisicing elit. Dicta natus esse error ratione mollitia exercitationem ducimus. Quam amet similique nisi, ipsam libero illum consequuntur repellendus ut placeat, iste optio perferendis dignissimos quas facere voluptas facilis. Voluptatum quas, quae exercitationem maxime voluptatem non commodi. Qui eius modi iusto, quam quae accusamus eveniet adipisci iure sed odio ducimus suscipit repellendus minima fuga natus, totam delectus. Similique.',
    flightCost: '270$',
    hotelCost: '900$ / 7 Days'
  },
]


// Search icon click open

const searchIcon = document.querySelector('.search-icon')

const toogleSearch = (e) => {
  const searchContainer = document.querySelector('.search-container');
  const searchBox = document.querySelector('.search-box')
  if(Array.from(searchContainer.classList).includes('closed')){
    searchContainer.style.width = '28vw';
    searchBox.style.width = '18vw';
    searchContainer.classList.remove('closed');
  }else{
    searchContainer.style.width = '7vw';
    searchBox.style.width = '0';
    searchContainer.classList.add('closed');
  }
}

searchIcon.addEventListener('click', toogleSearch)