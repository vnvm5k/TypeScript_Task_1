export default class Cart {
	items: Buyable[] = [];
	
	add(item: Buyable): void {
		this.items.push(item);
	}
	
	getAll(): Buyable[] {
		return [...this.items];
	}

	totalSum(): {
		let arr = this.getAll();
		arr.forEach(item => {
		  return total += item.price;
		})
	}

	totalSumDisc(disc: number): {
		let arr = this.getAll();
		arr.forEach(item => {
		  total += item.price;
		  return total - (total*(disc / 100));
		})
	}

	totalSumDisc(id: number): {
		let arr = this.getAll();
		let index = arr.findIndex(item => item.id === id);
		this.items.splice(index, 1); 
		return [...this.items];
		})
	}

}
