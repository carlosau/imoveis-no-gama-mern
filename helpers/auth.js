import bcrypt from 'bcrypt';

export const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, hash) => {
            if(err) { 
                reject(err)
            }
            bcrypt.hash(password, hash, (err, hash) => {
                if(err) {
                    reject(err)
                }
            resolve(hash)
        })
    })
})
}

export const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}