import { Component, OnInit , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import {HttpServiceService} from '../../core/service/http/http-service.service'

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {

  constructor(private httpService: HttpServiceService, private dialogRef: MatDialogRef<ProfilePicComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any,private snackbar : MatSnackBar) { }
        private apiImage;
        private croppedImage;
    

  ngOnInit() {
  }
    imageCropped(event) {
    this.croppedImage = event
    }
    uploadpic() {
        this.apiImage = this.croppedImage.file
        const uploadData = new FormData();
        uploadData.append('file', this.apiImage, this.apiImage.name);
        this.httpService.postNewData('user/uploadProfileImage',uploadData).subscribe(
          (response:any)=>{
            this.dialogRef.close();
            localStorage.setItem("profilePic", response['status'].imageUrl);
              console.log(response);
                 this.snackbar.open('image uploaded Successfully..', 'End now', {duration: 1000}); 
          },
          error=>{
            console.log(error);
            this.snackbar.open('image not uploaded', 'End now', {duration: 1000}); 
          }
        )}
      }








