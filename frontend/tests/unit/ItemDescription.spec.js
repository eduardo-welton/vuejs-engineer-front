import { shallowMount } from '@vue/test-utils'
import ItemDescription from '@/components/ItemDescription'

describe('ItemDescription.vue', () => {
  it('renders props.labelText', () => {
    const msg = 'Minha mensagem fofinha!'
    const wrapper = shallowMount(ItemDescription, {
      propsData: { labelText: msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
