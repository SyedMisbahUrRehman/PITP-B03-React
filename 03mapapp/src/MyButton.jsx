export default function MyButton({label = "Click Me",fn}) {
    const showAlert = () => {
        alert('Button Clicked!')
    }
    return (
        <button onClick={fn}>{label}</button>
    )
}