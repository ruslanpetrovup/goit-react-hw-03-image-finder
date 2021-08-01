import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from '../Searchbar/Searchbar';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import ImageGallery from '../ImageGallery/ImageGallery';
const axios = require('axios').default;

class App extends React.Component {
    state = {
        valueSeach: '',
        images: [],
        numPages: 1
    };
    onSubmit = (event) => {
        this.setState({
            numPages: 1,
        })
        if (this.state.valueSeach === event.target.children[1].value || event.target.children[1].value === '') {
            event.preventDefault();
        } else {
            event.preventDefault();
        this.setState({
            images: [],
            numPages: 1
        })
        console.log(this.state.numPages)
        this.setState({
            valueSeach: event.target.children[1].value
        })
        setTimeout(() => {
            this.renderElem()
        },300)
        }
    }
    renderElem = () => {
        const images = this.fetchImg()
        setTimeout(() => {
            ReactDOM.render(<ImageGalleryItem imagesItem={images}/>, document.getElementById('ImageGallery'))
        },700)
    }
    btnfoto = () => {
        this.renderElem()
    }
    fetchImg = () => {

        const images = `https://pixabay.com/api/?q=${this.state.valueSeach}&page=${this.state.numPages}&key=22641251-454133ad8981e71bbc25a7aae&image_type=photo&orientation=horizontal&per_page=12`;
        axios.get(images).then(response => {
            this.state.images.push(...response.data.hits)
        }).then(() => {
                this.setState({
            numPages: this.state.numPages + 1
            })
        })
        return this.state.images
    }
    render() {
        return (
            <>
            <Searchbar onSubmit={this.onSubmit} />
                <ImageGallery></ImageGallery>
                <button type="button" onClick={this.btnfoto}>Еще</button>
            </>
        )
    } 
}
export default App