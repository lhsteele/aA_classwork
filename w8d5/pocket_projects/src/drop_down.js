
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(){
  let linkArray = [];
  Object.keys(dogs).forEach(dog =>{
    const aElement = document.createElement("a");
    aElement.innerHTML = dog;
    aElement.href = dogs[dog];
    const liElement = document.createElement("li");
    liElement.className = "dog-link";
    liElement.appendChild(aElement);
    linkArray.push(liElement);
    
  });
  return linkArray;
}

function attachDogLinks (){
  const dropdown = document.getElementsByClassName("drop-down-dog-list");
  let dogLinks = dogLinkCreator();
  dogLinks.forEach(link => {
     dropdown[0].appendChild(link);
  });
}

function handleEnter() {
  const lis = document.querySelectorAll(".dog-link");
  const dogLinks = Array.from(lis);
  dogLinks.forEach(link => {
    link.classList.add("open");
  });
}

//add a css class for hidden and toggle that instead of removing dog-list class
function handleLeave() {
  const lis = document.querySelectorAll(".dog-link");
  const dogLinks = Array.from(lis);
  dogLinks.forEach(link => {
    link.classList.remove("open");
  });
}

attachDogLinks();
const label = document.querySelector('.drop-down-dog-nav');
label.addEventListener("mouseenter", () => {handleEnter()});
label.addEventListener("mouseleave", handleLeave);