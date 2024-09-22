var Quotelist = [
    {
        quote: "“ Be yourself; everyone else is already taken. ”",
        Auther: "--Oscar Wilde"
    },
    {
        quote: "“ So many books, so little time. ”",
        Auther: "--Frank Zappa"
    },
    {
        quote: "“ Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ”",
        Auther: "--Albert Einstein"
    },
    {
        quote: "“ A room without books is like a body without a soul. ”",
        Auther: "--Marcus Tullius Cicero"
    },
    {
        quote: "“ Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ”",
        Auther: "--Bernard M. Baruch"
    },
    {
        quote: "“ You only live once, but if you do it right, once is enough. ”",
        Auther: "--Mae West"
    },
    {
        quote: "“ You know you're in love when you can't fall asleep because reality is finally better than your dreams. ”",
        Auther: "--Dr. Seuss"
    },
    {
        quote: "“ Be the change that you wish to see in the world. ”",
        Auther: "--Mahatma Gandhi"
    }
];

function displayQuotes() {
    var num = Math.floor(Math.random() * Quotelist.length)

    document.getElementById("quote").innerHTML = Quotelist[num].quote;
    document.getElementById("auther").innerHTML = Quotelist[num].Auther;
}