$('#overlay').on('click',
function(event) {
    if (event.target.tagName === 'BUTTON' && event.target.id) {
        document.getElementById('elder-' + /\d+/.exec(event.target.id)[0]).play();
    }
});
