import io from 'socket.io-client';
const authToken = sessionStorage.getItem("token")
const socket = io(process.env.REACT_APP_SERVER_URL,{
    auth:{authToken}
});

export const subscribeToRoom = (gameId, turnUpdate, roomUpdate, turnLoad)=>{
    socket.join(String(gameId))
    socket.on('room-update', roomUpdate)
    socket.on('turn-update', turnUpdate)
}

export const loadTurn = (gameId,callback)=>{
    socket.emit('turn-load',String(gameId),callback)
}
export const rollDice = (gameId, authToken)=>{
    socket.emit('roll-dice', {
        gameId:gameId,
        token: authToken
    })
}

/*
turn-update
{
 update_number :int,
 move{
	    player_id: int,
	    dice_outcome: int,
        intermediate_pos: int	
        final_pos: int,
 }
 next_player_id: int
}
--------------------------------------------------------------------
turn-state
{
 players:   [{id,name,color,position}],
 last_move: {
     player_id: int,
     dice_outcome: int,
     intermediate_pos: int
     final_pos: int,
 },
 next_player_id: int,
 board_id: int, 
 }
 */