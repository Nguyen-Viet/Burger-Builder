import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Helper from '../Helper';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentDidMount(){
            axios.interceptors.request.use(req => {
                this.setState({error:null});
                console.log("[REQ] " + req);
                return req;
            });

            axios.interceptors.response.use(resp => resp, error => {
                this.setState({error:error});
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error:null});
        }

        render(){
            return(
                <Helper>
                    <Modal 
                        modalClosed={this.errorConfirmedHandler}
                        show={this.state.error}> 
                        {"hmm " + this.state.error}
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Helper>
            );
        }//end render
    }//end return 
}//end function


export default withErrorHandler;