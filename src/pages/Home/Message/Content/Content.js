import React, { Component, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Content() {

    const tempMessage = [
        { id: '01', msg: 'caonima' },
        { id: '02', msg: 'hehe' },
        { id: '03', msg: 'niubi' }
    ]

    const paras = useParams()

    const MatchId = tempMessage.find((obj) => {
        return (
            obj.id == paras.id
        )
    })
    console.log(MatchId);
    console.log(paras);
    return (
        <ul>
            <li>{paras.id}</li>
            <li>{paras.title}</li>
            <li>{MatchId.msg}</li>
        </ul>
    )
}
