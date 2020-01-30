import React from 'react'

class LogInForm extends React.Component {
    
    state={
        data:{
            username:'',
            password:''
        }
    }

    handeChange = (e) => {
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
        alert('SUBMIT!')
        
    }


    render() {
        const data = this.state.data
        return(
            <div className="LogInForm" >
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label><input onChange={this.handeChange} type="text" name="username" value={data.username}/><br/>
                    <label>Password: </label><input onChange={this.handeChange} type="password" name="password" value={data.password}/><br/>
                    <button type="submit">Login</button>
                </form>
                {JSON.stringify(this.state.data)}
            </div>
        )
    }
}

export default LogInForm