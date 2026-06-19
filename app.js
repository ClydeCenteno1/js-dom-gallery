const loremContainer = document.querySelector("#loremContainer");
const baseLink = "https://picsum.photos/id/";

let userInput = parseInt(prompt("Input number of images: "))

if (isNaN(userInput) || userInput > 1000 || userInput <= 0) {
    const body = document.querySelector("body")
    body.classList.add("bg-red-400")

    const errorContainer = document.createElement("div")
    errorContainer.classList.add("flex", "justify-center", "items-center", "flex-col")

    const errorImage = document.createElement("img")
    errorImage.src = "https://cdn-icons-png.flaticon.com/512/10809/10809585.png"
    errorImage.classList.add("h-[50rem]","max-w-full","h-auto")

    const warning = document.createElement("h1")
    warning.textContent = "INPUT A NUMBER!"
    warning.classList.add("text-[2.5rem]", "font-bold")

    document.querySelector("h1").classList.add("hidden")

    errorContainer.append(errorImage, warning)
    body.append(errorContainer);
} else {
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
}


