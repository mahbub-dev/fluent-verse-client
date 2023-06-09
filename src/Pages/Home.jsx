import { useQuery } from "@tanstack/react-query"
import ClassesSection from "../Components/ClassesSection"
import AchievementsSection from "../Components/ExtraSection"
import InstructorsSection from "../Components/InstructorSection"
import AwesomeSlider from "../Components/Slider"
const Home = () => {

    return (
        <div>
            <AwesomeSlider />
            <ClassesSection />
            <InstructorsSection />
            <AchievementsSection />
        </div>
    )
}

export default Home