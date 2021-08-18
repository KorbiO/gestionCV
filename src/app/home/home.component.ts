import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CvServiceService } from '../services/cv-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cvService: CvServiceService , private router: Router) { }
  listOfUser: any = []
  listOfResume: any = []
  listOfEducation: any = []
  listOfExperience: any = []
  listOfSkills: any = []
  listOfLoisirs: any = []
  listOfLangues: any = []
  listOfUserHasCv: any = []
  /* ----------------- */
  listOfIdResumeUser: any = []
  listOfIdEducationUser: any = []
  listOfIdExperienceUser: any = []
  listOfIdSkillUser: any = []
  listOfIdLoisirUser: any = []
  listOfIdLangueUser: any = []
  check: Boolean = false
  userAuthenticatedId: any
  ngOnInit(): void {


    this.getallUser()
    this.getallResume()
    this.getallEducations()
    this.getallExperiences()
    this.getallSkills()
    this.getallLoisirs()
    this.getallLangues()

  }
  getallUser() {
    this.cvService.getAllusers().subscribe(data => {
      this.listOfUser = data
 //     console.log(this.listOfUser);
    })
  }
  getallEducations() {
    this.cvService.getAllEducations().subscribe(data => {
      this.listOfEducation = data
     // console.log(this.listOfEducation);
      this.listOfEducation.forEach((element:any) => {
        if(element.ownerId === Number(localStorage.getItem("idUser"))) {
          this.listOfIdEducationUser.push(element.id)
        }

      });

    })
 //   console.log(this.listOfIdEducationUser);
    
  }
  getallExperiences() {
    this.cvService.getAllExperiences().subscribe(data => {
      this.listOfExperience = data
   //   console.log(this.listOfExperience);
      this.listOfExperience.forEach((element:any) => {
        if(element.ownerId === Number(localStorage.getItem("idUser"))) {
          this.listOfIdExperienceUser.push(element.id)
        }

      });

    })
 //   console.log(this.listOfIdExperienceUser);
    
  }
  getallSkills() {
    this.cvService.getAllSkills().subscribe(data => {
      this.listOfSkills = data
 //     console.log(this.listOfSkills);
      this.listOfSkills.forEach((element:any) => {
        if(element.techVersion === localStorage.getItem("idUser")) {
          this.listOfIdSkillUser.push(element.id)
        }

      });
    //  console.log(this.listOfIdSkillUser);
      
    })
  }
  getallLoisirs() {
    this.cvService.getAllLoisirs().subscribe(data => {
      this.listOfLoisirs = data
    //  console.log(this.listOfLoisirs);
      this.listOfLoisirs.forEach((element:any) => {
        if(element.label.match(/\d/g)[0] === localStorage.getItem("idUser")) {
          this.listOfIdLoisirUser.push(element.id)
        }

      });
  //    console.log(this.listOfIdLoisirUser);
    })
  }
  getallLangues() {
    this.cvService.getAllLangues().subscribe(data => {
      this.listOfLangues = data
  //    console.log(this.listOfLangues);
      this.listOfLangues.forEach((element:any) => {
        if(element.label.match(/\d/g)[0] === localStorage.getItem("idUser")) {
          this.listOfIdLangueUser.push(element.id)
        }

      });
   //   console.log(this.listOfIdLangueUser);

    })
  }
  getallResume() {
    this.cvService.getAllResumes().subscribe(data => {
      this.listOfResume = data
  //    console.log(this.listOfResume);
      this.listOfResume.forEach((element:any) => {
        if(element.userId === Number(localStorage.getItem("idUser"))) {
          this.listOfIdResumeUser.push(element.id)
        }

      });
  //    console.log(this.listOfIdResumeUser);
    })
  }

  checkUserHasCv() {
 //   console.log(this.listOfResume);
 //   console.log(this.listOfUser);
    this.listOfResume.forEach((resume: any) => {
      this.listOfUser.forEach((user: any) => {
        this.userAuthenticatedId = Number(localStorage.getItem("idUser"))
    //    console.log(this.userAuthenticatedId);

        if (resume.userId === user.id) {
          this.listOfUserHasCv.push(user)

        }

      });

    });
    let a = new Set(this.listOfUserHasCv)

    this.listOfUserHasCv = Array.from(a);
  //  console.log(this.listOfUserHasCv);
  }
  deleteResume(id: any) {
    this.cvService.deleteResumes(id).subscribe(data => {
      console.log("deleted resume");

    })
  }
  deleteEducation(id: any) {
    this.cvService.deleteEducations(id).subscribe(data => {
      console.log("deleted education");

    })
  }
  deleteExperience(id: any) {
    this.cvService.deleteExperiences(id).subscribe(data => {
      console.log("deleted experience");

    })
  }
  deleteSkill(id: any) {
    this.cvService.deleteSkills(id).subscribe(data => {
      console.log("deleted skill");

    })
  }
  deleteLoisir(id: any) {
    this.cvService.deleteLoisirs(id).subscribe(data => {
      console.log("deleted loisir");

    })
  }
  deleteLangue(id: any) {
    this.cvService.deleteLangues(id).subscribe(data => {
      console.log("deleted langue");

    })
  }
  deleteCv() {
if(this.listOfIdResumeUser != null){
  this.listOfIdResumeUser.forEach((element:any) => {
    this.deleteResume(element)
    
  });
}
if(this.listOfIdEducationUser != null){
  this.listOfIdEducationUser.forEach((element:any) => {
    this.deleteEducation(element)
    
  });
}
if(this.listOfIdExperienceUser != null){
  this.listOfIdExperienceUser.forEach((element:any) => {
    this.deleteExperience(element)
    
  });
}
if(this.listOfIdSkillUser != null){
  this.listOfIdSkillUser.forEach((element:any) => {
    this.deleteSkill(element)
    
  });
}
if(this.listOfIdLoisirUser != null){
  this.listOfIdLoisirUser.forEach((element:any) => {
    this.deleteLoisir(element)
    
  });
}
if(this.listOfIdLangueUser != null){
  this.listOfIdLangueUser.forEach((element:any) => {
    this.deleteLangue(element)
    
  });
}
this.listOfIdResumeUser=[]
this.listOfIdEducationUser = []
this.listOfIdExperienceUser= []
this.listOfIdSkillUser= []
this.listOfIdLangueUser= []
this.listOfIdLoisirUser= []
let currentUrl = this.router.url;
this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
  //  console.log(currentUrl);
});
  }

}
