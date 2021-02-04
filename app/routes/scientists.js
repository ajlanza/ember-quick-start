import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
    model() {
        return ['Victor Frankenstein', 'Dr Jekyll', 'Dr Moreau', 'Doc Brown'];
    }
}
