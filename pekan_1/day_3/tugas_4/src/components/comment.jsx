import UserInfo from './UserInfo.jsx';
import '../App.css'

function Comment({author, text, date}){
    return (
        <div className='Comment'>
            <UserInfo user={author}/>
            <div className='Comment-text'>
                {text}
            </div>
            <div>
                {date.toLocaleDateString()}
            </div>
        </div>
    )
}
export default Comment;