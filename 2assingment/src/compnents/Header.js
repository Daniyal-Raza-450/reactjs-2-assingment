import{
    BrowserRouter as link
}from 'react-router-dom';

function Header (){
    return(
        <div>
            <ul>
                <li> <link to='/'>Home</link> </li>
                <li> <link to='/About'>About</link> </li>
                <li> <link to='/Contact'>Contact</link> </li>
            </ul>
        </div>
    )
}
export default Header;