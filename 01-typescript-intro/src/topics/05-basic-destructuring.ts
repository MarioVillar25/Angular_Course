/*
interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 50,
  song: "mess",
  details: {
    author: "Un pavo",
    year: 1223,
  },
};

//Se puede renombrar la propiedad del objeto en el destructuring

const { song:anotherSong, songDuration, details } = audioPlayer;

const {author} = details;

const song = "other song";

//console.log("song", song);
//console.log(songDuration);
//console.log("another", anotherSong);
//console.log(author);

*/

const [, , trunks = "Not Found"]: string[] = ['Goku', "Vegeta"];

console.error(trunks)



export {};
