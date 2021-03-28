

const buttonHome = document.getElementById("button")
const layerHidden = document.getElementById("hidden")
const closeButton = document.getElementById("close")



buttonHome.addEventListener("click",() => {
    layerHidden.classList.toggle('layer-hidden')

})

closeButton.addEventListener("click", () => {
    layerHidden.classList.toggle('layer-hidden')
})

