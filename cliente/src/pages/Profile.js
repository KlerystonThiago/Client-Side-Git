import React, { Component } from 'react'
import './../assets/css/Profile.css'
//import UserNotFound from '../Componentes/UserNotFoundComp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Api from '../Services/Api'

import ProfileComp from '../Componentes/ProfileComp'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { thisExpression } from '@babel/types'

const Search = <FontAwesomeIcon className="ico-list-search" icon={faSearch} />


export default class Profile extends Component {
    state = {
        repositoryInput: 'Livia Helen',
        repositories: [],
        user: [
            {
                login: "zeit",
                id: 14985020,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjE0OTg1MDIw",
                avatar_url: "https://avatars0.githubusercontent.com/u/14985020?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/zeit",
                html_url: "https://github.com/zeit",
                followers_url: "https://api.github.com/users/zeit/followers",
                following_url: "https://api.github.com/users/zeit/following{/other_user}",
                gists_url: "https://api.github.com/users/zeit/gists{/gist_id}",
                starred_url: "https://api.github.com/users/zeit/starred{/owner}{/repo}",
                subscriptions_url: "https://api.github.com/users/zeit/subscriptions",
                organizations_url: "https://api.github.com/users/zeit/orgs",
                repos_url: "https://api.github.com/users/zeit/repos",
                events_url: "https://api.github.com/users/zeit/events{/privacy}",
                received_events_url: "https://api.github.com/users/zeit/received_events",
                type: "Organization",
                site_admin: false,
                name: "ZEIT",
                company: null,
                blog: "https://zeit.co",
                location: "Global",
                email: "team@zeit.co",
                hireable: null,
                bio: "Our mission is to make cloud computing accessible to everyone.",
                public_repos: 123,
                public_gists: 0,
                followers: 0,
                following: 0,
                created_at: "2015-10-05T19:40:30Z",
                updated_at: "2019-11-19T07:24:55Z"
            }
        ]
    }

    componentDidMount(){
        this.addRepository();
    }

    addRepository = async () => {
        const response = await Api.get(`/users/klerystonthiago/repos`);
        this.setState({
            repositories: [...this.state.repositories, response.data]
        }) 
        //console.log(this.state.repositories);
    }

    /* handleAnddRepository = async (e) => {
        //${this.state.repositoryInput}
        try{
            const response = await Api.get(`/users/klerystonthiago/repos`);
            this.setState({
                repositories: '',
                repositories: [...this.state.repositories, response.data]
            })            
            //console.log(response);
        }
        catch(err){
            console.log(err);
        }
    } */

    render() {
        
        return (
            <div>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-3 title">
                        <h1 className="Github-Search">GitHub <span className="text-style-1">Search</span></h1>
                        </div>
                        <div className="col-md-9">  
                            <form>
                                <div className="input-group justify-content-center">
                                    <input 
                                        type="text"
                                        placeholder="Digite um Usuário"
                                        valeu={this.state.repositoryInput}
                                        onChange={e => this.setState({repositoryInput: e.target.value})}
                                        className="Search-Input"
                                    />
                                    <div className="input-group-append">
                                        <button onClick={this.addRepository} className="btn btn-outline-secondary button" type="button" id="button-addon2">                                        
                                            {Search}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <ProfileComp repositories={this.state.repositories} user={this.state.user} input={this.state.repositoryInput}/>
                    {/* <UserNotFound/> */}
                </div>
            </div>
        )
    }
}
