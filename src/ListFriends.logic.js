
export async function getFriends(){
    try {
        const getusers = await fetch('https://reqres.in/api/users');
        const users = await getusers.json();
        const newList = users.data.map((friend)=>(
          {id: friend.id,
          name: friend.first_name,
          last_name: friend.last_name,
          email: friend.email,
          avatar: friend.avatar,
          invited: false,
        }))
        localStorage.setItem('listOfFriends', JSON.stringify(newList))
        return newList
      } catch (error) {
        console.log('Error fetching friends:', error);
      }
}

export function onChange (id, invited, listFriends, setListFriends){
    const newListFriends = listFriends.map((friend)=> friend.id === id ?
      {...friend, invited: invited} : friend)
      
    setListFriends(newListFriends)
    localStorage.setItem('listOfFriends', JSON.stringify(newListFriends))
  }
