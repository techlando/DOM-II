import './less/index.less'

// Your code goes here!
// 1- load event
window.onload = function (evt){
    console.log(`event ${evt.type} fired! ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!'
    
// 2-copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })

//3 click
 document.body.addEventListener('click', evt => {
     evt.target.classList.toggle('mirror')
 })


 // 4 double click
    document.body.addEventListener('dblclick', evt => {
        evt.target.outerHTML = ''
    })

    // 5- keydown

    window.addEventListener('keydown', evt => {
        if(evt.key == 6){
            document.body.innerHTML = '<h1>YOU RAN ORDEER 66</h1>'
        }
    })

    //6 mousemove
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY} = evt 
        // console.log(`mouse is at ${clientX, clientY}`)
    })

    //7 mouse enter
    // 8 mouse leave
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            setTimeout(() => {
                destination.style.fontWeight = 'initial'
            }, 500)
        })
    }

    window.addEventListener('scroll', evt => {
        evt.target.outerHTML = ''
    })
}



