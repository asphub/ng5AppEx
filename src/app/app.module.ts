import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // For using Forms
import {
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  // MatSelectModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule
} from '@angular/material'; // For Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Animation Support


import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { appRoutes } from './routerConfig';
import { CoinService } from './coin.service';

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
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    // MatSelectModule,
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
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule { }