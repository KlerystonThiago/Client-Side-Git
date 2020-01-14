import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSitemap } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon className="ico-list" icon={faSitemap} />
const box = <FontAwesomeIcon className="ico-list" icon={faBoxOpen} />
const star = <FontAwesomeIcon className="ico-list" icon={faStar} />
const users = <FontAwesomeIcon className="ico-list" icon={faUserFriends} />

export default class ProfileComp extends Component {
    state = {
        repositories: [],
    }
    render() {
        return (
            <div>
                <div class="row mt-4">
                    <div class="col-md-3">
                        <img src="https://avatars2.githubusercontent.com/u/8151519?v=4" width="100%"/>
                        <h1 class="user-name mt-2 mb-0">Darth Vader</h1>
                        <h6 class="user-login mt-0">anakinskywalker</h6>
                        <p class="organization-name"><span>{element}</span>The Galacit Empire</p>
                        <p class="organization-name"><span>{box}</span>Tatooline</p>
                        <p class="organization-name"><span>{star}</span>1.000.000</p>
                        <p class="organization-name"><span>{users}</span>9.999.999</p>
                    </div>
                    <div class="col-md-9 dd">
                        <h1 class="repo-name">Death Star</h1>
                        <p class="repo-description">Death Star</p>
                        <p class="organization-name star-count"><span>{star}</span>4.200</p>

                        <h1 class="repo-name">Vader's Armour</h1>
                        <p class="repo-description">Death Star</p>
                        <p class="organization-name star-count"><span>{star}</span>954</p>

                        <h1 class="repo-name">How to kill Obi-wam</h1>
                        <p class="repo-description">Death Star</p>
                        <p class="organization-name star-count"><span>{star}</span>0</p>

                        <h1 class="repo-name">Dual-phase-lightsaber</h1>
                        <p class="repo-description">Death Star</p>
                        <p class="organization-name star-count"><span>{star}</span>23</p>

                        <h1 class="repo-name">TIE Advanced x1</h1>
                        <p class="repo-description">Death Star</p>
                        <p class="organization-name star-count"><span>{star}</span>83</p>
                    </div>
                </div>
            </div>
        )
    }
}
