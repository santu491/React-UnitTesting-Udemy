import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'
import navigationItems from './NavigationItems'
configure({ adapter: new Adapter() })

describe('<NavigationItems />', () => {
    let wrapper =
        beforeEach(() => {
            wrapper = shallow(<NavigationItems />);
        })
    it('should render two <NavigationItem /> element if not authenticated', () => {
        // const wrapper = shallow(<NavigationItems />)
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
        console.log("wrapper", wrapper)
    });
    it('should render three <NavigationItem /> element if not authenticated', () => {
        // const wrapper = shallow(<NavigationItems isAuthenticated />)
        wrapper.setProps({isAuthenticated:true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    });

    it('should render three <NavigationItem /> element if not authenticated', () => {
        // const wrapper = shallow(<NavigationItems isAuthenticated />)
        wrapper.setProps({isAuthenticated:true})
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true)
    })

})