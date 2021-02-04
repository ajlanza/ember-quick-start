import Route from '@ember/routing/route';

export default class ArtistsRoute extends Route {
  model() {
    return ['Salvador Dali', 'Edvard Munch', 'Rene Magritte'];
   } 
}
