import Axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const PostDisLikeData = async (obj) => {

    try {
        const result = await Axios.post(`${MainUrl}api/term/dislike`, obj)
        return result.data;

    } catch (error) {
        console.log(error)
        return {};
    }
};

export default PostDisLikeData;


