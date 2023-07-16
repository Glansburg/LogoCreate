const inquirer = require('inquirer');
const fs = require('fs');
//const colors = require('./node_modules/color-name/index');

// add in require for shapes constructor


const logo = [
    {
        //first object for character input in logo
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters for your logo.',
        validate: function (characters) {
            if (characters.length <= 3) {
                return true;
            }
            return "please enter 3 characters to begin";
        },
    },
    { //second object for text color

        type: 'input',
        name: 'textColor',
        message: 'Enter TEXT color for logo.',
        
    },

    // third object will be for shape

    // fourth object for shape color
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter SHAPE color for logo.',
    
},








]

// TODO: Create a function to initialize app

inquirer.prompt(logo)
    .then(data => {
        console.log(data)
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill=${data.shapeColor} />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.text}</text>
    
    
      
      </svg>`
        console.log(svg);


        fs.writeFile('svgLogo.svg', svg, (err) =>
            err ? console.error(err) : console.log('Success'))
    })













//use classes for shapes only they should have a function on them called render that returns a string that contains shape content <circle cx="150" cy="100" r="80" fill="green" />
// step 2 start with colors next then figure out the shapes.