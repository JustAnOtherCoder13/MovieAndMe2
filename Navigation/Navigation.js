import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    },
    FilmDetail: {
        screen: FilmDetail,
        navigationOptions: {
            title: "Détail"
        }
    }
})
export default createAppContainer(SearchStackNavigator)