import Footer from "../components/Footer"
// Home Page 

function Home(){
    return (
        <div>
            <h1 className="title">Steak <sup style={{fontSize:"20px"}}>&&</sup> Dine</h1>
            <p className="story">Welcome to Steak && Dine, where every bite tells a story. At Steak && Dine, we are passionate about serving perfectly crafted steaks, 
            seasoned to perfection and cooked exactly the way you love.</p>

            <Footer/>
        </div>
    )
}

export default Home
