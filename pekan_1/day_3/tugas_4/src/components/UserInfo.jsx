import Avatar from './avatar.jsx';
import '../App.css'

function UserInfo({user}){
    return (
        <div>
            <Avatar user={user}/>
            <div className='UserInfo-name'>{user.name}</div>
        </div>
    );
}
export default UserInfo;