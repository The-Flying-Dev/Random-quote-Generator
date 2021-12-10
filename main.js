const generateQuote = function() {
    const quote = [
        {
            quote: " “Forget injuries, never forget kindnesses” ",
            author: "― Confucius"
        },
        {
            quote: " “Without music, life would be a mistake.” ",
            author: "― Friedrich Nietzsche"
        },
        {
            quote: "“There is no greater agony than bearing an untold story inside you.” ",
            author: "― Maya Angelou "
        },
        {
            quote: "“We are all in the gutter, but some of us are looking at the stars.”",
            author: "― Oscar Wilde"
        },
        {
            quote: "“I have not failed. I've just found 10,000 ways that won't work.”",
            author: "― Thomas A. Edison "
        }
    ];


let arrayIndex = Math.floor(Math.random() * quote.length);
document.getElementById("quotes").innerHTML = quote[arrayIndex].quote;
document.getElementById("author").innerHTML = quote[arrayIndex].author;
}

window.onload = function() {
    //generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}

