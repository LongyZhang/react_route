import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Content() {

    const tempMessage = [
        { id: '01', msg: 'caonima' },
        { id: '02', msg: 'hehe' },
        { id: '03', msg: 'niubi' }
    ]

    // const paras = useParams()
    const location = useLocation()
    const { id, title } = location.state || {}

    // if you refresh the page in incogonito mode

    const matchId = tempMessage.find((obj) => {
        return (
            obj.id == id
        )
    }) || {}
    console.log(matchId);

    // console.log(this.props.location.state);

    // const MatchId = tempMessage.find((obj) => {
    //     return (
    //         obj.id == paras.id
    //     )
    // })
    // console.log(MatchId);
    // console.log(paras);
    return (
        <ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{matchId.msg}</li>
            {/* <li>{paras.id}</li>
            <li>{paras.title}</li>
            <li>{MatchId.msg}</li> */}
        </ul>
    )
}
