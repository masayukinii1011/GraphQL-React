import { gql } from 'apollo-boost';

//映画一覧取得クエリ
export const MOVIE_LIST = gql`
  {
    movies {
      id
      name
      genre
      director {
        name
      }
    }
  }`

//監督一覧取得クエリ
export const DIRECTOR_LIST = gql`
  {
    directors {
      id
      name
    }
  }`

//映画追加クエリ
export const ADD_MOVIE = gql`
  mutation($name: String!, $genre: String!, $directorId: ID!){
    addMovie(name: $name, genre: $genre, directorId: $directorId){
      name
      genre
    }
  }`

//監督追加クエリ
export const ADD_DIRECTOR = gql`
  mutation($name: String!, $age: Int!){
    addDirector(name: $name, age: $age){
      name
      age
    }
  }`

//映画削除クエリ
export const DELETE_MOVIE = gql`
  mutation($id: ID!){
    deleteMovie(id: $id){
      id
    }
  }`