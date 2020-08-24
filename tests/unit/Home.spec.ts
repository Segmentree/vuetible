import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Search from '@/components/search.vue'
import List from '@/components/list.vue'

import vuetify from 'vuetify'
import Vue from 'vue'

describe('Home.vue', () => {
    let wrapper: any;
    let title = "Test Title";
    beforeEach(() => {
        Vue.use(vuetify);
        wrapper = shallowMount(Home);
    })
    it('renders a vue instance', () => {
        expect(wrapper).toBeTruthy();
    })
    it('Checks the data-title', () => {
        expect(wrapper.vm.title).toMatch(title);
    })
    it('has an h2', () => {
        expect(wrapper.find('h2').exists()).toBe(true);
    })
    it('Check if child search exists', () => {
        expect(wrapper.findComponent(Search).exists()).toBe(true);
    })
    it('Check if child list exists', () => {
        expect(wrapper.findComponent(List).exists()).toBe(true);
    })
    it('test event emitted from Search', () => {
        wrapper.findComponent(Search).vm.$emit('find');
        expect(wrapper.findComponent(Search).emitted().find).toBeTruthy();
    })
})