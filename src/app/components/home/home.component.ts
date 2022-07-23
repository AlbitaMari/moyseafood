import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  term;

  title = 'moyseafood';
  titulo = 'List User';
  searchTerm$ = new BehaviorSubject<string>('');
  
  id:any;
  users: any[];

  constructor(public sService:DataserviceService, public router : Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.sService.getUser().then((res:any) => {
      this.users = res;
      console.log(this.users);
      })
  }

  getDetail(user : any){
    let link = ['/userdetail',user.id];
    this.router.navigate(link);
  }

}
