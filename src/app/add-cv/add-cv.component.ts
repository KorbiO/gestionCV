import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CvServiceService } from '../services/cv-service.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  @ViewChild('closebutton') closebutton:any
  @ViewChild('closebutton2') closebutton2:any
  @ViewChild('closebutton3') closebutton3:any
  @ViewChild('closebutton4') closebutton4:any
  @ViewChild('closebutton5') closebutton5:any
  @ViewChild('closebutton6') closebutton6:any
  @ViewChild('closebutton7') closebutton7:any
  constructor(private cvService : CvServiceService) { }

descriptionProfil : String = ""
nomPrenom : String =""

nomFac : String =""
degree : String =""
grade : String =""
startYear : Date = new Date()
endYear : Date = new Date()

description : String = ""
employmentType : String =""
endYearExp : Date = new Date()
startYearExp : Date = new Date()
title : String = ""

labelSkill: String = ""

labelLangu : String = ""

labelLoisir: String = ""
  ngOnInit(): void {
    
  }
  postLoisir(){
    let data = {
      label : this.labelLoisir+" "+Number(localStorage.getItem("idUser"))
    }
    this.cvService.postInterest(data).subscribe(data => {
    //  console.log(data);
    this.closebutton.nativeElement.click();
    })
  }
  postLanguages(){
let data = {
  label : this.labelLangu+" "+Number(localStorage.getItem("idUser"))
}
this.cvService.postLanguages(data).subscribe(data => {
 // console.log(data);
 this.closebutton2.nativeElement.click();
  
})
  }
  postSkills(){
    let data = {
      techVersion :localStorage.getItem("idUser"),
      label :  this.labelSkill
    }
    this.cvService.postSkills(data).subscribe(data => {
      //console.log(data);
      this.closebutton3.nativeElement.click();
    })
  }
  postExperiences(){
     let data = {
      current : true,
      description :this.description,
      ownerId : Number(localStorage.getItem("idUser")),
      title : this.title,
      employmentType: this.employmentType,
      startYear : this.startYearExp+":59.899Z",
      endYear : this.endYearExp+":59.899Z"
     } 
    
     console.log(data);
     
     this.cvService.postExperience(data).subscribe(respo => {
       console.log(respo);
       this.closebutton4.nativeElement.click();
     })
  }
  postFormation(){
    let data = {
      branch :this.nomFac,
      ownerId : Number(localStorage.getItem("idUser")),
      degree : this.degree,
      grade : this.grade,
      startYear : this.startYear+":59.899Z",
      endYear : this.endYear+":59.899Z"
     }
     console.log(data);
     
     this.cvService.postEducation(data).subscribe(respo => {
       console.log(respo);
       this.closebutton5.nativeElement.click();
     })
  }
  postResumeProfil(){
    let data = {
    headline :this.nomPrenom,
    userId : Number(localStorage.getItem("idUser")),
    summary : this.descriptionProfil }
   // console.log(data);
    
    this.cvService.postResume(data).subscribe(respo => {
    //  console.log(respo);
    this.closebutton6.nativeElement.click();
    })
  }
  theme : String =""
  postThemes(){
    let data = {
      theme : this.theme }
    
    this.cvService.postTheme(data).subscribe(respo => {
    //  console.log(respo);
    this.closebutton7.nativeElement.click();
    })
  }
  


}
