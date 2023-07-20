let checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach(item => {
    item.addEventListener('click', (e) => {
        let input = item.querySelector('input');
        if (input.checked) {
            input.checked = false;
            item.classList.remove('active-checkbox')
        } else {
            input.checked = true;
            item.classList.add('active-checkbox')
        }
    })
});


// Emoji module

let emoji = document.querySelectorAll('.es-emoji-module .item'),
    facts = document.querySelectorAll('.facts')
function removeActiveEmoji() {
    emoji.forEach(item => {
        item.classList.remove('active-emoji')
    })
}

function removeActiveFact() {
    facts.forEach(item => {
        item.classList.remove('active-fact')
    })
}


emoji.forEach(item => {
    item.addEventListener('click', (e) => {
        removeActiveEmoji();
        item.classList.add('active-emoji')
        removeActiveFact();
        facts[e.target.dataset.emid].classList.add('active-fact')
        document.querySelector('.es-emoji-module').style.cssText = 'margin-top: 0px';
        document.querySelector('.emoji-section .blue-btn ').style.cssText = 'display: block';

    })
})



function startProgress(e) {
    let pBar = document.querySelectorAll('.final');
    let i = 0;
    let interval = setInterval((e) => {
        let pValue = pBar[i].previousElementSibling.querySelector('.value-p')
        pValue.innerHTML = pBar[i].value + '%'
        pBar[i].value++;
        if (pBar[i].value === 100) {
            let checkout = pBar[i].previousElementSibling.querySelector('.pb-icon')
            checkout.classList.add('active-icon')
            pBar[i].classList.add('inactive-pbar')
            pBar[i].previousElementSibling.querySelector('.value-p').remove();
            i++;
            if (i === 1) {
                document.querySelector('.popup1').style.display = 'flex';
                let poupBtn = document.querySelectorAll('.popup-buttons.one button');
                poupBtn.forEach(item => {
                    item.addEventListener('click', (e) => {
                        document.querySelector('.popup1').style.display = 'none';
                    })
                })
            }
            if (i === 3) {
                document.querySelector('.popup2').style.display = 'flex';
                let poupBtn = document.querySelectorAll('.popup-buttons.one button');
                poupBtn.forEach(item => {
                    item.addEventListener('click', (e) => {
                        document.querySelector('.popup2').style.display = 'none';
                    })
                })
            }
            console.log(checkout)
            if (i === pBar.length) {
                clearInterval(interval);
                document.querySelector('.review-block').classList.add('close');
                document.querySelector('.final-section .blue-btn').classList.add('open')
            }

        }
    }, 50);
}



window.startProgress = startProgress;


// Next section funstion

let progressBar = document.querySelector('#file');

let gna = document.querySelectorAll('.quiz-box');
gna.forEach(item => {
    item.addEventListener('click', (e) => {
        document.querySelector('.qb-1').classList.add('closeSection')
        document.querySelector('.select-gender').classList.add('openSection')
        document.querySelector('.header').classList.add('closeSection')
        document.querySelector('.dif-header').classList.add('openSection');
        document.querySelector('.progress').classList.add('openSection');
        document.querySelector('.profile').classList.add('openSection');
    })
})


let selectGender = document.querySelectorAll('.sg-block');
selectGender.forEach(item => {
    item.addEventListener('click', (e) => {
        document.querySelector('.select-gender').classList.remove('openSection');
        document.querySelector('.section-cong').classList.add('openSection');
        progressBar.value = 10;
    })
})


document.querySelector('.section-cong .blue-btn').addEventListener('click', (e) => {
    document.querySelector('.section-cong').classList.remove('openSection');
    document.querySelector('.multiselect-section').classList.add('openSection');
    progressBar.value = 30;
})


document.querySelector('.multiselect-section .blue-btn').addEventListener('click', (e) => {
    document.querySelector('.multiselect-section').classList.remove('openSection');
    document.querySelector('.famous-human').classList.add('openSection');
    progressBar.value = 45;
    document.querySelector('#point2').classList.add('active-point')
    document.querySelector('#point2').classList.remove('next-point')
    document.querySelector('#point3').classList.add('next-point')
})

document.querySelector('.famous-human .blue-btn').addEventListener('click', (e) => {
    document.querySelector('.famous-human').classList.remove('openSection');
    document.querySelector('.emoji-section').classList.add('openSection');
    progressBar.value = 60;

    document.querySelector('.emoji-section').style.cssText ='max-width: 355px;'
    document.querySelector('.facts.active-fact').style.cssText ='margin-top: 50px'
})

document.querySelector('.emoji-section .blue-btn').addEventListener('click', (e) => {
    document.querySelector('.emoji-section').classList.remove('openSection');
    document.querySelector('.book-section').classList.add('openSection');
    progressBar.value = 80;
    document.querySelector('#point3').classList.add('active-point')
    document.querySelector('#point3').classList.remove('next-point')
    document.querySelector('#point4').classList.add('next-point')
    document.querySelector('.profile').style.cssText ='display: none !important;'
    document.querySelector('.progress.openSection').style.cssText ='display: none !important;'
})

let bookBtn = document.querySelectorAll('.book-section button');
bookBtn.forEach(item => {
    item.addEventListener('click', (e) => {
        document.querySelector('.book-section').classList.remove('openSection');
        document.querySelector('.final-section').classList.add('openSection')
        startProgress();
        document.querySelector('.back-btn').remove();
})
})

let fpopupBtn = document.querySelectorAll('.popup2 button');
fpopupBtn.forEach(item => {
    item.addEventListener('click', (e) => {
        document.querySelector('.popup2').style.display='none';
        document.querySelector('.final-section').classList.remove('openSection');
        document.querySelector('.email-section').classList.add('openSection')
    })
})


document.querySelector('.email-section .blue-btn').addEventListener('click', (e) => {
    document.querySelector('.email-section ').classList.remove('openSection');
    document.querySelector('.last-section').classList.add('openSection');
})