const inquirer = require('inquirer')

const inquirerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What's your name?"
    }
]

inquirer.prompt(inquirerQuestions).then(answers => {
    console.log(`Hi ${answers['name']}!`)
})

module.exports = {
    inquirer,
    inquirerQuestions
}
