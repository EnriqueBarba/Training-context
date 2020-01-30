import React from 'react'
import TweethackService from '../services/TweethackService'
import { Redirect } from 'react-router-dom'

class RegisterForm extends React.Component {

    state={
        data:{
            name:'',
            username:'',
            email:'',
            password:'',
            avatar: null
        }
    }

    handleChange = (e) => {
        const {name,value,files} = e.target
        this.setState({
            data:{
                ...this.state.data,
                [name]: files ? files[0] : value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.state.data 
        const formData = new FormData()

        Object.keys(data).forEach(k => {
            formData.append(k, data[k])
        })

        TweethackService.register(formData)
        .then( data => {
            console.log(data)
            return <Redirect to="/"/>
        })
        .catch(console.error)
    
    }

    render() {
        const {name, username, email, password} = this.state.data;
        return (
            <div className="RegisterForm p-4">
                <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input className="form-control" onChange={this.handleChange} type="text" name="name" value={name} />
                    </div>
                    <div className="form-group">
                        <label>Username: </label>
                        <input className="form-control" onChange={this.handleChange} type="text" name="username" value={username} />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input className="form-control" onChange={this.handleChange} type="email" name="email" value={email} />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input className="form-control" onChange={this.handleChange} type="password" name="password" value={password} />
                    </div>
                    <div className="form-group">
                        <label>Avatar: </label>
                        <input className="form-control" onChange={this.handleChange} type="file" name="avatar" />
                    </div>
                    <button className="btn btn-success" type="submit">Send</button>
                </form>
            </div>
        )
    }

}

export default RegisterForm