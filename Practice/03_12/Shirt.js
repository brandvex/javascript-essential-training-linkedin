class Shirt {
    constructor(
        color,
        size,
        isWearing
    )
    {
        //properties
        this.color = color,
        this.size = size,
        this.isWearing = isWearing
    }
    putOnShirt(wearing){
        this.isWearing = wearing;
        console.log("isWearing shirt is set to" + wearing)
    }
}

export default Shirt