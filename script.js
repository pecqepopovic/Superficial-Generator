const sentences = [
    "Đilasovi studenti tuku loptu dok blokiraju GLAVNU ULICU u Beogradu.",
    "Antisrpski ekstremisti blokirali kružni tok Slaviju.",
    "POGLEDAJTE KAKO STANIJA MUZE KOZU!!!",
    "Sin Nenada Čanka ručao sa Kurtijem - Kurti podržao Nezavisnu Vojvodinu.",
    "Opozicionari totalno prolupali, Vučićevo rešenje za najveći problem im je glupost (VIDEO).",
    "Hitna pomoć nije imala puno posla, pošto su svi već bili mrtvi - Ivica Dačić.",
    "IPAK JOJ SE SVIDELO! - Stanija muzla bika misleći da je krava.",
    "Nikad jadniji protesti studenata - ČAK NJIH OKRUGLO 356.",
    "Ko protestuje protiv PREDSEDNIKA, neće dobiti stan.",
    "Student Filološkog fakulteta napravio pravopisnu grešku - ETO KO HOĆE VLAST!",
    "Antisrpski ekstremisti blokirali kružni tok Slaviju.",
    "Deca su vlasništvo države do svoje 18-te godine - Đuka Bizon",
];

function getRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#E3008C.';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let currentSentence = '';
let sentenceIndex = 0;
let charIndex = 0;
let typingInterval;

function typeSentence() {
    if (charIndex < currentSentence.length) {
        const artPiece = document.getElementById('artPiece');
        const sentenceElement = document.createElement('span');
        sentenceElement.textContent = currentSentence[charIndex];
        sentenceElement.style.color = getRandomColor();
        artPiece.appendChild(sentenceElement);
        charIndex++;
    } else {
        clearInterval(typingInterval);
    }
}

function generateArt() {
    const artPiece = document.getElementById('artPiece');
    artPiece.innerHTML = '';

    currentSentence = getRandomSentence();
    charIndex = 0;

    typingInterval = setInterval(typeSentence, 100); // Adjust typing speed here
}

function downloadArt() {
    const artPiece = document.getElementById('artPiece');
    html2canvas(artPiece).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'fluxus_art.png';
        link.click();
    });
}

