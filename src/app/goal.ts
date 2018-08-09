export class Goal {
    // showDescription to create toggle effect
    public showDescription: boolean;
    constructor(public id: number, public name: string, public description: string,
        public completeDate: Date) {
        this.showDescription = false;

    }
 }
