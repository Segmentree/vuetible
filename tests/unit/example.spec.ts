import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

describe('HelloWorld.vue', () => {
  let wrapper
  beforeEach(() => {
    Vue.use(Vuetify)
  })
  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Vuetify'
    wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
