import { start } from "@popperjs/core";

export class Meetings {
  id:number= 0;
  MeetingTopic:string = "";
  No_of_Persons:number= 0;
  Start_Date_Time:string = "";
  ClientID:number= 0;

  constructor(mno:number, MeetingTopic:string, No_of_Persons:number, Start_Date_Time:string, ClientID1:number){
    this.id=mno;
    this.MeetingTopic=MeetingTopic;
    this.No_of_Persons=No_of_Persons;
    this.Start_Date_Time=Start_Date_Time;
    this.ClientID=ClientID1;
  }
}
