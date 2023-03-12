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