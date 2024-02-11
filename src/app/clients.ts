export class Clients {
  id:number = 1;
  name: string="";
  Address: string="";
  Email: string="";
  Password: string="";

    constructor(cno:number, name:string, Address:string, Email:string, Password:string){
      this.id=cno;
      this.name=name;
      this.Address=Address;
      this.Email=Email;
      this.Password=Password;
    }
}
