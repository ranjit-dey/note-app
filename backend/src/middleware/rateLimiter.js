import ratelimit from '../config/upstash.js'

const rateLimiter = async (req, res, next) => {
    try {
        /*== As here is not authentication so 'my-limit-key' will stay as it is, if there is any authentication then it should be changed to userId, or you can use ip address ==*/

        const { success } = await ratelimit.limit('my-limit-key')
        if (!success) {
            return res.status(429).json({ message: 'Too meny requests, please try after sometime' })
        }
        next()
    } catch (error) {
        console.log('Rate limit error', error)
        next(error)
    }
}

export default rateLimiter
