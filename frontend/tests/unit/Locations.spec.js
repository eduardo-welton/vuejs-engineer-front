import { shallowMount } from '@vue/test-utils'
import Locations from '@/components/Candidate/Locations'

describe('Locations.vue', () => {
  it('renders locations and no complement when items count are less than limit', () => {
    const items = ["City1", "City2"];
    const limit = 10;

    const wrapper = shallowMount(Locations, {
      propsData: {
        items: items,
        limit: limit
      }
    });
    
    const cities = wrapper.findAll('.location');
    expect(cities.length).toBe(items.length);

    const complement = wrapper.findAll('.complement');
    expect(complement.length).toBe(0);
  });

  it('renders first {limit} locations and complement with number of locations not shown', () => {
    const items = ["City1", "City2", "City3", "City4", "City5"];
    const limit = 3;

    const wrapper = shallowMount(Locations, {
      propsData: {
        items: items,
        limit: limit
      }
    });
    
    const cities = wrapper.findAll('.location');
    expect(cities.length).toBe(limit);

    const complement = wrapper.findAll('.complement');
    expect(complement.length).toBe(1);

    const complementText = wrapper.find('.complement');
    expect(complementText.text()).toBe("e mais 2 cidades");

  });


})
