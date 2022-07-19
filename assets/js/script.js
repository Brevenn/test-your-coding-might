// calling the elements of the html page
const start_btn = document.querySelector("start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

// if Start Quiz Button gets clicked, show the information box
start_btn.onclick = ()=> {
    info_box.classList.add("activeInfo");
}

// if the Exit the Quiz Button gets clicked, hide the information box
exit_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo");
}