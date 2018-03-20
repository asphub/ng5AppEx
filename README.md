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

.mat-toolbar {
  a {
    color: currentColor;
  }
  .mat-button {
    padding: 0 14px;
  }
}
```

#### Importing Modules for material Support

> `app.module.ts`

```ts
...
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

### **Step 8**
#### Adding Responsive Grids

You can either to use Bootstrap / any other grids or can be write a new grid system

I have a extracted a subset of Bootstrap-4 for Grid and basic functionalities. You can avail this copy on this [link](https://github.com/asphub/bootstrap-4-grid)

Add `scss` folder and `bootstrap.scss` directly on the `src` folder

Adding Bootstrap CSS globally
> `.angular-cli.json`
```JSON
...

"styles": [
  "bootstrap.scss",
  "styles.scss"
],

...
```

### **Step 9**
#### Make a form in the create a component file.
First, our `create.component.ts` file looks like this.
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Coin';
  constructor() { }

  ngOnInit() {
  }

}
```
And then, we need to make the `create.component.html` form design.

```html
<main class="main">
  <div class="row">
    <div class="col-lg-4 col-md-6">
      <mat-card class="form-card">
        <mat-card-header>
          <div mat-card-avatar><mat-icon class="icon">monetization_on</mat-icon></div>
          <mat-card-title>Coins</mat-card-title>
          <mat-card-subtitle>Create</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <div class="form-container">
            <mat-form-field>
              <input matInput placeholder="Coin Name">
            </mat-form-field>
            <mat-form-field>
              <input matInput placeholder="Coin Price">
            </mat-form-field>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <div class="spacer"></div>
          <button mat-button color="accent">Add</button>
        </mat-card-actions>
      </mat-card>
    </div>
  </div>
</main>
```

Adding some styles 😉

```scss
.mat-card {
  & > &-actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    box-sizing: border-box;
  }
}

.form-container {
  display: flex;
  padding: 30px 0;
  flex-direction: column;
  & > * {
    width: 100%;
  }
}
```

### **Step 10**
Configure HttpClientModule

> `HttpClientModule` is a new API that came with 4.3, it has updated API's with support for progress events, json deserialization by default, Interceptors and many other great features. See more [here](https://angular.io/guide/http), whereas `HttpModule` is the older API and will eventually be deprecated.

Go to the `app.module.ts` file. Include the `HttpClientModule` in it.
```ts
import {HttpClientModule} from '@angular/common/http';
...

imports: [
  ...

  HttpClientModule,

  ...
],
```

### **Step 11**
#### Create services to send http requests

Type the following command in your terminal.
```bash
ng g service coin
```

It will create the following classes.

1. `coin.service.ts`
2. `coin.service.spec.ts`

Now, import the service file into the `app.module.ts` file.

```ts
import { CoinService } from './coin.service';

providers: [CoinService]
```

### **Step 12**
#### Configure `node.js` MongoDB backend.

Next step, would be to create `node.js` and Express backend to store the data. Create one file in the project root called `server.js`

Now, we need to install the express framework and other dependencies via NPM, so let us do it first.
```bash
npm install --save express body-parser cors mongoose nodemon
```
Switch to newly created `server.js` file and enter the following code into it.

> `server.js`
```js
var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose');

const app = express();

var port = process.env.PORT || 4000;

var server = app.listen(function(){
  console.log('Listening on port ' + port);
});
```
Next thing is we need to create the **MongoDB** database and connect it with our express application.

> Note: You need to have installed MongoDB database on your server or local otherwise first you need to download it and start the **MongoDB** server.

Create one config folder inside project root. In that create one file called `DB.js`.

> `DB.js`
```js
module.exports = {
   DB: 'mongodb://localhost:27017/angularcrud'
};
```
Import this file into our `server.js` file and use **mongoose** to set up a database connection with **MongoDB**. You need to copy the whole `server.js` file; I am about to show so that nothing will left and lead us to error.

> `server.js`
```js
const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => { console.log('Database is connected') },
  err => { console.log('Cannot connect to the database' + err) }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});
```

### **Step 13**
#### Create Express routes for our application
Now, we need to create two folders in root called `expressRoutes` and `models`.

In models folder, create one model called `Coin.js`.
```js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Coin = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  }
},{
    collection: 'coins'
});

module.exports = mongoose.model('Coin', Coin);
```
In the expressRoutes folder, create one file called `coinRoutes.js`.

> `coinRoutes.js`
```js
var express = require('express');
var app = express();
var coinRoutes = express.Router();

// Require Item model in our routes module
var Coin = require('../models/Coin');

// Defined store route
coinRoutes.route('/add').post(function (req, res) {
  var coin = new Coin(req.body);
   coin.save()
    .then(item => {
    res.status(200).json({'coin': 'Coin added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
coinRoutes.route('/').get(function (req, res) {
   Coin.find(function (err, coins){
    if(err){
      console.log(err);
    }
    else {
      res.json(coins);
    }
  });
});

// Defined edit route
coinRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Coin.findById(id, function (err, coin){
      res.json(coin);
  });
});

//  Defined update route
coinRoutes.route('/update/:id').post(function (req, res) {
   Coin.findById(req.params.id, function(err, coin) {
    if (!coin)
      return next(new Error('Could not load Document'));
    else {
      coin.name = req.body.name;
      coin.price = req.body.price;

      coin.save().then(coin => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
coinRoutes.route('/delete/:id').get(function (req, res) {
   Coin.findByIdAndRemove({_id: req.params.id}, function(err, coin){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = coinRoutes;
```
Here, I have defined all the routes related to CRUD application.

This file will be included in our `server.js` file.

```js
coinRoutes = require('./expressRoutes/coinRoutes');

app.use('/coins', coinRoutes);
```

### **Step 14**
#### Insert the value in the MongoDB.
From the front end side, we need to set up `HttpClientModule` and fire up the HTTP Post call to the NodeJS server.

> `server.js`
```javascript
const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB'),
  coinRoutes = require('./expressRoutes/coinRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/coins', coinRoutes);

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
```

We need to include the `ReactiveFormsModule` in the `app.module.ts` file.
```ts
import { ReactiveFormsModule } from '@angular/forms';
...
@NgModule({
  ...
  imports:[
    ...
    ReactiveFormsModule,
    ...
  ],
  ...
});
```
Then, we are validating the forms. So first write the form HTML in the `create.component.html`.
> `create.component.html`
```html
<form [formGroup]="coinForm" novalidate>
  <mat-card class="form-card">
    <mat-card-header>
      <div mat-card-avatar>
        <mat-icon class="icon">monetization_on</mat-icon>
      </div>
      <mat-card-title>Coins</mat-card-title>
      <mat-card-subtitle>Create</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      <div class="form-container">
        <mat-form-field>
          <input matInput placeholder="Coin Name" formControlName="coinName">
          <mat-error *ngIf="coinName.invalid">Coin Name is required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input type="number" min="1" matInput placeholder="Coin Price" formControlName="coinVal">
          <mat-error *ngIf="coinVal.invalid">Coin value Must be a number and greater than 0</mat-error>
        </mat-form-field>
      </div>
    </mat-card-content>
    <mat-card-actions>
      <div class="spacer"></div>
      <button mat-button color="accent" (click)="addCoin(coinForm.value.coinName, coinForm.value.coinVal)" [disabled]="coinForm.pristine || coinForm.invalid">Add</button>
    </mat-card-actions>
  </mat-card>
</form>
```

Also, we need to write the logic of validation in the `create.component.ts` file.
> `create.component.ts`
```ts
import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
  FormGroupDirective,
  AbstractControl
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { CoinService } from '../../coin.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class FormControlValidation implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  coinForm: FormGroup;
  constructor(private coinservice: CoinService, private fb: FormBuilder) {
    this.createForm();
  }

  coinName = new FormControl('', [
    Validators.required
  ]);
  coinVal = new FormControl('', [
    Validators.required,
    Validators.min(1)
  ]);

  resetForm(formGroup: FormGroup) {
    let control: AbstractControl = null;
    formGroup.reset();
    formGroup.markAsUntouched();
    Object.keys(formGroup.controls).forEach((name) => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });
  }

  createForm() {
    this.coinForm = this.fb.group({
      coinName: new FormControl('', [
        Validators.required
      ]),
      coinVal: new FormControl('', [
        Validators.required,
        Validators.min(1)
      ])
    });
  }
  addCoin(name, price) {
    this.coinservice.addCoin(name, price);
    this.coinForm.reset();
    this.resetForm(this.coinForm);
  }

  ngOnInit() {
  }
}
```

Write the `coin.service.ts` file to insert the data into the database.
> `coin.service.ts`
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class CoinService {

  constructor(private http: HttpClient) { }

  addCoin(name, price) {
    const uri = 'http://localhost:4000/coins/add';
    const obj = {
      name: name,
      price: price
    };
    this.http.post(uri, obj)
      .subscribe(res => console.log('Done'));
  }
}
```
Start the `node.js` server by typing: `node server`. If all the database configuration is right then, you can see the data is inserting into the database.

### **Step 15**
#### Display the data to the frontend
Import Material DataTable for displaying the data
> `app.module.ts`
```ts
  import {
    ...
    MatTableModule,
    ...
  } from '@angular/material';

  ...

  @NgModule({
    ...
    imports: [
      ...
      MatTableModule,
      ...
    ],
    exports: [
      ...
      MatTableModule,
      ...
    ],
    ...
  })
```

In the `index.component.ts` file, write the following code.
```ts
  import { Component, OnInit } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs/Observable';
  import { MatTableDataSource } from '@angular/material';

  import { CoinService } from './../../coin.service';

  @Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
  })
  export class IndexComponent implements OnInit {
    coins: any;
    displayedColumns = ['name', 'price', 'action'];
    dataSource = this.coins;

    constructor(private http: HttpClient, private service: CoinService) { }

    getCoins() {
      this.service.getCoins().subscribe(res => {
        this.coins = res;
        this.dataSource = new MatTableDataSource(this.coins);
      });
    }

    ngOnInit() {
      this.getCoins();
    }
  }
```
In the `index.component.html` file, write the following code for Material Data Table.
```html
  <main class="main">
    <div class="col-md-6">
      <mat-table #table [dataSource]="dataSource">
        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
          <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
        </ng-container>

        <!-- Price Column -->
        <ng-container matColumnDef="price">
          <mat-header-cell *matHeaderCellDef> Price </mat-header-cell>
          <mat-cell *matCellDef="let element"> {{element.price}} </mat-cell>
        </ng-container>

        <!-- Action Column -->
        <ng-container matColumnDef="action">
          <mat-header-cell *matHeaderCellDef class="w-120"> Action </mat-header-cell>
          <mat-cell *matCellDef="let element" class="w-120 t-r">
              <a [routerLink]="['/edit', element._id]" mat-icon-button color="primary">
                <mat-icon aria-label="Edit Coin">edit</mat-icon>
              </a>
              <a [routerLink]="" mat-icon-button color="warn">
                <mat-icon aria-label="Delete Coin">delete</mat-icon>
              </a>
          </mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
      </mat-table>
    </div>
  </main>
```

Add some style for column width
> `index.component.scss`
```scss
  .w-120 {
    max-width: 120px;
  }
```
Service get and edit coins
> `coin.service.ts`
```ts
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import {
    FormGroup,
    FormBuilder,
    Validators
  } from '@angular/forms';
  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/operator/map';

  @Injectable()
  export class CoinService {

    result: any;
    constructor(private http: HttpClient) { }

    addCoin(name, price) {
      const uri = 'http://localhost:4000/coins/add';
      const obj = {
        name: name,
        price: price
      };
      this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
    }

    getCoins() {
      const uri = 'http://localhost:4000/coins';
      return this.http.get(uri).map(res => {
        return res;
      });
    }

    editCoin(id) {
      const uri = 'http://localhost:4000/coins/edit/' + id;
      return this.http.get(uri).map(res => {
        return res;
      });
    }
  }
```

<!-- https://appdividend.com/2018/01/21/angular-5-crud-tutorial-example-scratch/ -->
