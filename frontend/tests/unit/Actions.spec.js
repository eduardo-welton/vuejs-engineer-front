import { shallowMount } from '@vue/test-utils'
import Actions from '@/components/Candidate/Actions'

describe('Actions.vue', () => {
  it('renders empty start if favorite information not supplied', () => {
    const candidate = {
      "id": 0
    };
    const wrapper = shallowMount(Actions, {
      propsData: { candidate: candidate }
    });
    const starButton = wrapper.find('.btn-star');
    expect(starButton.element.className).toMatch("far fa-star btn-star")
  });

  it('renders empty start if favorite information is false', () => {
    const candidate = {
      "id": 0,
      "isFavorite": false
    };
    const wrapper = shallowMount(Actions, {
      propsData: { candidate: candidate }
    });
    const starButton = wrapper.find('.btn-star');
    expect(starButton.element.className).toMatch("far fa-star btn-star")
  });

  it('renders fulltiled start if favorite information supplied and true', () => {
    const candidate = {
      "id": 0,
      "isFavorite": true
    };
    const wrapper = shallowMount(Actions, {
      propsData: { candidate: candidate }
    });
    const starButton = wrapper.find('.btn-star');
    expect(starButton.element.className).toMatch("fas fa-star btn-star")
  });

  it('toggle button', () => {
    const candidate = {
      "id": 0,
      "isFavorite": false,
    };

    const wrapper = shallowMount(Actions, {
      propsData: { candidate: candidate }
    });
    const starButton = wrapper.find('.btn-star');
    expect(starButton.element.className).toMatch("far fa-star btn-star");
    starButton.trigger('click');
    expect(starButton.element.className).toMatch("fas fa-star btn-star");
  });

})
