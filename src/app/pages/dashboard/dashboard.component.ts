import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  http = inject(HttpClient);
  userList: any[] = [];
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.http.get("http://localhost:5000/api/users/users").subscribe((res: any) => console.log(res));
      //this.userList = res;
   
}
}