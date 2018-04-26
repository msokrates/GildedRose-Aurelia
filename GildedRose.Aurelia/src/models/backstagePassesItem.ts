import { Item } from "./item";

export class BackstagePassesItem extends Item{
    /**
     *
     */
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn,quality);
        
    }
    updateQuality = () =>
    {
        if(this.sellIn < 0)
        {
            this.quality = 0;
            return;
        }
        if(this.quality === 50) return;
        if(this.sellIn < 5)
        {
            this.quality = this.quality + 3;
            return;
        }
        if(this.sellIn < 10)
        {
            this.quality = this.quality + 2;
            return;
        }
        this.quality++;
    }
}