import { shallowMount } from '@vue/test-utils'
import Avatar from '@/components/Candidate/Avatar'

describe('Avatar.vue', () => {
  it('renders src properly', () => {
    const imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWfkA6fPozy8qlbL8q282B2jWo10s-UK2bYFLv1b_v32r5TAF";
    const wrapper = shallowMount(Avatar, {
      propsData: { imgSrc: imgSrc }
    });
    const imgAvatar = wrapper.find('.img-fluid');    
    expect(imgAvatar.element.src).toMatch(imgSrc)    
  })
})
