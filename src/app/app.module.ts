import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HtmlCssComponent } from './html-css/html-css.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'chat',
  //   component: ChatComponent,
  //   canActivate: [
  //     ValidParamsGuard
  //   ]
  // },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  // {
  // 	path: 'words',
  // 	component: WordsComponent
  //  // ,children: [
  //  //   { path: '', component: AboutHomeComponent }, // url: about/
  //  //   { path: 'item/:id', component: AboutItemComponent } // url: about/item
  //  // ]
  // },
  { path: 'html-css', component: HtmlCssComponent },
  // { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    HtmlCssComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
