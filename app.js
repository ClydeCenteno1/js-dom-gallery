const loremContainer = document.querySelector("#loremContainer");

const baseLink = "https://picsum.photos/id/";

const userInput = parseInt(prompt("Input the number of images you want."))

for (let i = 1; i <= userInput; i++) {
    const loremDiv = document.createElement("div")
    loremDiv.classList.add("border", "p-3", "bg-gray-800", "rounded-lg")

    const loremImg = document.createElement("img")
    loremImg.src = `${baseLink}${i}/200/300`

    const loremNum = document.createElement("p")
    loremNum.classList.add("text-white", "text-center", "text-[1.1rem]")
    loremNum.textContent = `#${i}`

    loremDiv.append(loremImg, loremNum)
    loremContainer.append(loremDiv)
}
