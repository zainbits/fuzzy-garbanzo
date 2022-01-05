import * as contentful from 'contentful'

export const backend = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_CDI
})