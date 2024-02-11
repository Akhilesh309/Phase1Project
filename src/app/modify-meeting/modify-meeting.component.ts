import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Meetings } from '../meetings';

@Component({
  selector: 'app-modify-meeting',
  templateUrl: './modify-meeting.component.html',
  styleUrls: ['./modify-meeting.component.css']
})
export class ModifyMeetingComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute, private meetServ:ClientService,
    private router:Router){}

    meet:Meetings=new Meetings(0,"",0,"",0);
    meetno:number=0;

    ngOnInit(): void {
        this.meetno=this.activateRoute.snapshot.params["mno"];
        this.meetServ.getMeetInfobasedOnMeetId(this.meetno).subscribe(data=>{
          this.meet=data;
        });
    }

    updateMeet(){
      this.meetServ.updateMeeting(this.meetno,this.meet).subscribe(data=>{
        this.router.navigate(['/viewmeet']);
      });
    }


}
