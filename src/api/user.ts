import client from './client'

const getUserProfile = async (userId: any, viewerId: any) => {
    const response = await client({
        method: 'GET',
        url: `/api/user/${userId}/profile?viewerId=${viewerId}`,
        authRequired: false
    })
    return response.data
}

const followUserProfile = async (userId: any, followerId: any, followed: boolean) => {
    let methodNmae = followed ? 'follow' : 'unfollow';
    const response = await client({
        method: 'POST',
        url: `/api/user/${userId}/${methodNmae}?by=${followerId}`,
        authRequired: false
    })
    return response.data
}

export default {
    getUserProfile,
    followUserProfile
}
