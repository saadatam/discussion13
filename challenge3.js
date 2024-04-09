window.addEventListener('load', function(){
    alert("loaded")
    let fig = document.querySelectorAll('figcaption')
    console.log(fig[1].innerHTML)


    // textContent simply changes text
    // innerHTML is interpreted as html code to be inserted
})