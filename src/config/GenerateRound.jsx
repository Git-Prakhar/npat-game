function generateRound(amount, data) {
    let round = [];
    for (let i = 0; i < amount; i++) {
        let randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        let correctOption = Math.floor(Math.random() * 4);
        let npat = data.filter((item) => item.Letter === randomLetter);

        let nameOptions = [];
        let placeOptions = [];
        let animalOptions = [];
        let thingOptions = [];

        for(let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * data.length);
            while(data[randomIndex].Letter === randomLetter || nameOptions.includes(data[randomIndex].nameURL)) {
                randomIndex = Math.floor(Math.random() * data.length);
            }
            nameOptions.push(data[randomIndex].nameURL);
        }

        for(let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * data.length);
            while(data[randomIndex].Letter === randomLetter || placeOptions.includes(data[randomIndex].placeURL)) {
                randomIndex = Math.floor(Math.random() * data.length);
            }
            placeOptions.push(data[randomIndex].placeURL);
        }

        for(let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * data.length);
            while(data[randomIndex].Letter === randomLetter || animalOptions.includes(data[randomIndex].animalURL)) {
                randomIndex = Math.floor(Math.random() * data.length);
            }
            animalOptions.push(data[randomIndex].animalURL);
        }

        for(let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * data.length);
            while(data[randomIndex].Letter === randomLetter || thingOptions.includes(data[randomIndex].thingURL)) {
                randomIndex = Math.floor(Math.random() * data.length);
            }
            thingOptions.push(data[randomIndex].thingURL);
        }


        round.push({
            roundId: i + 1,
            roundLetter: randomLetter,
            correctOption: correctOption,
            correctURL: {
                name: npat[0].nameURL,
                place: npat[0].placeURL,
                animal: npat[0].animalURL,
                thing: npat[0].thingURL
            },
            options: {
                name: nameOptions,
                place: placeOptions,
                animal: animalOptions,
                thing: thingOptions
            }
        });
    }
    console.log(round);
    return round;
}

export default generateRound;