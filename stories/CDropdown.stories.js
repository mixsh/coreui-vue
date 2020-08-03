
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CDropdown from '../src/components/dropdown/CDropdown'
import CDropdownItem from '../src/components/dropdown/CDropdownItem'
import CDropdownDivider from '../src/components/dropdown/CDropdownDivider'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'


storiesOf('CDropdown', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CDropdown, CDropdownItem, CDropdownDivider },
      props: {
        color: {
          type: String,
          default: select('Color', [
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], 'primary', 'Other')
        },
        togglerText: {
          type: String,
          default: text(
            'TogglerText',
            'Lorem ipsum'
          )
        },
        show: {
          type: Boolean,
          default: boolean(
            'Show', false
          )
        },
        disabled: {
          type: Boolean,
          default: boolean(
            'Disabled', false
          )
        },
        addMenuClasses: {
          type: String,
          default: text(
            'AddMenuClasses',
            ''
          )
        },
        addTogglerClasses: {
          type: String,
          default: text(
            'AddTogglerClasses',
            ''
          )
        },
        inNav: {
          type: Boolean,
          default: boolean(
            'InNav',
            false
          )
        },
        caret: {
          type: Boolean,
          default: boolean(
            'Caret',
            true
          )
        },
        size: {
          type: String,
          default: select(
            'Size',
            [
              '', 'sm', 'lg'
            ],
            ''
          )
        },
        split: {
          type: Boolean,
          default: boolean(
            'Split',
            false
          )
        },
        placement: {
          type: String,
          default: select(
            'Placement',
            [ undefined, '', 'top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end' ],
            undefined
          )
        },
        flip: {
          type: Boolean,
          default: boolean(
            'Flip',
            true
          )
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CDropdown
              :color.sync="color"
              :togglerText.sync="togglerText" 
              :show.sync="show"
              :disabled.sync="disabled"
              :addMenuClasses.sync="addMenuClasses"
              :addTogglerClasses.sync="addTogglerClasses"
              :inNav.sync="inNav"
              :caret.sync="caret"
              :size.sync="size"
              :split.sync="split"
              :placement.sync="placement"
              :flip.sync="flip"
            >
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
              <CDropdownDivider></CDropdownDivider>
              <CDropdownItem>Last Action</CDropdownItem>
            </CDropdown>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})