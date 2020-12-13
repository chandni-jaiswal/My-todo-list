import { LoginComponent } from "../login/login.component"

export interface ILogger{
    Log();
}
export class BaseLogger implements ILogger{
    Log(){

    }
}
export class ConsoleLogger extends BaseLogger{
    Log(){
        console.log("using console log");
    }
}
export class DbLogger extends BaseLogger{
    Log(){
        console.log("using Db log");
    }; 
}