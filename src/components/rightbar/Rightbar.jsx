import "./rightbar.css";
import { Users } from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Đán</b> and <b>3 orther friends</b> has a birthday today.
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Ha Noi</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Ha Noi</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friend</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Hai</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Khuong</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Dan</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWraper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}
