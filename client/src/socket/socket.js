import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_SERVER_URL); // Replace with your server URL

export const rollDice = (gameId, authToken)=>{
    socket.emit('roll', {
        gameId:gameId,
        token: authToken
    })
}

/*
turn-update:
{
     players:   [{name,color,position}]
     last_move: {
        player_index:   int,
        dice_outcome:   int,
        from:           int,
        to:             int            // if (to != (from + dice_outcome)) then it's special
     }
     next_player_index: int
}
---------------------------------------------------------------------
room-update:
{
    target_player: string
    type: "JOINED" | "LEFT" | "DISCONNECTED"
    players: [{name, color}]
}
*/

export const subscribeToRoom = (gameId, turnUpdate, roomUpdate)=>{
    socket.join(String(gameId))
    socket.on('room-update',roomUpdate)
    socket.on('turn-update',turnUpdate)
}