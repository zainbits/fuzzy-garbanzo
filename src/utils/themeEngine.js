import { backend } from '../backend'

const useThemeEngine = async (color) => {
    const data = await backend.getEntries()
    return data.items[0].fields.themeData[color]
}

export default useThemeEngine