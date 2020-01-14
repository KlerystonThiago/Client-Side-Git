    import React, { Component} from 'react'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

    import { faSitemap } from '@fortawesome/free-solid-svg-icons'
    import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
    import { faStar } from '@fortawesome/free-solid-svg-icons'
    import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

    const element = <FontAwesomeIcon className="ico-list" icon={faSitemap} />
    const box = <FontAwesomeIcon className="ico-list" icon={faBoxOpen} />
    const star = <FontAwesomeIcon className="ico-list" icon={faStar} />
    const usersinho = <FontAwesomeIcon className="ico-list" icon={faUserFriends} />
    

    /* const CompareList = ({ repositories, user, input }) => ( 
        <div>
            <div className="row mt-4">
                <div className="col-md-3">
                {user.map(users => (
                    <div key={users.id}>
                        <img src={users.avatar_url} width="100%" alt=""/>
                        <h1 className="user-name mt-2 mb-0">{users.name}</h1>
                        <h6 className="user-login mt-0">{users.login}</h6>
                        <p className="organization-name"><span>{element}</span>{users.company}</p>
                        <p className="organization-name"><span>{box}</span>{users.location}</p>
                        <p className="organization-name"><span>{star}</span>{users.following}</p>
                        <p className="organization-name"><span>{usersinho}</span>{users.followers}</p>
                    </div>
                ))}
                </div>
                <div className="col-md-9 dd">
                    {input}
                    {repositories.map(repository => (                    
                        <div key={repository.id}>
                            <h1 className="repo-name">{repository.name}</h1>
                            <p className="repo-description">{repository.description}</p>
                            <p className="organization-name star-count"><span>{star}</span>{input}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ) */

    const CompareList = (props) => { 
        console.log(props.repositories)
        return(
            <div>
                {}
            </div>
        ); 
    }
    
    /* export default class ProfileComp extends Component {
        render() {
            const input = 'this.props.repositoryInput';
            //console.log(this.props.repositories)
            return (
                <div>
                    {this.props.repositories.map(repository => (                    
                        <div key={repository.id}>
                            <h1 className="repo-name">{repository.name}</h1>
                            <p className="repo-description">{repository.description}</p>
                            <p className="organization-name star-count"><span>{star}</span>{this.props.repositoryInput}</p>
                        </div>
                    ))}
                    {input}
                </div>
            )
        }
    } */
    
    
    export default CompareList;