export default function Image_thumbnail({ imagedata }) {
    return (
        <div className="image_thumbnail" style={{ backgroundImage: `url(${ imagedata })` }}>
            <div className="image_ratio"></div>
        </div>
    )
}