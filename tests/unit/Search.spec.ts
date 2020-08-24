import { shallowMount } from '@vue/test-utils'
import Search from '@/components/search.vue'
import vuetify from 'vuetify'
import Vue from 'vue'

describe('Search.vue', () => {
    let wrapper: any;
    beforeEach(() => {
        Vue.use(vuetify);
        wrapper = shallowMount(Search);
    })
    it('Find input-type text ', () => {
        expect(wrapper.find('[data-test="SearchText"]').exists()).toBe(true);
    })
    it('has button', () => {
        expect(wrapper.find('.search-btn').exists()).toBe(true);
    })
    it('Enter text and check the value of inputText', () => {
        let textInput = wrapper.find('[data-test="SearchText"]');
        textInput.vm.$emit('input','84102');
        expect(wrapper.vm.inputText).toBe('84102');
    })
    it('click enter button and clear input', () => {
        wrapper.find('.search-btn').trigger("click");
        let textInput = wrapper.find('[data-test="SearchText"]');
        expect(textInput.text()).toMatch('');
        expect(wrapper.vm.inputText).toBe('');
    })
    it('Check emitted "find" event', () => {
        wrapper.vm.$emit('find', "84102");
        expect(wrapper.emitted().find).toBeTruthy()
    })
})