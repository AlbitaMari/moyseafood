import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  users : any[];
  id : any;
  formEdit : FormGroup;
  result:any;

  constructor(public sService:DataserviceService, public activatedRoute : ActivatedRoute,public fBuild: FormBuilder, public router : Router) { }

  ngOnInit(){
    this.sService.getUser().then((res:any) => {
      this.users = res;
      })

    let id = this.activatedRoute.snapshot.params.id;
    this.id = id;

    this.formEdit = this.fBuild.group({
      'email': new FormControl ("",[Validators.email]),
      'phone': new FormControl ("")
    })
  }

  submitForm(){
    if (!this.formEdit.valid) {
      this.result = 'No has introducido un email correcto';
      return false;
    } else {
      this.sService.editUser(this.formEdit.value.email,this.formEdit.value.password).then(data => {
          this.router.navigateByUrl('/');
        }
      );
    }
  }

  Back(){
    this.router.navigateByUrl('/');
  }
}
