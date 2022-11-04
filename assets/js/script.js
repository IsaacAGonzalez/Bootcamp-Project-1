const sidebar = document.querySelector('offcanvasNavbar');
const sidebarTitle = document.querySelector('offcanvasNavbarLabel');
const localBtn = document.querySelector('#localBreweryBtn');
const resultsTable = document.querySelector('searchList');

function granted(usrPos) {
  const position = usrPos.coords;
  const usrLatitude = position.latitude;
  const usrLongitude = position.longitude;
  console.log('access granted');
  return [usrLatitude, usrLongitude]
}

function denied() {
  console.log('access denied');
  return false
}

localBtn.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Clicked');
  let beerPosition = navigator.geolocation.getCurrentPosition(granted, denied);

  console.log(beerPosition);
  if (beerPosition === false) {
    console.log("Can't find beer")
    return
  } else {
    console.log('Second Click');
  }


});

