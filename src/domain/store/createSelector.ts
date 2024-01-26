import { createSelectorCreator, lruMemoize } from 'reselect'
import { equals } from 'ramda'

const createSelector = createSelectorCreator(lruMemoize, equals)

export default createSelector
