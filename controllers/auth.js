export const welcome = (req, res) => {
    res.json({
        data: 'Hi from nodejs api with router'
    })
}

export const preRegister = async (req, res) => {
    try {
        console.log(req.body)
    } catch (err) {
        console.log(err)
        return res.json({ error: "Something wrong. Try again." })
    }
} 