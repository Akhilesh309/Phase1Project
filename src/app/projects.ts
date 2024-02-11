export class Projects {
  id:number =0;
  ProjectName:string = "";
  Duration:string = "";
  ClientId:number = 0;


  constructor(pno:number, ProjectName:string, Duration:string, ClientId:number){

    this.id=pno;
    this.ProjectName=ProjectName;
    this.Duration=Duration;
    this.ClientId=ClientId;

  }

}
