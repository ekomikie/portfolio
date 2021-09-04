const splashScreen = document.querySelector("#splashScreen");
const logoTwo = document.querySelectorAll('#logo-2 path');

console.log(logoTwo);

window.addEventListener("load", () => {
    if (splashScreen) {
        splashScreen.style.display = "flex";
        splashScreen.classList.add("loaded");
        setTimeout(() => splashScreen.style.display = "none", 4300);
    }
    document.body.style.visibility = "visible";
    document.body.style.opacity = 1;
});

var btn = $('.btn');
var menuToggle = $('.toggle');
var navigation = $('.navigation');

 

btn.on('click', function() {
  $(this).toggleClass('active');
  $(this).toggleClass('not-active');
  menuToggle.toggleClass('active');
  navigation.toggleClass('active');
});


navbar = document.querySelectorAll('.nav-link');
for(let k=0; k < navbar.length; k++) {
  navbar[k].onclick  = function() {
    let l=0;
    while(l<navbar.length) {
      navbar[ l++].className = 'nav-link link link--nav';
    }
    navbar[k].className = 'nav-link be-active';
    
  }
}




$(function(){
    var scroll = $(document).scrollTop();
    var lastScrollTop = 0;
    var sideNav =$('.navigation');
    var heroIntro = $('.hero-intro');

    $(window).scroll(function(){
        var scrolled = $(document).scrollTop();
        if(scrolled > lastScrollTop) {
            $(".nav-area").addClass('animate');
            sideNav.addClass('animate-out');
            heroIntro.addClass('expand-text');

        }else  {
            $(".nav-area").removeClass('animate');
            sideNav.removeClass('animate-out');
            heroIntro.removeClass('expand-text');
        }
        if(scrolled > scroll) {
             $(".nav-area").removeClass('sticky');
             sideNav.removeClass('animate-in');
             heroIntro.removeClass('compress-text');
            }else {
                $(".nav-area").addClass('sticky');
               sideNav.addClass('animate-in');
               heroIntro.addClass('compress-text');
            }

            scroll = $(document).scrollTop();
    });
});



for (let i = 0; i < logoTwo.length; i++) {
  console.log(`letter ${i} is ${logoTwo[i].getTotalLength()}`);
}


// Add active class in selected list item

let list = document.querySelectorAll('.list');
for(let i=0; i < list.length; i++) {
  list[i].onclick  = function() {
    let j=0;
    while(j<list.length) {
      list[j++].className = 'list';
    }
    list [i].className = 'list active';
    
  }
}

// FADE ANIMATIONS ON SCROLL

const fadeFromRight = document.querySelectorAll(".rightFade");
fadeFromRight.forEach(e => {
    if (e) { e.classList.add("fadeFromRight") }
});

const fadeFromLeft = document.querySelectorAll(".leftFade");
fadeFromLeft.forEach(e => {
    if (e) { e.classList.add("fadeFromLeft") }
});

const fadeFromBottom = document.querySelectorAll(".bottomFade");
fadeFromBottom.forEach(e => {
    if (e) { e.classList.add("fadeFromBottom") }
});

const options = {
    root: null,
    threshold: 0.125
};

const intersectObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add("visible");
        } else
            e.target.classList.remove("visible");
    });
}, options);

fadeFromRight.forEach(e => intersectObserver.observe(e));
fadeFromLeft.forEach(e => intersectObserver.observe(e));
fadeFromBottom.forEach(e => intersectObserver.observe(e));


const sliderButtons = document.querySelectorAll(".slider h3");
const skillBlock = document.querySelector(".skillBlock");

if (sliderButtons) {
    sliderButtons.forEach(b => b.addEventListener("click", async() => {
        if (b.classList.contains("active")) {
            return
        } else {
            sliderButtons.forEach(btn => btn.style.pointerEvents = "none");
            const category = b.className;
            document.querySelector(".slider h3.active").classList.remove("active");
            b.parentElement.className = `slider ${category}`;
            b.classList.add("active");
            await removeCurrentSkills();
            setTimeout(() => addNewSkills(category), 100);
        }
    }));
};

const removeCurrentSkills = async() => {
    const currentSkills = document.querySelectorAll(".skillCard.show");
    for (let s of currentSkills) {
        await removeSkillsPromise(s);
    };
    currentSkills.forEach(s => {
        setTimeout(() => {
            s.classList.remove("show");
            s.classList.replace("fadeOut", "fadeIn");
        }, 100);
    });
};

const addNewSkills = async(category) => {
    const newSkills = document.getElementsByClassName(`skillCard ${category}`);
    for (let s of newSkills) {
        s.classList.add("show");
    }
    for (let s of newSkills) {
        await addSkillsPromise(s);
    };
    sliderButtons.forEach(btn => btn.style.pointerEvents = "all");
};

const removeSkillsPromise = s => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            s.classList.add("fadeOut");
            resolve();
        }, 100)
    });
};

const addSkillsPromise = s => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            s.classList.remove("fadeIn");
            resolve();
        }, 100)
    });
};

 // Get the button that opens the modal
var modalBtn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

const form = document.querySelector(".contact-form");

// When the user clicks the button, open the modal
for (var i = 0; i < modalBtn.length; i++) {
 modalBtn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
    modal.style.position = "fixed";
    form.style.position = "relative";
    form.style.zIndex = -1;
    
      }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";  
      form.style.zIndex = 1; 
    }
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    const form = document.querySelector(".contact-form");
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";      
      form.style.zIndex = 1; 
    }
    }
};

