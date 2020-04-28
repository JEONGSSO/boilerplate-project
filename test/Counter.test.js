import React from 'react';
import { shallow, mount, render  } from 'enzyme'
import HookCounter from '../src/component/HookCounter'
import Counter from '../src/component/Counter'

const arrayInMaxValue = (arr) => Math.max(...arr)
const arrayInAverageValue = (arr) => 
   arr.reduce((acc, current, { length }) =>
      acc + current / length
   , 0)



describe('카운터 테스트', () => {
   // it('스냅샷 매치', () => {
   //    const wrapper = shallow(<HookCounter />)
   //    expect(wrapper).toMatchSnapshot();
   // });
   // it('초기 값', () =>  {
   //    const wrapper = shallow(<Counter />)
   //    expect(wrapper.find('h2').text()).toBe('0')
   // })
   // it('증가', () => {
   //    const { container } = render(<HookCounter />)
   //    // const incrementButton = container.firstChild
   //    // expect(incrementButton.textContent).toBe('1')
   //    // expect(wrapper.find('h2').text()).toBe('1')
   //    console.log()
   // })
   // it('감소', () => {
   //    const wrapper = mount(<HookCounter />)
   //    expect(wrapper.find('h2').text()).toBe('-1')
   // })
   // it('증가 버튼 클릭 시뮬', () => {
   //    const wrapper = mount(<HookCounter />)
   //    const plusButton = wrapper.findWhere(
   //       node => node.type() === 'button' && node.text() === '+1'
   //    )
   //    plusButton.simulate('click');
   //    expect(wrapper.state().number).toBe(1)
   // })
   // it('감소 버튼 클릭 시뮬', () => {
   //    const wrapper = mount(<HookCounter />)
   //    wrapper.find('#mb').simulate('click')
   //    const number = wrapper.find('h2').text()
   //    expect(number).toBe("-1")
   // })
   it('MaxValue In array', ()  => {
      expect(arrayInMaxValue([1,2,3,4]) / 2).toBe(2)
   })
   it('Average In array', ()  => {
      expect(arrayInAverageValue([70,80])).toBe(75)
   })



})