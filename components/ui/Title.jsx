export default function Title({ heading, subHeading }) {
    return (
        <div className="text-center mb-5">
            <h2 className="text-xl font-bold">{heading}</h2>
            <p>{subHeading}</p>
        </div>
    )
}
