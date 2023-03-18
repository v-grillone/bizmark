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
  locationSlide.style.top = `${placeContainerHeight * location.id - placeContainerHeight}px`;
  locationSlide.style.zIndex = '-1'

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

  // creating and adding location cost title to location costs
  const locationCostTitle = document.createElement('div');
  locationCostTitle.classList.add('location-cost-title');
  locationCostTitle.innerHTML = '<p>Travel Plan</p>';
  locationCosts.appendChild(locationCostTitle);

  // creating and adding location cost expenses to location costs
  const locationCostExpenses = document.createElement('div');
  locationCostExpenses.classList.add('location-cost-expenses');
  locationCosts.appendChild(locationCostExpenses);

  // creating and adding flight to location cost expenses
  const flight = document.createElement('div');
  flight.classList.add('flight');
  flight.innerHTML = `
  <svg height="40px" width="40px" version="1.1" id="_x32_"        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"  xml:space="preserve">
    <style type="text/css">.st0{fill:#ffffff;}</style>
    <g>
      <path class="st0" d="M507.068,194.059c-5.3-6.143-13.759-8.507-21.481-6.013l-59.859,17.264 c-11.406,3.695-23.81,2.792-34.574-2.507l-68.887-33.742l61.093-80.864c4.682-4.847,5.584-12.261,2.139-18.095 c-3.422-5.809-10.336-8.638-16.848-6.903L247.486,116.32l23.597,11.572l-16.23,8.115l-24.69-12.095L124.278,72.015 C65.799,43.262,18.154,52.695,3.16,83.208c-14.994,30.522,26.591,49.402,57.102,64.395l105.696,52.041l54.749,242.78 c1.877,8.982,10.003,15.28,19.224,14.828c9.172-0.464,16.633-7.509,17.632-16.669l33.956-179.158l73.569,36.226 c47.073,21.732,97.259,19.64,112.253-10.86l32.579-70.61C513.507,208.911,512.39,200.19,507.068,194.059z"/>
    </g>
  </svg>
  <div class="flight-info">
    <p class="flight-city">Flight To ${location.country}</p>
    <p class="flight-cost">${location.flightCost}</p>
  </div>
  `
  locationCostExpenses.appendChild(flight);

  // creating and adding hotel to location cost expenses
  const hotel = document.createElement('div');
  hotel.classList.add('hotel');
  hotel.innerHTML = `
  <svg height="40px" width="40px" version="1.1" id="_x32_" 
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"  xml:space="preserve"> <style type="text/css">.st0{fill:#ffffff;}</style><g><polygon class="st0" points="61.549,88.131 0,88.131 0,423.869 61.549,423.869 61.549,339.934 450.442,339.934 450.442,423.869 511.992,423.869 511.992,339.934 512,339.934 512,267.188 61.549,267.188 	"/><path class="st0" d="M459.656,146.18H237.82v87.434H512v-35.09C512,169.615,488.566,146.18,459.656,146.18z"/><circle class="st0" cx="139.541" cy="191.992" r="47.91"/></g>
    </svg>
    <div class="hotel-info">
      <p class="hotel-city">Hotel Cost</p>
      <p class="hotel-cost">${location.hotelCost}</p>
    </div>
  `
  locationCostExpenses.appendChild(hotel)
  
  // Adding location slide to place container
  placeContainer.appendChild(locationSlide);
}))


// Changing location slide
const prevBtn = document.querySelector('.scroll-prev');
const nextBtn = document.querySelector('.scroll-next');

const changeSlide = (e) => {
  const locationSLides = Array.from(placeContainer.children).slice(2)

  if(Array.from(e.target.classList).includes('scroll-prev')){
    locationSLides.forEach(slide => {
      const oldTopValue = parseInt(slide.style.top.split('px')[0]);
      slide.style.top = `${oldTopValue + placeContainerHeight}px`;
    })
  }else{
    locationSLides.forEach(slide => {
      const oldTopValue = parseInt(slide.style.top.split('px')[0]);
      slide.style.top = `${oldTopValue - placeContainerHeight}px`;
    })
  }
}


prevBtn.addEventListener('click', changeSlide)
nextBtn.addEventListener('click', changeSlide)