/*
Los métodos estáticos se utilizan para implementar funciones que pertenecen a la clase como un todo, no a un objeto particular de la misma.
*/

class Article {
  constructor(title, date) {
    this.title = title
    this.date = date
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date
  }
}

//Uso
let articles = [new Article('HTML', '2022-01-01'), new Article('CSS', '2022-01-02'), new Article('JavaScript', '2022-01-03')]

articles.sort(Article.compare)
console.log(articles[0].title)
