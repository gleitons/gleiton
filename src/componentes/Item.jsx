import PropTypes from 'prop-types'

function Item({marca, lancamento}) {
    return (
       <>
        <a href={marca}>
            <li>
                {marca} - {lancamento}
            </li>
        </a>
       </>
    )
}
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired
}
Item.defaultProps = {
    marca:"Faltou a marca",
    lancamento: 0,
}
export default Item