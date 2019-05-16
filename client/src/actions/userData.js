import axios from "axios";


export const userDates = dates => {
axios
    .post("/api/users/dates:uid", dates)
    .then(res => {
        const { userDate } = res.body
    })
}