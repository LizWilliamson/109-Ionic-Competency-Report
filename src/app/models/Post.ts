export class Post{
    // class attributes
    public message: string;
    public imageURL: string;
    public from: string;
    public to: string;
    public createdOn: Date;

    // class methods

    constructor(){
        this.to = "Everyone";
        this.createdOn = new Date(); 
    }


}