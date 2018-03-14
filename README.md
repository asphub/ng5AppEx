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

## Tutorial - Steps

### **Step 1**
#### Install Angular via CLI.

```bash
npm install -g @angular/cli
```

### **Step 2**
#### Create a new project
```bash
ng new ng5AppEx
```

### **Step 3**
#### Make three components of the application.

Create one directory inside `src/app` folder called components.
```bash
ng g c index
ng g c create
ng g c edit
```
We have created three components. Each component will do its job. Here we are establishing the single responsibility principle for every component.

It makes a separate folder inside `src/app` directory. We need to move all these three folders inside components folder.

Also, we need to change the app.module.ts file, to write the correct path of the imported components. By default, it’s an app directory.

### **Step 4**
#### Routing and Navigation
The Angular Router enables navigation from one view to the next as users perform application tasks.
First, we need to import the routing modules inside our app.module.ts file.
```typescript
// app.module.ts
import { RouterModule } from '@angular/router';

imports: [
  BrowserModule, RouterModule
]
```
> Configuration

When we have created the components, it’s by default path is different and now we have moved to the components, so now its path is different. So, first, we need to change that path in `app.module.ts` file.

Okay, now we need to configure the routes. So make one file inside app directory called routerConfig.ts file.

Write the following code in it.
```ts
// routerConfig.ts
import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';

export const appRoutes: Routes = [
  { path: 'create', 
    component: CreateComponent 
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  { path: 'index',
    component: IndexComponent
  }
];
```
We have defined one array, and inside that array, we have registered the different routes with their components. Finally, we have exported it.

Now, import this object inside `app.module.ts` and register the module.

```ts
// app.module.ts
import { appRoutes } from './routerConfig';

imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
]
```

### **Step 5**
#### Define the Router outlet
In the `app.component.html` file, make the following changes on code
```html
<div class="t-c">
  <h1>
    Welcome to {{title}}!!
  </h1>
  <nav>
    <a routerLink="create" routerLinkActive="active">Add coins</a>
  </nav>
  <router-outlet></router-outlet>
</div>
```
Also, we need to change the title attribute in `app.component.ts`

```ts
// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the NG world';
}
```

Add some styles on `app.component.scss`

```scss
.t {
  &-l { text-align: left; }
  &-c { text-align: center; }
  &-r { text-align: right; }
  &-j { text-align: justify; }
}
```
**_OR_**

can be write the global styles on `styles.scss`

### **Step 6**
Styles for layout with Angular Material

More Details: [https://material.angular.io/guide/getting-started](https://material.angular.io/guide/getting-started)

Install Angular Material and Angular CDK
```bash
npm install --save @angular/material @angular/cdk
```
Animations
```bash
npm install --save angular/material2-builds angular/cdk-builds
```
Gesture Support
```bash
npm install --save hammerjs
```

#### Customising the Material theme
> `style.scss`
```scss
// @import "~@angular/material/prebuilt-themes/indigo-pink.css";

@import '~@angular/material/theming';
// Plus imports for other components in your app.

// Include the common styles for Angular Material. We include this here so that you only
// have to load a single css file for Angular Material in your app.
// Be sure that you only ever include this mixin once!
@include mat-core();

// Define the palettes for your theme using the Material Design palettes available in palette.scss
// (imported above). For each palette, you can optionally specify a default, lighter, and darker
// hue. Available color palettes: https://www.google.com/design/spec/style/color.html
$candy-app-primary: mat-palette($mat-indigo);
$candy-app-accent:  mat-palette($mat-pink, A200, A100, A400);

// The warn palette is optional (defaults to red).
$candy-app-warn:    mat-palette($mat-red);

// Create the theme object (a Sass map containing all of the palettes).
$candy-app-theme: mat-light-theme($candy-app-primary, $candy-app-accent, $candy-app-warn);

// Include theme styles for core and each component used in your app.
// Alternatively, you can import and @include the theme mixins for each component
// that you are using.
@include angular-material-theme($candy-app-theme);

html, body {
  margin: 0;
}

...
```

#### Importing Modules for material Support

> `app.module.ts`

```ts
...
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

...

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule { }
```

#### Adding CSS For Material Icons
> `index.html`
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

#### Import `hammerjs`
> `main.ts`
```ts
import 'hammerjs';
```

#### Creating Layout with Material
> `app.component.html`

```html
<mat-toolbar color="primary">
  <mat-toolbar-row>
    <a routerLink="index" routerLinkActive="active" mat-button>
      <mat-icon class="icon">home</mat-icon>
    </a>
    <h1>
      Welcome to {{title}}!!
    </h1>
    <span class="spacer"></span>
    <a routerLink="create" routerLinkActive="active" mat-button>
      <mat-icon class="icon">add</mat-icon>
      <span>Coin</span>
    </a>
  </mat-toolbar-row>
</mat-toolbar>

<mat-sidenav-container class="example-container">
  <mat-sidenav mode="side" opened>
    Sidenav content
  </mat-sidenav>
  <mat-sidenav-content>
    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>
```

### **Step 7**
#### Proper layouts for content area
> `index.component.html`
```html
<main class="main">
    index works!
</main>
```
> `create.component.html`
```html
<main class="main">
    create works!
</main>
```
> `edit.component.html`
```html
<main class="main">
    index works!
</main>
```

#### Adding some CSS
> `style.scss`
```scss
...

main {
  padding: 15px;
}
```
<!-- https://appdividend.com/2018/01/21/angular-5-crud-tutorial-example-scratch/ -->
