import {Item} from './item';

export class AgedBrie extends Item {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn,quality);
        
    }
    updateQuality = () => {
        
        if(this.quality === 50) return;
        
        this.quality++;
    }
}