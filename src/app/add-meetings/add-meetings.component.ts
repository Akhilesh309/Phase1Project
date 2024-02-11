import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { Meetings } from '../meetings';

@Component({
  selector: 'app-add-meetings',
  templateUrl: './add-meetings.component.html',
  styleUrls: ['./add-meetings.component.css']
})
export class AddMeetingsComponent {

  constructor(private meetServ: ClientService, private router:Router){}
  meet:Meetings = new Meetings(0,"",0,"",0);
  msg:string="";

  MeetingSaving(){
    this.meetServ.addNewMeeting(this.meet).subscribe(data=>{
      console.log(data);
     // this.router.navigate(['/viewmeet']);
    this.msg="Student is saved..";
    })
  }
}
