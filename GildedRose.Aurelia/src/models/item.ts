export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  decreaseSellIn = ():void =>{ this.sellIn--;}

  updateQuality = () => {
    if(this.quality === 0) return;
   
    if(this.sellIn < 0)
    {
      this.quality = this.quality - 2;
      return;
    }
    this.quality--;
  }
}
