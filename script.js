const nav_button_about_me = document.getElementById('nav_button_about_me');
const nav_button_links = document.getElementById('nav_button_links');
const nav_button_skills = document.getElementById('nav_button_skills');
const nav_button_works = document.getElementById('nav_button_works');

const vk_logo = document.getElementById('vk_logo');
const git_logo = document.getElementById('git_logo');

const number = document.getElementById('number');
const mail = document.getElementById('mail');

const container_for_work_card_1 = document.getElementById('container_for_work_card_1');
const container_for_work_card_2 = document.getElementById('container_for_work_card_2');
const container_for_work_card_3 = document.getElementById('container_for_work_card_3');
const container_for_work_card_4 = document.getElementById('container_for_work_card_4');





// nav buttons

// about me
nav_button_about_me.addEventListener('mouseenter', () => {
    document.getElementById("nav_button_about_me").style.color = "white";
    nav_button_about_me.style.transform = "scale(1.1, 1.1)";
    nav_button_about_me.style.transition = "0.5s";
})

nav_button_about_me.addEventListener('mouseleave', () => {
    document.getElementById("nav_button_about_me").style.color = "white";
    nav_button_about_me.style.transform = "scale(1, 1)";
    nav_button_about_me.style.transition = "0.5s";
})

// links
nav_button_links.addEventListener('mouseenter', () => {
    document.getElementById("nav_button_links").style.color = "white";
    nav_button_links.style.transform = "scale(1.1, 1.1)";
    nav_button_links.style.transition = "0.5s";
})

nav_button_links.addEventListener('mouseleave', () => {
    document.getElementById("nav_button_links").style.color = "white";
    nav_button_links.style.transform = "scale(1, 1)";
    nav_button_links.style.transition = "0.5s";
})

// skills
nav_button_skills.addEventListener('mouseenter', () => {
    document.getElementById("nav_button_skills").style.color = "white";
    nav_button_skills.style.transform = "scale(1.1, 1.1)";
    nav_button_skills.style.transition = "0.5s";
})

nav_button_skills.addEventListener('mouseleave', () => {
    document.getElementById("nav_button_skills").style.color = "white";
    nav_button_skills.style.transform = "scale(1, 1)";
    nav_button_skills.style.transition = "0.5s";
})

// works
nav_button_works.addEventListener('mouseenter', () => {
    document.getElementById("nav_button_works").style.color = "white";
    nav_button_works.style.transform = "scale(1.1, 1.1)";
    nav_button_works.style.transition = "0.5s";
})

nav_button_works.addEventListener('mouseleave', () => {
    document.getElementById("nav_button_works").style.color = "white";
    nav_button_works.style.transform = "scale(1, 1)";
    nav_button_works.style.transition = "0.5s";
})

// social icons

// vk logo
vk_logo.addEventListener('mouseenter', () => {
    document.getElementById("vk_logo").style.color = "white";
    vk_logo.style.transform = "scale(1.1, 1.1)";
    vk_logo.style.transition = "0.5s";
})

vk_logo.addEventListener('mouseleave', () => {
    document.getElementById("vk_logo").style.color = "white";
    vk_logo.style.transform = "scale(1, 1)";
    vk_logo.style.transition = "0.5s";
})

// git logo
git_logo.addEventListener('mouseenter', () => {
    document.getElementById("git_logo").style.color = "white";
    git_logo.style.transform = "scale(1.1, 1.1)";
    git_logo.style.transition = "0.5s";
})

git_logo.addEventListener('mouseleave', () => {
    document.getElementById("git_logo").style.color = "white";
    git_logo.style.transform = "scale(1, 1)";
    git_logo.style.transition = "0.5s";
})

// social links

// number
number.addEventListener('mouseenter', () => {
    document.getElementById("number").style.color = "white";
    number.style.transform = "scale(1.05, 1.05)";
    number.style.transition = "0.5s";
})

number.addEventListener('mouseleave', () => {
    document.getElementById("number").style.color = "white";
    number.style.transform = "scale(1, 1)";
    number.style.transition = "0.5s";

})

// mail
mail.addEventListener('mouseenter', () => {
    document.getElementById("mail").style.color = "white";
    mail.style.transform = "scale(1.05, 1.05)";
    mail.style.transition = "0.5s";
})

mail.addEventListener('mouseleave', () => {
    document.getElementById("mail").style.color = "white";
    mail.style.transform = "scale(1, 1)";
    mail.style.transition = "0.5s";
})


// works elements

// cards animations

// card 1
container_for_work_card_1.addEventListener('mouseenter', () => {
    document.getElementById("container_for_work_card_1").style.color = "white";
    container_for_work_card_1.style.transform = "scale(1.04, 1.04)";
    container_for_work_card_1.style.transition = "0.5s";
})

container_for_work_card_1.addEventListener('mouseleave', () => {
    document.getElementById("container_for_work_card_1").style.color = "white";
    container_for_work_card_1.style.transform = "scale(1, 1)";
    container_for_work_card_1.style.transition = "0.5s";
})

// card 2
container_for_work_card_2.addEventListener('mouseenter', () => {
    document.getElementById("container_for_work_card_2").style.color = "white";
    container_for_work_card_2.style.transform = "scale(1.04, 1.04)";
    container_for_work_card_2.style.transition = "0.5s";
})

container_for_work_card_2.addEventListener('mouseleave', () => {
    document.getElementById("container_for_work_card_2").style.color = "white";
    container_for_work_card_2.style.transform = "scale(1, 1)";
    container_for_work_card_2.style.transition = "0.5s";
})

// card 3
container_for_work_card_3.addEventListener('mouseenter', () => {
    document.getElementById("container_for_work_card_3").style.color = "white";
    container_for_work_card_3.style.transform = "scale(1.04, 1.04)";
    container_for_work_card_3.style.transition = "0.5s";
})

container_for_work_card_3.addEventListener('mouseleave', () => {
    document.getElementById("container_for_work_card_3").style.color = "white";
    container_for_work_card_3.style.transform = "scale(1, 1)";
    container_for_work_card_3.style.transition = "0.5s";
})

// card 4
container_for_work_card_4.addEventListener('mouseenter', () => {
    document.getElementById("container_for_work_card_4").style.color = "white";
    container_for_work_card_4.style.transform = "scale(1.04, 1.04)";
    container_for_work_card_4.style.transition = "0.5s";
})

container_for_work_card_4.addEventListener('mouseleave', () => {
    document.getElementById("container_for_work_card_4").style.color = "white";
    container_for_work_card_4.style.transform = "scale(1, 1)";
    container_for_work_card_4.style.transition = "0.5s";
})
