const text = document.getElementById('texto')

text.addEventListener('mouseover', function() {
    text.style.color = 'red'
})

text.addEventListener('mouseout', function() {
    text.style.color = 'white'
})