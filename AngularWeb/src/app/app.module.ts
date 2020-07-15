import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@app/core.module';
import { AppComponent } from './components';
import { AppRoutes } from './app.routes';
import { LayoutModule } from '@app/layout';
import { LoginModule } from '@app/login.module';
import { SharedModule } from '@app/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    SharedModule.forRoot(),
    AppRoutes,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
