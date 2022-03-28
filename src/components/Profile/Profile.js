import React from "react";
import './Profile.css';

const Profile = ({ isProfileOpen, toggleModal, user }) => {
  return ( 
    <div className="profile-modal">
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80 w-80">
          <img src="http://tachyons.io/img/logo.jpg" className="h3 w3 dib" alt="avatar"/>
          <h1>{user.name}</h1>
          <h4>{`Images submitted:  ${user.entries}`}</h4>
          <p>{`Member since:  ${ new Date(user.joined).toLocaleDateString()}`}</p>
          <hr />
          <div className="measure">
            <label className="mt2 fw6" htmlFor="user_name">Name:</label>
            <input
              placeholder={user.name}
              className="pa2 ba w-100"
              type="text"
              name="user_name"
              id="name"
            />
            <label className="mt2 fw6" htmlFor="user_age">Age:</label>
            <input
              placeholder={user.age}
              className="pa2 ba w-100"
              type="text"
              name="user_age"
              id="age"
            />
            <label className="db fw6 lh-copy f6" htmlFor="user_pet">Pet:</label>
            <input
              placeholder={user.pet}
              className="pa2 ba w-100"
              type="text"
              name="user_pet"
              id="pet"
            />
          </div>

          <div className="mt4" style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <button className="b pa2 grow pointer hover-white w-40  bg-light-blue b--black-20">Save</button>
            
            <button className="b pa2 grow pointer hover-white w-40  bg-light-red b--black-20"
              onClick={toggleModal}
            >Cancel</button>
          </div>
        </main>

        <div className="modal-close" onClick={toggleModal}>&times;</div>
      </article>
    </div>
  );
}

export default Profile;