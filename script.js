const overlay = document.getElementById('overlay');
const overlayShow = document.getElementById('show-overlay');
const overlayClose = document.getElementById('close-overlay');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarkContainer = document.getElementById('bookmarks-container');

//  Show overlay, Focus on Input \

function showOverlay(){
    overlay.classList.add('show-overlay');
    websiteNameEl.focus();
}


// Overlay event Listeners

overlayShow.addEventListener('click',showOverlay);
overlayClose.addEventListener('click', () => modal.classList.remove('show-overlay'));
// window.addEventListener('click',(e) => (e.target === modal ? modal.classList.remove('show-modal') : false));