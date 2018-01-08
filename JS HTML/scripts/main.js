var img=document.querySelector('img');

img.onclick = function(){
	var source = img.getAttribute('src');
	if (source === 'images/firefox-icon.png'){
		img.setAttribute('src','images/firefox2.png');
	}
	else{
		img.setAttribute('src','images/firefox-icon.png');
	}
}
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName(){
	var myName=prompt('Please enter your name');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Welcome, '+myName;
}
if(!localStorage.getItem('name')){
	setUserName();
}
else{
	var storedName=localStorage.getItem('name');
	myHeading.textContent = 'Welcome '+storedName;
}
myButton.onclick = function(){setUserName()};