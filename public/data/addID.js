const fs = require('fs');

//nom de fichier d'entrée
const inputFile = ".json";
const outputFile = ".json";

//lecture du fichier
fs.readFile(inputFile, 'utf-8', (err, data) => {
    if (err) {
        console.error('erreur de lecture', err)
    }

    let compteurID = 0;
    const json = JSON.parse(data);

    // const injectIdBeforeName = (arr) => arr.map((item) => {
    //     const nouvelleEntree = {};
    //     for (const key in item){
    //         if (key=== "name") {
    //             nouvelleEntree['id'] = compteurID++
    //         }
    //         nouvelleEntree[key] = item[key]
    //     }
    //     return nouvelleEntree
    // })


    function injectIdBeforeName(object) {
        if (Array.isArray(object)) {
            return object.map(injectIdBeforeName);
        } else if (typeof object === 'object' && object !== null) {
            const result = {}
            for (const [key, value] of Object.entries(object)) {
                if (key === "name") {
                    result["id"] = compteurID++
                }
                result[key] = injectIdBeforeName(value)
            }
            return result
        }
        return object
    }

    const newJson = {}
    for (const category in json) {
        if (Array.isArray(json[category])) {
            newJson[category] = injectIdBeforeName(json[category])
        } else {
            newJson[category] = injectIdBeforeName(json[category])
        }
    }

    fs.writeFile(outputFile, JSON.stringify(newJson, null, 2), (err) => {
        if (err) return console.error('erreur', err);
        console.log(`${outputFile} généré avec succès`)
    })
})