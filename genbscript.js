var e = document.createElement('div');
var param = window.location.search.split('?');
e.id = btoa(param.length == 1 ? "" : param[1]);
e.style.display = 'none';
document.body.appendChild(e);
window.id = e.id;
window.pm = param[1];
