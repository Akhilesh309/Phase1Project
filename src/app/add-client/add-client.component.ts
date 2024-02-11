import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Clients } from '../clients';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
constructor(private cliServ: ClientService, private router:Router){}
cli: Clients = new Clients(0,"","","","");
msg: string="";

ClientSaving(){
  this.cliServ.addNewCli(this.cli).subscribe(data=>{
    console.log(data);
    this.router.navigate(['/viewall']);
    this.msg="Client is saved";
  })
}
}
