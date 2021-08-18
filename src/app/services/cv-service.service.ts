import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {
  host = "http://localhost:8080"
  constructor(private http: HttpClient, private authService : AuthenticationServiceService) { }

  postResume(data:any) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/api/resumes",data, {headers : headers });
  }
  postTheme(data:any) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/api/themes",data, {headers : headers });
  }
  postCertification(data:any) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/api/certifications",data, {headers : headers });
  }
  postCompany(data:any) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/api/companies",data, {headers : headers });
  }
  postEducation(data:any) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/api/educations",data, {headers : headers });
  }
  postEstablishments(data:any) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/api/establishments",data, {headers : headers });
  }
  postExperience(data:any) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/api/experiences",data, {headers : headers });
  }
  postInterest(data:any) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/api/interests",data, {headers : headers });
  }
  postLanguages(data:any) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/api/languages",data, {headers : headers });
  }
  postLocationCompany(data:any) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/api/locations",data, {headers : headers });
  }
  postNoteTraning(data:any) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/api/notes",data, {headers : headers });
  }
  postSkills(data:any) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/api/skills",data, {headers : headers });
  }
  postTechnologies(data:any) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/api/technologies",data, {headers : headers });
  }
  postTraining(data:any) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/api/trainings",data, {headers : headers });
  }

  /* GetAll */
  getAllResumes() {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    
    return this.http.get(this.host+"/api/resumes", {headers : headers });
  }
  getAllusers() {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    
    return this.http.get(this.host + "/api/users", { headers: headers }) ;
  }
  getAllEducations() {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    
    return this.http.get(this.host + "/api/educations", { headers: headers }) ;
  }
  getAllExperiences() {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    
    return this.http.get(this.host + "/api/experiences", { headers: headers }) ;
  }
  getAllSkills() {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    
    return this.http.get(this.host + "/api/skills", { headers: headers }) ;
  }

  getAllLoisirs() {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.get(this.host+"/api/interests", {headers : headers });
  
  }
  getAllLangues() {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.get(this.host+"/api/languages", {headers : headers });
  
  }


/* Delete */
deleteResumes(id:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  
  return this.http.delete(this.host+"/api/resumes/"+id, {headers : headers });
}

deleteEducations(id:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  
  return this.http.delete(this.host + "/api/educations/"+id, { headers: headers }) ;
}
deleteExperiences(id:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  
  return this.http.delete(this.host + "/api/experiences/"+id, { headers: headers }) ;
}
deleteSkills(id:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  
  return this.http.delete(this.host + "/api/skills/"+id, { headers: headers }) ;
}

deleteLoisirs(id:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  return this.http.delete(this.host+"/api/interests/"+id, {headers : headers });

}
deleteLangues(id:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  return this.http.delete(this.host+"/api/languages/"+id, {headers : headers });

}

/* Update */
updateResumes(data:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  
  return this.http.put(this.host+"/api/resumes",data, {headers : headers });
}

updateEducations(data:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  
  return this.http.put(this.host + "/api/educations",data, { headers: headers }) ;
}
updateExperiences(data:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  
  return this.http.put(this.host + "/api/experiences",data, { headers: headers }) ;
}
updateSkills(data:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  
  return this.http.put(this.host + "/api/skills",data, { headers: headers }) ;
}

updateLoisirs(data:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  return this.http.put(this.host+"/api/interests",data, {headers : headers });

}
updateLangues(data:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  return this.http.put(this.host+"/api/languages",data, {headers : headers });

}

/* GetById */
getByIdResumes(id:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  
  return this.http.get(this.host+"/api/resumes/"+id, {headers : headers });
}

getByIdEducations(id:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  
  return this.http.get(this.host + "/api/educations/"+id ,{ headers: headers }) ;
}
getByIdExperiences(id:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  
  return this.http.get(this.host + "/api/experiences/"+id, { headers: headers }) ;
}
getByIdSkills(id:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  
  return this.http.get(this.host + "/api/skills/"+id, { headers: headers }) ;
}

getByIdLoisirs(id:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  return this.http.get(this.host+"/api/interests/"+id, {headers : headers });

}
getByIdLangues(id:any) {
  let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
  return this.http.get(this.host+"/api/languages/"+id, {headers : headers });

}
}
