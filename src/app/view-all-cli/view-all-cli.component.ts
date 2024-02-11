import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Clients } from '../clients';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-cli',
  templateUrl: './view-all-cli.component.html',
  styleUrls: ['./view-all-cli.component.css']
})
export class ViewAllCliComponent implements OnInit {





  constructor(private cliServ:ClientService, private router:Router){}


  allcli:Clients[]=[];

  ngOnInit(): void {
    this.ShowAllcli();
}

  getModcliPage(cno:number){

    this.router.navigate(['/modcli', cno]);
  }

  ShowAllcli()
  {
    this.cliServ.showallClients().subscribe(data=>{
      this.allcli = data;
      console.log(data);
    });
  }

  delCli(cno:number){
    if(confirm("Are you sure to delete")==true){
      this.cliServ.DeleteCliInfoBasedOnCliId(cno).subscribe(data=>{
        this.ShowAllcli();
      }
    )};
  }

  viewClientDetails(clientId: number) {
    this.router.navigate(['/singleclient', clientId]);
  }
}
