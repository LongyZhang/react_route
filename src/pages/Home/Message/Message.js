import React, { Component } from 'react'
import Content from './Content/Content'

import { NavLink, Route, Routes, Navigate, Link } from 'react-router-dom'

export default class Message extends Component {
    state = {
        MesArr: [
            { id: '01', title: 'Message001' },
            { id: '02', title: 'Message002' },
            { id: '03', title: 'Message003' }
        ]
    }
    f1 = (id, event) => {
        console.log(event.target, id);

    }

    f1 = (id) => {
        return (event) => {
            console.log(event.target, id);
        }
    }

    render() {
        const { MesArr } = this.state
        return (
            <div>
                <ul>
                    {
                        MesArr.map((obj) => {
                            return (
                                <li key={obj.id}>
                                    {/* in the to url to transfer data */}
                                    {/* pass params to route*/}
                                    <NavLink to={`Content/${obj.id}/${obj.title}`}>{obj.title} </NavLink>
                                    &nbsp; <button>Push</button>
                                    &nbsp; <button onClick={this.f1(obj.id)}>Replace</button>
                                    {/* Pass state params to route */}
                                    {/* <Link to='Content' state={{ id: obj.id, title: obj.title }}> </Link> */}
                                </li>
                            )
                        })
                    }
                </ul>
                <br />
                <Routes>

                    {/* receive parmas  */}
                    <Route path='Content' element={<Content />}>
                        <Route path=':id/:title' element={<Content />}></Route>
                    </Route>

                    {/* <Route path='Content' element={<Content />}></Route> */}


                </Routes>

            </div>
        )
    }
}
