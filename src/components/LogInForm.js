import React from 'react'
import { WithAuthConsumer } from '../contexts/AuthContext'
import TweethackService from '../services/TweethackService'
import { Redirect } from 'react-router-dom'

class LogInForm extends React.Component {
    
    state={
        data:{
            email:'',
            password:''
        },
        error:false,
        loading:false
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            data:{
                ...this.state.data,
                [name]:value
            }
        })
    }

    handleSubmit = (e) => {
        
        e.preventDefault();
        TweethackService.login({...this.state.data})
            .then((user) => {
                this.props.setUser(user)
            },
            () => {
                this.setState({error:true, loading:false})
            })
        
    }


    render() {
        const data = this.state.data
        //const errorClassName = this.state.error ? 'is-invalid' : ''

        if (this.props.currentUser) {
            return <Redirect to="/"/>
          }

        return(
            <div className="LogInForm p-4" >
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input className="form-control" onChange={this.handleChange} type="text" name="email" value={data.email}/><br/>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input className="form-control" onChange={this.handleChange} type="password" name="password" value={data.password}/><br/>
                    </div>
                    <button className="btn btn-info" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default WithAuthConsumer(LogInForm)