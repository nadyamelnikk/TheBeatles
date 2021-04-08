const TheBeatlesBand = [
	{
		name: `The Beatles`,
		data: `The Beatles were an English rock band, formed in Liverpool in 1960. With members John Lennon, Paul McCartney, George Harrison and Ringo Starr, they became widely regarded as the foremost and most influential act of the rock era.`
	},
	{
		name: `John Lennon`,
		data: `John Lennon (John Winston Lennon) was born on 9.10.1940 in Liverpool. When he was 17 he founded the band "The Querryman". In 1962 he went to Hamburg, Germany, with Paul McCartney, George Harrison and Pete Best. In 1963 John Lennon and his band came back to English and got first record contract. Till 1970 he played with Paul McCartney, George Harrison and Ringo Starr. They called their band "The Beatles" and became very famous in the whole world. Lennon played the guitar and sang and wrote many songs. In 1970 "The Beatles" parted and Lennon made his own music and a very good solo career. On 8.12.1980 he died at the age of 40 in New York, because a mad man shot him.`
	},
	{
		name: `Paul McCartney`,
		data: `Paul McCartney was born on 18.6.1942/ He grew up in Liverpool with his parents and siblings. When he was a teenager, John Lennon and he became friends. They were the best friends. In the Band he played the bass guitar and sang and wrote many songs. When the Beatles parted they argued and had no contact for a long time. Paul McCartney started a very good solo career. Today he lives in East Sussex.`
	},
	{
		name: `George Harrison`,
		data: `George Harrison was born on 25.2.1943 in Liverpool. He played with John Lennon and Paul McCartney in "The Querryman" and went with them to Hamburg. He played the lead guitar and sang and wrote songs for the Beatles. After the Beatles parted he had a good solo career. On 29.11.2001 he died in Los Angeles because of cancer.`
	},
	{
		name: `Ringo Starr`,
		data: `Ringo Starr (Richard Starkey) was born on 17.7.1940 in Liverpool. In his young days he played with many bands in Liverpool. With another band he went to Hamburg. There he met The Beatles and in 1962 he became a Beatle. He played the drums and sang. After the Beatle parted he started a solo career but he also started a career as an actor. `
	}
]

const accordionBeatles = document.querySelector('#accordionBeatles');
const renderTheBeatles = document.querySelector('#renderTheBeatles');


class TheBeatles {
	static createBeatles(arr){
		console.log(arr);

		let beatles = arr
			.map(beatle=>new TheBeatle(beatle));

		let beatlesAccordion = beatles
			.map((beatle, index)=>beatle.renderBeatle(index))
			.join('');

		beatles.map(beatle=>{
			beatle.renderMusician()
		})

		accordionBeatles.innerHTML = beatlesAccordion;
	}
}

class TheBeatle {
	constructor(beatle) {
		this.createBeatle(beatle);
	}

	createBeatle(beatle) {
		for(let key in beatle) {
			this[key] = beatle[key];
		}
	}

	renderBeatle(index) {
		return `<div class="accordion-item">
		    <h2 class="accordion-header" id="heading${this.name.replace(' ', '')}">
		      <button class="accordion-button ${index != 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.name.replace(' ', '')}" aria-expanded="${index != 0 ? 'false' : 'true'}" aria-controls="collapse${this.name.replace(' ', '')}">
		        <img class="accordion-button_img" src = "images/${this.name.replace(' ', '')}.svg" width ="50" height="50">
		        ${this.name}
		      </button>
		    </h2>
		    <div id="collapse${this.name.replace(' ', '')}" class="accordion-collapse collapse ${index != 0 ? '' : 'show'}" aria-labelledby="heading${this.name.replace(' ', '')}" data-bs-parent="#accordionBeatles">
		      <div class="accordion-body">${this.data}</div>
		    </div>
		  </div>`
	}

	renderMusician(){
		let musicant = document.createElement('img');
		musicant.id = `render__${this.name.replace(' ', '')}`;
		musicant.src = `images/${this.name.replace(' ', '')}.svg`;
		musicant.alt = this.name;
		musicant.width = 150;
		musicant.height = 150;
		renderTheBeatles.append(musicant);

		musicant.addEventListener('click', ()=> {
			let btn = document.querySelector(`button[aria-controls="collapse${this.name.replace(' ', '')}"]`);
			btn.click();
		})
	}
}

TheBeatles.createBeatles(TheBeatlesBand);



