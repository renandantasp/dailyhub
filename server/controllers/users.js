import User from '../models/user.js'

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await user.findById(id)
        res.status(200).json(user)
    } catch(err) {
        res.status(404).json({message: err.message})
    }
}

export const getUserFriend = async (req, res) => {
    try {
        const { id } = req.params
        const user = await user.findById(id)
        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        )
        const formattedFriends = friends.map(({_id, firstName, lastName, occupation, location, picturePath}) => {
        return {_id, firstName, lastName, occupation, location, picturePath} } )
        res.status(200).json(formattedFriends)
    } catch(err) {
        res.status(404).json({message: err.message})
    }
}
