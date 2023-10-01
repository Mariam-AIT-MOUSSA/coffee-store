export class CoffeeItem {
    
    constructor(private id: number, private uid: string, private blend_name: string, private origin: string, private variety: string, private notes: string, private intensifier: string) {
        this.id= id;
        this.uid= uid;
        this.blend_name= blend_name;
        this.origin= origin;
        this.variety= variety;
        this.notes= notes;
        this.intensifier= intensifier;
    }
}