window.onload = function() {
    // alert('hi')
    var btn = document.querySelector('button')
    var div = document.querySelector('div')
    btn.addEventListener('click', function() {
        alert('hi')
        div.style.backgroundColor = 'red'
        div.innerHTML = 'magic!'
    })
}