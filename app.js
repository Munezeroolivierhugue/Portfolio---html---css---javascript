const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
let darkMode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch') 

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#00171F';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const enableDarkMode = () => {
	document.body.classList.add('darkmode')
	localStorage.setItem('darkmode','active')
}
const disableDarkMode = () => {
	document.body.classList.remove('darkmode')
	localStorage.setItem('darkmode',null)
}

if(darkMode === 'active') enableDarkMode()
else disableDarkMode()

themeSwitch.addEventListener('click',(e)=>{
	darkMode = localStorage.getItem('darkmode')
	darkMode !== 'active' ? enableDarkMode() : disableDarkMode()
})


const form = document.querySelector("form");
const details = document.querySelector('.content')
const all = document.querySelector('.allcontainer')
const p = document.querySelector('.username')
const c = document.querySelector('.useraddress')
const x = document.querySelector('.useremail');
const e = document.querySelector('.usernumber');
const q = document.querySelector('.usergender');
const d = document.querySelector('.delete');
 let a = localStorage.getItem("contacts");

 if(a==null){
    localStorage.setItem("contacts",JSON.stringify([{names:"murwanashyaka",address:"kamonyi-rukoma",email:"murwa@gmail.com",phone:"0720045021",gender:"male"}]))
    a=localStorage.getItem("contacts");  
 }

form.addEventListener('submit',(e)=>{
    e.preventDefault();
const newArray = JSON.parse(a);
newArray.push({names:form.fullName.value, address:form.address.value, email:form.email.value, phone:form.tel.value, gender:form.gender.value})
console.log(form.fullName.value);
localStorage.setItem('contacts',JSON.stringify(newArray));
alert("success ✅")
  window.location.reload()
})
