
import UserForm from './Components/ContactForm'
import UserList from './Components/ContactList'
import React, { Component } from 'react';

class App extends Component {
    

    

    render() {
        
       

        return (
            <> 
                <UserForm />
                <h1 style={{fontSize:'40px',marginLeft:'500px',marginTop:'50px'}}>Added Users</h1>
                <UserList />
            </>
        );
    }
}

export default App;
