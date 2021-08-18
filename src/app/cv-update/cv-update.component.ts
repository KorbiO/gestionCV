import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CvServiceService } from '../services/cv-service.service';

@Component({
  selector: 'app-cv-update',
  templateUrl: './cv-update.component.html',
  styleUrls: ['./cv-update.component.css']
})
export class CvUpdateComponent implements OnInit {

  constructor(private cvService : CvServiceService , private router : Router) {  this.router.routeReuseStrategy.shouldReuseRoute = () => false;}

  ngOnInit(): void {
    this.getAllResumes()
    this.getAllEduation()
    this.getAllExperiences()
    this.getAllSkills()
    this.getAllLoisirs()
    this.getAllLangues()
   
  }
  @ViewChild('closebutton') closebutton:any
  @ViewChild('closebutton2') closebutton2:any
  @ViewChild('closebutton3') closebutton3:any
  @ViewChild('closebutton4') closebutton4:any
  @ViewChild('closebutton5') closebutton5:any
  @ViewChild('closebutton6') closebutton6:any
  resumeSelected: any
  listOfEducationUser:any = []
  listOfExperienceUser:any = []
  listOfSkillsUser:any = []
  listOfLoisirUser:any = []
  listOfLanguesUser:any = []
  getAllResumes() {
    this.cvService.getAllResumes().subscribe((data: any) => {
      data.forEach((element: any) => {
        if (element.userId === Number(localStorage.getItem("idUser"))) {
          this.resumeSelected = element
           console.log(this.resumeSelected);

        }
      });
    }
    )
  }
  getAllEduation(){
    this.cvService.getAllEducations().subscribe((data:any) => {

      data.forEach((element: any) => {
        if (element.ownerId === Number(localStorage.getItem("idUser"))) {
          this.listOfEducationUser.push(element) 
           console.log(this.listOfEducationUser); 

        }
      });

    })
  }
  getAllExperiences(){
    this.cvService.getAllExperiences().subscribe((data:any) => {

      data.forEach((element: any) => {
        if (element.ownerId === Number(localStorage.getItem("idUser"))) {
          this.listOfExperienceUser.push(element) 
          console.log(this.listOfExperienceUser);

        }
      });

    })
    
  }
  getAllSkills(){
    this.cvService.getAllSkills().subscribe((data:any) => {

      data.forEach((element: any) => {
        if (element.techVersion === localStorage.getItem("idUser")) {
          this.listOfSkillsUser.push(element) 
          console.log(this.listOfSkillsUser);

        }
      });

    })
  }
  s: String =""
  getAllLoisirs(){
    this.cvService.getAllLoisirs().subscribe((data:any )=> {
      console.log(data);
      
      data.forEach((element: any) => {
       console.log(element.label.match(/\d/g)[0] );
        
        if (element.label.replace(/[^0-9]/g, '') === localStorage.getItem("idUser")) {
           this.s = element.label
          this.listOfLoisirUser.push(this.s.substring(0 ,this.s.length -2 )) 
          console.log(this.listOfLoisirUser);

        }
      });
    })
  }
  l: String =""
  getAllLangues(){
    this.cvService.getAllLangues().subscribe((data:any )=> {
      console.log(data);
      
      data.forEach((element: any) => {
         console.log(element.label.replace(/[^0-9]/g, '') );
        console.log(element.label.match(/\d/g) );
        
        if (element.label.replace(/[^0-9]/g, '') === localStorage.getItem("idUser")) {
           this.l = element.label
          this.listOfLanguesUser.push(this.l.substring(0 ,this.l.length -2 )) 
          console.log(this.listOfLanguesUser);

        }
      });
    })
  }
  updatedResume:any = {
    userId : 0,
    headline  : "",
    summary :  ""
  }
  getByIdResume(id:any){
    this.cvService.getByIdResumes(id).subscribe((resp:any)=> {
      console.log(resp);
      this.updatedResume = resp
    })
  }

  updateResume(){
    this.updatedResume.userId = Number(localStorage.getItem("idUser"))
this.cvService.updateResumes(this.updatedResume).subscribe((resp:any) => {
  console.log(resp);
  this.closebutton.nativeElement.click();
})
this.getAllResumes()
  }

  updatedEducation:any = {
    ownerId : 0,
    branch  : "",
    grade :  "",
    endYear: new Date(),
    startYear: new Date()
  }
  getByIdEducation(id:any){
    this.cvService.getByIdEducations(id).subscribe((resp:any)=> {
      console.log(resp);
      this.updatedEducation = resp
    })
  }
 


  
  updateEducation(){
    this.updatedResume.ownerId = Number(localStorage.getItem("idUser"))
    this.updatedEducation.startYear =this.updatedEducation.startYear+":59.899Z"
    this.updatedEducation.endYear = this.updatedEducation.endYear +":59.899Z"
this.cvService.updateEducations(this.updatedEducation).subscribe((resp:any) => {
  console.log(resp);
  this.closebutton2.nativeElement.click();
})


  }


  /* Update Expérience  */

  updatedExperience:any = {
    ownerId : 0,
    title  : "",
    description :  "",
    employmentType : "",
    endYear: new Date(),
    startYear: new Date()
  }
  getByIdExperience(id:any){
    this.cvService.getByIdExperiences(id).subscribe((resp:any)=> {
      console.log(resp);
      this.updatedExperience = resp
    })
  }
  updateExperience(){
    this.updatedExperience.ownerId = Number(localStorage.getItem("idUser"))
this.cvService.updateExperiences(this.updatedExperience).subscribe((resp:any) => {
  console.log(resp);
  this.closebutton3.nativeElement.click();
})

  }

  /* Update Skills  */

  updatedSkill:any = {
    
    label  : "",
    techVersion :  "",
   
  }
  getByIdSkille(id:any){
    this.cvService.getByIdSkills(id).subscribe((resp:any)=> {
      console.log(resp);
      this.updatedSkill = resp
    })
  }
  updateSkill(){
    this.updatedSkill.techVersion = Number(localStorage.getItem("idUser"))
this.cvService.updateSkills(this.updatedSkill).subscribe((resp:any) => {
  console.log(resp);
  this.closebutton4.nativeElement.click();
})

  }

 /* Update Langue  */

 updatedLangue:any = {
    
  label  : "",
  
 
}
listOfLanguesUser2:any = []
getAllLang(id :any){
  this.cvService.getAllLangues().subscribe((data:any) => {
    this.listOfLanguesUser2.push(data)
   
      })

  this.listOfLanguesUser2[0].forEach((element :any)=> {
   
    console.log(id);
    console.log(element);
    console.log(element.label.match(/\d+$/)[0]);
  /*   console.log(element.label.replace(/[^0-9]/g, '') === localStorage.getItem("idUser")); */
    
    if (element.label.substring(0 ,element.label.length -2) === id && (element.label.replace(/[^0-9]/g, '')  === localStorage.getItem("idUser"))) {
      console.log("entre");
      
      this.getByIdLangue(element.id)
    }
  })
  
}
getByIdLangue(id:any){
 
  this.cvService.getByIdLangues(id).subscribe((resp:any)=> {
    console.log(resp);
    this.updatedLangue.id = resp.id
    this.updatedLangue.label = resp.label.substring(0 ,this.l.length -2 )
    // this.updatedLangue.label = this.updatedLangue.label.substring(0 ,this.l.length -2 ) /*  */
     console.log( this.updatedLangue.label);
     
  })

}

updateLangue(){

this.cvService.updateLangues(this.updatedLangue).subscribe((resp:any) => {
//console.log(resp);

this.updatedLangue.label = this.updatedLangue.label +" "+localStorage.getItem("idUser")
this.cvService.updateLangues(this.updatedLangue).subscribe((resp:any) => {
  //console.log(resp);
  this.closebutton5.nativeElement.click();
  })



})
}

/* Update Loisir  */

updatedLoisir:any = {
    
  label  : "",
  
 
}
listOfLoisirUser2:any = []
getAllLoisir(id :any){
  this.cvService.getAllLoisirs().subscribe((data:any) => {
    this.listOfLoisirUser2.push(data)
   
      })

  this.listOfLoisirUser2[0].forEach((element :any)=> {
   
    console.log(id);
    console.log(element);
    console.log(element.label.match(/\d/g)[0]);
    console.log(element.label.match(/\d/g)[0] === localStorage.getItem("idUser"));
    
    if (element.label.substring(0 ,element.label.length -2) === id && (element.label.replace(/[^0-9]/g, '') === localStorage.getItem("idUser"))) {
      console.log("entre");
      
      this.getByIdLoisirs(element.id)
    }
  })
  
}
getByIdLoisirs(id:any){
 
  this.cvService.getByIdLoisirs(id).subscribe((resp:any)=> {
    console.log(resp);
    this.updatedLoisir.id = resp.id
    this.updatedLoisir.label = resp.label.substring(0 ,this.s.length -2 )
    //this.updatedLoisir.label = this.updatedLoisir.label.substring(0 ,this.s.length -2 )/*  */
   console.log(  this.updatedLoisir.label);
   
  })

}
updateLoisir(){
  /* this.updatedSkill.techVersion = Number(localStorage.getItem("idUser")) */
/*   this.updatedLoisir.label = this.updatedLoisir.label +" "+localStorage.getItem("idUser") */
this.cvService.updateLoisirs(this.updatedLoisir).subscribe((resp:any) => {
/* console.log(resp); */

this.updatedLoisir.label = this.updatedLoisir.label +" "+localStorage.getItem("idUser")
this.cvService.updateLoisirs(this.updatedLoisir).subscribe((resp:any) => {
  //console.log(resp);
  this.closebutton6.nativeElement.click();
  
  })

  


})




}
}