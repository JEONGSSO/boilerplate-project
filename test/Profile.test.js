import React from 'react';
import { mount } from 'enzyme'
import Profile from '../src/Profile'

describe('<Profile />', () => {
   it('스냅샷 비교', () => {
      const wrapper = mount(<Profile id={'id'} name={'kim'} />);
      expect(wrapper).toMatchSnapshot();
   });
   it('렌더 props 비교', () => {
      const wrapper = mount(<Profile id={'id'} name={'kim'} />);
      expect(wrapper.props().id).toBe('id');
      expect(wrapper.props().name).toBe('kim');

      const boldElement = wrapper.find('h1'); // 특정 DOM 선택 가능 querySelector같음
      expect(boldElement.contains('id')).toBe(true);
      const spanElement = wrapper.find('span');
      expect(spanElement.text()).toBe('kim');

   })
})
