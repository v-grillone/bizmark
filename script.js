// Search icon click open

const searchIcon = document.querySelector('.search-icon')

const toogleSearch = (e) => {
  const searchContainer = document.querySelector('.search-container');
  const searchBox = document.querySelector('.search-box')
  if(Array.from(searchContainer.classList).includes('closed')){
    searchContainer.style.width = '28vw';
    searchContainer.classList.remove('closed');
    // searchBox.style.width = '25px'
  }else{
    searchContainer.style.width = '7vw';
    searchContainer.classList.add('closed');
  }
}

searchIcon.addEventListener('click', toogleSearch)