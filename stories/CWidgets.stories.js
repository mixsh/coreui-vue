
import { boolean, select, text, number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CWidgetProgress from '../src/components/widgets/CWidgetProgress'
import CWidgetIcon from '../src/components/widgets/CWidgetIcon'
import CWidgetBrand from '../src/components/widgets/CWidgetBrand'
import CWidgetProgressIcon from '../src/components/widgets/CWidgetProgressIcon'
import CWidgetDropdown from '../src/components/widgets/CWidgetDropdown'
import CWidgetSimple from '../src/components/widgets/CWidgetSimple'

import CIcon from '@coreui/icons-vue/src/CIcon'
import { cibFacebook, cilSettings } from '@coreui/icons'

import CDropdown from '../src/components/dropdown/CDropdown'
import CDropdownItem from '../src/components/dropdown/CDropdownItem'

import CProgress from '../src/components/progress/CProgress'

import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'


console.log(cilSettings);



storiesOf('Widgets', module)
  .addDecorator(withKnobs)
  .add('CWidgetProgress', () => {

    return {
      components: { CCol, CCard, CCardBody, CWidgetProgress },
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
        inverse:{
          type: Boolean,
          default: boolean('Inverse', '')
        },
        value: {
          type: Number,
          default: number('Value', 25)
        },
        header: {
          type: String,
          default: text('Header', '12.124')
        },
        text:{
          type: String,
          default: text('Text', 'Lorem ipsum...')
        },
        footer: {
          type: String,
          default: text('Footer', 'Lorem ipsum dolor sit amet enim.')
        }
      },
      template: `
      <CCol lg="4" md="6"> 
        <CCard> 
          <CCardBody>
            <CWidgetProgress
              :inverse="inverse"
              :color="color"
              :value="value"
              :header="header"
              :text="text"
              :footer="footer"
            />
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
}).add('CWidgetIcon', () => {

  return {
    cilSettings: cilSettings,
    components: { CCol, CCard, CCardBody, CWidgetIcon, CIcon },
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
      header: {
        type: String,
        default: text('Header', '12.124')
      },
      text:{
        type: String,
        default: text('Text', 'Lorem ipsum...')
      },
      iconPadding:{
        type: Boolean,
        default: boolean('IconPadding', true)
      },
    },
    template: `
    <CCol lg="4" md="6"> 
      <CCard> 
        <CCardBody>
          <CWidgetIcon
            :color="color"
            :header="header"
            :text="text"
            :iconPadding="iconPadding"
          >
            <CIcon :content="$options.cilSettings"/>
          </CWidgetIcon>
        </CCardBody>
      </CCard>
    </CCol>
    `
  }
}).add('CWidgetBrand', () => {

  return {
    cibFacebook: cibFacebook,
    components: { CCol, CCard, CCardBody, CWidgetBrand, CIcon },
    props: {
      color: {
        type: String,
        default: select('Color', [
          'facebook', 'twitter', 'linkedin', 'flickr', 'tumblr', 
          'xing', 'github', 'stack-overflow', 'youtube', 'dribbble', 
          'instagram', 'pinterest', 'vk' , 'yahoo', 'behance', 'reddit', 'vimeo'
        ], 'facebook', 'Other')
      },
      addHeaderClasses:{
        type: String,
        default: text('AddHeaderClasses', '')
      },
      rightHeader: {
        type: String,
        default: text('RightHeader', '89k')
      },
      rightFooter:{
        type: String,
        default: text('RightFooter', 'friends')
      },
      leftHeader: {
        type: String,
        default: text('LeftHeader', '459')
      },
      leftFooter:{
        type: String,
        default: text('LeftFooter', 'feeds')
      },
    },
    template: `
    <CCol lg="4" md="6"> 
      <CCard> 
        <CCardBody>
          <CWidgetBrand
            :color="color"
            :addHeaderClasses="addHeaderClasses"
            :rightHeader="rightHeader"
            :rightFooter="rightFooter"
            :leftHeader="leftHeader"
            :leftFooter="leftFooter"
          >
            <CIcon 
              :content="$options.cibFacebook"
              height="56"
              class="my-4"
            />
          </CWidgetBrand>
        </CCardBody>
      </CCard>
    </CCol>
    `
  }
}).add('CWidgetProgressIcon', () => {

  return {
    cilSettings: cilSettings,
    components: { CCol, CCard, CCardBody, CWidgetProgressIcon, CIcon },
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
      inverse: {
        type: Boolean,
        default: boolean('Inverse', false)
      },
      value: {
        type: Number,
        default: number('Value', 25, {})
      },
      header: {
        type: String,
        default: text('Header', '12.124')
      },
      text:{
        type: String,
        default: text('Text', 'Lorem ipsum...')
      },
    },
    template: `
    <CCol lg="4" md="6"> 
      <CCard> 
        <CCardBody>
          <CWidgetProgressIcon
            :color="color"
            :inverse="inverse"
            :value="value"
            :header="header"
            :text="text"
          >
            <CIcon :content="$options.cilSettings" height="36"/>
          </CWidgetProgressIcon>
        </CCardBody>
      </CCard>
    </CCol>
    `
  }
}).add('CWidgetDropdown', () => {

  return {
    components: { CCol, CCard, CCardBody, CWidgetDropdown, CDropdown, CDropdownItem },
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
      header: {
        type: String,
        default: text('Header', '9.823')
      },
      text:{
        type: String,
        default: text('Text', 'Members online')
      },
    },
    template: `
    <CCol lg="4" md="6"> 
      <CCard> 
        <CCardBody>
          <CWidgetDropdown 
            :color="color"
            :header="header"
            :text="text"
          >
            <CDropdown
              class="float-right"
              color="transparent p-0"
              placement="bottom-end"
              togglerText="MORE"
            >
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdown>
          </CWidgetDropdown>
        </CCardBody>
      </CCard>
    </CCol>
    `
  }
}).add('CWidgetSimple', () => {

  return {
    components: { CCol, CCard, CCardBody, CWidgetSimple, CProgress },
    props: {
      header: {
        type: String,
        default: text('Header', '9.823', 'Widget')
      },
      text:{
        type: String,
        default: text('Text', 'Members online', 'Widget')
      },


      color: {
        type: String,
        default: select('Color', [
          '',
          "primary",
          "secondary",
          "success",
          "warning",
          "danger",
          "info",
          "light",
          "dark",
        ], 'primary')
      },
      size:{
        type: String,
        default: select('Size', [
          undefined, 'xs', 'sm'
        ], 'xs')
      },
      striped:{
        type: Boolean,
        default: boolean('Striped', false)
      },
      animated:{
        type: Boolean,
        default: boolean('Animated', false)
      },
      precision:{
        type: Number,
        default: number('Precision', undefined, {})
      },
      showPercentage:{
        type: Boolean,
        default: boolean('ShowPercentage', false)
      },
      showValue:{
        type: Boolean,
        default: boolean('ShowValue', false)
      },
      max:{
        type: Number,
        default: number('Precision', 100, {})
      },
      value:{
        type: Number,
        default: number('Value', 60, {})
      }
    },
    template: `
    <CCol lg="4" md="6"> 
      <CCard> 
        <CCardBody>
          <CWidgetSimple 
            :header="header"
            :text="text"
          >
            <CProgress
              :color.sync="color"
              :size.sync="size"
              :striped.sync="striped"
              :animated.sync="animated"
              :precision.sync="precision"
              :showPercentage.sync="showPercentage"
              :showValue.sync="showValue"
              :max.sync="max"
              :value.sync="value"
            />
          </CWidgetSimple>
        </CCardBody>
      </CCard>
    </CCol>
    `
  }
})


