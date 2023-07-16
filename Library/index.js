const inquirer = require('inquirer');
const fs = require('fs');
//import colors from 'color-name';

// take this information and make it into a string
const logo = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters for your logo.',
        validate: function (characters) {
            if (characters.length <= 3) {
                return true;
            }
            return "please enter 3 characters to begin";
        },

       // type: 'input',
      //  name: 'text-color',
       // message: 'type in your favorite color for logo.',
        


    }
    
    
       
    
]

// TODO: Create a function to initialize app

inquirer.prompt(logo)
    .then(data => {
        console.log(data)
        
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="green" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.text}</text>
    
    
      
      </svg>`
        console.log(svg);
        
        
fs.writeFile('svgLogo.svg', svg(data), (err) =>
err ? console.error(err) : console.log('Success'))
    })

//use fs write file 

// step 1 Function call to initialize app

// Function call to initialize app
//function init() {
    //inquirer.prompt(logo)
        //.then(data => svg(data))
//}

// Function call to initialize app invocked.
//init();







//use classes for shapes only they should have a function on them called render that returns a string that contains shape content <circle cx="150" cy="100" r="80" fill="green" />
// step 2 start with colors next then figure out the shapes.