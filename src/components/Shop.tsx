import PracticeNavigation from "./PracticeNavigation";
import certificateImage from "../assests/certificate-11547058452f58wqn0l2u-removebg-preview.png"
import card from "../assests/png-clipart-magnetic-stripe-card-identity-document-access-control-credit-card-integrated-circuits-chips-credit-card-angle-rectangle-removebg-preview-removebg-preview.png";

const Shop = () => {

    return (
        <div style={{color: "white", margin: "3rem 0"}}>
            <PracticeNavigation/>
            <div className={"shop-head"}>
                <p style={{fontWeight: 500, fontSize: "3rem"}}>🛒 Shop</p>
                <p style={{fontWeight: 300, fontSize: "2rem"}}>Organization: <span style={{fontWeight: 500}}>UAEU</span>
                </p>
            </div>
            <p>Claim rewards from points you earned answering quesitons!</p>

            <div className={"items"}>
                <div className={"item"}>
                    <img className={"image-reward"} src={certificateImage} alt={"cert"}/>
                    <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <p className={"reward-title"}>Certificate</p>
                        <p className={"description"}>Buy a certificate to present your skills outside the website.</p>
                        <button className={"buy-button"}>300 Points</button>
                    </div>
                </div>
                <div className={"item"}>
                    <img className={"image-reward"} src={card} alt={"card"}/>
                    <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <p className={"reward-title"} >Food Swipes</p>
                        <p className={"description"}>Buy Food Swipes to use at the food court.</p>
                        <button className={"buy-button"}>1100 Points</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Shop;