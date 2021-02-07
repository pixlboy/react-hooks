// Demo of use custom hooks (useInput is custom hook)
import {useInput} from "./useInput";

function ColorSound() {
    const [colorProps, resetColor] = useInput("#000000");
    const [soundProps, resetSound] = useInput("");

    const submit = (e) => {
        e.preventDefault();
        alert(`${soundProps.value} sounds like ${colorProps.value}`);
        resetSound();
        resetColor();
    }

    return (
        <form onSubmit={submit}>
            <input
                {...soundProps} 
                type="text"
                placeholder="sound..."
            />
            <input
                {...colorProps} 
                type="color"
            />
        </form>
    )

}

export default ColorSound;

