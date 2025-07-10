import { IconsLogos } from "./components/docs/IconsLogos"
import NavDoc from "./components/docs/Nav"
import SelectMenuDoc from "./components/docs/SelectMenu"
import ToggleDoc from "./components/docs/Toggle"

function App() {
  return (
    <>
      <h2 className="text-xl font-bold whitespace-nowrap text-white sm:text-2xl">
        Luminescent UI React Components
      </h2>
      <ToggleDoc />
      <SelectMenuDoc />
      <NavDoc />
      <IconsLogos />
    </>
  )
}

export default App
