function ProfileCard(props){
    const {nama, foto, bio, skills} = props;

    const imgStyle = {
        width: '100px'
    }
    
    return(
        <div>
            <img src={foto} style={imgStyle} alt="" />
            <h2>{nama}</h2>
            <p>{bio}</p>
            <h4>Keahlian:</h4>
            <ul>
                {skills.map((skill, index)=>{
                   return <li key={index}>{skill}</li>
                })}
            </ul>
        </div>
    );
}
export default ProfileCard;