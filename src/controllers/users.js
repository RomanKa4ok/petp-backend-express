export class UsersController {
    static createUser(req, res) {
        res.send('user created')
    }

    static async getUsers(req, res) {
        res.send([])
    }
    static async deleteUser(req, res) {
        res.send('user deleted')
    }
}