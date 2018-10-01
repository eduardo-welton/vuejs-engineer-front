import { shallowMount } from '@vue/test-utils'
import Description from '@/components/Candidate/Description'

describe('Description.vue', () => {
  it('renders with text and icon', () => {
    const propsData = {
      icon: 'icon-css',
      labelText: 'meu texto fofinho'
    };

    const wrapper = shallowMount(Description, {
      propsData: propsData
    });

    const label = wrapper.find('.label');
    expect(label.text()).toMatch(propsData.labelText)   
  });

})
