let started = false;

// chagane header color on scrolling
let myHeader = document.querySelector("header");
window.onscroll = function () {
  if (window.scrollY === 0) {
    myHeader.style.backgroundColor = "transparent";
  } else {
    myHeader.style.backgroundColor = " rgb(0 14 22)";
    // document.querySelector("header .container::after").style.Height = "0";
  }
};
//Add class active on nav Items and remove it from all others
let navItems = document.querySelectorAll("header ul li a");
navItems.forEach((item) => {
  item.addEventListener("click", function (ele) {
    navItems.forEach((li) => {
      li.classList.remove("active");
    });
    ele.target.classList.add("active");
  });
});
//show menu in small screens
let menu = document.querySelector(".minue");
let nav = document.querySelector("header ul");
menu.onclick = function () {
  nav.classList.toggle("show");
};
//sreach button
let conS = document.querySelector(".form");
let sreach = document.querySelector(" header form ");
// let input = document.querySelector(" header form .item ");
let myNav = document.querySelector("nav");
// console.log(myNav);
conS.onclick = function () {
  // conS.classList.toggle("form-active");
  // create Element to close
  let close = document.createElement("div");
  let pClose = document.createElement("p");
  let crox = document.createTextNode("x");
  close.className = "close-sreach";
  pClose.className = "close-icon";
  pClose.appendChild(crox);
  close.appendChild(pClose);
  myNav.appendChild(close);
  conS.style.display = "none";
  sreach.classList.add("done");
};
// close sreach popup
document.addEventListener("click", function (ele) {
  if (ele.target.className == "close-icon") {
    conS.style.display = "block";
    sreach.classList.remove("done");
    ele.target.parentElement.remove();
  }
});

//porfolio
let myPor = document.querySelectorAll(".portfolio .portfolio-main > div");
let myPorUl = document.querySelectorAll(".portfolio ul li");
// console.log(myPor);
// console.log(myPorUl);
myPorUl.forEach((ele) => {
  // console.log(ele);
  // console.log(ele.dataset.text);
  ele.addEventListener("click", function () {
    myPorUl.forEach((ElE) => {
      ElE.classList.remove("active");
    });
    ele.classList.add("active");
    myPor.forEach((item) => {
      // console.log(item);
      item.style.display = "none";
    });
    document.querySelector(ele.dataset.text).style.display = "block";
  });
});
// // show more
// let pButton = document.querySelector(" .portfolio .p-btn");
// let shown = document.querySelector(" .portfolio .por-info");
// pButton.addEventListener("click", function () {
//   shown.classList.toggle("wow");
//   shown.style.transition = "  0.3s ";
// });

// do popup img in portofolio
let myPorBox = document.querySelectorAll(".images-container .img-box img ");
myPorBox.forEach((box) => {
  box.addEventListener("click", function (ele) {
    //create overlay
    let pOvelay = document.createElement("div");
    pOvelay.className = "pOvelay";
    document.body.appendChild(pOvelay);
    // create img pop
    let imgBox = document.createElement("div");
    imgBox.className = "imgBox";
    let imgpop = document.createElement("img");
    imgpop.className = "imgpop";
    let dis = document.createElement("div");
    let disP = document.createElement("p");
    let disH = document.createElement("h2");
    dis.className = "img-des";
    disH.textContent = "Awesome Image";
    disP.textContent = "Photography";
    dis.appendChild(disH);
    dis.appendChild(disP);
    // console.log(box.src);
    imgpop.src = box.src;
    //create close icon
    let close = document.createElement("div");
    let crox = document.createTextNode("x");
    close.appendChild(crox);
    close.className = "imgpop-x";
    // __________________________
    imgBox.appendChild(imgpop);
    // imgBox.appendChild(close);
    imgBox.appendChild(dis);
    document.body.appendChild(imgBox);
    document.body.appendChild(close);
  });
});
//popup close
document.addEventListener("click", function (ele) {
  if (ele.target.className == "imgpop-x") {
    document.querySelector(".imgBox").remove();
    document.querySelector(".pOvelay").remove();
    ele.target.remove();
  }
});
// start stats
let stats = document.querySelector(".stats");
//Display the height and width of "stats", including padding and border
window.addEventListener("scroll", function () {
  // Get the offsetTop position of "stats"
  let statsTop = stats.offsetTop;
  let statsOuterHeight = stats.offsetHeight;
  // console.log(statsOuterHeight);
  // Get the window height
  let windowHeight = this.innerHeight;
  // console.log(windowHeight);
  let windowScrollTop = window.pageYOffset;
  // console.log(windowScrollTop);
  if (windowScrollTop > statsTop + statsOuterHeight - windowHeight) {
    let goalStats = document.querySelectorAll(".stats .s-text h1");
    if (!started) {
      goalStats.forEach((ele) => statCount(ele));
    }
    started = true;
  }
});

function statCount(e) {
  let counter = setInterval(() => {
    e.textContent++;
    if (e.textContent === e.dataset.goal) {
      clearInterval(counter);
    }
  }, 20000 / e.dataset.goal);
}
//start progress
let progress = document.querySelector(".our-skills");
//Display the height and width of "stats", including padding and border
window.addEventListener("scroll", function () {
  // // Get the offsetTop position of "progress"
  // let progressTop = stats.offsetTop;
  // let progressOuterHeight = progress.offsetHeight;
  // // console.log(statsOuterHeight);
  // // Get the window height
  // let windowHeight = this.innerHeight;
  // // console.log(windowHeight);
  // let windowScrollTop = window.pageYOffset;
  // // console.log(windowScrollTop);
  if (window.scrollY >= progress.offsetTop - 50) {
    let myskill = document.querySelectorAll(".sk-content .element span");
    myskill.forEach((span) => {
      span.style.width = span.dataset.progress;
      console.log(span.dataset.progress);
    });
  }
});
