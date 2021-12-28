export class AuthorsService{

  authors:String[] = ['author1', 'author2', 'author3'];

  getAuthors(){
    return this.authors;
  }
}
