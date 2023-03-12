export class Client
{
  id: number | undefined
  firstname:string | undefined
  lastname:string | undefined
  ville:string | undefined
  isUpdate: boolean | undefined

  constructor(id:number, firstname:string,lastname:string,ville:string, isUpdate:boolean)
  {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.ville = ville;
    this.isUpdate = isUpdate;
  }

}
