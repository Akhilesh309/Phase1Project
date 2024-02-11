import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-single-client',
  templateUrl: './single-client.component.html',
  styleUrls: ['./single-client.component.css']
})
export class SingleClientComponent implements OnInit {
  client: any;
  projects: any[]=[];
  meetings: any[]=[];

  constructor(private route: ActivatedRoute, private clientService: ClientService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const clientId = params.get('id');

      if (clientId !== null) {
        this.clientService.getClientById(clientId).subscribe(client => {
          this.client = client;

          // Fetch projects related to the client
          this.clientService.getProjectsByClientId(clientId).subscribe(projects => {
            this.projects = projects;
          });

          // Fetch meetings related to the client
          this.clientService.getMeetingsByClientId(clientId).subscribe(meetings => {
            this.meetings = meetings;
          });
        });
      }
    });
  }

  viewClientDetails(): void {
    // You can trigger additional logic here if needed
    console.log('View Client Details button clicked!');
  }



}
