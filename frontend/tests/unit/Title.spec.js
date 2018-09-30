import { shallowMount } from '@vue/test-utils'
import Title from '@/components/Candidate/Title'

describe('Title.vue', () => {
  it('renders props.text', () => {
    const text = 'Título Desejado';
    const wrapper = shallowMount(Title, {
      propsData: { text: text }
    });
    const titleSpan = wrapper.find('.title');
    expect(titleSpan.text()).toMatch(text);
  })
})
