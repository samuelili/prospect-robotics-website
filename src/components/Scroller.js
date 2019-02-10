import React, {Component} from 'react';

import '../styles/scroller.css';
import logo from '../images/logo.svg';

// noinspection SpellCheckingInspection
export default class Scroller extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0
    }
  }

  previousScrollY = 0;

  handleScroll() {

    this.setState({
      currentPage: Math.floor(window.scrollY / window.innerHeight)
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  render() {
    return (
      <div>
        {this.props.pages.map((page, i) => {
            return <div key={i} className="page" id={page.id + "-page"}>{page.component}</div>
          }
        )}
        <div className={"page-location"}>
          <img src={logo} alt=""/>
          {this.props.pages.map((page, i) => {
            if (i !== 0)
              return (<div className={"identifier " + (this.state.currentPage === i ? "current" : "")} key={i}>
                <div className={"circle"}/>
                <div className={"name"}>{page.name}</div>
              </div>);
            return null;
          })}
        </div>
      </div>
    );
  }
}

// <ScrollableAnchor id={page.anchor} key={i}>
//                 <div className={"page"}>{page.component}</div>
//               </ScrollableAnchor>