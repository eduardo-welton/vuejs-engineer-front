import { shallowMount } from '@vue/test-utils'
import Subtitle from '@/components/Candidate/Subtitle'

describe('Subtitle.vue', () => {
  it('renders props.text', () => {
    const text = 'valor da tag';
    const wrapper = shallowMount(Subtitle, {
      propsData: { text: text }
    });

    const subtitleSpan = wrapper.find('.subtitle');
    expect(subtitleSpan.text()).toMatch(text);
  })
})
