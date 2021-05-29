const openingHtml = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
</head>
<body>
    <h1>Team Profile Generator</h1>

<style>
//ADD jumbotron/flexboxes
</style>
    
    `
}

const middleHtml = () => {
}

const endingHtml = () => {
    return `</body>
    </html>`
}

const generateHtml = (answers) => {
    console.log(answers.officenumber)
    return openingHtml() + middleHtml() + endingHtml()
};

module.exports = generateHtml;

// NEED blank array to save data

array [] 
if (input.title === 'Engineer') {
    //Github
} else (input.title === 'Intern') {
    //School
} else (input.title === 'Manager') {
    //Office Number
}

// NEED loop to create small cards with array info