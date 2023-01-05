import logo from './logo.svg';
import './App.scss';
import React, { useState } from 'react';
import axios from 'axios'

//THE FINAL GIT HUB APP

// const testData = [
//   { name: "Zoheb khan", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
//   { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
//   { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
// ];
const Card = (props) => {
  return (
    <div>
      <div></div>
      <img src={props.profile.avatar_url} width="85px"/>
      <div style={{ display: "inline-block", marginLeft: "12px" }}>
        <div className='name' style={{ fontSize: "125%", }}>{props.profile.name}</div>
        <div>{props.profile.company}</div>
      </div>
    </div>
  )
}
const From = (props) => {
  const [userName, setUserName] = useState('')

  const onHandleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.get(`https://api.github.com/users/${userName}`)
    props.addNewProfile(response.data)


  }
  const onHandleChange = (event) => {
    event.preventDefault();
    setUserName(event.target.value)
  }
  return (
    <form onSubmit={onHandleSubmit} >
      <input
        type={"text"}
        placeholder={"enter gitHub id"}
        value={userName}
        onChange={onHandleChange}
      />
      <button >click to add</button>
    </form>
  )
}
const Cardlist = (props) => {
  return (
    <div>
      {
        props.profiles.map((item => {
          return (<Card profile={item} />
          )
        }))
      }

    </div>
  )
}
const App = (props) => {
  const [profiles, setProfiles] = useState([])
  const addNewprofile = (addNewProfile) => {
    console.log(addNewProfile);
    setProfiles([...profiles, addNewProfile])
  }
  return (
    <div>
      <div className='header'>
        The Git Hub App
      </div>
      <From addNewProfile={addNewprofile} />
      <Cardlist profiles={profiles} />
    </div>
  )
}



export default App;
