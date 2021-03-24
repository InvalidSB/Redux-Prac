import Home from "../components/Home"
import {connect} from 'react-redux'
import {addTOCart} from "../Services/Actions/actions"


const mapStateToProps =state=>({
    data:state.cardItems
})
const mapDispatchToProps =dispatch=>({
    addTocartHandler: data=>dispatch(addTOCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
