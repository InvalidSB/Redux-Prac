import {connect} from 'react-redux'
import CartDatapage from "../components/CartDatapage"


const mapStateToProps =state=>({
    data:state.cardItems
})
const mapDispatchToProps =dispatch=>({
})

export default connect(mapStateToProps,mapDispatchToProps)(CartDatapage)
