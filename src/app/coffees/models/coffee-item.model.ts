export class CoffeeItem {
    
    constructor(public id: number, public uid: string, public blend_name: string, public origin: string, public variety: string, public notes: string, public intensifier: string) {
        this.id= id;
        this.uid= uid;
        this.blend_name= blend_name;
        this.origin= origin;
        this.variety= variety;
        this.notes= notes;
        this.intensifier= intensifier;
    }
}