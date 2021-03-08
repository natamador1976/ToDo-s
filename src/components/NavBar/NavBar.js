import NavBarItems from './NavBarItems';
import "./NavBar.css";
function NavBar(){
    let dummyData=[
            {label:"Inicio", uri:"/"},
            {label:"To Do's", uri:"/ToDo"},
            {label:"Log In", uri:"/Login"}
            
    ];

    let navBarItem= dummyData.map((o,i)=>{
        return <NavBarItems label={o.label} uri={o.uri} key={i}></NavBarItems>
    });
    return (
        <nav>
            <ul>
                {navBarItem}
            </ul>
        </nav>
    );
}

export default NavBar;