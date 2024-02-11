import { Component } from '@angular/core';
import { Clients } from '../clients';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string="";
  pswd:string="";
  msg:string="";
  cliinfo:Clients[]=[];

  constructor(private cliServ:ClientService, private router:Router){
    sessionStorage.clear();
  }

  UserCheck(){

    if (this.username === "Admin" && this.pswd === "admin@123") {
      this.router.navigate(['/welcome']);


    } else {
      this.cliServ.showallClients().subscribe(data => {
        this.cliinfo = data;

        let matchedClient: Clients | undefined; // Declare a variable to store the matched client

        for (let i = 0; i < this.cliinfo.length; i++) {
          if (this.cliinfo[i].Email === this.username && this.cliinfo[i].Password === this.pswd) {
            sessionStorage.setItem('user', this.cliinfo[i].name);
            sessionStorage.setItem('cid', this.cliinfo[i].id.toString());

            matchedClient = this.cliinfo[i];
             // Store the matched client

            break;
          }
        }

        if (matchedClient) {
          this.router.navigate(['/singleclient', matchedClient.id]); // Use the stored client
        } else {
          this.msg = "Please check Username/Password";
        }

      });
    }
  }

 /*   this.cliServ.showallClients().subscribe(data => {
      this.cliinfo = data;

      // Check if provided credentials match admin
      if (this.username === "Admin" && this.pswd === "admin@123") {
        // Navigate to the full app route for admin
        this.router.navigate(['/home']);
      } else {
        // Check if provided credentials match any client
        const matchedClient = this.cliinfo.find(cli => cli.Email === this.username && cli.Password === this.pswd);

        if (matchedClient) {
          // Navigate to the single client page
          this.router.navigate(['/singleclient', matchedClient.id]);
        } else {
          this.msg = "Please check Username/Password";
        }
      }
    });*/
  }

