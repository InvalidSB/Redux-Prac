import React from 'react'

function CartDatapage(props) {
    console.log(props.data)
    return (
        <div>
                    <span>{props.data.length}</span>
            <h1>Here i will show alll the data</h1>
        </div>
    )
}

export default CartDatapage
