import React, { Component } from 'react'
import { RoomContext } from "../Context";

export default class FeturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const {name,greeting} = this.context
        
        
        return (
            <div>
                {greeting}  {name} from featured room .
            </div>
        )
    }
}
