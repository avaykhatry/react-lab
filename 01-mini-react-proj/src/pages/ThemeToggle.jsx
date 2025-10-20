import { Button } from "../components/Button";

export default function ToggleTheme() {

    function handleClick() {

        // do mapping instead of if else of it's short form, e.g., below
        // const colors = {
        // }

        let var1 = document.documentElement.style;
        
        var1.getPropertyValue('--bg-color') === '#242424' 
        ? var1.setProperty('--bg-color', 'white') 
        : var1.getPropertyValue('--bg-color') === 'white' 
        ?  var1.setProperty('--bg-color', '#242424')
        : var1.getPropertyValue('--txt-color') === 'white' 
        ? var1.setProperty('--txt-color', 'black') 
        : var1.getPropertyValue('--txt-color') === 'black' 
        ? var1.setProperty('--txt-color', 'white')
        : null;

        }

    return (
        <>
            <Button onClick={handleClick}>
                Change Theme
            </Button>
        </>
    )
}