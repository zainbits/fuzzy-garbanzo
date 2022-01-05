import { fitData } from './contentful-reducer'
import { backend } from '../../backend'

export const fetchItems = () => dispatch => {
    return backend.getEntries()
        .then(res => dispatch(fitData(res.items[0].fields)))
        .catch(console.error)
}