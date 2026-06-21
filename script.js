document.addEventListener('DOMContentLoaded', () => {
    let inputText = document.querySelector("#input")
    let outputText = document.querySelector("#output")
    let translateBtn = document.querySelector("#translateBtn")

    let email = 'olexanderkatriuk@gmail.com'

    async function translateText() {
        const text = inputText.value
        const safeText = encodeURIComponent(text)
        const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`
        if(text === '') {
            inputText.classList.add("error");
            inputText.placeholder = 'Введіть текст!'
            setTimeout(() => {
                inputText.placeholder = 'Введіть текст українською...';
                inputText.classList.remove("error");
            }, 3000);
            return
        }
        const response = await fetch(url)
        const data = await response.json()
        
        console.log(data.responseData)
        outputText.innerText = data.responseData.translatedText
    }   
    
    translateBtn.addEventListener('click', translateText)

});