import { Component, OnInit } from '@angular/core';
import { Meetings } from '../meetings';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-meetings',
  templateUrl: './view-all-meetings.component.html',
  styleUrls: ['./view-all-meetings.component.css']
})
export class ViewAllMeetingsComponent implements OnInit {

  constructor(private meetServ:ClientService, private router:Router){}

  allMeet:Meetings[]=[];
  ngOnInit(): void {
      this.Showallmeet();
  }

    getModMeetPage(mno:number){

    this.router.navigate(['/modmeet', mno]);

    }

  Showallmeet()
  {
    this.meetServ.showallMeetings().subscribe(data=>{
      this.allMeet = data;
      console.log(data);
    });

  }

  delMeet(mno:number){
    if(confirm("Are you sure to delete")==true){
      this.meetServ.DeleteMeetInfoBasedOnMeetId(mno).subscribe(data=>{
        this.Showallmeet();
      })
    }
  }
}
