import React from "react";

import BackgroundImg from "gatsby-background-image";

class Header extends React.Component {
  state = { isMounted: false };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 500);
  }
  render() {
    const InitialIcon = () => (
      <div
        className="w-100 d-flex justify-content-center align-items-center"
        style={{ height: "650px" }}
      >
        <i class="far fa-smile fa-3x"></i>
      </div>
    );
    const LeftColumnContent = this.props.leftColumnContent;
    const RightColumnContent = this.props.rightColumnContent;

    return (
      <div class="container">
        <div className="row justify-content-center">
          <div className="col-sm-1 d-flex align-items-center"></div>
          <div className="col-sm-5 d-flex align-items-center">
            {this.props.leftColumnContent && <LeftColumnContent />}
          </div>{" "}
          <div className="col-sm-1 d-flex align-items-center"></div>
          <div className="col-sm-4">
            <div className="card">
              {!this.state.isMounted && <InitialIcon />}
              {this.state.isMounted && this.props.background && (
                <BackgroundImg
                  style={{ height: "650px" }}
                  fluid={this.props.background}
                  alt={this.props.alt}
                  Tag="div"
                ></BackgroundImg>
              )}
              {this.state.isMounted && !this.props.background && (
                <RightColumnContent />
              )}
            </div>
          </div>
          <div className="col-sm-1 d-flex flex-column position-relative justify-content-between align-items-center">
            <button type="button" className="btn btn-dark">
              <i class="fas fa-moon"></i>
            </button>
            <div className="d-flex flex-column">
              <a
                href={`mailto:urszulakrasny@gmail.com`}
                type="button"
                className="btn btn-light"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                type="button"
                target="blank"
                className="btn btn-light mt-4"
                href="tel:608 658 488"
                rel="noopener noreferrer"
                aria-label="Phone"
              >
                <i className="fas fa-phone-square-alt"></i>
              </a>
              <a
                className="btn btn-light my-4"
                href="https://www.facebook.com/ukrasny"
                target="blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
