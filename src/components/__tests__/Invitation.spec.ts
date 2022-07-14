import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Invitation from '../Invitation.vue'

describe('Invitation', () => {
  it('renders properly', () => {
    const wrapper = mount(Invitation, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
