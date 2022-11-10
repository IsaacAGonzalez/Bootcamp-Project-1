const carouselimg1 = document.querySelector('#carouselimg1');
const carouselimg2 = document.querySelector('#carouselimg2');
const carouselimg3 = document.querySelector('#carouselimg3');
const carimg1caption = document.querySelector ('#carimg1caption');
const carimg2caption = document.querySelector ('#carimg2caption');
const carimg3caption = document.querySelector ('#carimg3caption');
const car1address = document.querySelector ('#car1address');
const car2address = document.querySelector ('#car2address');
const car3address = document.querySelector ('#car3address');

function getdata() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer d-Zk9Nv2t5lmfuhdEBns4h0UgeAFRUV3-eubcRfjSaPKo5aFhZSi_8qfL7xtTsYghIBiwSmEvaA-yZ0L83ac-wgfOQST-XQqCJ0D7QCKPosrrFnLQu0rL0iK9TVjY3Yx");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=breweries&location=San Diego`, requestOptions)
        .then(response => response.json())
        .then(result => {
            getRandombrew(result.businesses);
        })
        .catch(error => console.log('error', error));
}

function getRandombrew(businesses){
    const ranbusinesses= [];
    for (let i=0; i < 3; i++) {
        const ranIndex= Math.floor(Math.random()*businesses.length);
        const ranbusiness = businesses [ranIndex];
        ranbusinesses.push(ranbusiness);
    };
    displaycar(ranbusinesses);
}

function displaycar(randbusinesses){
    carouselimg1.setAttribute('src',randbusinesses[0].image_url);
    carouselimg2.setAttribute('src',randbusinesses[1].image_url);
    carouselimg3.setAttribute('src',randbusinesses[2].image_url);
    carouselimg1.parentElement.setAttribute('href', randbusinesses[0].url);
    carouselimg2.parentElement.setAttribute('href', randbusinesses[1].url);
    carouselimg3.parentElement.setAttribute('href', randbusinesses[2].url);
    carimg1caption.textContent = randbusinesses[0].name;
    carimg2caption.textContent = randbusinesses[1].name;
    carimg3caption.textContent = randbusinesses[2].name;
    car1address.textContent = randbusinesses [0].location.display_address.join(", ");
    car2address.textContent = randbusinesses [1].location.display_address.join(", ");
    car3address.textContent = randbusinesses [2].location.display_address.join(", ");

}

getdata()