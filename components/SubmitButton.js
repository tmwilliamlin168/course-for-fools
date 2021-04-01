export default function SubmitButton({onClick}) {
    return (
        <button
            className="rounded bg-blue-500 py-2 px-4 text-white text-2xl"
            onClick={onClick}
        >
            Submit
        </button>
    )
}