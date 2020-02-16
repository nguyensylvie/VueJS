export default class Movie {
  /**
   * @param {string} title 
   * @param {number} year 
   * @param {string} language
   * @param {string} director 
   * @param {string} genre 
   * @param {string} url 
   * @param {number} note 
   */
    
  constructor(title, year, language, director, genre, url, note) {
    this.title = title;
    this.year = year;
    this.language = language;
    this.director = director;
    this.genre = genre;
    this.url = url;
    this.note = note;
    this.display = false;
    this.edit = false;
  }
}