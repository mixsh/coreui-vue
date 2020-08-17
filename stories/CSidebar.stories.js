
import { boolean, select, text, object, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CSidebar from '../src/components/template/CSidebar'
import CSidebarHeader from '../src/components/template/CSidebarHeader'
import CSidebarFooter from '../src/components/template/CSidebarFooter'

import CSidebarNavDivider from '../src/components/template/CSidebarNavDivider'
import CSidebarNavDropdown from '../src/components/template/CSidebarNavDropdown'
import CSidebarNavItem from '../src/components/template/CSidebarNavItem'
import CSidebarNavTitle from '../src/components/template/CSidebarNavTitle'



import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CSidebar', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { 
        CCol, 
        CCard, 
        CCardBody, 
        CSidebar, 
        CSidebarHeader, 
        CSidebarFooter,
        CSidebarNavDivider,
        CSidebarNavDropdown,
        CSidebarNavItem,
        CSidebarNavTitle,
      },
      props: {
        fixedSidebar:{
            type: Boolean,
            default: boolean('Fixed', true, 'CSidebar'),
        },
        unfoldableSidebar:{
          type: Boolean,
          default: boolean('Unfoldable', false, 'CSidebar'),
        },
        overlaidSidebar:{
          type: Boolean,
          default: boolean('Overlaid', false, 'CSidebar'),
        },
        breakpointSidebar:{
          type: String,
          default: select('Breakpoint', 
          [
            'sm', 'md', 'lg', 'xl'
          ], 
          'lg',
          'CSidebar')
        },
        minimizeSidebar:{
          type: Boolean,
          default: boolean('Minimize', false, 'CSidebar'),
        },
        showSidebar:{
          type: String,
          default: select('Show', 
          [
            true, false, 'responsive'
          ], 
          'responsive',
          'CSidebar')
        },
        sizeSidebar:{
          type: String,
          default: select('Size',
            [undefined, 'sm', 'lg', 'xl'],
            undefined,
            'CSidebar'
          )
        },
        hideOnMobileClickSidebar:{
          type: Boolean,
          default: boolean('HideOnMobileClick', true, 'CSidebar')
        },
        asideSidebar:{
          type: Boolean,
          default: boolean('Aside', false, 'CSidebar')
        },
        colorSchemeSidebar:{
          type: String,
          default: select(
            'ColorScheme',
            [
              "light",
              "dark",
            ],
            'dark',
            'CSidebar'
          ),
        },
        dropdownModeSidebar:{
          type: String,
          default: select(
            'DropdownMode',
            ['openActive', 'close', 'closeInactive', 'noAction'],
            'openActive',
            'CSidebar'
          ),
        },
        nameNavItem:{
          type: String,
          default: text('Name', 'Lorem ipsum', 'CSidebarNavItem')
        },
        badgeNavItem:{
          type: Object,
          default: object('Badge', {}, 'CSidebarNavItem')
        },
        iconNavItem:{
          type: String,
          default: text('Icon', '', 'CSidebarNavItem')
        },
        fontIconNavItem:{
          type: String,
          default: text('FontIcon', '', 'CSidebarNavItem')
        },
        addLinkClassesNavItem:{
          type: String,
          default: text('AddLinkClasses', '', 'CSidebarNavItem')
        },
        labelNavItem:{
          type: String,
          default: text('LabelNav', false, 'CSidebarNavItem')
        },
        colorNavItem:{
          type: String,
          default: select('Color', [
            undefined,
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], undefined, 'CSidebarNavItem')
        },
        nameNavDropdown:{
          type: String,
          default: text('Name', '', 'CSidebarNavDropdown')
        },
        routeNavDropdown:{
          type: String,
          default: text('Route', '', 'CSidebarNavDropdown')
        },
        iconNavDropdown:{
          type: String,
          default: text('Icon', '', 'CSidebarNavDropdown')
        },
        fontIconNavDropdown:{
          type: String,
          default: text('FontIcon', '', 'CSidebarNavDropdown')
        },
        showNavDropdown:{
          type: Boolean,
          default: boolean('Show', undefined, 'CSidebarNavDropdown')
        },
        itemsNavDropdown:{
          type: Object,
          default: object('Items', {}, 'CSidebarNavDropdown')
        },
      },
      template: `
            <CSidebar 
              :fixed="fixedSidebar"
              :unfoldable="unfoldableSidebar"
              :overlaid="overlaidSidebar"
              :breakpoint="breakpointSidebar"
              :minimize="minimizeSidebar"
              :show="showSidebar"
              :size="sizeSidebar"
              :hideOnMobileClick="hideOnMobileClickSidebar"
              :aside="asideSidebar"
              :colorScheme="colorSchemeSidebar"
              :dropdownMode="dropdownModeSidebar"
            >
              <CSidebarHeader></CSidebarHeader>

              <CSidebarNavTitle>Lorem ipsum dolor</CSidebarNavTitle>

              <CSidebarNavItem 
                :name="nameNavItem"
                :badge="badgeNavItem"
                :icon="iconNavItem"
                :fontIcon="fontIconNavItem"
                :label="labelNavItem"
                :color="colorNavItem"
              />

              <CSidebarNavDropdown 
                :name="nameNavDropdown"
                :route="routeNavDropdown"
                :icon="iconNavDropdown"
                :fontIcon="fontIconNavDropdown"
                :show="showNavDropdown"
                :items="itemsNavDropdown"
              >
                <CSidebarNavItem 
                  :name="nameNavItem"
                  :badge="badgeNavItem"
                  :icon="iconNavItem"
                  :fontIcon="fontIconNavItem"
                  :label="labelNavItem"
                  :color="colorNavItem"
                />
              </CSidebarNavDropdown>

              <CSidebarNavDivider></CSidebarNavDivider>

              <CSidebarNavDropdown name="Ipsum dolor">
                <CSidebarNavItem name="Lorem"></CSidebarNavItem>
                <CSidebarNavItem name="Ipsum dolor"></CSidebarNavItem>
                <CSidebarNavItem name="Cet emit"></CSidebarNavItem>
              </CSidebarNavDropdown>

              <CSidebarNavDropdown name="Cet emit">
                <CSidebarNavItem name="Lorem"></CSidebarNavItem>
                <CSidebarNavItem name="Ipsum dolor"></CSidebarNavItem>
                <CSidebarNavItem name="Cet emit"></CSidebarNavItem>
              </CSidebarNavDropdown>          
            
              <CSidebarFooter></CSidebarFooter>
            </CSidebar>
      `
    }
})