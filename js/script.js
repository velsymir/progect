'use strict';

let xhr = new XMLHttpRequest();
let url = new URL('https://randomuser.me/api/');
xhr.open('get', url);
xhr.send();
xhr.addEventListener('readyStateChange', () => {
	console.log(xhr.readyState)
})