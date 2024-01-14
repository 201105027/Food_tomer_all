const open_btns = document.querySelectorAll('button[data-modal]');
const close_btns = document.querySelectorAll('[data-close]');
const modal = document.querySelector('.modal');

open_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade');
    };
});

close_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade');
    };
});

const slides = document.querySelectorAll('.offer__slide');
const next_btn = document.querySelector('.offer__slider-next');
const prev_btn = document.querySelector('.offer__slider-prev');

let slideIndex = 0;

slideShow(slideIndex);

function slideShow(n) {
    if (n === slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => slide.classList.add('hide', 'fade'));
    slides[slideIndex].classList.remove('hide');
}

next_btn.onclick = () => {
    slideIndex++;
    slideShow(slideIndex);
};

prev_btn.onclick = () => {
    slideIndex--;
    slideShow(slideIndex);
};

let tabContents = document.querySelectorAll('.tabcontent');
let tabs = document.querySelectorAll('.tabheader__item');
let tabHeaderParent = document.querySelector('.tabheader__items');

function hideTabs() {
    tabContents.forEach((tab) => {
        tab.classList.add('hide');
        tab.classList.remove('show', 'fade');
    });

    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active');
    });
}

function showTab(i) {
    tabContents[i].classList.add('show', 'fade');
    tabContents[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
}

hideTabs();
showTab(0);

tabHeaderParent.onclick = (e) => {
    let target = e.target;

    if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, idx) => {
            if (target === item) {
                hideTabs();
                showTab(idx);
            }
        });
    }
};
const user_data = {
    gender: "woman"
};

const gender_btns = document.querySelectorAll('[data-gender]');
const inputs = document.querySelectorAll('.calculating__choose_medium input');
const actions = document.querySelectorAll('.calculating__choose_big div');
const result_view = document.querySelector('#result');

gender_btns.forEach(btn => {
    btn.onclick = () => {
        gender_btns.forEach(btn => btn.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        const g = btn.dataset.gender
        user_data["gender"] = g
    }
})


inputs.forEach(inp => {
    inp.onkeyup = () => {
        user_data[inp.id] = inp.value
    }
})

let prev = 1

actions.forEach((div, idx) => {
    div.onclick = () => {
        actions[prev].classList.remove('calculating__choose-item_active')
        div.classList.add('calculating__choose-item_active')
        prev = idx

        const sft = div.dataset.sft;

        if(user_data.gender === 'woman') {
            const result = (655.1 + (9.563 * user_data["weight"]) + (1.85 * user_data["height"]) - (4.676 * user_data["age"])) * sft
            result_view.innerHTML = Math.round(result)
        }else {
            const result = (66.5 + (1.375 * user_data["weight"]) + (5.003 * user_data["height"]) - (6.775 * user_data["age"])) * sft
            result_view.innerHTML = Math.round(result)
        }
    }
})



let days = 12
let hours = 20
let minutes = 56
let seconds = 5


const timer_interval = setInterval(updateTimer, 1000)
function updateTimer() {
  seconds--
  if (seconds < 0) {
    seconds = 59;
    minutes--
  }else if(minutes < 0) {
    minutes = 59;
    hours--
  } else if(hours < 0) {
    hours = 23;
    days--
  } else if (days < 0) {
    clearInterval(timer_interval)
  }
  document.querySelector("#days").innerHTML = days
  document.querySelector("#hours").innerHTML = hours
  document.querySelector("#minutes").innerHTML = minutes
  document.querySelector("#seconds").innerHTML = seconds
}

