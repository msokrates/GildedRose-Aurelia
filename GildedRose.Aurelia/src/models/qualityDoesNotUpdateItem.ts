import { Item } from "./item";

export class QualityDoesNotUpdateItem extends Item {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn,quality);
        
    }
    decreaseSellIn = () =>  {}
    updateQuality = () => { };
}