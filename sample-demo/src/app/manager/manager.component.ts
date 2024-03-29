import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'environement';

@Component({
  selector: 'app-manager',
  template: '<p>{{ message }}</p>',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  message = 'message';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${environment.serverUrl}/manager`).subscribe((data: any) => {
      this.message = data.message;
    });
  }
}