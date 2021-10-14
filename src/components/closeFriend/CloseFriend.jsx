import "./closeFriend.css"


export default function CloseFriend({user}) {
    return (
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFreindName">{user.username}</span>
        </li>
    )
}
