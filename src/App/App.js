import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from '../Searchbar/Searchbar';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import Loader from "react-loader-spinner";
import BtnClick from '../BtnClick/BtnClick'
const axios = require('axios').default;

class App extends React.Component {
    state = {
        valueSeach: '',
        images: [],
        numPages: 1,
        srcImg: '',
        isLoading: true
    }
    componentDidMount() {
        document.addEventListener("keydown", this.closeModalEsc.bind(this))
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.closeModalEsc.bind(this))
        console.log('unmounted')
    }
    shouldComponentUpdate(nextProps, nextState) {
    ReactDOM.render(<>{nextState.isLoading !== false ? <BtnClick btnfoto={this.btnfoto} /> : <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} timeout={3000}/>}</>, document.getElementById('Buttoncon'))
    return ReactDOM.render(<Modal src={nextState.srcImg} alt={'Потом'} closeModal={this.closeModal} />, document.getElementById('root2'))
    }
    btnHidden = () => {
        if (this.state.isLoading !== true) {
            ReactDOM.render(<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} timeout={3000}/>, document.querySelector('.Buttoncon'));
            return
        }
        ReactDOM.render(<button className='Button' type="button" onClick={this.btnfoto}>Еще</button>, document.querySelector('.Buttoncon'));
    }


    onSubmit = (event) => {
        console.log(this.state.valueSeach === '')
        if (this.state.valueSeach === event.target.children[1].value || event.target.children[1].value === '') {
            event.preventDefault();
            
        } else {
            event.preventDefault();
            this.setState({
                images: [],
                numPages: 1
            })
            this.setState({
                valueSeach: event.target.children[1].value
            })
            setTimeout(() => {
                this.renderElem()
            }, 300)
        }
    }
    renderElem = () => {
        const images = this.fetchImg()
        setTimeout(() => {
            ReactDOM.render(<ImageGalleryItem imagesItem={images} />, document.getElementById('ImageGallery'));
            
        //     if (this.state.isLoading !== true) {
        //     ReactDOM.render(<BtnClick btnfoto={this.btnfoto}/>,document.getElementById('Buttoncon'));
            
        // } else {
        //     ReactDOM.render(<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} timeout={3000}/>, document.querySelector('.Buttoncon'));
            
        // }
        }, 700)
            // ReactDOM.render(<BtnClick btnfoto={this.btnfoto}/>,document.getElementById('Buttoncon'))
    }

    btnfoto = () => {
        this.renderElem()
        setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });

        }, 1500)
    }
    fetchImg = () => {
        this.setState({
            isLoading: false
        })
        const images = `https://pixabay.com/api/?q=${this.state.valueSeach}&page=${this.state.numPages}&key=22641251-454133ad8981e71bbc25a7aae&image_type=photo&orientation=horizontal&per_page=12`;
        axios.get(images).then(response => {
            this.state.images.push(...response.data.hits)
        }).then(() => {
            this.setState({
                numPages: this.state.numPages + 1
            })
        }).finally(() => this.setState({isLoading: true}))
        return this.state.images
    }
    modal = (src) => {
        if (src.target.nodeName !== "IMG") {
            return
        }
        // const images = src.target.id;
        const modal = document.querySelector('.Overlay')
        if (modal.classList.contains) {
            modal.classList.remove('isHidden')
            this.setState({
                srcImg: src.target.id
            })
            
       } 
        
       
    }
    closeModal = (evn) => {
        if (evn.target.className !== "Overlay") {
            return
        }
        const modal = document.querySelector('.Overlay')
        if (modal.classList.contains) {
            modal.classList.add('isHidden')
        }
    }
    closeModalEsc = (evn) => {
        if (evn.code !== "Escape") {
            return
        }
        const modal = document.querySelector('.Overlay')
        if (modal.classList.contains) {
            modal.classList.add('isHidden')
        }
    }
    render() {
        return (
            <>
            <Searchbar onSubmit={this.onSubmit} />
                <ImageGallery modal={this.modal} />

                <div id="root2">  <Modal alt={'Потом'} closeModal={this.closeModal} closeModalEsc={this.closeModal} /></div>
                <div className='Buttoncon' id="Buttoncon"></div>
            </>
        )
    } 
}
export default App