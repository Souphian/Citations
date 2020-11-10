const quotes = [
    {
        quote: `Je ne suis pas un grand programmeur;
        Je suis juste un bon programmeur avec de bonnes habitudes`,
        author: `Mahamadou Baraya A.Wahab`
    },
    {
        quote: `Les programmes doivent être écrits pour que les gens puissent les lire, et non seulement pour que les machines les exécutent.`,
        author: `ABODE Rabiou`
    },
    {
        quote: `La vérité ne peut être trouvée qu'à un seul endroit: le code.`,
        author: `Chef Wakasso`
    },
    {
        quote: `Donnez un programme à un homme, frustrez-le pendant une journée. Apprenez à un homme à programmer, c'est le frustré toute sa vie.`,
        author: `ENIKOY Hassia`
    },
    {
        quote: `La chose la plus désastreuse que vous puissiez apprendre est votre premier langage de programmation.`,
        author: `Harouna Mamagaré Ibrahim`
    },
    {
        quote: `La propriété la plus importante d'un programme est de savoir s'il accomplit l'intention de son utilisateur.`,
        author: `#CS HASSIA`
    },
    {
        quote: `je m'engage à pousser ma branche vers le maître.`,
        author: `MOUCATAR`
    },
    {
        quote: `Le codage n'est pas seulement du code, c'est une chose vivante au service de tout le monde!`,
        author: `Rakia`
    },
]
const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})