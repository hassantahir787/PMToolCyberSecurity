import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileData } from '../../models/file-data.model';
import { environment } from '../../../environments/environment';
import { Section } from 'src/app/models/section.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  prefix = environment.config.backend_url;

  constructor(private httpClient: HttpClient) {
    console.log('Api service constructor: ', this.prefix);
  }

  public login(username: string, password: string) {
    return new Observable((observer) => {
      const requestBody = {
        username: username,
        password: password
      };

      this.httpClient.post(this.prefix + 'auth/local', requestBody)
        .subscribe((res) => {
          observer.next(res);
        },
          (err) => {
            observer.error(err);
          });
    });
  }

  public createVideoContent(sectionId: number) {
    return new Observable((observer) => {
      let postBody = {
        section_id: sectionId
      }

      this.httpClient.post(this.prefix + 'videos', postBody)
        .subscribe((result) => {
          observer.next(result);
        }, (err) => {
          observer.error(err);
        });
    });

  }

  public getUsersList(start: number, end: number) {
    return new Observable((observer) => {

      this.httpClient.get(this.prefix + "users")
        .subscribe((res) => {
          console.log("Successfully posted:", res);

          observer.next(res);
        }, (err) => {
          console.log("Error while sending post request", err);
        });
    });
  }

  public createUser(value) {
    return new Observable((observer) => {
      this.httpClient.post(this.prefix + 'users', value)
        .subscribe((result) => {
          observer.next(result);
        }, (err) => {
          observer.error(err);
        });
    });
  }

  public createCourse(value) {
    return new Observable((observer) => {
      this.httpClient.post(this.prefix + 'courses', value)
        .subscribe((result: any) => {
          if (result.success) {
            observer.next(result);
          } else {
            observer.error();
          }
        }, (err) => {
          observer.error(err);
        });
    });
  }

  public getCoursesList(start: number, end: number) {
    return new Observable((observer) => {

      this.httpClient.get(this.prefix + 'courses')
        .subscribe((res) => {
          console.log('Successfully posted:', res);

          observer.next(res);
        }, (err) => {
          console.log('Error while sending post request', err);
        });
    });
  }

  public getCourse(courseId: number) {
    return new Observable((observer) => {

      // TODO: Pass parameter properly
      this.httpClient.get(this.prefix + 'courses?course_id=' + courseId)
        .subscribe((res) => {
          console.log('Successfully posted:', res);

          observer.next(res);
        }, (err) => {
          console.log('Error while sending post request', err);
        });
    });
  }

  // delete Course
  public deleteCourse(courseId: number) {

    return new Observable((observer) => {
      // TODO: Pass parameter properly
      this.httpClient.delete(this.prefix + 'courses?course_id=' + courseId)
        .subscribe((res) => {
          console.log("Successfully Deleted:", res);

          observer.next(res);
        }, (err) => {
          console.log("Error while deleting", err);
          observer.error(err);
        });
    });
  }

  //Feature Course
  public featureCourse(value) {

    return new Observable((observer) => {
      this.httpClient.patch(this.prefix + "courses", value)
        .subscribe((res) => {
          console.log("Successfully Featured:", res);

          observer.next(res);
        }, (err) => {
          console.log("Error while featuring", err);
          observer.error(err);
        });
    });
  }

  public uploadCourseDP(imageDataUri: any, courseId: number) {
    return new Observable((observer) => {

      const formData = new FormData();
      formData.append('image_data_uri', imageDataUri);
      formData.append('course', courseId + '');

      console.log('About to send out the request');

      this.httpClient.post(this.prefix + 'courses/dp', formData)
        .subscribe((result) => {
          observer.next(result);
          // console.log('Result of post is: ', result);
        },
          (err) => {
            observer.next(err);
            // console.log('Error in post is: ', err);
          });
    });
  }

  public uploadVideoAsCourse(fileData: FileData, courseId: number, sectionId: number) {
    return new Observable((observer) => {

      const formData = new FormData();
      formData.append('files', fileData.file, fileData.name);
      formData.append('course', courseId + '');
      formData.append('section', sectionId + '');
      console.log('About to send out the request');
      this.httpClient.patch(this.prefix + 'videos/youtube', formData)
        .subscribe((result) => {
          console.log('Result of post is: ', result);
          observer.next(result);
        },
          (err) => {
            console.log('Error in post is: ', err);
            observer.next(err);
          });
    });
  }

  public getCategories() {
    return new Observable((observer) => {

      // TODO: Pass parameter properly
      this.httpClient.get(this.prefix + 'categories')
        .subscribe((res) => {
          console.log('Successfully posted:', res);

          observer.next(res);
        }, (err) => {
          console.log('Error while sending post request', err);
          observer.error(err);
        });
    });
  }


  public sendPostRequest(value, path) {
    return new Observable((observer) => {
      this.httpClient.post(this.prefix + path, value)
        .subscribe((result) => {
          observer.next(result);
        }, (err) => {
          observer.error(err);
        });
    });
  }

  public sendGetRequest(path) {
    return new Observable((observer) => {
      this.httpClient.get(this.prefix + path)
        .subscribe((res) => {
          console.log('Successfully Get:', res);

          observer.next(res);
        }, (err) => {
          console.log('Error while getting  request', err);
        });
    });
  }
  

  public sendGetRequestParams(path,data) {
    return new Observable((observer) => {
      this.httpClient.get(this.prefix + path,{params: data})
        .subscribe((res) => {
          console.log('Successfully Get:', res);

          observer.next(res);
        }, (err) => {
          console.log('Error while getting  request', err);
        });
    });
  }

  public sendDeleteRequest(path,data) {   
    return new Observable((observer) => {
      this.httpClient.delete(this.prefix + path + '?answer_id=' + data)
        .subscribe((res) => {
          console.log("Successfully Deleted:", res);

          observer.next(res);
        }, (err) => {
          console.log("Error while deleting", err);
          observer.error(err);
        });
    });
  }
  
  public sendUpdateRequest(value,path) {
    return new Observable((observer) => {
      this.httpClient.patch(this.prefix + path, value)
        .subscribe((res) => {
          console.log("Successfully Updated:", res);

          observer.next(res);
        }, (err) => {
          console.log("Error while Updating", err);
          observer.error(err);
        });
    });
  }

  public createCourseSection(sectionData: Section) {
    return new Observable((observer) => {
      this.httpClient.post(this.prefix + 'courses/sections', sectionData)
        .subscribe((result) => {
          observer.next(result);
        }, (err) => {
          observer.error(err);
        });
    });
  }

  public getSections(courseId: number) {
    return new Observable((observer) => {

      const params = new HttpParams()
        .set('course_id', courseId + '');

      this.httpClient.get(this.prefix + 'courses/sections', { params })
        .subscribe((result) => {
          observer.next(result);
        }, (err) => {
          observer.error(err);
        });
    });
  }

}
