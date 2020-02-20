import React, { Component } from 'react';
import { RoomContext } from '../Context';

class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render () {
        const {greeting, name} = this.context;
        return (
            <div>
                {greeting} from featured rooms, {name}
            </div>
        );
    }
}

export default FeaturedRooms;