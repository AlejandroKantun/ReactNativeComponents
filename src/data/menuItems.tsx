import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems:MenuItem[]= [
    {
      name: 'Animation 101',
      icon:'cube-outline',
      component:'Animation101Screen'
    },
    {
      name: 'Animation 102',
      icon:'film-outline',
      component:'Animation102Screen'
    },
    {
        name: 'Switches ',
        icon:'toggle-outline',
        component:'SwitchScreen'
      },
      {
        name: 'Alert screen ',
        icon:'alert-outline',
        component:'AlertScreen'
      },
      {
        name: 'Alert Prompt screen ',
        icon:'alert-circle-outline',
        component:'AlertPromptScreen'
      },
      {
        name: 'Input Text screen ',
        icon:'pencil-outline',
        component:'TextInputScreen'
      },
      {
        name: 'Pull to refresh screen ',
        icon:'refresh-outline',
        component:'PullToRefresh'
      },
      {
        name: 'Section List Screen',
        icon:'list-circle-outline',
        component:'SectionListScreen'
      },
      {
        name: 'Modal Screen',
        icon:'expand-outline',
        component:'ModalScreen'
      },
      {
        name: 'Infinite Scroll Screen',
        icon:'infinite-outline',
        component:'InfiniteScrollScreen'
      },
  ]