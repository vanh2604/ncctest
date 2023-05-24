import './blockcontent.css'
function BlockContent({imageUrl}) {
    return (
        <div className="block">
            <p className="block-header">
                Lorem ipsum dolor sit amet
            </p>
            <p>
                <img src={imageUrl} className="block-image"/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut,
                posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam
                porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at.ullamcorper
                ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit
                ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
            </p>
        </div>
    )
}
export default BlockContent