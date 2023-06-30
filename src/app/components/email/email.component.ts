import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data={
    recipient:"",
    subject:"",
    msgBody:""
  }

  flag=false;

  constructor(private email:EmailService,private snak:MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm()
  {
  console.log("try to submit form");
  console.log("DATA ",this.data);

  if(this.data.recipient=='' || this.data.subject==''|| this.data.msgBody=='')
  {
    this.snak.open("fields can not be empty !!","OK");
    return;
  }

  this.flag=true;
  this.email.sendEmail(this.data).subscribe(
    response=>{
      console.log(response);   
      this.flag=false; 
      this.snak.open("Send Success ","OK")  
    },
    error=>{
      console.log("errrrr ",error); 
      this.flag=false;    
      this.snak.open("ERROR!! ","OK")   
    }
  )  
  
  }
  dataAttach: any = {
    recipient:"",
    subject:"",
    msgBody:""
  }; 

  handleAttachment(event : any){
    const files = event.target.files;
    // 
    
  if(this.data.recipient=='' || this.data.subject==''|| this.data.msgBody=='')
  {
    this.snak.open("fields can not be empty !!","OK");
    return;
  }

  this.flag=true;
  this.email.sendEmailAttachment(this.dataAttach).subscribe(
    response=>{
      console.log(response);   
      this.flag=false; 
      this.snak.open("Send Success ","OK")  
    },
    error=>{
      console.log("errrrr ",error); 
      this.flag=false;    
      this.snak.open("ERROR!! ","OK")   
    }
  ) 

  }

}
