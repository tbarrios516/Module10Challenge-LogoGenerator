import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Triangle, Square } from './lib/shapes.mjs';

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo (up to 3 characters):',
        validate: (input) => input.length <= 3 || 'Text must be 3 characters or less',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color (keyword or hex):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color (keyword or hex):',
    },
];

function generateLogo({ text, textColor, shape, shapeColor }) {
    let shapeInstance;
    
    switch (shape) {
        case 'Circle':
            shapeInstance = new Circle();
            break;
        case 'Triangle':
            shapeInstance = new Triangle();
            break;
        case 'Square':
            shapeInstance = new Square();
            break;
    }
    
    shapeInstance.setColor(shapeColor);
    
    const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${shapeInstance.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
    `;
    
    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
}

inquirer.prompt(questions).then(answers => {
    generateLogo(answers);
});
