import Buyable from './Buyable';
import Cart from './Cart';


export default class Movie implements Buyable {
	public id: number;
	public name: string;
	public country: string;
	public slogan: string;
	public genre: string;
	public price: number;
	public year: number;
	public duration: number; 

	constructor(id: number, name: string, country: string, price: number, year: number, slogan: string, genre: string, duration: number) {
		this.id = id;
		this.name = name;
		this.country = country;
		this.price = price;
		this.year = year;
		this.slogan = slogan;
		this.genre = genre;
		this.duration = duration;
	}
}

let film = new Movie(1,'Мстители', 'США', 100, 2012, 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', 137);
Cart.add(film);
Cart.getAll(); 