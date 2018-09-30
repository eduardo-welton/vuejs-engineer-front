import { shallowMount } from '@vue/test-utils'
import Tag from '@/components/Candidate/Tag'

describe('Tag.vue', () => {
  it('renders props.text', () => {
    const text = 'valor da tag';
    const wrapper = shallowMount(Tag, {
      propsData: { text: text }
    });

    const tagSpan = wrapper.find('.tag');
    expect(tagSpan.text()).toMatch(text);
  })
})
