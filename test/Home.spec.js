import { createLocalVue, shallowMount } from '@vue/test-utils';
import TailwindVue from '@tailwindvue/tailwindvue';
import Home from 'Pages/index';

let wrapper;
const localVue = createLocalVue();

localVue.use(TailwindVue);

beforeEach(() => {
    wrapper = shallowMount(Home, {
        localVue
    });
});

afterEach(() => wrapper.destroy());

describe('Home', () => {
    it('renders the view', () => {
        expect(wrapper.text()).toContain('Tailwind Vue');
    });
});
