import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ManagerComponent } from './manager/manager.component';
import { AdminComponent } from './admin/admin.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HttpClientModule } from '@angular/common/http';
import { initializer } from 'src/utils/app-init';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent,
    ManagerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
      // add this provider
      {
        provide: APP_INITIALIZER,
        useFactory: initializer,
        deps: [KeycloakService],
        multi: true,
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
