const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

$(".input-tags").selectize({
  plugins: ["remove_button"],
  delimiter: ",",
  persist: false,
  create: function (input) {
    return {
      value: input,
      text: input,
    };
  },
});

$(function () {
  $("[data-toggle=popover]").popover();
});
$("[data-toggle=popover]")
// .popover({html:true})

$('#closeDropdown').on('click', function () {
  $('.dropup button').dropdown('hide');
});

let mobView = document.getElementById('mobView');
let mobCard = document.getElementById('mobCard');
let deskView = document.getElementById('deskView');
let deskCard = document.getElementById('deskCard');
let modalTitle = document.getElementById('modalTitle');
if (mobView != null) {
  mobView.addEventListener("click", (event)=> {
    mobCard.style.display = "block";
    deskCard.style.display = "none";
    modalTitle.textContent = "Mobile View";
    mobView.classList.add("active")
    deskView.classList.remove("active")
  });
}
if (deskView != null) {
  deskView.addEventListener("click", (event)=> {
    deskCard.style.display = "block";
    mobCard.style.display = "none";
    modalTitle.textContent = "Desktop View"
    deskView.classList.add("active")
    mobView.classList.remove("active")
  });
}

document.querySelector("#liveToastBtn").onclick = function() {
  new bootstrap.Toast(document.querySelector('#basicToast')).show();
 }