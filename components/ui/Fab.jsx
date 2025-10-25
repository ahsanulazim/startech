export default function Fab({ bottom, children }) {
    return (
        <div className={`fab ${bottom ? bottom : ""}`}>
            {children}
        </div>
    )
}
