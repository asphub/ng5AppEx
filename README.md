# Ng5AppEx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Tutorial - steps

### Step 1
Install Angular via CLI.
```bash
npm install -g @angular/cli
```

### Step 2
Create a new project
```bash
ng new ng5crud
```

### Step 3
Make three components of the application.

Create one directory inside src  >>  app folder called components.
```bash
ng g c index
ng g c create
ng g c edit
```
We have created three components. Each component will do its job. Here we are establishing the single responsibility principle for every component.

It makes a separate folder inside src  >>  app directory. We need to move all these three folders inside components folder.

Also, we need to change the app.module.ts file, to write the correct path of the imported components. By default, it’s an app directory.

