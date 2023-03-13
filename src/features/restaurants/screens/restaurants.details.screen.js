import { SafeArea } from "../../../components/utility/safe-area.component"
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'



export const RestaurantDetailsScreen = ({ route }) => {
    const { restaurant } = route.params

    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
        </SafeArea>
    )
}