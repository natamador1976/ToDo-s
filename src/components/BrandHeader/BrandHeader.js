import Brand from "./Brand";
import NavBar from "../NavBar/NavBar";
import "./BrandHeader.css";
function BrandHeader({childre}){
    return(
        <header>
            <Brand title="Notes ++"></Brand>
            <NavBar></NavBar>
        </header>
    );
}

export default BrandHeader;