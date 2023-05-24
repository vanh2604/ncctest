import './sidebar.css'
function Sidebar() {
    return (
        <div className="sidebar">
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">News</a>
            <a href="#" className='active'>Blog</a>
            <a href="#">Contact</a>
        </div>
    )
}

export default Sidebar