
import {PowerSettingsNewRounded , SettingsRounded , NotificationsActiveRounded , EmailRounded} from '@mui/icons-material';
import './Header.css'

const Header = ()=>{

    return(
        <div className="header">
            <div className='container-fluid'>
                <div className='header-content'>
                    <div className="col-4 header-noti">
                        <img src="./assets/profile.jpg" className='head-img' alt="" />
                        <SettingsRounded/>
                        <NotificationsActiveRounded/>
                        <EmailRounded/>
                    </div>
                    <div className="col-4 header-title"><h3 className='head-title'>پنل مدیریت</h3></div>
                    <div className="col-4 header-exit"><PowerSettingsNewRounded/></div>
                </div>
            </div>
        </div>
    )

}

export default Header;