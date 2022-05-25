import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  public files = [
    {name: 'app-routing-module.ts', description: 'File that defines the paths for the components you import, so you can get them in the url, example: http://localhost:4200/files'},
    {name: 'app.component.css', description: 'Style file for the default component app.component '},
    {name: 'app.component.html', description: 'Html file for the default component app.component '},
    {name: 'app.component.spec.ts', description: 'Unit test file for the default component app.component, there is one spec.ts file for each .ts file, they run using Jasmine javascript test framework through Karma test runner when you call the (ng test), but you can create a project without those test files'},
    {name: 'app.component.ts', description: 'Typescript file for the default component app.component'},
    {name: 'app.module.ts', description: 'This file declares all the components that will be used in the project with imports and declarations'},
    {name: 'environment.prod.ts / environment.ts', description: 'Those files sets a value production to true or false depending on the file'},
    {name: 'favicon.ico', description: 'Default icon in the top of the browser for the webpage'},
    {name: 'index.html', description: 'The main html file in our project, the first that will be called, inside here we can call components by their selector if we want, by default it calls the app-root selector that corresponds to app.component'},
    {name: 'main.ts', description: 'Indicates the module that will be bootstraped, bootstrap is a term that refers to a file that will be loaded, and by default it will run AppModule'},
    {name: 'polifyfills.ts', description: 'Few lines of code that make our code compatible with different browsers, as we are using ES6, firefox or IE are not compatible, but with this file they are '},
    {name: 'styles.css', description: 'Style sheet for the general project'},
    {name: 'test.ts', description: 'This file loads recursively all the .spec files, so it requires Karma.conf.js and works for unit tests'},
    {name: '.browserslistrc', description: 'It is a file where you can define your target browsers'},
    {name: '.editorconfig', description: 'Configuration file to maintain consistency in code editors to organize basics as identation and whitespace.'},
    {name: '.gitignore', description: 'Tells you when you deploy the project to a GitRepo which files should ignore that arent useful'},
    {name: 'angular.json', description: 'This file has some configurations so our project can run correctly, it indicates which is the main html file, the main style sheet, and some other configurations for each ng comand (ng build, ng serve, ng test)'},
    {name: 'karma.conf.js', description: 'Test runner configuration file, was developed by Angularjs team'},
    {name: 'package-lock.json', description: 'It has a history of the installed packages, and works to optimize the way the dependencies are generated'},
    {name: 'package.json', description: 'It has information about the npm packages we installed and we are using in the project'},
    {name: 'README.md', description: 'Contains commands to execute the project'},
    {name: 'tsconfig.json', description: 'Typescript compiler configuration'},
    {name: 'tsconfig.spec.json', description: 'Typescript configuration for the application test'}
  ]

  public terms = [
    {name: '@ngModule', description: 'Decorator that represents the principal module of the project, and inside that decorator are all the declarations needed for the correct execution of the project'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
