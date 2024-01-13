function dropDown() {
    document.getElementById("dropdown").classList.toggle("show");
  }

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function search() {
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    let elems = document.querySelector(".members-list");
    for (i = 0; i < elems.children.length; i++) { 
        if (!elems.children[i].getAttribute('name').toLowerCase().includes(input)) {
            elems.children[i].style.display="none";
        }
        else {
            elems.children[i].style.display="block";                 
        }
    }
}
