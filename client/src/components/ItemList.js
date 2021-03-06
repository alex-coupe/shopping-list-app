import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {connect} from 'react-redux';
import { getItems,deleteItems } from '../actions/itemActions';
import PropTypes from 'prop-types';


export class ItemList extends Component {
    
componentDidMount() {
    this.props.getItems();
}

onDeleteClick = (id) => {
    this.props.deleteItems(id);
}

    render () {
        const {items} = this.props.item;
        if (!items) return null;
        return(
            <Container>
                <ListGroup >
                    {items.map(({_id, name}) => (
                        <ListGroupItem >
                            <Button className="remove-btn" color="danger" size="sm" style={{marginRight:'1rem'}}
                            onClick={this.onDeleteClick.bind(this,_id)}>
                            &times;
                             </Button>
                             {name}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        )
    }

}

ItemList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {getItems, deleteItems})( ItemList );