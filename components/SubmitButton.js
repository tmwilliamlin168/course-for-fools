export default function SubmitButton({onClick}) {
    return (
        <button
            className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-700 transition font-bold"
            onClick={onClick}
        >
            Submit
        </button>
    )
}