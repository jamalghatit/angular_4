export class like{

    increased: boolean;

    constructor(private _number_of_like: number, private _like_selected: boolean){
    }

    set number_of_like(number_of_like: number){
        this._number_of_like = number_of_like;
    }

    get number_of_like(){
        return this._number_of_like;
    }

    get like_selected(){
        return this._like_selected;
    }

    clicked(){
        if (this.like_selected)
            if (this.increased){
                this.number_of_like = this.number_of_like + 1;
                this.increased = true;
                return this.number_of_like;
            }else{
                this.number_of_like = this.number_of_like - 1;
            }
    }
}