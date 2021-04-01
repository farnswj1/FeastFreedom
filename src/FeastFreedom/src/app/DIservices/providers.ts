export class Providers{
    user: string ='';
    email: string ='';
    password:string = '';
    name:string = '';
    workdays: any;
    time_in:any;
    time_out:any;
    menu = new Menu();
    

}

export class Menu{
    name:  string ='';
    vegan: boolean = false;
    price: number = 0;


}