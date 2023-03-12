export class Employee
{
  id: number | undefined
  firstname:string | undefined
  lastname:string | undefined
  status:string | undefined
  isUpdate: boolean | undefined

  constructor(id:number, firstname:string,lastname:string,status:string, isUpdate:boolean)
  {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.status = status;
    this.isUpdate = isUpdate;
  }
}
