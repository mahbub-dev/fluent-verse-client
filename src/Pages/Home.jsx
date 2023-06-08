import ClassesSection from "../Components/ClassesSection"
import InstructorsSection from "../Components/InstructionSection"
import AwesomeSlider from "../Components/Slider"

const Home = () => {
    return (
        <div>
            <AwesomeSlider />
            <ClassesSection/>
            <InstructorsSection/>
        </div>
    )
}

export default Home