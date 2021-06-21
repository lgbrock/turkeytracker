import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_28/1587661/dogs-age-years-kb-inline-200707-1587661.jpg" alt="profilePic" />
                        <label htmlFor="fileInput">
                        <i class="settingsPPIcon fas fa-dog"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: 'none'}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Logan" />
                    <label>Email</label>
                    <input type="email" placeholder="logan@logangbrock.com" />
                    <label>Username</label>
                    <input type="password" />
                    <button className="settingsSubmitButton">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
