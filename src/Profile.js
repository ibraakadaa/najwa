import Address from "./Component/Profile/Address"
import FullName from "./Component/Profile/FullName"
import ProfileName from "./Component/Profile/ProfilePhoto"
import "./Profile.css"



function Profile(){
    return (
        <div className="st">
        <ProfileName></ProfileName>
    <FullName></FullName>
    <Address></Address> 
    </div>
        
    )
}
export default Profile