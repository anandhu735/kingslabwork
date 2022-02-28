import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  public listarray:any=[]
  private query:any={}
  UserId:any;
  start:any;

  constructor(private router:Router,private userservice:ButtonService) { }

  ngOnInit(): void {
    this.query={
      '_start':0
    }
  }
  open(){

  }
  getUserList(){
    this.userservice.getUserList(this.query).subscribe((result:any)=>{
      if(result){
        this.listarray=result;
      }
    })
  }




}
