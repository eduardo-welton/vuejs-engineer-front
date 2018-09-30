import { shallowMount } from '@vue/test-utils'
import Advice from '@/components/Candidate/Advice'

describe('Advice.vue', () => {
  it('renders props.labelText', () => {
    const text = 'Cliente Novo'

    const wrapper = shallowMount(Advice, {
      propsData: { text: text }
    })

    expect(wrapper.text()).toMatch(text)

  })
})
