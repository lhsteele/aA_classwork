
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    deleteChild();
  const element = document.createElement('p');
  element.innerHTML = string;
  htmlElement.appendChild(element);
};

function deleteChild() { 
    var e = document.querySelector("#clock"); 
    
    //e.firstElementChild can be used. 
    var child = e.lastElementChild;  
    while (child) { 
        e.removeChild(child); 
        child = e.lastElementChild; 
    } 
}


htmlGenerator('TGIF', partyHeader);