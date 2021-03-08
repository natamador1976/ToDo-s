function NavBarItems({label,uri}){
    return (
        <li><a class="font-medium" alt={label} href={uri}>{label}</a></li>
    );
}

export default NavBarItems;

