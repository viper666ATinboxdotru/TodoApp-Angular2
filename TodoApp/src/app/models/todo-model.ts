export class TodoModel {
    Id: number;
    IsCompleted: boolean;
    Name: string;

    constructor( text: string){
        this.Name = text;
    }
}
