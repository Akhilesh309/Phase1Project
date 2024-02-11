export class ProjectTasks {
      id:number = 0;
      TaskName:string = "";
      TaskDescription:string = "";
      ProjectId:number = 0;

      constructor(ptno:number, TaskName:string, TaskDescription:string, ProjectId:number ){
        this.id=ptno;
        this.TaskName=TaskName;
        this.TaskDescription=TaskDescription;
        this.ProjectId=ProjectId;
      }
}
