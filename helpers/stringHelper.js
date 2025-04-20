


const stringHelper = {
    choiceString: (stringArray) => {
        const number = Math.random() * (stringArray.lenght)
        return stringArray[number]
    }
}

module.exports = stringHelper