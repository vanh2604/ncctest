import './main.css'
import BlockContent from "../BlockContent/BlockContent.tsx";
import Footer from "../Footer/Footer.tsx";

function MainContent() {
    return (
        <div className="container-content">
            <div className="content-body">
                <div className="logo">
                    <img src="/logoNCC.png"/>
                </div>
                <div className="intro">
                    <b className="intro-header">Lorem ipsum dolor sit asmet?</b>
                    <p className="intro-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat.
                        Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                        turpis.
                        Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut
                        mi.
                        Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo
                        eleifend
                        convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus
                        augue
                        tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
                    </p>
                </div>
                <div className="content">
                    <BlockContent imageUrl="/css-icon.png"/>
                    <BlockContent imageUrl="/html-icon.png"/>
                    <BlockContent imageUrl="/url-icon.png"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainContent