document.getElementById('convert-button').addEventListener('click', () => {
    const bibtexInput = document.getElementById('bibtex-input').value;
    const bibitemOutput = bibtexToBibitem(bibtexInput);
    document.getElementById('bibitem-output').value = bibitemOutput;
});

function bibtexToBibitem(bibtex) {
    // Implémentez votre fonction de conversion Bibtex en Bibitem ici
    // (Cet exemple utilise une fonction simplifiée)
    const bibtexLines = bibtex.split('\n');
    let bibitem = '';

    bibtexLines.forEach(line => {
        if (line.startsWith('@')) {
            bibitem += '\\bibitem{' + line.split('{')[1].trim();
        } else if (line.includes('=')) {
            let key = line.split('=')[0].trim();
            let value = line.split('=')[1].trim().slice(1, -2);

            if (key === 'author') {
                bibitem += '\n\\newblock ' + value + '.';
            } else if (key === 'title') {
                bibitem += '\n\\newblock \\emph{' + value + '}.';
            } else if (key === 'year') {
                bibitem += '\n\\newblock ' + value + '.';
            }
        }
    });

    bibitem += '\n\n';
    return bibitem;
}
