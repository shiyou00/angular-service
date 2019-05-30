import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { HeroService } from "./shared/service/hero.service";
import { SetDataComponent } from './pages/set-data/set-data.component';
import { ChildDataComponent } from './pages/set-data/child-data/child-data.component';
import { ModelCodeComponent } from './pages/model-code/model-code.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    SetDataComponent,
    ChildDataComponent,
    ModelCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
