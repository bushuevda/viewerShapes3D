import { Menu } from "./UI/ElementsUI/Menu";
import { CanvasViewer } from "./UI/CanvasViewer/CanvasViewer";
import { Flex} from "@adobe/react-spectrum";

export default function App() {
return (
      <Flex height={{S: "250px", M: "640px", L: "700px", XL:"800px", XXL: "1020px"}} 
            width={{S: "640px", M: "1000px", L:"1150px", XL:"1360px", XXL: "1900px"}}>
            <Menu ></Menu>
            <CanvasViewer ></CanvasViewer>
      </Flex>

);
}