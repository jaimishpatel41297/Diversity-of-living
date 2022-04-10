import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

function WithAuthAra65(ComponentInside) {
    return class extends Component {
        constructor() {
            super();
            this.state={
                loading:true,
                redirect:false
            };
        }

        //Call the authorization
        componentDidMount() {
            fetch(`${process.env.REACT_APP_API_BASE_URL}` + '/user/me', {
                credentials: "include",
                headers: { 'x-access-token' : localStorage.getItem('token')}
            })
            .then( res => { 
                if (res.status === 200) {
                    this.setState({ loading: false });
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch( err => { 
                console.error(err);
                this.setState({ 
                    loading: false, 
                    redirect: true });
        });
    }

        render() {
            const { loading, redirect } = this.state;
            if (loading) {
                return null;
            } if (redirect) {
                return <Redirect to ="/signup" />
            }
            return <ComponentInside { ...this.props } />
        }
    }
}

export default WithAuthAra65;