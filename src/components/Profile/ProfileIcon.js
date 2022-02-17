import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

class ProfileIcon extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dropDownOpen: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      dropDownOpen: !prevState.dropDownOpen
    }));
  }

  render() {
    return (
      <div class="pa4 tc">
        <Dropdown toggle={this.toggle} isOpen={this.state.dropDownOpen}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropDownOpen}
          >
            <img src="http://tachyons.io/img/logo.jpg" className="br-100 ba h3 w3 dib" alt="avatar"/>
          </DropdownToggle>
          <DropdownMenu className='b--transparente shadow-5' style={{marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5'}}>
            <DropdownItem>
              View Profile
            </DropdownItem>
            <DropdownItem>
              signout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }

}

export default ProfileIcon;