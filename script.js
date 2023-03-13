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

// Creating Location Slides

const placeContainer = document.querySelector('.place-container');
const placeContainerHeight = placeContainer.offsetHeight

locations.map((location => {
  // Location Slide Div 
  const locationSlide = document.createElement('div');
  locationSlide.classList.add(`location-slide-${location.id}`);
  locationSlide.style.position = 'absolute';
  locationSlide.style.display = 'flex';
  locationSlide.style.width = '100%';
  locationSlide.style.height = '100%';
  locationSlide.style.justifyContent = 'flex-start';
  locationSlide.style.alignItems = 'center'; 
  locationSlide.style.top = `${placeContainerHeight * location.id - placeContainerHeight}px`

  // creating and adding black background to location slide
  const blackBackground = document.createElement('div');
  blackBackground.classList.add('black-background');
  locationSlide.appendChild(blackBackground);

  // creating and adding city background to location slide
  const cityBackground = document.createElement('img');
  cityBackground.classList.add('city-background-img');
  cityBackground.setAttribute('src', `${location.img}`);
  cityBackground.setAttribute('alt', `${location.city} backround image`);
  locationSlide.appendChild(cityBackground);
  
  // creating and adding location details to location slide
  const locationDetails = document.createElement('div');
  locationDetails.classList.add('location-details');
  locationSlide.appendChild(locationDetails);

  // creating and adding information to location details
  const country = document.createElement('h3');
  country.classList.add('country');
  country.innerHTML = location.country.toUpperCase()
  locationDetails.appendChild(country);

  const city = document.createElement('h5');
  city.classList.add('city');
  city.innerText = `${location.city}, ${location.country}`;
  locationDetails.appendChild(city);

  const locationDescription = document.createElement('p');
  locationDescription.classList.add('location-description');
  locationDescription.innerText = location.description;
  locationDetails.appendChild(locationDescription);

  const cta = document.createElement('a');
  cta.classList.add('cta');
  cta.setAttribute('href', '#');
  cta.innerText = 'BOOK NOW';
  locationDetails.appendChild(cta);

  // creating and adding location costs to location slide
  const locationCosts = document.createElement('div');
  locationCosts.classList.add('location-costs');
  locationSlide.appendChild(locationCosts);


  console.log(locationSlide);
  // Adding location slide to place container
  placeContainer.appendChild(locationSlide);
}))