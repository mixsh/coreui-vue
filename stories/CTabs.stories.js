
import { boolean, select, text, number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CTabs from '../src/components/tabs/CTabs'
import CTab from '../src/components/tabs/CTab'


import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CTabs', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CTabs, CTab },
      props: {
        fill: {
          type: Boolean,
          default: boolean('Fill', false)
        },
        justified: {
          type: Boolean,
          default: boolean('Justified', false)
        },
        variant: {
          type: String,
          default: select('Variant', 
            [
              'tabs', 'pills'
            ],
            'tabs' 
          )
        },
        fade: {
          type: Boolean,
          default: boolean('Fade', true)
        },
        vertical:{
          type: Boolean,
          default: boolean('Vertical', false)
        },
        activeTab:{
          type: Number,
          default: number('ActiveTab', 0, {})
        },

        addNavWrapperClasses:{
          type: String,
          default: text('addNavWrapperClasses', '', 'Classes')
        },
        addNavClasses:{
          type: String,
          default: text('addNavClasses', '', 'Classes')
        },
        addTabsWrapperClasses:{
          type: String,
          default: text('addTabsWrapperClasses', '', 'Classes')
        },
        addTabsClasses:{
          type: String,
          default: text('addTabsClasses', '', 'Classes')
        },
        addTabClasses:{
          type: String,
          default: text('addTabClasses', '', 'Classes')
        },
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CTabs 
              :fill.sync="fill"
              :justified.sync="justified"
              :variant.sync="variant"
              :fade.sync="fade"
              :vertical.sync="vertical"
              :activeTab.sync="activeTab"

              :addNavWrapperClasses="addNavWrapperClasses"
              :addNavClasses="addNavClasses" 
              :addTabsWrapperClasses="addTabsWrapperClasses" 
              :addTabsClasses="addTabsClasses" 
              :addTabClasses="addTabClasses"
            >
              <CTab title="Lorem">
                1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </CTab>
              <CTab title="Ipsum dolor">
                2. Dolor ipsum lorem, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </CTab>
              <CTab title="Disabled" disabled>
                Text will not be shown.
              </CTab>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})