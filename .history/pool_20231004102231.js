const pool = {};


async function settlePool(pool, settlingTimePrice, endTimePrice) {
    //did the price went up or down, if bull is true, that means the price went up
    const isBull = endTimePrice > settlingTimePrice;

    const winners =  pool.participants.filter(user => {
        if(user.isPositionUp == isBull){
            return user;
        }
    })
}