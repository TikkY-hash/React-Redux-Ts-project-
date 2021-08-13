import React,{Component} from 'react';

export default class ErrorBoundary extends Component<{children : React.ReactNode}, {readonly error: boolean}> {

    public state = {
        error : false
    }

    public componentDidCatch() : void {
        this.setState(({error}) => ({
              error : true
        }))
    }

    public render() : React.ReactNode  {

        if(this.state.error) {
            return <h1>Something going wrong</h1>
        }

        return this.props.children;
    }

}