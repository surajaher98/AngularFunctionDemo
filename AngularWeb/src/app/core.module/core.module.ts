import { NgModule, ModuleWithProviders, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';
import { BlockUIModule } from 'ng-block-ui';

import { AppInterceptor, ConfigProvider, LoaderService } from './services';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    NgbModule,
    // ToastrModule.forRoot(),
    BlockUIModule.forRoot()
  ],
  declarations: [],
  exports: [CommonModule, NgbModule, BlockUIModule]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      console.log('Core module is already loaded');
      throw new Error('Core module is already loaded');
    }
  }
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [AppInterceptor, ConfigProvider, LoaderService,
        { provide: APP_INITIALIZER, useFactory: appConfigServiceFactory, deps: [ConfigProvider], multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }
      ]
    };
  }
}

export function appConfigServiceFactory(config: ConfigProvider): any {
  return () => config.load();
}

export { AppInterceptor, ConfigProvider, LoaderService } from './services';
export { BaseConstants } from './constants';
