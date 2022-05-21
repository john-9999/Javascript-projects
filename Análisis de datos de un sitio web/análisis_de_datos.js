let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `<b>Protocolo:</b> ${protocol}<br><br>`;
html +=    `<b>Hostname:</b> ${hostname}<br><br>`;
html +=    `<b>pathname:</b> ${pathname}<br><br>`;
html +=    `<b>URL completa:</b> ${href}<br><br>`;

document.write(html);