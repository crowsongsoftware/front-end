/* Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/* Crowsong Libraries */
import { ImageModule } from '@crowsong/image';
/* Crowsong Feature Modules */
import { HeaderModule } from './features/header/header.module';
import { MenuModule } from './features/menu/menu.module';

/* App Modules/Services/Routes/Components */
import { AppRoutes } from './app.routes'
import { AppComponent } from './app.component';

/* Test API Server */
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    ImageModule,
    MenuModule,
    RouterModule.forRoot(AppRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
