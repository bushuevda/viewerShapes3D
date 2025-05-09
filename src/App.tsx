import { Menu } from "./UI/ElementsUI/Menu";
import { CanvasViewer } from "./UI/CanvasViewer/CanvasViewer";
import { Flex , Provider, defaultTheme} from "@adobe/react-spectrum";

export default function App() {

return (
  <Provider theme={defaultTheme} colorScheme="light">
      <Flex height={"730px"}>
            <Menu ></Menu>
            <CanvasViewer ></CanvasViewer>
      </Flex>
    </Provider>

);
}