import Marquee from "./Marquee";

function ProfileBox() {
  const profileStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    gap: '1rem'

  }

  return (
    <div>
      <div style={profileStyle}>
        <h1 style={{ color: '#884a10ff'}}>Muhammad Harits</h1>
        <img src="man.png" alt="" style={{borderRadius: '100000px', width: '300px', minWidth: '100px'}}/>
        <Marquee />
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default ProfileBox;