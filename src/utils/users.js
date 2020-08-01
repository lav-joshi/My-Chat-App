const users =[];

// add ,remove users,getUser,getUsersinRoom

const addUser = ({id,username,room}) =>{
    // clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //Validate the data
    if(!username || !room){
        return{
            error:"Username and room are required"
        }
    }
    
    //Check for existing users
    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username;
    });

    //Validate Username
    if(existingUser){
        return{
            error:"Username is in use "
        }
    }

    //Store user
    const user={id,username,room};
    users.push(user);

    return {user};
}

const removeUser=(id)=>{
  const index = users.findIndex((user)=>{
      return user.id===id;
  });
  if(index!==-1){
     return users.splice(index,1)[0];
  }
}

const getUser=(id)=>{
  let x;
  users.forEach((user)=>{
      if(user.id===id){
          x=user;
      }
  });
  if(x) return x; 
  return undefined; 
}

const getUsersInRoom = (room)=>{
    let ans=[];

    users.forEach((user)=>{
      if(user.room===room){
          ans.push(user);
      }
    })
    return ans; 
   
}

module.exports={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}