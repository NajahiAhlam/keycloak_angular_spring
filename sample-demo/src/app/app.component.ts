import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sample-demo';
  constructor(private kc : KeycloakService){
  }
  logout()
  {
    this.kc.logout();
  }
  ngOnInit(): void {
    console.log("salam");
  }
}
