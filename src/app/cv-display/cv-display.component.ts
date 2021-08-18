import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

import { CvServiceService } from '../services/cv-service.service';

declare let pdfMake: any ;
@Component({
  selector: 'app-cv-display',
  templateUrl: './cv-display.component.html',
  styleUrls: ['./cv-display.component.css']
})
export class CvDisplayComponent implements OnInit {
  listOfUser: any
  listOfEducationUser:any = []
  listOfExperienceUser:any = []
  listOfSkillsUser:any = []
  listOfLoisirUser:any = []
  listOfLanguesUser:any = []
  sub: any;
  id: any
  userSelected: any
  resumeSelected: any
  constructor(private cvService: CvServiceService, private _Activatedroute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('idUser');
      // console.log(typeof(this.id));      
    });
    this.getAllUsers()
    this.getAllResumes()
    this.getAllEduation()
    this.getAllExperiences()
    this.getAllSkills()
    this.getAllLoisirs()
    this.getAllLangues()
  }
  d: any
  public convetToPDF()
{
this.d = document.getElementById('contentToConvert');
html2canvas(this.d).then(canvas => {
// Few necessary setting options
var imgWidth = 215;
var pageHeight = 200;
var imgHeight = 2200 * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('new-file.pdf'); // Generated PDF
});
}
 
  getAllUsers() {
    this.cvService.getAllusers().subscribe((data: any) => {
      data.forEach((element: any) => {
        if (element.id === Number(this.id)) {
          this.userSelected = element
          console.log(this.userSelected);

        }
      });

    })

  }
  getAllResumes() {
    this.cvService.getAllResumes().subscribe((data: any) => {
      data.forEach((element: any) => {
        if (element.userId === Number(this.id)) {
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
        if (element.ownerId === Number(this.id)) {
          this.listOfEducationUser.push(element) 
          console.log(this.listOfEducationUser);

        }
      });

    })
  }
  getAllExperiences(){
    this.cvService.getAllExperiences().subscribe((data:any) => {

      data.forEach((element: any) => {
        if (element.ownerId === Number(this.id)) {
          this.listOfExperienceUser.push(element) 
          console.log(this.listOfExperienceUser);

        }
      });

    })
  }
  getAllSkills(){
    this.cvService.getAllSkills().subscribe((data:any) => {

      data.forEach((element: any) => {
        if (element.techVersion === this.id) {
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
        
        if (element.label.replace(/[^0-9]/g, '') === this.id) {
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
        console.log(element.label.match(/\d/g)[0] );
        
        if (element.label.replace(/[^0-9]/g, '') === this.id) {
           this.l = element.label
          this.listOfLanguesUser.push(this.l.substring(0 ,this.l.length -2 )) 
          console.log(this.listOfLanguesUser);

        }
      });
    })
  }


}
